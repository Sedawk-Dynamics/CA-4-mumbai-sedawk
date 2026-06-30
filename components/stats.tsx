"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Users, FileCheck, Clock, ThumbsUp } from "lucide-react"

const stats = [
  { value: 500, suffix: "+", label: "Clients Served", description: "MSMEs & individuals", icon: Users },
  { value: 2000, suffix: "+", label: "Tax Filings Done", description: "Across all categories", icon: FileCheck },
  { value: 10, suffix: "+", label: "Years of Expertise", description: "In practice", icon: Clock },
  { value: 98, suffix: "%", label: "Client Satisfaction", description: "Based on client feedback", icon: ThumbsUp },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="font-serif font-bold text-4xl md:text-5xl text-white tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section className="py-20 overflow-hidden relative" style={{ background: "linear-gradient(135deg, #0f2044 0%, #1e3a8a 50%, #0f2044 100%)" }}>
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.4), transparent)" }} />
      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.4), transparent)" }} />

      {/* Animated glow orbs — CSS animations for better performance */}
      <div
        className="absolute top-8 left-8 w-40 h-40 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent)", opacity: 0.1, animation: "statsOrb1 12s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-8 right-8 w-32 h-32 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #60a5fa, transparent)", opacity: 0.08, animation: "statsOrb2 10s ease-in-out 2s infinite" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-blue-400 text-xs font-semibold tracking-widest uppercase mb-12"
        >
          Our Track Record
        </motion.p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map(({ value, suffix, label, description, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="text-center rounded-2xl p-6 border border-blue-400/15"
              style={{ background: "rgba(59,130,246,0.08)" }}
            >
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(59,130,246,0.2)" }}>
                  <Icon className="w-5 h-5 text-blue-400" strokeWidth={1.8} />
                </div>
              </div>
              <Counter target={value} suffix={suffix} />
              <p className="text-white font-semibold text-sm mt-2">{label}</p>
              <p className="text-blue-200/50 text-xs mt-0.5">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
