"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, CheckCircle2 } from "lucide-react"

export function Quote() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="cotacao" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center p-12 rounded-2xl bg-card border border-border"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Cotação Enviada com Sucesso!</h3>
            <p className="text-muted-foreground mb-6">
              Recebemos sua solicitação de cotação. Nossa equipe entrará em contato em breve.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Enviar Nova Cotação
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="cotacao" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Cotação</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            Solicite sua Cotação
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Preencha o formulário abaixo e receba uma cotação personalizada para suas necessidades.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-2xl bg-card border border-border">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Nome */}
              <div className="space-y-2">
                <label htmlFor="nome" className="text-sm font-medium text-foreground">
                  Nome Completo *
                </label>
                <Input
                  id="nome"
                  name="nome"
                  placeholder="Seu nome"
                  required
                  className="bg-input border-border focus:border-primary"
                />
              </div>

              {/* Empresa */}
              <div className="space-y-2">
                <label htmlFor="empresa" className="text-sm font-medium text-foreground">
                  Empresa
                </label>
                <Input
                  id="empresa"
                  name="empresa"
                  placeholder="Nome da empresa"
                  className="bg-input border-border focus:border-primary"
                />
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <label htmlFor="telefone" className="text-sm font-medium text-foreground">
                  Telefone *
                </label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(00) 0000-0000"
                  required
                  className="bg-input border-border focus:border-primary"
                />
              </div>

              {/* WhatsApp */}
              <div className="space-y-2">
                <label htmlFor="whatsapp" className="text-sm font-medium text-foreground">
                  WhatsApp *
                </label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  required
                  className="bg-input border-border focus:border-primary"
                />
              </div>

              {/* Email */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  E-mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="bg-input border-border focus:border-primary"
                />
              </div>

              {/* Tipo de Carga */}
              <div className="space-y-2">
                <label htmlFor="tipoCarga" className="text-sm font-medium text-foreground">
                  Tipo de Carga *
                </label>
                <select
                  id="tipoCarga"
                  name="tipoCarga"
                  required
                  className="w-full h-10 px-3 rounded-md bg-input border border-border text-foreground focus:border-primary focus:outline-none"
                >
                  <option value="">Selecione...</option>
                  <option value="geral">Carga Geral</option>
                  <option value="fracionada">Carga Fracionada</option>
                  <option value="completa">Carga Completa</option>
                  <option value="perigosa">Carga Perigosa</option>
                  <option value="refrigerada">Carga Refrigerada</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              {/* Peso */}
              <div className="space-y-2">
                <label htmlFor="peso" className="text-sm font-medium text-foreground">
                  Peso Estimado (kg)
                </label>
                <Input
                  id="peso"
                  name="peso"
                  type="number"
                  placeholder="Ex: 1000"
                  className="bg-input border-border focus:border-primary"
                />
              </div>

              {/* Origem */}
              <div className="space-y-2">
                <label htmlFor="origem" className="text-sm font-medium text-foreground">
                  Origem *
                </label>
                <Input
                  id="origem"
                  name="origem"
                  placeholder="Cidade/Estado"
                  required
                  className="bg-input border-border focus:border-primary"
                />
              </div>

              {/* Destino */}
              <div className="space-y-2">
                <label htmlFor="destino" className="text-sm font-medium text-foreground">
                  Destino *
                </label>
                <Input
                  id="destino"
                  name="destino"
                  placeholder="Cidade/Estado"
                  required
                  className="bg-input border-border focus:border-primary"
                />
              </div>

              {/* Mensagem */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="mensagem" className="text-sm font-medium text-foreground">
                  Mensagem Adicional
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  placeholder="Descreva mais detalhes sobre sua necessidade..."
                  className="w-full px-3 py-2 rounded-md bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Enviar Cotação
                  </span>
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
