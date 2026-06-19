"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, PhoneCall } from "lucide-react"
import dynamic from "next/dynamic"

const WaveShaderBg = dynamic(() => import("@/components/ui/wave-shader-bg"), { ssr: false })

const highlights = [
  "GST & Income Tax Filing",
  "Company Registration",
  "MSME Compliance",
  "Loan Syndication",
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
}

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black min-h-[92vh] flex items-center"
    >
      {/* Wave shader background */}
      <WaveShaderBg />

      {/* Subtle dark overlay so text stays legible over the shader */}
      <div className="absolute inset-0 bg-black/20" style={{ zIndex: 1 }} />

      {/* All content sits above the shader */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16" style={{ zIndex: 2 }}>
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-medium px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--saffron)] animate-pulse" />
            Mumbai&apos;s Trusted Accounting & Tax Company
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance"
          >
            Serving{" "}
            <span className="text-[var(--saffron)]">Atmanirbhar</span>
            <br />
            Mumbaikars
            <br />
            <span className="text-white text-3xl md:text-4xl lg:text-5xl font-light">
              Through Tax Compliance
            </span>
          </motion.h1>

          {/* Sub text */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-white/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            We provide professional accounting and tax compliance services for businesses
            with turnover under ₹25 Crore and salaried individuals across Mumbai &amp;
            Maharashtra.
          </motion.p>

          {/* Highlights */}
          <motion.ul
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-white text-sm bg-white/10 border border-white/15 px-3 py-1.5 rounded-full"
              >
                <CheckCircle className="w-4 h-4 text-[var(--saffron)] shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* CTA buttons */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <motion.button
              onClick={() => scrollTo("#contact")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-6 py-3 bg-[var(--saffron)] text-white font-semibold rounded-full shadow-lg hover:bg-[var(--saffron-light)] transition-colors text-sm"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.a
              href="tel:9892055115"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-colors text-sm"
            >
              <PhoneCall className="w-4 h-4" />
              Call: 9892055115
            </motion.a>
          </motion.div>
        </div>

        {/* Right Card Stack */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="flex-1 max-w-md w-full"
        >
          <div className="relative">
            {/* Back card */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-white/5 border border-white/10 rounded-2xl" />
            {/* Front card */}
            <div className="relative bg-black/40 border border-white/20 backdrop-blur-md rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[var(--saffron)] flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">CA</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">CA Ram Gavade</p>
                  <p className="text-white/70 text-xs">Chief Knowledge Officer</p>
                </div>
              </div>

              <h2 className="font-serif text-xl font-bold mb-3 text-white">
                CA 4 India Knowledge Solutions Private Limited
              </h2>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Registered CA firm dedicated to empowering Mumbai&apos;s MSME ecosystem with
                professional-grade financial compliance, advisory, and accounting services.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Years Experience", value: "10+" },
                  { label: "Clients Served", value: "500+" },
                  { label: "Tax Filings Done", value: "2000+" },
                  { label: "GST Returns", value: "1500+" },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white/10 rounded-xl px-4 py-3">
                    <p className="text-[var(--saffron)] font-bold text-xl">{value}</p>
                    <p className="text-white/70 text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--emerald)] animate-pulse" />
                Sion, Mumbai 400022
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade — tall so the shader bleeds smoothly into the section below */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ zIndex: 3, background: "linear-gradient(to bottom, transparent 0%, #000000 100%)" }}
      />
    </section>
  )
}
