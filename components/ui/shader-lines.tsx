"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        /* Normalize so x is [-1, 1] across the full section width.
           This ensures lines are visible edge-to-edge regardless of aspect ratio. */
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / resolution.x;
        uv *= 1.1;

        float t = time * 0.05;
        float lineWidth = 0.003;

        vec3 color = vec3(0.0);
        for (int j = 0; j < 3; j++) {
          for (int i = 0; i < 6; i++) {
            color[j] += lineWidth * float(i * i) /
              abs(fract(t - 0.01 * float(j) + float(i) * 0.01) * 4.0
                - length(uv)
                + mod(uv.x + uv.y, 0.25));
          }
        }

        gl_FragColor = vec4(color[0], color[1], color[2], 1.0);
      }
    `

    const camera = new THREE.Camera()
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)
    const uniforms = {
      time:       { type: "f",  value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
    }

    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)

    /* Make the canvas fill the container absolutely */
    const canvas = renderer.domElement
    canvas.style.position = "absolute"
    canvas.style.top      = "0"
    canvas.style.left     = "0"
    canvas.style.width    = "100%"
    canvas.style.height   = "100%"
    container.appendChild(canvas)

    const setSize = () => {
      const w = container.clientWidth  || window.innerWidth
      const h = container.clientHeight || window.innerHeight
      renderer.setSize(w, h, false)          // false = don't touch CSS size
      uniforms.resolution.value.set(
        renderer.domElement.width,
        renderer.domElement.height
      )
    }

    setSize()

    /* ResizeObserver catches container size changes (layout shifts, etc.) */
    const ro = new ResizeObserver(() => setSize())
    ro.observe(container)

    let animationId = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      uniforms.time.value += 0.05
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      ro.disconnect()
      if (container.contains(canvas)) container.removeChild(canvas)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "#000" }}
    />
  )
}
