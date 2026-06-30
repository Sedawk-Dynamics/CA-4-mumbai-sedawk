"use client"

import { motion } from "framer-motion"
import {
  FileText,
  Receipt,
  TrendingUp,
  Building2,
  Scale,
  CreditCard,
  ArrowRight,
} from "lucide-react"
import SocialCards from "@/components/ui/social-cards"

const services = [
  {
    icon: Receipt,
    title: "GST Filing",
    slug: "gst-filing",
    description:
      "Complete GST registration, return filing (GSTR-1, 3B, 9), reconciliation, and advisory for businesses under the GST framework.",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.12)",
    accent: "#3b82f6",
  },
  {
    icon: FileText,
    title: "Income Tax Filing",
    slug: "income-tax-filing",
    description:
      "ITR filing for individuals, partnership firms, and companies. Tax planning, advance tax computation, and response to notices.",
    color: "#93c5fd",
    bg: "rgba(147,197,253,0.12)",
    accent: "#60a5fa",
  },
  {
    icon: TrendingUp,
    title: "TDS Compliance",
    slug: "tds-compliance",
    description:
      "TDS deduction, deposit, return filing (Form 24Q, 26Q), and TDS certificates (Form 16/16A) for employees and vendors.",
    color: "#a5b4fc",
    bg: "rgba(165,180,252,0.12)",
    accent: "#818cf8",
  },
  {
    icon: Building2,
    title: "Company Formation",
    slug: "company-formation",
    description:
      "Private limited company, LLP, partnership firm, and sole proprietorship registration with MCA, Udyam, and Shop Act.",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.12)",
    accent: "#3b82f6",
  },
  {
    icon: Scale,
    title: "Labour Law Compliance",
    slug: "labour-law-compliance",
    description:
      "PF, ESIC, Professional Tax registration and returns. Gratuity, bonus, and full statutory compliance for your workforce.",
    color: "#c084fc",
    bg: "rgba(192,132,252,0.12)",
    accent: "#a855f7",
  },
  {
    icon: CreditCard,
    title: "Loan Syndication",
    slug: "loan-syndication",
    description:
      "Business loans, working capital finance, MSME loan facilitation, CMA data preparation, and project finance advisory.",
    color: "#67e8f9",
    bg: "rgba(103,232,249,0.10)",
    accent: "#22d3ee",
  },
]

function ServiceCardContent({
  icon: Icon,
  title,
  description,
  color,
  bg,
  accent,
}: (typeof services)[0]) {
  return (
    <div
      className="w-full h-full flex flex-col p-7 rounded-2xl border border-blue-400/20"
      style={{ background: "rgba(5,24,58,0.6)", backdropFilter: "blur(16px)" }}
    >
      {/* Accent top bar */}
      <div className="w-10 h-1 rounded-full mb-6 shrink-0" style={{ background: accent }} />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shrink-0"
        style={{ background: bg }}
      >
        <Icon className="w-7 h-7" style={{ color }} strokeWidth={1.6} />
      </div>

      {/* Title */}
      <h3 className="font-serif font-bold text-white text-lg leading-snug mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-blue-100/55 text-sm leading-relaxed flex-1">
        {description}
      </p>

      {/* Learn More */}
      <span className="mt-5 flex items-center gap-1.5 text-xs font-semibold" style={{ color: accent }}>
        Learn More
        <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </div>
  )
}

export default function Services() {
  const fanCards = services.map((s) => ({
    linkUrl: `/services/${s.slug}`,
    content: <ServiceCardContent {...s} />,
  }))

  return (
    <section
      id="services"
      className="relative"
      style={{
        overflowX: "clip",
        paddingTop: "80px",
        paddingBottom: "96px",
        background: "linear-gradient(180deg, #020b18 0%, #05183a 50%, #020b18 100%)",
      }}
    >
      {/* Decorative glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8" style={{ zIndex: 2 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-balance mb-4">
            Comprehensive Compliance Services for Growing Businesses
          </h2>
          <p className="text-blue-100/60 leading-relaxed">
            From GST and income tax to company registration and loan syndication — we handle
            every financial compliance requirement so you can focus on growth.
          </p>
        </motion.div>

        {/* Fan card animation */}
        <div className="flex justify-center">
          <SocialCards cards={fanCards} cardWidth={300} cardHeight={420} containerHeight={560} />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-blue-200/40 text-sm mb-4">
            Not sure which service you need?
          </p>
          <motion.button
            onClick={() => {
              const el = document.querySelector("#contact")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full text-sm shadow-lg transition-all"
            style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)", boxShadow: "0 4px 20px rgba(37,99,235,0.4)" }}
          >
            Talk to Our CA Expert
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
