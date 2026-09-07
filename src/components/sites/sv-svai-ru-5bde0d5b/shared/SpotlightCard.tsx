"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  /** CSS color for the glow, e.g. "rgba(255,87,34,0.18)" */
  glow?: string
}

/**
 * A card that reveals a soft radial highlight following the cursor, and
 * lifts slightly on hover. Gives the surface a glossy, alive feel instead of
 * a flat block of color.
 */
export function SpotlightCard({
  children,
  className,
  glow = "rgba(255,87,34,0.16)",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "group/spotlight relative overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: `radial-gradient(320px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${glow}, transparent 70%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}
