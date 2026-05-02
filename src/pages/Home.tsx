import { MainLayout } from "@/components/templates/MainLayout"
import { Hero } from "@/components/organisms/Hero"
import { Experience } from "@/components/organisms/Experience"
import { Education } from "@/components/organisms/Education"
import { Certifications } from "@/components/organisms/Certifications"
import { Creations } from "@/components/organisms/Creations"

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Experience />
      <Education />
      <Certifications />
      <Creations />
    </MainLayout>
  )
}
