"use client"

import { motion } from "framer-motion"
import { Video, Mic, Building2 } from "lucide-react"

export function MediaSection() {
  const mediaItems = [
    {
      icon: Video,
      title: "NotebookLM Guide",
      description:
        "A tutorial I created to empower my students to build their own personalized AI notebooks using Google's NotebookLM. I taught them how to upload materials, generate guided summaries, and chat with their content.",
      embedType: "youtube",
      embedSrc: "https://www.youtube.com/embed/IHWTjxf2h5c?si=W6c5YlNVzv56cwTy",
    },
    {
      icon: Mic,
      title: "Do Anything Better Podcast",
      description:
        "A university-funded podcast I produced, scripted, and hosted to explore how students can learn, live, and do better in university life. Topics discussed include mental health, procrastination and mathematics. I lead the development for Season 1 of the podcast.",
      embedType: "spotify",
      embedSrc: "https://open.spotify.com/embed/show/1qtwJYAXalIKEijWV3sDbv?utm_source=generator",
    },
    {
      icon: Building2,
      title: "Build and Engineer Your Future Podcast",
      description:
        "A podcast for future Heriot-Watt students to learn more about the university's Engineering and Built Environment courses through real stories and interviews.",
      embedType: "spotify",
      embedSrc: "https://open.spotify.com/embed/show/6F0Hb0BLcMROCin95UbqRH?utm_source=generator",
    },
  ]

  return (
    <section id="media" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text">Some of My Media</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Podcasts, teaching videos, and creative projects I've produced and hosted
            </p>
          </div>

          <div className="space-y-12">
            {mediaItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="glass-card rounded-3xl p-8"
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-purple-glow">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold gradient-text">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                    <div
                      className={item.embedType === "youtube" ? "relative w-full" : "w-full"}
                      style={item.embedType === "youtube" ? { paddingBottom: "56.25%" } : {}}
                    >
                      <iframe
                        className={
                          item.embedType === "youtube"
                            ? "absolute top-0 left-0 w-full h-full rounded-2xl"
                            : "rounded-2xl"
                        }
                        src={item.embedSrc}
                        width="100%"
                        height={item.embedType === "spotify" ? "352" : undefined}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                        allowFullScreen
                        loading="lazy"
                      />
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
