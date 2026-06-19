"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

const fragmentShader = `
  precision highp float;
  uniform float time;
  uniform vec2 resolution;

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution;

    // Dark gray background — lighter at edges like the reference
    float vignette = 1.0 - smoothstep(0.0, 0.7, length(uv - 0.5) * 1.4);
    vec3 bg = mix(vec3(0.28, 0.28, 0.28), vec3(0.10, 0.10, 0.10), vignette);

    // Animate the S-curve slowly scrolling upward
    float speed = time * 0.18;
    float py = uv.y + speed;

    // S-curve: one sine period across the height creates the S shape
    float curveX = 0.5 + 0.38 * sin(py * 3.14159265);

    // Derivative for perpendicular (more accurate) distance
    float dCurve = 0.38 * 3.14159265 * cos(py * 3.14159265);
    float perpDist = abs(uv.x - curveX) / sqrt(1.0 + dCurve * dCurve);

    // Wide soft glow band — matches the blurry white streak in the image
    float innerGlow = exp(-perpDist * 18.0) * 1.1;
    float outerGlow = exp(-perpDist *  6.0) * 0.45;
    float band = innerGlow + outerGlow;

    vec3 color = bg + vec3(band);
    color = clamp(color, 0.0, 1.0);

    gl_FragColor = vec4(color, 1.0);
  }
`

const vertexShader = `void main() { gl_Position = vec4(position, 1.0); }`

export function AboutAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const camera = new THREE.Camera()
    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      time: { value: 0 },
      resolution: { value: new THREE.Vector2() },
    }

    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader })
    scene.add(new THREE.Mesh(geometry, material))

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)
    renderer.domElement.style.width = "100%"
    renderer.domElement.style.height = "100%"
    renderer.domElement.style.display = "block"

    const resize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(w, h, false)
      uniforms.resolution.value.set(w * window.devicePixelRatio, h * window.devicePixelRatio)
    }
    resize()
    window.addEventListener("resize", resize)

    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      uniforms.time.value += 0.016
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full rounded-2xl overflow-hidden"
      style={{ height: 220 }}
    />
  )
}
