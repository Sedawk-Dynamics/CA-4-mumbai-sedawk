"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { servicesData, findService, ServiceDetail } from "@/lib/services-data"

export default function ServiceSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<ServiceDetail[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery("")
      setResults([])
    }
  }, [open])

  useEffect(() => {
    if (query.trim()) {
      setResults(findService(query))
    } else {
      setResults(servicesData.slice(0, 4))
    }
  }, [query])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [open])

  function go(slug: string) {
    setOpen(false)
    router.push(`/services/${slug}`)
  }

  return (
    <div className="relative" ref={containerRef}>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white/80 hover:text-white text-xs transition-all"
        aria-label="Search services"
      >
        <Search className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Search services…</span>
        <kbd className="hidden sm:inline text-white/40 text-[10px] font-mono bg-white/10 px-1 rounded">⌘K</kbd>
      </button>

      {/* Overlay + modal */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="fixed left-1/2 top-24 -translate-x-1/2 w-full max-w-lg z-[101] px-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Search input */}
                <div className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-100">
                  <Search className="w-4.5 h-4.5 text-gray-400 shrink-0 w-5 h-5" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search services (e.g. GST Filing, ITR, PF…)"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 text-sm text-gray-800 placeholder:text-gray-400 outline-none bg-transparent"
                  />
                  {query && (
                    <button onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-600">
                      <X className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => setOpen(false)}
                    className="text-xs text-gray-400 border border-gray-200 px-2 py-0.5 rounded font-mono hover:bg-gray-50"
                  >
                    esc
                  </button>
                </div>

                {/* Results */}
                <div className="max-h-80 overflow-y-auto">
                  {results.length === 0 && query ? (
                    <div className="py-10 text-center text-sm text-gray-400">
                      No services found for &quot;{query}&quot;
                    </div>
                  ) : (
                    <>
                      {!query && (
                        <p className="px-4 pt-3 pb-1 text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                          All Services
                        </p>
                      )}
                      {query && results.length > 0 && (
                        <p className="px-4 pt-3 pb-1 text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                          {results.length} result{results.length !== 1 ? "s" : ""}
                        </p>
                      )}
                      <ul className="pb-2">
                        {(query ? results : servicesData).map((s) => (
                          <li key={s.slug}>
                            <button
                              onClick={() => go(s.slug)}
                              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left group"
                            >
                              <div
                                className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-white text-xs font-bold"
                                style={{ background: s.color }}
                              >
                                {s.shortTitle.charAt(0)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-800 truncate">{s.shortTitle}</p>
                                <p className="text-xs text-gray-400 truncate">{s.tagline}</p>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 shrink-0 transition-colors" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
