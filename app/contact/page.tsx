import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24">
        <ContactSection />
      </main>
    </>
  )
}
