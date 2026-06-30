"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, PhoneCall, Shield, TrendingUp, Award } from "lucide-react"
import dynamic from "next/dynamic"

const ServiceSearch = dynamic(() => import("@/components/ui/service-search"), { ssr: false })

const highlights = [
  "GST & Income Tax Filing",
  "Company Registration",
  "MSME Compliance",
  "Loan Syndication",
]

const stats = [
  { label: "Years Experience", value: "10+", icon: Award },
  { label: "Clients Served", value: "500+", icon: Shield },
  { label: "Tax Filings Done", value: "2000+", icon: TrendingUp },
  { label: "GST Returns", value: "1500+", icon: CheckCircle },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
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
      className="relative overflow-hidden min-h-[92vh] flex flex-col justify-center"
      style={{ background: "linear-gradient(135deg, #020b18 0%, #05183a 40%, #0a2560 70%, #0d3080 100%)" }}
    >
      {/* Background — CSS only, no JS animations for perf */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ zIndex: 0 }}>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }} />
        <div className="absolute -bottom-24 -left-24 w-[350px] h-[350px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #1d4ed8 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      {/* Desktop top-right search */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="hidden lg:flex flex-col items-end absolute top-5 right-8"
        style={{ zIndex: 4 }}
      >
        <p className="text-blue-200/50 text-xs mb-2 tracking-wide">Search for any service</p>
        <div className="w-80">
          <ServiceSearch variant="hero" />
        </div>
      </motion.div>

      {/* Main content */}
      <div
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-12"
        style={{ zIndex: 2 }}
      >
        {/* Left — text */}
        <div className="flex-1 w-full text-center lg:text-left">
          {/* Badge */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 text-blue-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 border border-blue-400/30"
            style={{ background: "rgba(59,130,246,0.15)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Mumbai&apos;s Trusted Online Accounting Company
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Serving{" "}
            <span style={{ color: "#60a5fa" }}>Atmanirbhar</span>
            <br />Mumbaikars
            <br />
            <span className="text-white/70 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light">
              Through Tax Compliance
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="mt-5 text-blue-100/75 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Professional accounting and tax compliance for businesses under ₹25 Cr turnover
            and salaried individuals across Mumbai &amp; Maharashtra.
          </motion.p>

          {/* Highlights */}
          <motion.ul
            custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="mt-5 flex flex-wrap gap-2 justify-center lg:justify-start"
          >
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 text-white text-xs sm:text-sm px-3 py-1.5 rounded-full border border-blue-400/25"
                style={{ background: "rgba(59,130,246,0.12)" }}
              >
                <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-full text-sm text-white active:scale-95 transition-transform"
              style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)", boxShadow: "0 4px 20px rgba(37,99,235,0.45)" }}
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:9892055115"
              className="flex items-center justify-center gap-2 px-6 py-3.5 text-white font-semibold rounded-full border border-white/25 text-sm active:scale-95 transition-transform"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <PhoneCall className="w-4 h-4 text-blue-300" />
              Call: 9892055115
            </a>
          </motion.div>

          {/* Mobile search — shown only on small screens */}
          <motion.div
            custom={5} variants={fadeUp} initial="hidden" animate="visible"
            className="mt-6 lg:hidden"
          >
            <p className="text-blue-200/50 text-xs mb-2 text-center">Search for any service</p>
            <ServiceSearch variant="hero" />
          </motion.div>
        </div>

        {/* Right — CA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="w-full lg:flex-1 lg:max-w-md"
        >
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-3xl opacity-25 blur-2xl"
              style={{ background: "linear-gradient(135deg, #3b82f6, #1d4ed8)" }}
            />
            <div
              className="relative rounded-2xl p-6 md:p-8 text-white border border-white/15"
              style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(20px)" }}
            >
              <div
                className="absolute top-0 left-8 right-8 h-0.5 rounded-full"
                style={{ background: "linear-gradient(90deg, transparent, #60a5fa, transparent)" }}
              />

              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-sm"
                  style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)" }}
                >CA</div>
                <div>
                  <p className="font-semibold text-sm text-white">CA Ram Gavade</p>
                  <p className="text-blue-300 text-xs">Chief Knowledge Officer</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5 text-xs text-blue-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </div>
              </div>

              <h2 className="font-serif text-base md:text-lg font-bold mb-2 text-white">
                CA 4 India Knowledge Solutions
              </h2>
              <p className="text-blue-100/65 text-sm leading-relaxed mb-5">
                Online Accountant empowering Mumbai&apos;s MSME ecosystem with professional
                financial compliance, advisory, and accounting services.
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                {stats.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-xl px-3 py-2.5 border border-blue-400/20"
                    style={{ background: "rgba(59,130,246,0.1)" }}
                  >
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Icon className="w-3 h-3 text-blue-400" strokeWidth={2} />
                      <p className="text-blue-200 font-bold text-lg leading-none">{value}</p>
                    </div>
                    <p className="text-white/45 text-[10px]">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-blue-200/50">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Sion, Mumbai 400022
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ zIndex: 3, background: "linear-gradient(to bottom, transparent 0%, #020b18 100%)" }}
      />
    </section>
  )
}
