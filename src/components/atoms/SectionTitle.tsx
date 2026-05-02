import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-12 space-y-2", className)}>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-primary">{title}</h2>
      {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
      <div className="h-1 w-20 bg-primary/20 rounded-full" />
    </div>
  )
}
