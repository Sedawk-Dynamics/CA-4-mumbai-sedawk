'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Client {
  name: string
  initials: string
}

const clients: Client[] = [
  { name: 'HDFC Bank', initials: 'HDFC' },
  { name: 'ICICI Bank', initials: 'ICICI' },
  { name: 'Axis Bank', initials: 'AXIS' },
  { name: 'KOTAK Bank', initials: 'KOTAK' },
  { name: 'Yes Bank', initials: 'YES' },
  { name: 'IndusInd Bank', initials: 'IIB' },
  { name: 'SBI', initials: 'SBI' },
  { name: 'Bajaj Finance', initials: 'BF' },
  { name: 'Reliance', initials: 'RIL' },
  { name: 'TCS', initials: 'TCS' },
  { name: 'Infosys', initials: 'INFY' },
  { name: 'Wipro', initials: 'WIT' },
  { name: 'Microsoft', initials: 'MSFT' },
  { name: 'Google', initials: 'GOOG' },
  { name: 'Amazon', initials: 'AMZN' },
]

export function ClientsCarousel() {
  const [duplicatedClients, setDuplicatedClients] = useState<Client[]>([])

  useEffect(() => {
    setDuplicatedClients([...clients, ...clients, ...clients])
  }, [])

  return (
    <section className="relative py-16 md:py-24 bg-black -mt-px" style={{ overflowX: "clip" }}>

      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        style={{ zIndex: 2, background: "linear-gradient(to bottom, #000000 0%, transparent 100%)" }}
      />

      {/* Bottom gradient — bleeds into services Warp */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ zIndex: 2, height: "220px", background: "linear-gradient(to top, #000000 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.4) 70%, transparent 100%)" }}
      />

      {/* Section Header — constrained */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10" style={{ zIndex: 3 }}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We serve businesses across various industries and sectors with our comprehensive accounting and compliance solutions.
          </p>
        </motion.div>
      </div>

      {/* Full-width carousel strip */}
      <div className="relative w-full overflow-hidden" style={{ zIndex: 3 }}>
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-10"
          style={{ background: "linear-gradient(to right, #000000 0%, transparent 100%)" }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10"
          style={{ background: "linear-gradient(to left, #000000 0%, transparent 100%)" }}
        />

        {/* Scrolling track */}
        <motion.div
          className="flex gap-5 py-6"
          animate={{ x: '-33.333%' }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          {duplicatedClients.map((client, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 h-20 flex items-center justify-center"
              style={{ width: "180px" }}
            >
              <div className="w-full h-full rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-sm group transition-all duration-300 flex items-center justify-center cursor-pointer">
                <div className="text-center px-4">
                  <p className="text-sm font-bold text-white group-hover:text-[var(--saffron)] transition-colors tracking-wide">
                    {client.initials}
                  </p>
                  <p className="text-[11px] text-white/55 group-hover:text-white/80 transition-colors mt-0.5">
                    {client.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom text — constrained */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8" style={{ zIndex: 3 }}>
        <motion.p
          className="text-sm text-white/50 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          And many more businesses across India trust us for their financial and compliance needs.
        </motion.p>
      </div>
    </section>
  )
}
