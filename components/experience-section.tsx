"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Briefcase, Users, TrendingUp, Award, Target, Lightbulb } from "lucide-react"

export function ExperienceSection() {
  const highlights = [
    {
      icon: Award,
      title: "Program Leadership",
      description: "Full delivery of CAIA & CAIE certifications with 95% first-attempt pass rate",
    },
    {
      icon: Users,
      title: "Growth & Outreach",
      description: "Recruited and managed 80+ total participants, reaching 300+ through workshops",
    },
    {
      icon: TrendingUp,
      title: "Training Excellence",
      description: "HRDC-accredited trainer coordinating 5+ cohorts (80+ learners) across diverse backgrounds",
    },
    {
      icon: Target,
      title: "Strategic Partnerships",
      description: "Facilitated MoU with local AI companies, strengthening student career pathways",
    },
    {
      icon: Lightbulb,
      title: "Curriculum Innovation",
      description: "Enhanced syllabi with new modules ensuring relevance to global AI trends",
    },
    {
      icon: Briefcase,
      title: "Systems Building",
      description: "Designed analytics dashboards integrating Google Sheets and Looker Studio",
    },
  ]

  const achievements = [
    "Singlehandedly spearheaded development, finetuning and expansion of flagship AI programmes in Malaysia",
    "Trained 50+ students directly across 4-5 concurrent intakes",
    "Reached 300+ participants through outreach talks and masterclasses",
  ]

  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text">What I'm Doing Now</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="glass-card border-0 rounded-3xl shadow-none">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold gradient-text">AI Program Associate & Trainer</h3>
                      <p className="text-xl text-primary mt-2 font-semibold">SG TVET Group Berhad</p>
                      <p className="text-muted-foreground font-medium">Nov 2024 - Present</p>
                    </div>
                    <Badge className="glass-card border-primary/20 text-primary w-fit rounded-full px-4 py-2">
                      <Briefcase className="mr-2 h-4 w-4" />
                      Current Role
                    </Badge>
                  </div>

                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Spearheading the full delivery and growth of USAII's flagship AI certification programs — Certified
                    AI Accelerator (CAIA) and Certified AI Engineer (CAIE) — at SG Academy, driving both academic
                    excellence and strategic industry partnerships.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((highlight, index) => {
                      const Icon = highlight.icon
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                          <BackgroundGradient className="rounded-[22px] p-4 bg-white dark:bg-zinc-900">
                            <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
                                  <Icon className="h-5 w-5 text-white" />
                                </div>
                                <h4 className="font-bold text-foreground text-sm">{highlight.title}</h4>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                            </div>
                          </BackgroundGradient>
                        </motion.div>
                      )
                    })}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="glass-card p-6 rounded-2xl"
                  >
                    <h4 className="font-bold mb-4 gradient-text text-xl">Key Achievements</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1 text-xl">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
