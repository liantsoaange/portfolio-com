import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-16 space-y-4 text-center flex flex-col items-center", className)}>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/10 rounded-full" />
      </h2>
      {subtitle && <p className="text-muted-foreground text-lg max-w-2xl font-serif italic">{subtitle}</p>}
      <div className="h-1.5 w-12 bg-primary rounded-full mt-2" />
    </div>
  )
}
