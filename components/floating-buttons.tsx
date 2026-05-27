"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, MessageCircle } from "lucide-react"

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/5512996237620"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-110 transition-all duration-300"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
