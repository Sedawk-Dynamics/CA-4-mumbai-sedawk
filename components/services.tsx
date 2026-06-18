"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  FileText,
  Receipt,
  TrendingUp,
  Building2,
  Scale,
  CreditCard,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    icon: Receipt,
    title: "GST Filing",
    description:
      "Complete GST registration, return filing (GSTR-1, 3B, 9), reconciliation, and advisory for businesses under the GST framework.",
    color: "var(--saffron)",
    bg: "oklch(0.97 0.03 50)",
  },
  {
    icon: FileText,
    title: "Income Tax Filing",
    description:
      "ITR filing for individuals, partnership firms, and companies. Tax planning, advance tax computation, and response to notices.",
    color: "var(--navy)",
    bg: "oklch(0.95 0.02 260)",
  },
  {
    icon: TrendingUp,
    title: "TDS Compliance",
    description:
      "TDS deduction, deposit, return filing (Form 24Q, 26Q), and TDS certificates (Form 16/16A) for employees and vendors.",
    color: "var(--emerald)",
    bg: "oklch(0.95 0.03 152)",
  },
  {
    icon: Building2,
    title: "Company Formation",
    description:
      "Private limited company, LLP, partnership firm, and sole proprietorship registration with MCA, Udyam, and Shop Act.",
    color: "var(--saffron)",
    bg: "oklch(0.97 0.03 50)",
  },
  {
    icon: Scale,
    title: "Labour Law Compliance",
    description:
      "PF, ESIC, Professional Tax registration and returns. Gratuity, bonus, and full statutory compliance for your workforce.",
    color: "var(--navy)",
    bg: "oklch(0.95 0.02 260)",
  },
  {
    icon: CreditCard,
    title: "Loan Syndication",
    description:
      "Business loans, working capital finance, MSME loan facilitation, CMA data preparation, and project finance advisory.",
    color: "var(--emerald)",
    bg: "oklch(0.95 0.03 152)",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  color,
  bg,
}: (typeof services)[0]) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(13,38,101,0.12)" }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group bg-card rounded-2xl p-7 border border-[var(--border)] flex flex-col gap-4 cursor-default"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ background: bg }}
      >
        <Icon className="w-6 h-6" style={{ color }} strokeWidth={1.8} />
      </div>
      <div>
        <h3 className="font-serif font-bold text-[var(--navy)] text-lg mb-2">{title}</h3>
        <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold" style={{ color }}>
        Learn More
        <ArrowRight
          className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
        />
      </div>
    </motion.article>
  )
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="services" className="py-24 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[var(--saffron)] mb-3">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--navy)] text-balance mb-4">
            Comprehensive Compliance Services for Growing Businesses
          </h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            From GST and income tax to company registration and loan syndication — we handle
            every financial compliance requirement so you can focus on growth.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--muted-foreground)] text-sm mb-4">
            Not sure which service you need?
          </p>
          <motion.button
            onClick={() => {
              const el = document.querySelector("#contact")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--navy)] text-white font-semibold rounded-full text-sm hover:bg-[var(--navy-light)] transition-colors shadow"
          >
            Talk to Our CA Expert
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
