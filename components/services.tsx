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
    color: "#f97316",
    bg: "rgba(249,115,22,0.12)",
    accent: "#f97316",
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
    color: "#34d399",
    bg: "rgba(52,211,153,0.12)",
    accent: "#10b981",
  },
  {
    icon: Building2,
    title: "Company Formation",
    slug: "company-formation",
    description:
      "Private limited company, LLP, partnership firm, and sole proprietorship registration with MCA, Udyam, and Shop Act.",
    color: "#f97316",
    bg: "rgba(249,115,22,0.12)",
    accent: "#f97316",
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
    color: "#34d399",
    bg: "rgba(52,211,153,0.12)",
    accent: "#10b981",
  },
]

function ServiceCardContent({
  icon: Icon,
  title,
  slug,
  description,
  color,
  bg,
  accent,
}: (typeof services)[0]) {
  return (
    <div
      className="w-full h-full flex flex-col p-7 rounded-2xl border border-white/25"
      style={{ background: "rgba(15,20,50,0.35)", backdropFilter: "blur(16px)" }}
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
      <p className="text-white/60 text-sm leading-relaxed flex-1">
        {description}
      </p>

      {/* Learn More — card itself is already a Link */}
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
    <section id="services" className="relative bg-[#030308]" style={{ overflowX: "clip", paddingTop: "80px", paddingBottom: "96px" }}>


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
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#f97316] mb-3">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-balance mb-4">
            Comprehensive Compliance Services for Growing Businesses
          </h2>
          <p className="text-white/60 leading-relaxed">
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
          <p className="text-white/40 text-sm mb-4">
            Not sure which service you need?
          </p>
          <motion.button
            onClick={() => {
              const el = document.querySelector("#contact")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#f97316] text-white font-semibold rounded-full text-sm hover:bg-orange-500 transition-colors shadow-lg"
          >
            Talk to Our CA Expert
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
