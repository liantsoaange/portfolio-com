import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ProjectCardProps {
  title: string
  category: string
  imageUrl: string
  description: string
  tags: string[]
}

export function ProjectCard({ title, category, imageUrl, description, tags }: ProjectCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group overflow-hidden flex flex-col border-muted transition-all hover:border-primary/20 cursor-pointer">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Button variant="secondary" size="sm" className="gap-2 pointer-events-none">
                Voir en grand <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
            <Badge className="absolute top-3 left-3 bg-white/90 text-primary hover:bg-white">{category}</Badge>
          </div>
          <CardContent className="p-5 flex-grow">
            <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
          </CardContent>
          <CardFooter className="p-5 pt-0 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">#{tag}</span>
            ))}
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-transparent shadow-none">
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <img 
            src={imageUrl} 
            alt={title} 
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain bg-white" 
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
