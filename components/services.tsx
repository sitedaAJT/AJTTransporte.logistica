"use client"

import { motion } from "framer-motion"
import { Truck, Package, Zap, MapPin, BarChart3, Building2, Network, Calendar } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Transporte Rodoviário",
    description: "Transporte seguro e eficiente de cargas em todo o território regional, com frota moderna",
  },
  {
    icon: Network,
    title: "Logística Regional",
    description: "Soluções logísticas completas para otimizar sua cadeia de suprimentos, desde o armazenamento até a entrega final.",
  },
  {
    icon: Zap,
    title: "Entregas Expressas",
    description: "Serviço de entrega rápida para cargas urgentes, garantindo agilidade sem comprometer a segurança.",
  },
  {
    icon: BarChart3,
    title: "Gestão Logística",
    description: "Consultoria e gestão especializada para melhorar a eficiência dos seus processos logísticos.",
  },
  {
    icon: Building2,
    title: "Transporte Empresarial",
    description: "Soluções personalizadas para empresas, com contratos sob medida e atendimento dedicado.",
  },
  {
    icon: Package,
    title: "Distribuição",
    description: "Serviços de distribuição para varejo e e-commerce, com entrega ágil e controle de estoque.",
  },
  {
    icon: Calendar,
    title: "Coletas Programadas",
    description: "Agendamento de coletas regulares conforme a necessidade da sua empresa, com pontualidade garantida.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            Soluções Completas em Logística
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Oferecemos uma gama completa de serviços para atender todas as suas necessidades de transporte e logística.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
