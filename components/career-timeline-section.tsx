"use client"

import { motion } from "framer-motion"
import { Briefcase, Sparkles, TrendingUp, Users } from "lucide-react"

export function CareerTimelineSection() {
  const timeline = [
    {
      company: "SG TVET Group Berhad",
      role: "AI Program Associate & Trainer",
      period: "Nov 2024 – Present",
      description:
        "Leading and delivering USAII's CAIA and CAIE certifications, training 80+ learners with a 95% pass rate.",
      icon: Sparkles,
    },
    {
      company: "Tapway",
      role: "AI Engineer Intern",
      period: "Feb 2024 – May 2024",
      description:
        "Trained and optimized computer vision models using OpenCV, albumentations, and YOLO; integrated them into Tapway's production pipeline.",
      icon: TrendingUp,
    },
    {
      company: "AutoWealth",
      role: "Management Associate",
      period: "Sep 2022 – Sep 2023",
      description:
        "Built marketing analytics dashboards, tracked engagement metrics, and presented weekly insights to management.",
      icon: Briefcase,
    },
    {
      company: "Heriot-Watt University Malaysia",
      role: "Student Association President",
      period: "Aug 2019 – Dec 2019",
      description:
        "Led 2000+ students with a RM 100K budget and represented HWUM at Heriot-Watt's global institutional review in Edinburgh.",
      icon: Users,
    },
  ]

  return (
    <section id="timeline" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text">My Journey So Far</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2 opacity-30" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className={`relative flex flex-col md:flex-row items-center gap-8 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary shadow-purple-glow z-10" />

                    {/* Content card */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      className={`w-full md:w-5/12 ${isEven ? "md:text-right" : "md:text-left"}`}
                    >
                      <div className="glass-card p-6 rounded-3xl group cursor-pointer">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary group-hover:shadow-purple-glow transition-all duration-300">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="text-2xl font-bold gradient-text">{item.role}</h3>
                            <p className="text-lg font-semibold text-primary">{item.company}</p>
                            <p className="text-sm font-medium text-muted-foreground mt-1">{item.period}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-left">{item.description}</p>
                      </div>
                    </motion.div>

                    <div className="hidden md:block w-5/12" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
