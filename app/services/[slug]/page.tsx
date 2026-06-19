import { notFound } from "next/navigation"
import { servicesData } from "@/lib/services-data"
import ServicePageClient from "@/components/service-page-client"

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.title} | CA 4 India Knowledge Solutions`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) notFound()
  return <ServicePageClient service={service!} />
}
