"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award } from "lucide-react"

const reasons = [
  "Specialists in MSME & individual tax compliance",
  "Turnaround within committed timelines",
  "Transparent pricing — no hidden charges",
  "Direct access to a qualified CA",
  "End-to-end support from registration to returns",
  "Sion, Mumbai — Serving all of Maharashtra",
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8" ref={ref}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[var(--saffron)] mb-3">
            About Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--navy)] text-balance">
            CA 4 India Knowledge Solutions Private Limited
          </h2>
        </motion.div>

        {/* ── Row 1: Left text block + Right image ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 mb-8">

          {/* Top-left: Company description + Why Choose */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl border border-[var(--border)] p-8 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--saffron)] mb-2">
                Who We Are
              </p>
              <h3 className="font-serif text-2xl font-bold text-[var(--navy)] mb-4">
                Your Partner in Financial Growth
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-3">
                CA 4 India Knowledge Solutions Private Limited is a Mumbai-based online accountants
                providing comprehensive accounting and tax compliance services to businesses with
                annual turnover under ₹25 Crore and salaried individuals across Maharashtra.
              </p>
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
                Led by <strong className="text-[var(--navy)]">CA Ram Gavade</strong>, Chief
                Knowledge Officer, our team brings over a decade of practical expertise in GST,
                income tax, TDS, company law, and labour law — enabling clients to stay fully
                compliant while focusing on growing their business.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--navy)] mb-3">
                Why Choose CA 4 Mumbai?
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-2 text-sm text-[var(--foreground)]">
                    <Award className="w-4 h-4 mt-0.5 shrink-0 text-[var(--saffron)]" strokeWidth={2} />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Top-right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface-alt)]"
          >
            <Image
              src="/hero-ca.jpg"
              alt="CA professional"
              width={500}
              height={600}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* ── Row 2: Full-width RG founder card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[var(--navy)] text-white rounded-2xl p-8 md:p-10 relative overflow-hidden"
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
            style={{ background: "var(--saffron)", transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 pointer-events-none"
            style={{ background: "var(--emerald)", transform: "translate(-30%, 30%)" }} />

          <div className="relative flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">

            {/* Avatar + name */}
            <div className="flex-shrink-0 flex flex-col items-center text-center md:items-start md:text-left gap-3">
              <div className="w-20 h-20 rounded-2xl bg-[var(--saffron)] flex items-center justify-center">
                <span className="text-white font-bold text-2xl font-serif">RG</span>
              </div>
              <div>
                <p className="font-serif text-xl font-bold">CA Ram Gavade</p>
                <p className="text-white/60 text-sm mt-0.5">Chief Knowledge Officer</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px self-stretch bg-white/10" />

            {/* Quote */}
            <div className="flex-1">
              <blockquote className="text-white/80 text-base leading-relaxed italic border-l-2 border-[var(--saffron)] pl-5">
                &quot;Our mission is simple — make world-class online accountant services accessible
                to every Mumbai business owner. When MSMEs thrive, Mumbai thrives. We are here to
                remove the compliance burden so you can build freely.&quot;
              </blockquote>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px self-stretch bg-white/10" />

            {/* Stats */}
            <div className="flex md:flex-col gap-8 md:gap-6 shrink-0">
              {[
                { value: "10+", label: "Years in Practice" },
                { value: "500+", label: "Happy Clients" },
                { value: "2000+", label: "Tax Filings" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center md:text-left">
                  <p className="text-[var(--saffron)] font-bold text-2xl">{value}</p>
                  <p className="text-white/50 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
