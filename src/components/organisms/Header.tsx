import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#experience", label: "Expériences" },
    { href: "#education", label: "Parcours" },
    { href: "#certifications", label: "Certifs" },
    { href: "#creations", label: "Créations" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3 shrink-0">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-xl">L.A</span>
          </div>
          <span className="text-sm md:text-xl font-serif font-bold tracking-tight whitespace-nowrap">
            RANDROZAFIARINONY <span className="text-primary">Liantsoa Ange</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-widest hover:text-primary transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="rounded-full px-5 bg-primary hover:bg-primary/90 text-white font-bold h-10 text-xs whitespace-nowrap">
            <a href="#footer">Contact</a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="xl:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-20 z-[100] bg-white xl:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-4 px-4 text-base font-bold uppercase tracking-widest text-[#4A2511] hover:bg-muted/60 rounded-lg transition-colors border-b border-muted/50"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 px-4">
              <Button
                asChild
                className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-bold py-6"
                onClick={() => setIsMenuOpen(false)}
              >
                <a href="#footer">Contactez-moi</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
