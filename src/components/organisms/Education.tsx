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
    <section className="py-24 bg-[#F8F6F0]" id="education">
      <div className="container px-4 md:px-6 animate-fade-in-up">
        <SectionTitle 
          title="Parcours Universitaire" 
          subtitle="Une base académique solide alliant rigueur scientifique et expertise technologique."
        />
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 150}ms` }}>
              <EducationCard {...edu} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
