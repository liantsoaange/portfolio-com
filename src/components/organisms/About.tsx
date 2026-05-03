import { SectionTitle } from "@/components/atoms/SectionTitle"
import { Sparkles } from "lucide-react"

export function About() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -ml-32" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.7fr] items-center">
          <div className="space-y-10 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Qui suis-je ?</h2>
              <p className="text-xl text-muted-foreground font-serif italic">De la technique à la stratégie digitale</p>
              <div className="h-1 w-20 bg-primary/20 rounded-full" />
            </div>
            
            <div className="grid gap-6">
              {[
                {
                  text: "Actuellement en reconversion vers la communication digitale, je m'appuie sur une solide base technique en développement web.",
                  highlight: "communication digitale"
                },
                {
                  text: "Au-delà du code, je souhaite aujourd'hui donner une dimension plus relationnelle et organisationnelle à ma carrière. Et de placer mon énergie et mon tempérament extraverti au cœur de mon métier.",
                  highlight: "énergie et mon tempérament extraverti"
                },
                {
                  text: "Mon objectif ? Mettre mon sens de l'organisation et mon aisance naturelle au profit de stratégies digitales percutantes et de projets collaboratifs ambitieux.",
                  highlight: "Mon objectif ?"
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="group p-6 rounded-2xl bg-[#F8F6F0] border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${(i + 1) * 150}ms` }}
                >
                  <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {item.text.split(item.highlight).map((part, index, array) => (
                      <span key={index}>
                        {part}
                        {index < array.length - 1 && <span className="text-primary font-semibold">{item.highlight}</span>}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group max-w-sm mx-auto animate-fade-in-up [animation-delay:400ms]">
            <div className="absolute inset-0 bg-primary/5 rounded-[40px] -rotate-3 transition-transform group-hover:rotate-0" />
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img 
                src="https://i.postimg.cc/G2c3ZY4k/reconversion.png" 
                alt="Vision stratégique" 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute -top-4 -right-4 h-16 w-16 bg-primary/10 rounded-full blur-xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
