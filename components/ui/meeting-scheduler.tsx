"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Clock, CheckCircle, Calendar } from "lucide-react"

const TIME_SLOTS = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM",
]

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
]

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

export default function MeetingScheduler() {
  const today = new Date()
  const [viewYear, setViewYear]   = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [form, setForm]   = useState({ name: "", phone: "", email: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) }
    else setViewMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) }
    else setViewMonth(m => m + 1)
  }

  const daysInMonth  = getDaysInMonth(viewYear, viewMonth)
  const firstDay     = getFirstDayOfMonth(viewYear, viewMonth)
  const totalCells   = Math.ceil((firstDay + daysInMonth) / 7) * 7

  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day)
    d.setHours(0,0,0,0)
    const t = new Date(); t.setHours(0,0,0,0)
    return d < t
  }
  const isSunday = (day: number) => new Date(viewYear, viewMonth, day).getDay() === 0

  const isSelected = (day: number) =>
    selectedDate?.getDate() === day &&
    selectedDate?.getMonth() === viewMonth &&
    selectedDate?.getFullYear() === viewYear

  const handleDayClick = (day: number) => {
    if (isPast(day) || isSunday(day)) return
    setSelectedDate(new Date(viewYear, viewMonth, day))
    setSelectedTime(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime || !form.name || !form.phone) return
    setLoading(true)

    /* ── EMAIL INTEGRATION POINT ──────────────────────────────────────
       Replace this block with your email API call, e.g.:
       await fetch("/api/schedule-meeting", {
         method: "POST",
         body: JSON.stringify({
           name: form.name, phone: form.phone, email: form.email,
           date: selectedDate.toDateString(), time: selectedTime,
         }),
       })
    ────────────────────────────────────────────────────────────────── */
    await new Promise(r => setTimeout(r, 900))

    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center gap-4"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white font-serif">Meeting Requested!</h3>
        <p className="text-white/60 text-sm max-w-xs">
          <span className="text-white font-medium">{selectedDate?.toDateString()}</span> at{" "}
          <span className="text-white font-medium">{selectedTime}</span>
          <br />CA Ram Gavade will confirm your slot shortly.
        </p>
        <button
          onClick={() => { setSubmitted(false); setSelectedDate(null); setSelectedTime(null); setForm({ name:"", phone:"", email:"" }) }}
          className="mt-2 text-sm text-[var(--saffron)] hover:underline font-semibold"
        >
          Schedule another meeting
        </button>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-serif text-xl font-bold text-white">Schedule a Meeting</h3>

      {/* ── Calendar ── */}
      <div className="bg-white/8 border border-white/15 rounded-xl p-4">
        {/* Month nav */}
        <div className="flex items-center justify-between mb-3">
          <button onClick={prevMonth} className="p-1.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-white font-semibold text-sm">
            {MONTHS[viewMonth]} {viewYear}
          </span>
          <button onClick={nextMonth} className="p-1.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 mb-1">
          {DAYS.map(d => (
            <div key={d} className={`text-center text-[10px] font-semibold py-1 ${d === "Sun" ? "text-red-400/70" : "text-white/40"}`}>
              {d}
            </div>
          ))}
        </div>

        {/* Date cells */}
        <div className="grid grid-cols-7 gap-0.5">
          {Array.from({ length: totalCells }).map((_, idx) => {
            const day = idx - firstDay + 1
            const valid = day >= 1 && day <= daysInMonth
            const disabled = !valid || isPast(day) || isSunday(day)
            const selected = valid && isSelected(day)

            return (
              <button
                key={idx}
                disabled={disabled}
                onClick={() => valid && handleDayClick(day)}
                className={`
                  h-8 w-full rounded-lg text-xs font-medium transition-all
                  ${!valid ? "invisible" : ""}
                  ${disabled && valid ? "text-white/20 cursor-not-allowed" : ""}
                  ${selected
                    ? "bg-[var(--saffron)] text-white font-bold shadow"
                    : !disabled
                      ? "text-white/80 hover:bg-white/15 hover:text-white cursor-pointer"
                      : ""}
                `}
              >
                {valid ? day : ""}
              </button>
            )
          })}
        </div>
        <p className="text-[10px] text-white/30 mt-2 text-center">Mon – Sat · Sundays closed</p>
      </div>

      {/* ── Time slots ── */}
      <AnimatePresence>
        {selectedDate && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="flex items-center gap-2 text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
              <Clock className="w-3.5 h-3.5" />
              Available Slots — {selectedDate.toDateString()}
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {TIME_SLOTS.map(slot => (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`
                    py-1.5 rounded-lg text-[11px] font-medium border transition-all
                    ${selectedTime === slot
                      ? "bg-[var(--saffron)] border-[var(--saffron)] text-white"
                      : "border-white/15 text-white/70 hover:border-white/40 hover:text-white bg-white/5"}
                  `}
                >
                  {slot}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Contact fields ── */}
      <AnimatePresence>
        {selectedDate && selectedTime && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmit}
            className="overflow-hidden flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 text-white/60 text-xs font-semibold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              Your Details
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input
                required
                placeholder="Full Name *"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="col-span-2 sm:col-span-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <input
                required
                placeholder="Phone Number *"
                type="tel"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                className="col-span-2 sm:col-span-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <input
                placeholder="Email (optional)"
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="col-span-2 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>

            {/* Summary */}
            <div className="bg-white/8 rounded-xl p-3 text-xs text-white/60 border border-white/10">
              <span className="text-white font-medium">{selectedDate.toDateString()}</span> · <span className="text-white font-medium">{selectedTime}</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[var(--saffron)] hover:bg-orange-500 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Calendar className="w-4 h-4" />
                  Confirm Meeting Request
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
