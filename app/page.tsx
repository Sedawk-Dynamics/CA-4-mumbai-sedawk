import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"

// Lazy-load everything below the fold — keeps initial bundle small
const ClientsCarousel = dynamic(() =>
  import("@/components/clients-carousel").then((m) => ({ default: m.ClientsCarousel }))
)
const Services  = dynamic(() => import("@/components/services"))
const About     = dynamic(() => import("@/components/about"))
const Stats     = dynamic(() => import("@/components/stats"))
const Testimonials = dynamic(() => import("@/components/testimonials"))
const Contact   = dynamic(() => import("@/components/contact"))
const Footer    = dynamic(() => import("@/components/footer"))

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClientsCarousel />
      <Services />
      <About />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
