import { SectionTitle } from "@/components/atoms/SectionTitle"
import { Card, CardContent } from "@/components/ui/card"

export function Certifications() {
  const certificates = [
    { title: "Attestation de Stage", org: "RELIA Consulting", image: "https://i.postimg.cc/T3ks1SBG/certificatstage.jpg" },
    { title: "Digital Marketing", org: "UniAthena", image: "https://i.postimg.cc/nL8KcGTN/uniathena.png" },
    { title: "Master 2 ENI", org: "Génie Logiciel", image: "https://i.postimg.cc/hGzwx6Rx/eni.jpg" },
    { title: "Licence Agronomie", org: "Major de Promotion", image: "https://i.postimg.cc/DfXvFpSx/agro.png" },
    { title: "Intelligence Émotionnelle", org: "Cegos", image: "https://i.postimg.cc/rsXLKcdp/emotional-management.png" },
    { title: "Leadership", org: "Grovo", image: "https://i.postimg.cc/8zPgFZCB/leadership.jpg" },
    { title: "Expertise Canva", org: "Design Visuel", image: "https://i.postimg.cc/ncp653Bw/web-canva.png" },
    { title: "Maîtrise Outlook", org: "Productivité", image: "https://i.postimg.cc/8cBxcvQC/outlook.png" }
  ]

  return (
    <section className="py-20 bg-white" id="certifications">
      <div className="container px-4 md:px-6">
        <SectionTitle 
          title="Certifications & Diplômes" 
          subtitle="Preuves de mon engagement continu dans l'apprentissage et l'excellence."
        />
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {certificates.map((cert, index) => (
            <Card key={index} className="group overflow-hidden border-muted hover:border-primary/20 transition-all">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-zoom-in"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                    <p className="text-white font-bold text-sm">{cert.title}</p>
                    <p className="text-white/80 text-xs">{cert.org}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
