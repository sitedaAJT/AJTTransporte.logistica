"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Shield, Zap, Globe } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(234, 88, 12, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(234, 88, 12, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Animated road lines */}
      <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 0.5 }}
          className="absolute bottom-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">entre em contato para saber mais</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            <span className="text-balance">Transporte e Logística com</span>
            <br />
            <span className="text-primary">Segurança, Agilidade</span>
            <br />
            <span className="text-balance">e Confiança</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty"
          >
            Soluções completas em transporte rodoviário e logística para sua empresa. 
            Equipe especializada e cobertura em certas regiões do Brasil
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-14 text-lg group">
              <Link href="#cotacao">
                Solicitar Cotação
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border hover:bg-secondary text-foreground font-semibold px-8 h-14 text-lg">
              <Link href="https://wa.me/5512996237620" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5 text-green-500" />
                Falar no WhatsApp
              </Link>
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Shield, label: "Segurança Total", desc: "Cargas protegidas" },
              { icon: Zap, label: "Entregas Rápidas", desc: "Agilidade garantida" },
              { icon: Globe, label: "Cobertura Regional", desc: "MG, SP,PR e Vale do Paraíba" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">{feature.label}</p>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
