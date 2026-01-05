"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { FileText, Clock } from "lucide-react"

const blogPosts = [
  {
    title: "What I Learned Teaching AI to Non-Tech Learners",
    description: "Insights from bridging the gap between complex AI concepts and diverse learners",
    readTime: "5 min read",
  },
  {
    title: "Fermenting Kimchi and Finding Patience",
    description: "Life lessons from the kitchen that apply to teaching and program management",
    readTime: "4 min read",
  },
  {
    title: "How I Built Our AI Dashboard Using Google Sheets",
    description: "A practical guide to creating analytics dashboards with Python and Google Sheets",
    readTime: "8 min read",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text">Writing & Reflections</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Thoughts on AI education, program management, and life beyond the classroom
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="glass-card p-6 rounded-3xl group cursor-pointer"
              >
                <div className="space-y-4">
                  <Badge className="glass-card border-primary/20 text-primary rounded-full px-3 py-1">
                    Coming Soon
                  </Badge>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold leading-tight gradient-text">{post.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{post.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border border-primary/20">
              <FileText className="h-5 w-5 text-primary" />
              <span className="gradient-text font-bold">Blog posts launching soon – stay tuned!</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
