"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function WaveShaderBg() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    } catch {
      return
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const canvas = renderer.domElement
    canvas.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;display:block;"
    container.appendChild(canvas)

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const clock = new THREE.Clock()

    const uniforms = {
      iTime:       { value: 0 },
      iResolution: { value: new THREE.Vector2(1, 1) },
      iMouse:      { value: new THREE.Vector2(0, 0) },
    }

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        uniform vec2  iResolution;
        uniform float iTime;
        uniform vec2  iMouse;
        varying vec2  vUv;

        void main() {
          vec2 fragCoord = vUv * iResolution;
          vec2 uv = (2.0 * fragCoord - iResolution.xy) / min(iResolution.x, iResolution.y);

          for (float i = 1.0; i < 10.0; i++) {
            uv.x += 0.6 / i * cos(i * 2.5 * uv.y + iTime);
            uv.y += 0.6 / i * cos(i * 1.5 * uv.x + iTime);
          }

          float t = iTime - uv.y - uv.x;
          float wave = max(abs(sin(t)), 0.01);

          /* Original colour formula — rich multi-channel glow */
          vec3 col = vec3(0.1, 0.25, 0.9) / wave;
          col = clamp(col, 0.0, 1.0);

          gl_FragColor = vec4(col, 1.0);
        }
      `,
    })

    const geo = new THREE.PlaneGeometry(2, 2)
    scene.add(new THREE.Mesh(geo, material))

    const resize = () => {
      const w = container.offsetWidth  || container.clientWidth  || 800
      const h = container.offsetHeight || container.clientHeight || 400
      if (w === 0 || h === 0) return
      renderer.setSize(w, h, false)
      uniforms.iResolution.value.set(w, h)
    }

    /* Wait one frame so CSS layout is settled before measuring */
    requestAnimationFrame(() => {
      resize()
      const ro = new ResizeObserver(resize)
      ro.observe(container)

      const onMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect()
        uniforms.iMouse.value.set(e.clientX - rect.left, rect.height - (e.clientY - rect.top))
      }
      container.addEventListener("mousemove", onMouseMove)

      renderer.setAnimationLoop(() => {
        uniforms.iTime.value = clock.getElapsedTime()
        renderer.render(scene, camera)
      })

      /* Store cleanup refs on the container element itself */
      ;(container as any).__waveCleanup = () => {
        ro.disconnect()
        container.removeEventListener("mousemove", onMouseMove)
        renderer.setAnimationLoop(null)
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas)
        material.dispose()
        geo.dispose()
        renderer.dispose()
      }
    })

    return () => {
      ;(container as any).__waveCleanup?.()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
