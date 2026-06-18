"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 500, suffix: "+", label: "Clients Served", description: "MSMEs & individuals" },
  { value: 2000, suffix: "+", label: "Tax Filings Done", description: "Across all categories" },
  { value: 10, suffix: "+", label: "Years of Expertise", description: "In practice" },
  { value: 98, suffix: "%", label: "Client Satisfaction", description: "Based on client feedback" },
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
    <section className="py-20 bg-[var(--navy)] overflow-hidden relative">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,1) 20px,
            rgba(255,255,255,1) 21px
          )`,
        }}
      />
      <motion.div
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 left-8 w-40 h-40 rounded-full bg-[var(--saffron)] opacity-10"
      />
      <motion.div
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-[var(--emerald)] opacity-10"
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-[var(--saffron)] text-xs font-semibold tracking-widest uppercase mb-12"
        >
          Our Track Record
        </motion.p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map(({ value, suffix, label, description }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="text-center"
            >
              <Counter target={value} suffix={suffix} />
              <p className="text-white font-semibold text-sm mt-2">{label}</p>
              <p className="text-white/50 text-xs mt-0.5">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
