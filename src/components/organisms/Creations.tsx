import { SectionTitle } from "@/components/atoms/SectionTitle"
import { ProjectCard } from "@/components/molecules/ProjectCard"

export function Creations() {
  const projects = [
    {
      title: "Logo Association MATOKISA",
      category: "Branding",
      imageUrl: "https://i.postimg.cc/mk0kN8Pn/logomatokisa.jpg",
      description: "Identité visuelle de l'association MAnome TOhana ny KIlonga Sembana Ara-tsaina, soutenant les enfants en situation de handicap.",
      tags: ["Logo", "Design", "Social"]
    },
    {
      title: "Billet de Levée de Fonds",
      category: "Communication",
      imageUrl: "https://i.postimg.cc/hGPmGZTx/billet-d-invitation.png",
      description: "Support de communication pour l'Opération Brioche au CHOCO : une vente solidaire pour financer les actions de l'association MATOKISA.",
      tags: ["Canva", "Solidarité", "Print"]
    },
    {
      title: "Faire-part de Baptême",
      category: "Événementiel",
      imageUrl: "https://i.postimg.cc/nLjHTvJC/bapteme.png",
      description: "Conception graphique personnalisée pour une cérémonie de baptême, alliant douceur et élégance.",
      tags: ["Design", "Famille", "Souvenir"]
    },
    {
      title: "Scénographie de Table",
      category: "Événementiel",
      imageUrl: "https://i.postimg.cc/Xq83XLw8/dispositiontable.jpg",
      description: "Organisation et disposition esthétique des tables pour une cérémonie de confirmation.",
      tags: ["Coordination", "Décoration", "Fête"]
    }
  ]

  return (
    <section className="py-20 bg-white" id="creations">
      <div className="container px-4 md:px-6">
        <SectionTitle 
          title="Mes Créations" 
          subtitle="Un aperçu de mon travail créatif et stratégique."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
