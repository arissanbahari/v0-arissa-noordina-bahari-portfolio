import { Header } from "@/components/header"
import { BlogSection } from "@/components/blog-section"

export default function WritingsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24">
        <BlogSection />
      </main>
    </>
  )
}
