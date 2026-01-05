"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ArrowDown, Mail, Sparkles, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            animate={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 hover:border-primary/40 transition-all cursor-pointer group bg-background"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium">Winner of the Building for Good Hackathon</span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight gradient-text"
              >
                Arissa Noordina Bahari
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl md:text-3xl text-primary font-bold"
              >
                Bridging AI, Education & Strategy
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
              >
                I design and lead AI programs that grow people, not just pipelines.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/work">View My Work</Link>
              </Button>
              <Button size="lg" variant="outline" className="glass bg-transparent" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-3xl opacity-20" />
              <div className="relative rounded-3xl overflow-hidden glass border-2 border-primary/20 purple-glow">
                <Image
                  src="/images/arissa-profile.png"
                  alt="Arissa Noordina Bahari"
                  width={500}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] glass">
          <DialogHeader>
            <DialogTitle className="text-2xl gradient-text">BacaBersama - Youth Literacy App</DialogTitle>
            <DialogDescription className="text-base">
              Built during the Lovable Hackathon for Bahasa Malaysia youth literacy
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              BacaBersama is a Bahasa Malaysia youth literacy app designed for kids aged 4-6 years old, featuring:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Phonics-based learning tailored for young learners</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Interactive letter recognition minigames</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Parent analytics dashboard for tracking progress</span>
              </li>
            </ul>
            <div className="flex gap-4 pt-4">
              <Button asChild className="flex-1">
                <a href="https://baca-bersama-belajar.lovable.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit App
                </a>
              </Button>
              <Button variant="outline" asChild className="flex-1 bg-transparent">
                <a
                  href="https://www.linkedin.com/posts/arissa-noordina-bahari-2a663815b_lovable-youthliteracy-aiforgood-activity-7385310174426800128-CSE9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
