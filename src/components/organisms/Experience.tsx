import { SectionTitle } from "@/components/atoms/SectionTitle"
import { ExperienceCard } from "@/components/molecules/ExperienceCard"
import { Globe, ExternalLink } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Responsable Visuelle",
      company: "Association MATOKISA",
      period: "2025 - Présent",
      description: [
        "Création du logo et de la charte graphique de l'association.",
        "Conception de visuels stratégiques pour la promotion des activités associatives."
      ],
      skills: ["Logo Design", "Charte Graphique", "Promotion"]
    },
    {
      title: "Consultante & Intégratrice Web",
      company: "RELIA Consulting",
      period: "2024 - 2026",
      description: [
        "Interface avec des clients francophones et analyse des besoins métiers.",
        "Traduction technique et intégration d'interfaces depuis des maquettes Figma vers le web.",
        "Rédaction de rapports journaliers, analyse des retours utilisateurs et optimisation des plateformes.",
        "Participation aux développements de projets web : JobPrivée, Ecofish, eTAFA et PokerApp."
      ],
      skills: ["React", "Angular", "Figma", "Rapports"]
    },
    {
      title: "Accompagnatrice & Monitrice de projet",
      company: "Projet R.A.N.O.S.O.A",
      period: "2023",
      description: [
        "Coordination et accompagnement des étudiants de l'Université de Sherbrooke (Canada).",
        "Encadrement des travaux pratiques lors de l'école d'été PV FIANARA 2023 pour le déploiement de pompes solaires."
      ],
      imageUrl: "https://i.postimg.cc/vTkx14rR/photo-Equipe.png",
      links: [
        { label: "Ranosoa", url: "https://fianaralab.fr/ranosoa.html", icon: <Globe className="w-3 h-3" /> },
        { label: "GCIUS", url: "https://www.gcius.ca/%C3%A9dition/madagascar-2023", icon: <ExternalLink className="w-3 h-3" /> }
      ],
      skills: ["Coordination", "Encadrement", "Solaire PV", "International"]
    },
    {
      title: "Indépendante - Organisation d'événements",
      company: "Mariages, cérémonies, anniversaires",
      period: "2024 - 2026",
      description: [
        "Planification : Coordination globale des activités et gestion des prestataires.",
        "Design : Utilisation de Canva pour la création des invitations et des supports visuels liés aux événements.",
        "Qualité : Contrôle des préparatifs, résolution des imprévus et suivi de la satisfaction des participants."
      ],
      skills: ["Canva", "Événementiel", "Coordination", "Gestion de projet"]
    }
  ]

  return (
    <section className="py-24 bg-white" id="experience">
      <div className="container px-4 md:px-6 animate-fade-in-up">
        <SectionTitle 
          title="Parcours Professionnel" 
        />
        <div className="grid gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 150}ms` }}>
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
