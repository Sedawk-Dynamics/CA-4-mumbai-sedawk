"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, CalendarDays, MessageSquare } from "lucide-react"
import { BeamsBackground } from "@/components/ui/beams-background"
import MeetingScheduler from "@/components/ui/meeting-scheduler"

const contactInfo = [
  { icon: Phone,  label: "Phone",         value: "9892055115",       href: "tel:9892055115",         color: "var(--saffron)", bg: "oklch(0.97 0.03 50)" },
  { icon: Mail,   label: "Email",         value: "info@ca-4-india.in", href: "mailto:info@ca-4-india.in", color: "var(--navy)",    bg: "oklch(0.95 0.02 260)" },
  { icon: MapPin, label: "Address",       value: "106 Rajgir Sadan, Laxmi Baug, Opp. Sion Railway Station, Sion, Mumbai 400022", href: "https://maps.google.com/?q=Sion+Railway+Station+Mumbai", color: "var(--emerald)", bg: "oklch(0.95 0.03 152)" },
  { icon: Clock,  label: "Working Hours", value: "Monday – Saturday: 10:00 AM – 7:00 PM", href: null, color: "var(--saffron)", bg: "oklch(0.97 0.03 50)" },
]

type FormState = { name: string; email: string; phone: string; service: string; message: string }
const initialForm: FormState = { name: "", email: "", phone: "", service: "", message: "" }
const services = ["GST Filing","Income Tax Filing","TDS Compliance","Company Formation","Labour Law Compliance","Loan Syndication","Other"]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [activeTab, setActiveTab] = useState<"inquiry" | "schedule">("inquiry")
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <BeamsBackground intensity="strong" />

      <div className="relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-4"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[var(--saffron)] mb-3">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
            Start Your Free Consultation Today
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            Fill in the form below and our CA expert will get back to you within 24 hours.
            No commitment, no hidden charges.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Left: Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.12)" }}>
                    <Icon className="w-5 h-5 text-white/80" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-1">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-white text-sm font-medium hover:text-[var(--saffron)] transition-colors leading-relaxed">{value}</a>
                    ) : (
                      <p className="text-white text-sm font-medium leading-relaxed">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/919892055115" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm py-3.5 rounded-2xl shadow hover:bg-[#1ebe5a] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </motion.a>
            </motion.div>

            {/* Right: Tabbed panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden"
            >
              {/* Tab bar */}
              <div className="flex border-b border-white/15">
                {([
                  { id: "inquiry",  label: "Send Inquiry",       icon: MessageSquare },
                  { id: "schedule", label: "Schedule a Meeting",  icon: CalendarDays  },
                ] as const).map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-all ${
                      activeTab === id
                        ? "text-white border-b-2 border-[var(--saffron)] bg-white/5"
                        : "text-white/50 hover:text-white/80"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="p-8">

                {/* ── Schedule tab ── */}
                {activeTab === "schedule" && <MeetingScheduler />}

                {/* ── Inquiry tab ── */}
                {activeTab === "inquiry" && (
                  submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-12 gap-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-[var(--emerald)] flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-white">Thank You!</h3>
                      <p className="text-white/60 text-sm max-w-xs">
                        Your inquiry has been received. CA Ram Gavade will contact you within 24 hours.
                      </p>
                      <button onClick={() => setSubmitted(false)} className="mt-2 text-sm text-[var(--saffron)] font-semibold hover:underline">
                        Submit another inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <h3 className="font-serif text-xl font-bold text-white mb-1">Request a Free Consultation</h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="name" className="text-xs font-semibold text-white uppercase tracking-wider">Full Name *</label>
                          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Rajesh Mehta"
                            className="px-4 py-2.5 text-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="phone" className="text-xs font-semibold text-white uppercase tracking-wider">Phone Number *</label>
                          <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="98XXXXXXXX"
                            className="px-4 py-2.5 text-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-white uppercase tracking-wider">Email Address</label>
                        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com"
                          className="px-4 py-2.5 text-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition" />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="service" className="text-xs font-semibold text-white uppercase tracking-wider">Service Required</label>
                        <select id="service" name="service" value={form.service} onChange={handleChange}
                          className="px-4 py-2.5 text-sm bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition">
                          <option value="">Select a service...</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-xs font-semibold text-white uppercase tracking-wider">Message</label>
                        <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Briefly describe your requirement..."
                          className="px-4 py-2.5 text-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition resize-none" />
                      </div>

                      <motion.button type="submit" disabled={loading}
                        whileHover={!loading ? { scale: 1.02 } : {}} whileTap={!loading ? { scale: 0.97 } : {}}
                        className="flex items-center justify-center gap-2 w-full py-3.5 bg-[var(--navy)] text-white font-semibold rounded-xl text-sm hover:bg-[var(--navy-light)] transition-colors disabled:opacity-60"
                      >
                        {loading ? (
                          <><svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Sending...</>
                        ) : (
                          <><Send className="w-4 h-4" />Send Inquiry</>
                        )}
                      </motion.button>
                    </form>
                  )
                )}

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
