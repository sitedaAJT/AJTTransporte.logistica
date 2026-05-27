"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    content: "(12) 99623-7620",
    link: "tel:+5512996237620",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "(12) 99623-7620",
    link: "https://wa.me/5512996237620",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "AJTTRANSPORTESELOG@GMAIL.COM",
    link: "mailto:AJTTRANSPORTESELOG@GMAIL.COMr",
  },
  {
    icon: MapPin,
    title: "Endereço",
    content: "Rua Olivio Vieira da Rosa 403 Jacareí/SP",
    link: "#",
  },
]

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contato</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            Fale Conosco
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Estamos prontos para atender você. Entre em contato pelos canais abaixo ou envie uma mensagem.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Link
                  key={index}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  <p className="text-muted-foreground text-sm">{info.content}</p>
                </Link>
              ))}
            </div>

            {/* Business Hours */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Horário de Atendimento</h3>
                  <p className="text-muted-foreground text-sm">Escritório</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Segunda a Sexta</span>
                  <span className="text-foreground font-medium">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábado</span>
                  <span className="text-foreground font-medium">08:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">qualidade durante a entrega</span>
                  <span className="text-primary font-medium">Disponível</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976956451847!2d-46.65584128447574!3d-23.56507396756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x4f2b7b1c0e3e8c9d!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização AJT Transportes"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Envie uma Mensagem</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="contact-nome" className="text-sm font-medium text-foreground">
                      Nome *
                    </label>
                    <Input
                      id="contact-nome"
                      placeholder="Seu nome"
                      required
                      className="bg-input border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-telefone" className="text-sm font-medium text-foreground">
                      Telefone *
                    </label>
                    <Input
                      id="contact-telefone"
                      type="tel"
                      placeholder="(00) 0000-0000"
                      required
                      className="bg-input border-border"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                    E-mail *
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="bg-input border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-assunto" className="text-sm font-medium text-foreground">
                    Assunto
                  </label>
                  <Input
                    id="contact-assunto"
                    placeholder="Como podemos ajudar?"
                    className="bg-input border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-mensagem" className="text-sm font-medium text-foreground">
                    Mensagem *
                  </label>
                  <textarea
                    id="contact-mensagem"
                    rows={4}
                    placeholder="Escreva sua mensagem..."
                    required
                    className="w-full px-3 py-2 rounded-md bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
