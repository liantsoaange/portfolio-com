import { SectionTitle } from "@/components/atoms/SectionTitle"
import { EducationCard } from "@/components/molecules/EducationCard"

export function Education() {
  const education = [
    {
      degree: "Master en Informatique",
      institution: "Université de Fianarantsoa (ENI)",
      year: "2021 – 2024",
      description: "Spécialisation : Génie Logiciel & Bases de Données"
    },
    {
      degree: "Licence Professionnelle en Informatique",
      institution: "Université de Fianarantsoa (ENI)",
      year: "2019 – 2021",
      description: ""
    },
    {
      degree: "Licence en Agronomie",
      institution: "Mention Spéciale",
      year: "Major de Promotion",
      description: "Rigueur & Excellence Scientifique"
    }
  ]

  return (
    <section className="py-20 bg-[#F8F6F0]" id="education">
      <div className="container px-4 md:px-6">
        <SectionTitle 
          title="Parcours Universitaire" 
          subtitle="Une formation académique de haut niveau en marketing et communication."
        />
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl">
          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  )
}
