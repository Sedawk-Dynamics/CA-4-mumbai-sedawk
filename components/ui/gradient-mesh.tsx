"use client"

import { useEffect, useRef } from "react"
import { Renderer, Program, Mesh, Color, Triangle } from "ogl"

const vert = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`

const buildFrag = (distortion: number) => `
precision highp float;

uniform float uTime;
uniform float uSwirl;
uniform float uSpeed;
uniform float uScale;
uniform float uOffsetX;
uniform float uOffsetY;
uniform float uRotation;
uniform float uWaveAmp;
uniform float uWaveFreq;
uniform float uWaveSpeed;
uniform float uGrain;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform vec3 uResolution;

varying vec2 vUv;

float wave(vec2 uv, float freq, float speed, float time) {
  return sin(uv.x * freq + time * speed) * cos(uv.y * freq + time * speed);
}
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}
vec3 colorDodge(vec3 base, vec3 blend) {
  return min(base / (1.0 - blend + 0.0001), 1.0);
}

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

  uv = uv * uScale + vec2(uOffsetX, uOffsetY);

  float cosR = cos(uRotation);
  float sinR = sin(uRotation);
  uv = vec2(uv.x * cosR - uv.y * sinR, uv.x * sinR + uv.y * cosR);

  uv.x += wave(uv, uWaveFreq, uWaveSpeed, uTime) * uWaveAmp;
  uv.y += wave(uv + 10.0, uWaveFreq * 1.5, uWaveSpeed * 0.8, uTime) * uWaveAmp * 0.5;

  float angle = atan(uv.y, uv.x);
  float radius = length(uv);
  angle += uSwirl * radius;
  uv = vec2(cos(angle), sin(angle)) * radius;

  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < ${distortion.toFixed(1)}; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;

  float mix1 = (sin(d) + 1.0) * 0.5;
  float mix2 = (cos(a) + 1.0) * 0.5;
  vec3 col = mix(uColorA, uColorB, mix1);
  col = mix(col, uColorC, mix2);

  float grain = (random(gl_FragCoord.xy + uTime) - 0.5) * uGrain;
  col = colorDodge(col, vec3(0.5 + grain));

  gl_FragColor = vec4(col, 1.0);
}
`

const hexToRgb = (hex: string): [number, number, number] => {
  const h = hex.replace("#", "")
  return [parseInt(h.slice(0,2),16)/255, parseInt(h.slice(2,4),16)/255, parseInt(h.slice(4,6),16)/255]
}

interface GradientMeshProps {
  colors?: string[]
  distortion?: number
  swirl?: number
  speed?: number
  scale?: number
  offsetX?: number
  offsetY?: number
  rotation?: number
  waveAmp?: number
  waveFreq?: number
  waveSpeed?: number
  grain?: number
}

export default function GradientMesh({
  colors     = ["#3b2a8d", "#aaa7d7", "#f75092"],
  distortion = 5,
  swirl      = 0.5,
  speed      = 1.0,
  scale      = 1,
  offsetX    = 0.0,
  offsetY    = 0.0,
  rotation   = 90,
  waveAmp    = 0.1,
  waveFreq   = 10.0,
  waveSpeed  = 0.2,
  grain      = 0.06,
}: GradientMeshProps) {
  const ctnRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctn = ctnRef.current
    if (!ctn) return

    const dpr = Math.min(window.devicePixelRatio, 2)
    const renderer = new Renderer({ dpr })
    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 1)

    const canvas = gl.canvas as HTMLCanvasElement

    /* ── Key: let CSS drive the visual size, never let OGL override it ── */
    canvas.style.position = "absolute"
    canvas.style.inset    = "0"
    canvas.style.width    = "100%"
    canvas.style.height   = "100%"
    canvas.style.display  = "block"
    ctn.appendChild(canvas)

    const geometry = new Triangle(gl)
    const rgbColors = colors.slice(0, 3).map(hexToRgb)

    const program = new Program(gl, {
      vertex: vert,
      fragment: buildFrag(distortion),
      uniforms: {
        uTime:       { value: 0 },
        uSwirl:      { value: swirl },
        uSpeed:      { value: speed },
        uScale:      { value: scale },
        uOffsetX:    { value: offsetX },
        uOffsetY:    { value: offsetY },
        uRotation:   { value: rotation },
        uWaveAmp:    { value: waveAmp },
        uWaveFreq:   { value: waveFreq },
        uWaveSpeed:  { value: waveSpeed },
        uGrain:      { value: grain },
        uResolution: { value: new Color(1, 1, 1) },
        uColorA:     { value: new Color(...rgbColors[0]) },
        uColorB:     { value: new Color(...rgbColors[1]) },
        uColorC:     { value: new Color(...rgbColors[2]) },
      },
    })

    const mesh = new Mesh(gl, { geometry, program })

    /* ── Resize: read the canvas's ACTUAL rendered rect, set WebGL viewport directly ── */
    const syncSize = () => {
      const rect = canvas.getBoundingClientRect()
      const w = Math.round(rect.width)
      const h = Math.round(rect.height)
      if (!w || !h) return

      /* Set canvas backing-store to match CSS display size */
      canvas.width  = w * dpr
      canvas.height = h * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
      program.uniforms.uResolution.value = new Color(w, h, w / h)
    }

    /* Observe the canvas element itself — fires whenever CSS width/height actually changes */
    const ro = new ResizeObserver(syncSize)
    ro.observe(canvas)

    /* Also observe the section (parent of ctn) for initial layout */
    const section = ctn.parentElement
    if (section) ro.observe(section)

    /* First sync after one frame, then again at 300 ms to catch any lazy layout */
    requestAnimationFrame(() => {
      syncSize()
      setTimeout(syncSize, 300)
    })

    let rafId: number
    const update = (t: number) => {
      rafId = requestAnimationFrame(update)
      program.uniforms.uTime.value = t * 0.001
      renderer.render({ scene: mesh })
    }
    rafId = requestAnimationFrame(update)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas)
      gl.getExtension("WEBGL_lose_context")?.loseContext()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={ctnRef}
      className="absolute inset-0"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
