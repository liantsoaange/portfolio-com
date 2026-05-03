import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: "#", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#experience", label: "Expériences" },
    { href: "#education", label: "Parcours" },
    { href: "#certifications", label: "Certificats" },
    { href: "#creations", label: "Créations" },
  ]

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-stone-200 bg-[#FDFCFB]/95 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3 shrink-0">
          <div className="h-10 w-10 rounded-full bg-[#4A2511] flex items-center justify-center shrink-0 shadow-sm">
            <span className="text-[#F8F6F0] font-bold text-xl">L.A</span>
          </div>
          <span className="text-sm md:text-xl font-serif font-bold tracking-tight whitespace-nowrap text-[#4A2511]">
            RANDROZAFIARINONY <span className="text-[#8B5E3C]">Liantsoa Ange</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-widest text-[#4A2511]/80 hover:text-[#8B5E3C] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="rounded-full px-6 bg-[#4A2511] hover:bg-[#5D2E15] text-[#F8F6F0] font-bold h-10 text-xs ml-2 shadow-md">
            <a href="#footer">Contact</a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-[#4A2511] z-[110]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </Button>
      </div>

      {/* Mobile Nav Overlay + Menu */}
      {isMenuOpen && (
        <>
          {/* 1. Backdrop (Flou et assombrissement du fond) */}
          <div 
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[90] lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* 2. Menu Conteneur */}
          <div 
            className="fixed inset-x-0 top-0 h-screen z-[100] bg-[#F8F6F0] lg:hidden flex flex-col shadow-2xl animate-in slide-in-from-top duration-300"
          >
            {/* Espace pour le header pour que le menu commence en dessous du bouton X */}
            <div className="h-20 flex items-center px-4 md:px-6 border-b border-stone-200">
                {/* On répète le logo pour la cohérence visuelle quand le menu est ouvert */}
                <div className="h-10 w-10 rounded-full bg-[#4A2511] flex items-center justify-center">
                    <span className="text-[#F8F6F0] font-bold text-lg">L.A</span>
                </div>
            </div>

            <nav className="flex flex-col p-6 gap-2 overflow-y-auto">
              {navLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-6 px-4 text-lg font-bold uppercase tracking-[0.2em] text-[#4A2511] border-b border-stone-200/60 active:bg-stone-200/50 transition-all"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-10 px-4">
                <Button
                  asChild
                  className="w-full rounded-xl bg-[#4A2511] hover:bg-[#5D2E15] text-[#F8F6F0] font-bold py-8 text-base shadow-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <a href="#footer">Contactez-moi</a>
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}