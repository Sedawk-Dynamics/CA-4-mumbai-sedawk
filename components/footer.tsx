"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

const serviceLinks = [
  "GST Filing",
  "Income Tax Filing",
  "TDS Compliance",
  "Company Formation",
  "Labour Law Compliance",
  "Loan Syndication",
  "Accounting",
]

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
]

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export default function Footer() {
  return (
    <footer style={{ background: "#020b18" }} className="text-white/70">
      {/* Top border glow */}
      <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)" }} />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CA%204%20mumbai%20logo-ejUXIkhxL5nsPjY1UcaaOLcME6I0B6.png"
            alt="CA 4 Mumbai Logo"
            width={160}
            height={50}
            className="h-12 w-auto object-contain brightness-200 mb-4"
          />
          <p className="text-sm leading-relaxed text-white/50 mb-5">
            CA 4 India Knowledge Solutions Pvt. Ltd. — Serving Atmanirbhar Mumbaikars
            through expert tax compliance and accounting services.
          </p>
          <div className="flex flex-col gap-2.5">
            <a href="tel:9892055115" className="flex items-center gap-2 text-sm hover:text-blue-300 transition-colors">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              9892055115
            </a>
            <a href="mailto:info@ca-4-india.in" className="flex items-center gap-2 text-sm hover:text-blue-300 transition-colors">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              info@ca-4-india.in
            </a>
            <p className="flex items-start gap-2 text-sm text-white/50">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              106 Rajgir Sadan, Laxmi Baug, Sion, Mumbai 400022
            </p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
            Our Services
          </h3>
          <ul className="flex flex-col gap-2.5">
            {serviceLinks.map((s) => (
              <li key={s}>
                <button
                  onClick={() => scrollTo("#services")}
                  className="text-sm text-white/50 hover:text-blue-300 transition-colors text-left"
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <button
                  onClick={() => scrollTo(href)}
                  className="text-sm text-white/50 hover:text-blue-300 transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA block */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
            Need Help?
          </h3>
          <p className="text-white/50 text-sm leading-relaxed mb-5">
            Get a free consultation with CA Ram Gavade for your GST, income tax, or
            company compliance needs.
          </p>
          <motion.button
            onClick={() => scrollTo("#contact")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2.5 text-white font-semibold text-sm rounded-full shadow-lg transition-all"
            style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)", boxShadow: "0 4px 16px rgba(37,99,235,0.35)" }}
          >
            Free Consultation
          </motion.button>

          <div className="mt-6">
            <p className="text-white/30 text-xs uppercase tracking-wider mb-2">Follow Us</p>
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-blue-500/30 hover:bg-blue-600 hover:border-blue-600 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/919892055115"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-blue-500/30 hover:bg-[#25D366] hover:border-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>
            &copy; {new Date().getFullYear()} CA 4 India Knowledge Solutions Pvt. Ltd. All rights reserved.
          </p>
          <p>
            Reg. Address: 106 Rajgir Sadan, Laxmi Baug, Sion, Mumbai 400022 &middot; Maharashtra
          </p>
        </div>
      </div>
    </footer>
  )
}
