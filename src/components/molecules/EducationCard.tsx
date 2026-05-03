import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

interface EducationCardProps {
  degree: string
  institution: string
  year: string
  description?: string
}

export function EducationCard({ degree, institution, year, description }: EducationCardProps) {
  return (
    <Card className="h-full border-l-4 border-l-primary border-t-muted border-r-muted border-b-muted transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="bg-primary/10 p-3 rounded-full h-fit">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-lg">{degree}</h3>
            <p className="text-primary font-medium">{institution}</p>
            <p className="text-sm text-muted-foreground">{year}</p>
            {description && <p className="mt-2 text-sm text-muted-foreground italic">{description}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
