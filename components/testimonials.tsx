"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Mehta",
    designation: "Owner",
    company: "Mehta Enterprises, Sion",
    rating: 5,
    quote:
      "CA 4 Mumbai has been a game-changer for my manufacturing business. They handle all our GST returns and TDS filings without any delay. I can focus entirely on production while they take care of our compliance. Highly professional team!",
  },
  {
    name: "Priya Nair",
    designation: "Manager",
    company: "Nair Pharma Distributors, Chembur",
    rating: 5,
    quote:
      "We approached them for company registration and GST advisory. The process was smooth, transparent, and completed well within the timeline. CA Ram Gavade personally guided us through every step. Truly recommended for any Mumbai MSME.",
  },
  {
    name: "Sanjay Patil",
    designation: "Salaried Professional",
    company: "Mumbai",
    rating: 5,
    quote:
      "Filing my ITR was always stressful until I found CA 4 Mumbai. They explained every deduction clearly, helped me save more tax, and filed everything on time. The pricing is honest and fair. Excellent service!",
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="py-24 bg-[var(--surface)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[var(--saffron)] mb-3">
            Client Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--navy)] text-balance">
            Trusted by Mumbai&apos;s Business Community
          </h2>
          <p className="mt-3 text-[var(--muted-foreground)] max-w-xl mx-auto leading-relaxed">
            Hear what our clients say about working with CA 4 Mumbai.
          </p>
        </motion.div>

        {/* Desktop: 3-card grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.55 }}
              className="bg-card rounded-2xl p-7 border border-[var(--border)] flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <Quote className="w-8 h-8 text-[var(--saffron)] opacity-60" />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-[var(--saffron)] text-[var(--saffron)]" />
                  ))}
                </div>
              </div>
              <p className="text-[var(--foreground)] text-sm leading-relaxed flex-1 italic">
                &quot;{t.quote}&quot;
              </p>
              <div className="pt-4 border-t border-[var(--border)]">
                <p className="font-semibold text-[var(--navy)] text-sm">{t.name}</p>
                <p className="text-[var(--muted-foreground)] text-xs mt-0.5">
                  {t.designation}, {t.company}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.article
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35 }}
                className="bg-card rounded-2xl p-7 border border-[var(--border)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-[var(--saffron)] opacity-60" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonials[current].rating }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-[var(--saffron)] text-[var(--saffron)]" />
                    ))}
                  </div>
                </div>
                <p className="text-[var(--foreground)] text-sm leading-relaxed italic mb-5">
                  &quot;{testimonials[current].quote}&quot;
                </p>
                <div className="pt-4 border-t border-[var(--border)]">
                  <p className="font-semibold text-[var(--navy)] text-sm">{testimonials[current].name}</p>
                  <p className="text-[var(--muted-foreground)] text-xs mt-0.5">
                    {testimonials[current].designation}, {testimonials[current].company}
                  </p>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-[var(--saffron)]" : "bg-[var(--border)]"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
