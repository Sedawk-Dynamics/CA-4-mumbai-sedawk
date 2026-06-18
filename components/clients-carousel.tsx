'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

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
    // Duplicate clients for infinite scroll effect
    setDuplicatedClients([...clients, ...clients, ...clients])
  }, [])

  return (
    <section className="bg-surface py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We serve businesses across various industries and sectors with our comprehensive accounting and compliance solutions.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 z-10 w-32 h-full bg-gradient-to-r from-surface to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-10 w-32 h-full bg-gradient-to-l from-surface to-transparent pointer-events-none" />

          {/* Animated carousel */}
          <motion.div
            className="flex gap-6 py-8"
            animate={{ x: '-100%' }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
          >
            {duplicatedClients.length > 0 &&
              duplicatedClients.map((client, idx) => (
                <motion.div
                  key={idx}
                  className="flex-shrink-0 w-48 h-24 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full rounded-xl border-2 border-navy-light bg-white hover:bg-navy-light group transition-all duration-300 flex items-center justify-center cursor-pointer">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-navy-dark group-hover:text-white transition-colors">
                        {client.initials}
                      </p>
                      <p className="text-xs text-muted-foreground group-hover:text-navy-light transition-colors mt-1">
                        {client.name}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>

        {/* Bottom Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm text-muted-foreground">
            And many more businesses across India trust us for their financial and compliance needs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
