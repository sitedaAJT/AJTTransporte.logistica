"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, Users, Shield, Zap, Headphones } from "lucide-react"

const features = [
  { icon: Headphones, title: "Atendimento 24h", desc: "Suporte disponível a qualquer momento" },
  { icon: Users, title: "Equipe Especializada", desc: "Profissionais altamente capacitados" },
  { icon: Shield, title: "Segurança Total", desc: "Cargas protegidas e asseguradas" },
  { icon: Zap, title: "Entregas Rápidas", desc: "Agilidade em todo o processo" },
  { icon: Clock, title: "Cobertura Regional", desc: "Atendimento em todo o Vale do Paraíba, MG, PR e SP" },
]

const stats = [
  { value: "24h", label: "Atendimentos", highlight: "Disponível" },
  { value: "4", label: "Estados", highlight: "Atendidos" },
  { value: "100%", label: "Foco", highlight: "No Cliente" },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Por que nos escolher</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            Nossos Diferenciais
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Descubra por que somos a escolha certa para suas necessidades de transporte e logística.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-card border border-border text-center group hover:border-primary/50 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
              <p className="text-foreground font-semibold">{stat.highlight}</p>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
