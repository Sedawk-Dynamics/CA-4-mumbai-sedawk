"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Target, Eye, Heart, Award } from "lucide-react"

const pillars = [
  {
    icon: Target,
    label: "Mission",
    text: "To serve the Atmanirbhar Mumbaikar by delivering accurate, timely, and affordable tax compliance solutions for MSMEs and individuals.",
    color: "var(--saffron)",
    bg: "oklch(0.97 0.03 50)",
  },
  {
    icon: Eye,
    label: "Vision",
    text: "To be Mumbai's most trusted CA firm — empowering every MSME business owner to achieve financial clarity and regulatory confidence.",
    color: "var(--navy)",
    bg: "oklch(0.95 0.02 260)",
  },
  {
    icon: Heart,
    label: "Values",
    text: "Integrity, transparency, and client-first service. We believe every business deserves expert financial guidance at an honest price.",
    color: "var(--emerald)",
    bg: "oklch(0.95 0.03 152)",
  },
]

const reasons = [
  "Specialists in MSME & individual tax compliance",
  "Turnaround within committed timelines",
  "Transparent pricing — no hidden charges",
  "Direct access to a qualified CA",
  "End-to-end support from registration to returns",
  "Sion, Mumbai — Serving all of Maharashtra",
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
})

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[var(--saffron)] mb-3">
            About Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--navy)] text-balance">
            CA 4 India Knowledge Solutions
          </h2>
          <p className="mt-3 text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
            Headquartered in Sion, Mumbai — we are a registered CA practice dedicated to
            empowering Mumbai&apos;s MSME sector with professional financial compliance.
          </p>
        </motion.div>

        {/* Two column layout: description + image card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left text */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="font-serif text-2xl font-bold text-[var(--navy)] mb-4">
              Your Partner in Financial Growth
            </h3>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              CA 4 India Knowledge Solutions Private Limited is a Mumbai-based chartered
              accountancy firm providing comprehensive accounting and tax compliance services
              to businesses with annual turnover under ₹25 Crore and salaried individuals
              across Maharashtra.
            </p>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
              Led by <strong className="text-[var(--navy)]">CA Ram Gavade</strong>, Chief
              Knowledge Officer, our team brings over a decade of practical expertise in GST,
              income tax, TDS, company law, and labour legislation — enabling our clients to
              stay fully compliant while focusing on what matters most: growing their business.
            </p>

            {/* Why Choose Us */}
            <h4 className="font-semibold text-[var(--navy)] text-sm uppercase tracking-wider mb-3">
              Why Choose CA 4 Mumbai?
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-2.5 text-sm text-[var(--foreground)]">
                  <Award
                    className="w-4 h-4 mt-0.5 shrink-0 text-[var(--saffron)]"
                    strokeWidth={2}
                  />
                  {reason}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Founder card */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-[var(--surface-alt)] -z-10" />
            
            {/* Animated accounting illustration */}
            <motion.div
              className="mb-6 rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/accounting-illustration.jpg"
                alt="Accounting and financial services illustration"
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <div className="bg-[var(--navy)] text-white rounded-2xl p-8 relative overflow-hidden">
              {/* Background decoration */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
                style={{ background: "var(--saffron)", transform: "translate(30%, -30%)" }}
              />
              <div
                className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-10"
                style={{ background: "var(--emerald)", transform: "translate(-30%, 30%)" }}
              />

              {/* Avatar */}
              <div className="w-16 h-16 rounded-2xl bg-[var(--saffron)] flex items-center justify-center mb-5">
                <span className="text-white font-bold text-xl font-serif">RG</span>
              </div>

              <h3 className="font-serif text-xl font-bold mb-1">CA Ram Gavade</h3>
              <p className="text-white/60 text-sm mb-4">Chief Knowledge Officer</p>

              <blockquote className="text-white/80 text-sm leading-relaxed italic border-l-2 border-[var(--saffron)] pl-4">
                &quot;Our mission is simple — make world-class CA services accessible to every
                Mumbai business owner. When MSMEs thrive, Mumbai thrives. We are here to
                remove the compliance burden so you can build freely.&quot;
              </blockquote>

              <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-[var(--saffron)] font-bold text-2xl">10+</p>
                  <p className="text-white/50 text-xs mt-0.5">Years in Practice</p>
                </div>
                <div>
                  <p className="text-[var(--saffron)] font-bold text-2xl">500+</p>
                  <p className="text-white/50 text-xs mt-0.5">Happy Clients</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, label, text, color, bg }, i) => (
            <motion.div
              key={label}
              variants={fadeUp(0.1 * i)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: bg }}
              >
                <Icon className="w-5 h-5" style={{ color }} strokeWidth={1.8} />
              </div>
              <h4 className="font-serif font-bold text-[var(--navy)] text-lg mb-2">{label}</h4>
              <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
