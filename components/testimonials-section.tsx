"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    text: "Arissa - she put in the most time and effort in creating materials, she dedicated herself ensuring all students pass! She helped us understand what was important from the exam point of view, while other trainers offered real world & practical use cases insight, Arissa helped separate and prepare us for the exam. If I would take CAIE I would take because of the efforts Arissa puts in.",
    author: "CAIA Student",
  },
  {
    text: "Arissa was a great trainer because she really teaches with passion.",
    author: "Program Participant",
  },
  {
    text: "Arissa conducted tutorials very well. She was very patient and broke down Python programming easily as I don't come from a technical background.",
    author: "Non-Technical Learner",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text">What My Students Say</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="relative min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full glass-card p-8 md:p-12 rounded-3xl"
              >
                <div className="space-y-6">
                  <Quote className="h-12 w-12 text-primary" />
                  <p className="text-lg md:text-xl leading-relaxed text-muted-foreground italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    <p className="font-bold gradient-text">{testimonials[currentIndex].author}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-primary to-secondary"
                    : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
