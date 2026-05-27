"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Eduardo",
    company: "Distribuidora Brasil",
    content: "Excelente serviço! A AJT sempre entrega no prazo e com total segurança. Recomendo fortemente para qualquer empresa que precise de logística confiável.",
    rating: 5,
  },
  {
    name: "Ana Paula Silva",
    company: "E-commerce Express",
    content: "Parceria de longa data que só traz resultados positivos..",
    rating: 5,
  },
  {
    name: "Roberto Almeida",
    company: "Indústria Regonal",
    content: "Profissionalismo exemplar! A equipe da AJT é sempre prestativa e resolve qualquer questão rapidamente.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            A satisfação dos nossos clientes é nossa maior conquista. Veja o que eles têm a dizer sobre nossos serviços.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
