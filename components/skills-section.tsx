"use client"

import { motion } from "framer-motion"
import { Code2, Database, BarChart3, Cpu } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Python", "R", "SQL"],
    },
    {
      title: "Libraries & Frameworks",
      icon: Cpu,
      skills: [
        "pandas",
        "numpy",
        "scikit-learn",
        "PyTorch",
        "OpenCV",
        "albumentations",
        "dplyr",
        "tidyverse",
        "ggplot2",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Database,
      skills: ["Tableau", "MySQL", "Excel", "Google Data Studio", "n8n", "Jupyter", "Colab"],
    },
    {
      title: "Other Skills",
      icon: BarChart3,
      skills: ["Machine Learning", "NLP", "Computer Vision", "Data Visualization"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4">
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
              <Code2 className="h-12 w-12" />
              Tech Stack
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="glass-card p-8 rounded-3xl group cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary group-hover:shadow-purple-glow transition-all duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold gradient-text">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 rounded-full glass-card text-foreground font-semibold text-sm border border-primary/20 cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
