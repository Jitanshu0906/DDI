import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "subtle" | "strong";
}

export function GlassCard({ children, className, variant = "default" }: GlassCardProps) {
  const variants = {
    default: "bg-white/5 dark:bg-white/5 backdrop-blur-lg border border-white/10",
    subtle: "bg-white/3 dark:bg-white/3 backdrop-blur-md border border-white/5",
    strong: "bg-white/10 dark:bg-white/10 backdrop-blur-xl border border-white/20"
  };

  return (
    <div className={cn(
      "rounded-2xl",
      variants[variant],
      className
    )}>
      {children}
    </div>
  );
}
