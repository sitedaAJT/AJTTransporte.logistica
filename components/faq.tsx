"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Quais tipos de carga vocês transportam?",
    answer: "Transportamos diversos tipos de carga, incluindo carga geral, fracionada, completa, refrigerada e cargas especiais. Entre em contato conosco para avaliarmos sua necessidade específica.",
  },
  {
    question: "Vocês atendem em todo o Brasil?",
    answer: "Por enquanto não! Temos cobertura regional, atendendo 3 estados brasileiros. Nossa estrutura logística permite entregas eficientes nessas regiões.",
  },
  {
    question: "Como funciona a entrega de cargas?",
    answer: "Oferecemos entrega agíl. Temos compromisso com prazos e segurançano transporte.",
  },
  {
    question: "Qual o prazo para receber uma cotação?",
    answer: "Nossas cotações são enviadas em até 48 horas úteis após o recebimento da solicitação. Para cargas urgentes, entre em contato pelo WhatsApp para atendimento imediato.",
  },
  {
    question: "Vocês trabalham com coletas programadas?",
    answer: "Sim! Oferecemos serviço de coletas programadas para empresas que precisam de retiradas regulares. Personalizamos a frequência conforme sua necessidade.",
  },
  {
    question: "As cargas são seguradas?",
    answer: "Todas as nossas cargas possuem seguro. Trabalhamos com apólices que garantem a proteção total da sua mercadoria durante todo o trajeto.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Tire suas dúvidas sobre nossos serviços de transporte e logística.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground mt-4 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
