"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, Users, MapPin, Clock } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Missão",
    description: "Oferecer soluções logísticas de excelência, garantindo segurança, pontualidade e eficiência em cada entrega, superando as expectativas dos nossos clientes.",
  },
  {
    icon: Eye,
    title: "Visão",
    description: "Ser referência nacional em transporte e logística, reconhecida pela qualidade dos serviços, inovação tecnológica e compromisso com a sustentabilidade.",
  },
  {
    icon: Heart,
    title: "Valores",
    description: "Integridade, compromisso, respeito, inovação e excelência. Esses pilares guiam todas as nossas ações e decisões no dia a dia.",
  },
]

const highlights = [
  { icon: Users, label: "Equipe Especializada", desc: "Profissionais treinados" },
  { icon: MapPin, label: "Atendimento Regional", desc: "São Paulo, Minas Gerais, Vale do Paraíba e Parána" },
  { icon: Clock, label: "Pontualidade", desc: "Entregas no prazo" },
]

export function About() {
  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre Nós</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            Conheça a AJT Transporte e Logística
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Uma empresas dedicada e focada em deixar todos os clientes satisfeitos, com entregas no prazo, pontualidade e atendendo a qualquer demanda do cliente 
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Nossa História de <span className="text-primary">Excelência</span>
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A AJT Transporte e Logística nasceu da paixão por conectar pessoas e empresas de forma eficiente e segura. 
                Agindo com muita ddicação no setor, construímos uma reputação sólida baseada em confiança, 
                pontualidade e compromisso com a qualidade.
              </p>
              <p>
                Nossa equipe é formada por pessoas capacitadas no atendimento ao cliente, comprometidos em oferecer o melhor 
                atendimento e as soluções mais adequadas para cada necessidade. Investimos constantemente em tecnologia 
                e treinamento para garantir a excelência em todos os nossos serviços.
              </p>
              <p>
                Atendemos empresas de todos os portes, desde pequenos negócios até grandes corporações, sempre com o 
                mesmo padrão de qualidade e dedicação. Nosso objetivo é ser mais do que um prestador de serviços: 
                queremos ser seu parceiro estratégico em logística.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-card border border-border">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 p-1">
              <div className="w-full h-full rounded-xl bg-card border border-border flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-primary">AJT</span>
                  </div>
                  <p className="text-muted-foreground">Transporte e Logística</p>
                  <p className="text-primary font-semibold mt-2">Desde 2014</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
