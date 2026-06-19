"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import ServiceSearch from "@/components/ui/service-search"

const navLinks = [
  { label: "Home", href: "#home" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "GST Filing", href: "/services/gst-filing" },
      { label: "Income Tax Filing", href: "/services/income-tax-filing" },
      { label: "TDS Compliance", href: "/services/tds-compliance" },
      { label: "Company Formation", href: "/services/company-formation" },
      { label: "Labour Law Compliance", href: "/services/labour-law-compliance" },
      { label: "Loan Syndication", href: "/services/loan-syndication" },
    ],
  },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigate = (href: string) => {
    setMobileOpen(false)
    setActiveDropdown(null)
    if (href.startsWith("/")) {
      router.push(href)
    } else {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:flex bg-[#1a3a6b] text-white/80 text-xs justify-end px-8 py-1.5 gap-6">
        <a href="tel:9892055115" className="flex items-center gap-1.5 hover:text-white transition-colors">
          <Phone className="w-3 h-3" />
          9892055115
        </a>
        <a href="mailto:info@ca-4-india.in" className="hover:text-white transition-colors">
          info@ca-4-india.in
        </a>
        <span>Mon–Sat: 10am – 7pm</span>
      </div>

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#2563eb]/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-[#2563eb] shadow-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate("#home")}
            className="flex items-center gap-2 shrink-0"
            aria-label="CA 4 Mumbai – Home"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CA%204%20mumbai%20logo-ejUXIkhxL5nsPjY1UcaaOLcME6I0B6.png"
              alt="CA 4 Mumbai Logo"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => navigate(link.href)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/90 hover:text-[var(--saffron)] transition-colors rounded-md hover:bg-white/10"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.ul
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full mt-1 w-48 bg-[#1d4ed8] border border-white/10 rounded-lg shadow-xl overflow-hidden z-50"
                    >
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <button
                            onClick={() => navigate(child.href)}
                            className="w-full text-left px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-[var(--saffron)] transition-colors"
                          >
                            {child.label}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Search */}
          <ServiceSearch />

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              onClick={() => navigate("#contact")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 text-sm font-semibold bg-[var(--saffron)] text-white rounded-full shadow-sm hover:bg-[var(--saffron-light)] transition-colors"
            >
              Get Free Consultation
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-[#1d4ed8] border-t border-white/10"
            >
              <ul className="flex flex-col px-4 py-4 gap-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => navigate(link.href)}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-white/90 hover:text-[var(--saffron)] hover:bg-white/10 rounded-lg transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li className="pt-2">
                  <button
                    onClick={() => navigate("#contact")}
                    className="w-full px-4 py-3 text-sm font-semibold bg-[var(--saffron)] text-white rounded-full"
                  >
                    Get Free Consultation
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
