"use client"

import { motion } from "framer-motion"
import { Volume2, Gamepad2, Bot, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import MacbookScrollDemo from "@/components/macbook-scroll-demo"
import { Header } from "@/components/header"

export default function ProjectsPage() {
  const features = [
    {
      icon: Volume2,
      title: "Text-to-Speech",
      description: "Hover over words and letters to hear them pronounced clearly in Bahasa Malaysia",
    },
    {
      icon: Gamepad2,
      title: "Letter Finder Game",
      description: "A fun, interactive game that helps kids recognize and match letters",
    },
    {
      icon: Bot,
      title: "BacaBot",
      description: "Your friendly AI reading buddy that guides and encourages young learners",
    },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-24">
        {/* Header Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 py-24 md:py-32"
        >
          <div className="container mx-auto max-w-6xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
            >
              Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Showcasing my AI-powered learning tools and experiments
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 h-1 w-64 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full"
            />
          </div>
        </motion.section>

        {/* MacbookScroll Demo */}
        <section className="px-4 py-16">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden"
            >
              <MacbookScrollDemo />
            </motion.div>
          </div>
        </section>

        {/* BacaBersama Feature Section */}
        <section className="px-4 py-16">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                BacaBersama — AI Literacy for Early Readers 🇲🇾
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                BacaBersama is a Bahasa Malaysia, phonics-based AI literacy app for preschool students beginning their
                reading journey. Built during the Building for Good Hackathon 2025 and powered by Lovable.
              </p>
            </motion.div>

            {/* Feature Cards with Glowing Hover Effect */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative rounded-2xl bg-white/5 dark:bg-[#1A1A22] p-6 backdrop-blur-md transition-all duration-300 overflow-hidden border border-white/10"
                >
                  {/* Glowing circle aura on hover */}
                  <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(217,199,252,0.35),transparent_70%)]" />

                  <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Project Progress</span>
                <span className="text-sm font-semibold text-primary">1%</span>
              </div>
              <div className="h-1 w-full bg-white/10 dark:bg-[#1A1A22] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "1%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[#6E46C3] to-[#D9C7FC] rounded-full"
                  aria-label="Project progress 1%"
                />
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-16 text-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-[0_0_20px_rgba(217,199,252,0.3)] hover:shadow-[0_0_30px_rgba(217,199,252,0.5)]"
              >
                <a href="https://baca-bersama-belajar.lovable.app/" target="_blank" rel="noopener noreferrer">
                  Visit App <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
