import { Header } from "@/components/header"
import { GallerySection } from "@/components/gallery-section"
import { MediaSection } from "@/components/media-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24">
        <GallerySection />
        <MediaSection />
        <TestimonialsSection />
      </main>
    </>
  )
}
