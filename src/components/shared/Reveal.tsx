"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

/**
 * Fades + slides content up by a few pixels the first time it enters the
 * viewport. Used across every section for a consistent, subtle "the page is
 * alive" feel without any heavy animation library.
 *
 * Reliability note: IntersectionObserver can fail to ever fire in some
 * browser/embedding conditions (observed: content permanently stuck at
 * opacity-0 on a genuinely fresh page load, outside of dev Fast Refresh
 * which was masking it by preserving `visible` across edits). Content must
 * never depend solely on that callback — a synchronous bounding-rect check
 * on mount covers the common "already in view on load" case immediately,
 * and a timeout safety net guarantees visibility even if the observer never
 * calls back at all.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Already in (or near) the viewport on mount — show immediately rather
    // than waiting on an async observer callback that may be delayed or,
    // in rare cases, never arrive. Deferred a frame so this reads as a
    // response to layout, not a synchronous render-phase state sync.
    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      const raf = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(raf)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    )
    observer.observe(node)

    // Safety net: never leave content permanently invisible if the
    // observer doesn't fire for some reason.
    const fallback = window.setTimeout(() => setVisible(true), 1500)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={cn(
        "transition-all duration-[900ms]",
        visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-[0.98] opacity-0",
        className
      )}
    >
      {children}
    </div>
  )
}
