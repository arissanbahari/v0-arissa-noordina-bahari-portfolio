import { Header } from "@/components/header"
import { CareerTimelineSection } from "@/components/career-timeline-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24">
        <CareerTimelineSection />
        <SkillsSection />
        <EducationSection />
      </main>
    </>
  )
}
