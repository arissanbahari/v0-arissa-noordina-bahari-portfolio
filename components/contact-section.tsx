"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text text-balance">
              Let's Build Something Smart Together
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              I'm open to collaborations, speaking engagements, and roles that connect AI, education, and innovation.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card p-8 md:p-12 rounded-3xl"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-purple-glow text-white h-auto py-6 rounded-2xl"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/arissa-noordina-bahari-2a663815b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2"
                  >
                    <Linkedin className="h-8 w-8" />
                    <span className="text-lg font-bold">Connect on LinkedIn</span>
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-secondary to-primary hover:shadow-purple-glow text-white h-auto py-6 rounded-2xl"
                  asChild
                >
                  <a href="mailto:arissanbahari@gmail.com" className="flex flex-col items-center gap-2">
                    <Mail className="h-8 w-8" />
                    <span className="text-lg font-bold">Send an Email</span>
                  </a>
                </Button>
              </motion.div>
            </div>

            <div className="mt-8 pt-8 border-t border-primary/10">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-muted-foreground">
                <motion.a
                  href="mailto:arissanbahari@gmail.com"
                  whileHover={{ scale: 1.05, color: "var(--primary)" }}
                  className="flex items-center gap-2 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>arissanbahari@gmail.com</span>
                </motion.a>
                <motion.a
                  href="tel:+60164120051"
                  whileHover={{ scale: 1.05, color: "var(--primary)" }}
                  className="flex items-center gap-2 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+60 16-412 0051</span>
                </motion.a>
                <motion.a
                  href="https://github.com/arissanbahari"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, color: "var(--primary)" }}
                  className="flex items-center gap-2 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
