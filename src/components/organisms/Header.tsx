import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-xl">L.A</span>
          </div>
          <span className="text-lg md:text-2xl font-serif font-bold tracking-tight">RANDROZAFIARINONY <span className="text-primary block md:inline">Liantsoa Ange</span></span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Accueil</a>
          <a href="#experience" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Expériences</a>
          <a href="#education" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Parcours</a>
          <a href="#certifications" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Certifs</a>
          <a href="#creations" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Créations</a>
          <Button asChild className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white font-bold">
            <a href="#footer">Contact</a>
          </Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  )
}
