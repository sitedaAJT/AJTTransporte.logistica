import Link from "next/link"
import { Truck, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

const quickLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#frota", label: "Frota" },
  { href: "#cotacao", label: "Cotação" },
  { href: "#contato", label: "Contato" },
]

const services = [
  "Transporte Rodoviário",
  "Logística Nacional",
  "Entregas Expressas",
  "Gestão Logística",
  "Coletas Programadas",
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="#inicio" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Truck className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground tracking-tight">AJT</span>
                <span className="text-xs text-muted-foreground -mt-1">Transporte e Logística</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Soluções completas em transporte e logística.
              Segurança, agilidade e confiança em cada entrega.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-bold mb-6">Contato</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <span className="block text-foreground font-medium">Telefone</span>
                (12) 99623-7620
              </li>
              <li>
                <span className="block text-foreground font-medium">WhatsApp</span>
                (12) 99623-7620
              </li>
              <li>
                <span className="block text-foreground font-medium">E-mail</span>
              </li>AJTTRANSPORTESELOG@GMAIL.COM
              <li>
                <span className="block text-foreground font-medium">Endereço</span>
                Rua Olivio Vieira da Rosa 403 - Jacareí/SP
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} AJT Transporte e Logística. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
