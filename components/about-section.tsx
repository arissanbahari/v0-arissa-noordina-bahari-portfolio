"use client"

import { motion } from "framer-motion"
import { Sparkles, Heart, BookOpen, Trophy } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Sparkles,
      title: "Teaching Philosophy",
      description: "Making complex AI concepts accessible through empathy, storytelling, and hands-on practice",
    },
    {
      icon: Trophy,
      title: "Impact Focus",
      description: "95% first-attempt pass rate across 80+ students from diverse backgrounds (ages 18-50)",
    },
    {
      icon: BookOpen,
      title: "Beyond Work",
      description: "Reading translated fiction, making kimchi, and supporting Oscar Piastri's F1 championship bid",
    },
    {
      icon: Heart,
      title: "What I Love",
      description: "My 5 cats, testing new technologies and hosting dinner parties for my friends",
    },
  ]

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg leading-relaxed text-muted-foreground text-center">
              Arissa Noordina Bahari is an AI Program Associate & Trainer who designs and leads cutting-edge AI
              certification programs under the United States Artificial Intelligence Institute (USAII). Based in Kuala
              Lumpur, she's passionate about making AI education accessible to learners of all ages and backgrounds,
              blending industry insights with empathy and storytelling.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="glass-card p-6 rounded-2xl group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary group-hover:shadow-purple-glow transition-all duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2 text-foreground">{highlight.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
                    </div>
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
