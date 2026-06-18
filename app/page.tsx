import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import { ClientsCarousel } from "@/components/clients-carousel"
import Services from "@/components/services"
import About from "@/components/about"
import Stats from "@/components/stats"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

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
