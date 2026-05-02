import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string[]
  skills: string[]
  imageUrl?: string
  links?: { label: string; url: string; icon?: React.ReactNode }[]
}

export function ExperienceCard({ title, company, period, description, skills, imageUrl, links }: ExperienceCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border-muted">
      <CardHeader className="bg-muted/30 pb-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div>
            <CardTitle className="text-xl text-foreground">{title}</CardTitle>
            <CardDescription className="text-primary font-medium">{company}</CardDescription>
          </div>
          <Badge variant="outline" className="w-fit border-primary/20 text-primary">{period}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        {imageUrl && (
          <div className="mb-6 rounded-lg overflow-hidden border border-muted aspect-video">
            <img src={imageUrl} alt={company} className="w-full h-full object-cover" />
          </div>
        )}
        <ul className="list-disc list-inside space-y-2 mb-4 text-sm text-muted-foreground">
          {description.map((item, index) => (
            <li key={index} className="leading-relaxed">{item}</li>
          ))}
        </ul>
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-4">
            {links.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline bg-primary/5 px-3 py-1.5 rounded-full transition-colors"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-2 pt-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="bg-secondary/10 text-secondary-foreground hover:bg-secondary/20">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
