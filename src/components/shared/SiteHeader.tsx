"use client"

import { useEffect, useState } from "react"
import { Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { smoothScrollToId } from "@/lib/smooth-scroll"

const NAV_LINKS = [
  { label: "Подбор", id: "pick" },
  { label: "Кейсы", id: "cases" },
  { label: "Оплата и доставка", id: "delivery" },
  { label: "Отзывы", id: "reviews" },
  { label: "Оставить заявку", id: "request" },
]

export function SiteHeader({ className }: { className?: string }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full font-[var(--font-mir-body)] transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-[var(--color-mir-bg)]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1320px] items-center justify-between gap-6 px-6 transition-all duration-500 lg:px-12",
          scrolled ? "py-3.5" : "py-6"
        )}
      >
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-mir-accent)] shadow-[0_4px_16px_-2px_rgba(255,87,34,0.5)] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
            <span className="h-2.5 w-2.5 rounded-sm bg-[var(--color-mir-bg)]" aria-hidden />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-medium text-[var(--color-mir-ink)]">
              Мировые запчасти
            </span>
            <span className="mt-1 text-[11px] text-[var(--color-mir-ink-muted)]">
              Новые и б/у автозапчасти
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault()
                smoothScrollToId(link.id)
              }}
              className="relative text-[14px] text-[var(--color-mir-ink-muted)] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--color-mir-accent)] after:transition-all after:duration-300 hover:text-[var(--color-mir-ink)] hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          render={<a href="tel:+79829937300" />}
          nativeButton={false}
          variant="outline"
          className="h-auto gap-2 rounded-full border-white/15 bg-white/[0.03] px-4 py-2.5 text-[14px] text-[var(--color-mir-ink)] backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
        >
          <Phone className="size-3.5" aria-hidden />
          +7 982 993-73-00
        </Button>
      </div>
    </header>
  )
}
