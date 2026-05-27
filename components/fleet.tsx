"use client"

import { motion } from "framer-motion"
import { Truck, Package, Warehouse } from "lucide-react"

const fleetItems = [
  {
    icon: Truck,
    title: "Caminhões",
    description: "Frota de caminhões modernos para cargas de todos os portes",
    specs: ["Baú, Sider e Graneleiro",  "Manutenção preventiva"],
  },
 
  {
    icon: Warehouse,
    title: "Estrutura Logística",
    description: "Centro de distribuição estrategicamente localizado",
    specs: ["Armazenagem", "Cross-docking", "Gestão de estoque"],
  },
]

export function Fleet() {
  return (
    <section id="frota" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nossa Frota</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            Estrutura de Qualidade
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Contamos com uma frota moderna e bem conservada para atender suas necessidades com excelência.
          </p>
        </motion.div>

        {/* Fleet Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {fleetItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 p-1 mb-6 overflow-hidden">
                <div className="w-full h-full rounded-xl bg-card border border-border flex items-center justify-center">
                  <div className="text-center">
                    <item.icon className="w-20 h-20 text-primary/50 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                  <item.icon className="w-16 h-16 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <ul className="space-y-2">
                {item.specs.map((spec, specIndex) => (
                  <li key={specIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {spec}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
