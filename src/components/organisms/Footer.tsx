export function Footer() {
  return (
    <footer id="footer" className="bg-[#4A2511] text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
              <span className="text-white font-bold text-xl">L.A</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Responsable Communication spécialisée dans l'investissement à impact et la stratégie digitale.
            </p>
          </div>
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-bold uppercase tracking-widest text-sm text-primary-foreground">Navigation</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Expériences</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">Parcours</a></li>
              <li><a href="#creations" className="hover:text-white transition-colors">Créations</a></li>
            </ul>
          </div>
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-bold uppercase tracking-widest text-sm text-primary-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="hover:text-white transition-colors"><a href="mailto:liantsou02@gmail.com">liantsou02@gmail.com</a></li>
              <li>+261 34 12 483 68</li>
              <li>Fianarantsoa, Madagascar</li>
            </ul>
          </div>
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-bold uppercase tracking-widest text-sm text-primary-foreground">Suivez-moi</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/liantsoa-ange-1a6485227/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} Liantsoa Ange RANDROZAFIARINONY. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
