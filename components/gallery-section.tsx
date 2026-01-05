"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const galleryImages = [
  {
    src: "/images/empowered-masterclass-1.jpeg",
    alt: "Empowered By AI Masterclass - Presenting",
    caption: "AI Masterclass – July 2025",
  },
  {
    src: "/images/empowered-masterclass-2.jpeg",
    alt: "Empowered By AI Masterclass - Event Banner",
    caption: "Empowered By AI Event",
  },
  {
    src: "/images/ai-senior-citizens-2.jpg",
    alt: "Teaching AI to Senior Citizens",
    caption: "AI for Senior Citizens Workshop",
  },
  {
    src: "/images/ai-senior-citizens-1.jpg",
    alt: "Senior Citizen Learning Teachable Machine",
    caption: "Hands-on AI Learning",
  },
]

export function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text">Arissa In Action</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Moments from workshops, masterclasses, and training sessions across Malaysia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative overflow-hidden rounded-3xl cursor-pointer glass-card"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-primary/90 via-secondary/70 to-transparent flex items-end justify-center p-6"
                  >
                    <p className="text-2xl font-bold text-white text-center">{image.caption}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
