"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "MSc (Hons) Artificial Intelligence",
      institution: "University of Malaya",
      period: "2023–2024",
      achievement: "CGPA: 3.93 (With Distinction)",
      thesis: 'Thesis: "Integrating Explainable AI for Transparent Skin Lesion Classification"',
      courses: ["Advanced Machine Learning", "NLP", "Computer Vision", "Explainable AI", "Data Privacy & Ethics"],
    },
    {
      degree: "BSc (Hons) Statistical Data Science",
      institution: "Heriot-Watt University Malaysia",
      period: "2018–2022",
      achievement: "Second Class Upper",
      thesis: 'FYP: "Automatic Hate Speech Detection on Twitter using ELMo Embeddings"',
      courses: ["Statistical Models", "Multivariate Statistics", "Time Series Analysis", "Data Assimilation"],
    },
  ]

  return (
    <section id="education" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text flex items-center justify-center gap-4">
              <GraduationCap className="h-12 w-12" />
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass-card p-8 rounded-3xl group cursor-pointer"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary group-hover:shadow-purple-glow transition-all duration-300">
                    {index === 0 ? (
                      <Award className="h-6 w-6 text-white" />
                    ) : (
                      <GraduationCap className="h-6 w-6 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold gradient-text leading-tight">{edu.degree}</h3>
                    <p className="text-lg font-semibold text-primary mt-1">{edu.institution}</p>
                    <p className="text-sm font-medium text-muted-foreground mt-1">{edu.period}</p>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  <div className="glass-card p-3 rounded-xl border border-primary/20">
                    <p className="text-foreground font-bold">{edu.achievement}</p>
                  </div>

                  <div className="glass-card p-3 rounded-xl border border-primary/20">
                    <p className="text-muted-foreground text-sm leading-relaxed">{edu.thesis}</p>
                  </div>

                  <div className="pt-3">
                    <p className="text-foreground font-bold mb-2 text-sm">Key Courses:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <motion.span
                          key={courseIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: courseIndex * 0.05, duration: 0.3 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 rounded-full glass-card text-foreground text-xs font-semibold border border-primary/20 cursor-pointer"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
