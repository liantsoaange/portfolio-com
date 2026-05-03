import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export function Hero() {
  return (
    <section className="py-20 lg:py-32 overflow-hidden bg-[#FAF9F6] relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left space-y-10 animate-fade-in-up">
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-primary">
                  Responsable Communication & Digitale
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground max-w-4xl">
                Impulser votre <br />
                <span className="text-primary italic font-serif relative">
                  impact
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" className="animate-reveal" />
                  </svg>
                </span> <br />
                <span className="text-2xl sm:text-5xl lg:text-6xl opacity-90">par la stratégie digitale.</span>
              </h1>
              
              <p className="max-w-[550px] text-muted-foreground md:text-lg leading-relaxed lg:border-l-2 lg:border-primary/10 lg:pl-6">
                Professionnelle polyvalente alliant <span className="text-foreground font-semibold">expertise technique</span> et coordination de projets. 
                Spécialisée dans la création d'identités visuelles et l'organisation d'événements à impact.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 min-[400px]:flex-row items-center">
              <Button asChild size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-white font-bold h-16 px-10 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95">
                <a href="mailto:liantsou02@gmail.com">Me contacter <Send className="w-5 h-5" /></a>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[380px] animate-float">
            <div className="absolute inset-0 bg-primary/5 rounded-[60px] rotate-6 scale-105 blur-sm" />
            <div className="relative rounded-[48px] overflow-hidden border-8 border-white shadow-2xl aspect-[4/5] group bg-white">
              <img
                src="https://i.postimg.cc/t4NwhJf6/profile-pic-(1).png"
                alt="RANDROZAFIARINONY Liantsoa Ange"
                className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-2xl border border-primary/5 animate-pulse-slow hidden md:block">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <p className="text-xs font-bold text-foreground uppercase tracking-widest">Disponible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
