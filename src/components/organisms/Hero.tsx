import { Button } from "@/components/ui/button"
import { Send, FileText } from "lucide-react"

export function Hero() {
  return (
    <section className="py-20 md:py-32 overflow-hidden bg-[#F4F2EE] relative">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px] items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-bold tracking-wider uppercase">
                Responsable Communication
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                Impulser votre <span className="text-primary italic">impact</span> par une communication stratégique.
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professionnelle polyvalente alliant expertise technique (IT) et coordination de projets. 
                Spécialisée dans l'organisation d'événements, la création d'identités visuelles et l'intégration web.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button asChild size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
                <a href="mailto:liantsou02@gmail.com">Me contacter <Send className="w-4 h-4" /></a>
              </Button>
              {/* <Button asChild size="lg" variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/5 font-bold h-14 px-8 rounded-full transition-transform hover:scale-105">
                <a href="https://i.postimg.cc/VvMm11NH/CV-Liantsoa.png" target="_blank" download="CV_Liantsoa_Ange.png">
                  Télécharger mon CV <FileText className="w-4 h-4" />
                </a>
              </Button> */}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[400px] aspect-square">
            <div className="absolute -inset-4 rounded-[40px] bg-primary/10 -rotate-6 transition-transform group-hover:rotate-0" />
            <div className="relative rounded-[32px] overflow-hidden border-4 border-white shadow-2xl h-full w-full">
              <img
                src="https://i.postimg.cc/t4NwhJf6/profile-pic-(1).png"
                alt="RANDROZAFIARINONY Liantsoa Ange"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-muted hidden md:block">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <p className="text-xs font-bold text-foreground">Disponible pour de nouveaux défis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
