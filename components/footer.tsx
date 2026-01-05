"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-primary/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span>© 2025 Arissa Noordina Bahari</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-primary inline fill-primary" /> using v0 + AI
            </span>
          </p>
          <p className="text-sm text-muted-foreground/70">Kuala Lumpur, Malaysia</p>
        </motion.div>
      </div>
    </footer>
  )
}
