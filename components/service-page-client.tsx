"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle, Phone, ArrowRight, MessageCircle, ChevronDown } from "lucide-react"
import { ServiceDetail } from "@/lib/services-data"
import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"

const Warp = dynamic(() => import("@paper-design/shaders-react").then(m => m.Warp), { ssr: false })

export default function ServicePageClient({ service }: { service: ServiceDetail }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero */}
      <div className="relative overflow-hidden bg-[#030308] text-white py-24 pt-32">
        <div className="absolute inset-0 z-0">
          <Warp
            style={{ width: "100%", height: "100%" }}
            proportion={0.45}
            softness={1}
            distortion={0.2}
            swirl={0.6}
            swirlIterations={8}
            shape="checks"
            shapeScale={0.1}
            scale={1}
            rotation={0}
            speed={0.7}
            colors={["hsl(203, 100%, 62%)", "hsl(255, 100%, 72%)", "hsl(158, 99%, 59%)", "hsl(264, 100%, 61%)"]}
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: "linear-gradient(to bottom, rgba(3,3,8,0.7) 0%, rgba(3,3,8,0.4) 100%)" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full border"
              style={{ color: service.color, borderColor: service.color + "40", background: service.color + "15" }}
            >
              What We Offer
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">
              {service.title}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              {service.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm shadow-lg transition-all hover:scale-105"
                style={{ background: service.color }}
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919892055115"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-serif text-2xl font-bold text-[var(--navy)] mb-4">Overview</h2>
          <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">{service.description}</p>
        </motion.section>

        {/* What's Included */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="font-serif text-2xl font-bold text-[var(--navy)] mb-6">What&apos;s Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.includes.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: service.color }} />
                <span className="text-sm text-[var(--foreground)] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-serif text-2xl font-bold text-[var(--navy)] mb-6">How It Works</h2>
          <div className="space-y-4">
            {service.process.map((p, i) => (
              <div key={p.step} className="flex gap-4 items-start">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 mt-0.5"
                  style={{ background: service.color }}
                >
                  {i + 1}
                </div>
                <div className="flex-1 pb-4 border-b border-gray-100 last:border-0">
                  <h3 className="font-semibold text-[var(--navy)] mb-1">{p.step}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{p.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="font-serif text-2xl font-bold text-[var(--navy)] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {service.faq.map((item) => (
              <details key={item.q} className="group rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-[var(--navy)] hover:bg-gray-50 transition-colors list-none">
                  {item.q}
                  <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-sm text-[var(--muted-foreground)] leading-relaxed border-t border-gray-100 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-2xl p-8 text-white text-center"
          style={{ background: `linear-gradient(135deg, ${service.accent}, ${service.color})` }}
        >
          <h2 className="font-serif text-2xl font-bold mb-2">Ready to Get Started?</h2>
          <p className="text-white/80 mb-6 text-sm">
            Talk to CA Ram Gavade today. Free consultation, no commitment.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors"
              style={{ color: service.accent }}
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:9892055115"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white font-semibold rounded-full text-sm hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              9892055115
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
