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
    <section
      className="relative py-16 md:py-24 -mt-px"
      style={{ overflowX: "clip", background: "#f0f6ff" }}
    >
      {/* Decorative blue glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(ellipse, #bfdbfe 0%, transparent 70%)" }}
      />

      {/* Section Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10" style={{ zIndex: 3 }}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2044] mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We serve businesses across various industries and sectors with our comprehensive accounting and compliance solutions.
          </p>
        </motion.div>
      </div>

      {/* Full-width carousel strip */}
      <div className="relative w-full overflow-hidden" style={{ zIndex: 3 }}>
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-10"
          style={{ background: "linear-gradient(to right, #f0f6ff 0%, transparent 100%)" }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10"
          style={{ background: "linear-gradient(to left, #f0f6ff 0%, transparent 100%)" }}
        />

        {/* Scrolling track */}
        <div className="flex gap-5 py-6 animate-marquee">
          {duplicatedClients.map((client, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 h-20 flex items-center justify-center"
              style={{ width: "180px" }}
            >
              <div
                className="w-full h-full rounded-xl flex items-center justify-center cursor-pointer group transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md bg-white"
              >
                <div className="text-center px-4">
                  <p className="text-sm font-bold text-blue-700 group-hover:text-blue-500 transition-colors tracking-wide">
                    {client.initials}
                  </p>
                  <p className="text-[11px] text-slate-400 group-hover:text-blue-400 transition-colors mt-0.5">
                    {client.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom text */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8" style={{ zIndex: 3 }}>
        <motion.p
          className="text-sm text-slate-400 text-center"
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
