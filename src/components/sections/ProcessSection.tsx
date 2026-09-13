import { ArrowRight, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/shared/Reveal"
import { Magnetic } from "@/components/shared/Magnetic"
import { SpotlightCard } from "@/components/shared/SpotlightCard"

interface ChecklistRow {
  title: string
  description: string
  badge: string
}

interface Step {
  number: string
  label: string
}

const CHECKLIST_ROWS: ChecklistRow[] = [
  {
    title: "Совместимость",
    description: "Сверяем агрегат с данными автомобиля и нужной модификацией.",
    badge: "Обязательно",
  },
  {
    title: "Фото и видео",
    description: "Показываем доступные материалы до оплаты и отправки.",
    badge: "До оплаты",
  },
  {
    title: "Условия поставки",
    description: "Фиксируем выбранный вариант и согласовываем транспортную компанию.",
    badge: "Согласуем",
  },
  {
    title: "Гарантия",
    description: "На крупные агрегаты — 14 дней с момента получения.",
    badge: "14 дней",
  },
]

const STEPS: Step[] = [
  { number: "1", label: "Марка, модель и год" },
  { number: "2", label: "Фото детали или VIN" },
  { number: "3", label: "Показываем варианты" },
  { number: "4", label: "Оплата и отправка" },
]

export function ProcessSection() {
  return (
    <section id="pick" className="bg-[var(--color-mir-paper)] px-6 pt-10 pb-8 lg:px-12 lg:pt-14">
      <div className="mx-auto max-w-[1320px]">
        <Reveal className="max-w-[52ch]">
          <h2
            className="text-[34px] leading-[1.1] font-bold text-[var(--color-mir-body-ink)] sm:text-[42px]"
            style={{ fontFamily: "var(--font-mir-display)" }}
          >
            Как мы подбираем агрегат{" "}
            <span className="text-[var(--color-mir-accent)]">без лотереи</span>
          </h2>
          <p
            className="mt-4 text-[15px] leading-relaxed text-[var(--color-mir-body-ink-muted)]"
            style={{ fontFamily: "var(--font-mir-body)" }}
          >
            Сначала сверяем автомобиль, затем проверяем сам агрегат — и только
            после этого согласовываем покупку и отправку.
          </p>
        </Reveal>

        {/* Two-column content */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Left: placeholder panel — no real photo asset for this slot */}
          <Reveal>
            <SpotlightCard className="relative flex min-h-[380px] flex-col justify-center rounded-[28px] bg-gradient-to-br from-[var(--color-mir-surface)] to-[var(--color-mir-bg)] p-8 shadow-xl">
              <p
                className="max-w-[220px] text-[13px] leading-relaxed text-white/35"
                style={{ fontFamily: "var(--font-mir-body)" }}
              >
                Фото агрегата на этапе дефектовки — добавляется по мере поступления заказов.
              </p>
            </SpotlightCard>
          </Reveal>

          {/* Right: checklist card */}
          <Reveal delay={80}>
            <SpotlightCard className="flex h-full flex-col rounded-[28px] bg-[var(--color-mir-bg)] p-6 shadow-xl sm:p-8">
            <h3
              className="text-[22px] font-bold text-white sm:text-[26px]"
              style={{ fontFamily: "var(--font-mir-display)" }}
            >
              Что проверяем
            </h3>

            <div className="mt-6 flex flex-1 flex-col">
              {CHECKLIST_ROWS.map((row, index) => (
                <div
                  key={row.title}
                  className={cn(
                    "group flex items-start justify-between gap-4 rounded-xl px-3 py-4 transition-colors duration-300 hover:bg-white/[0.04]",
                    index !== 0 && "border-t border-white/10"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-[var(--color-mir-accent)] transition-transform duration-300 group-hover:scale-125"
                      aria-hidden
                    />
                    <div>
                      <p
                        className="text-[14px] font-semibold text-white"
                        style={{ fontFamily: "var(--font-mir-body)" }}
                      >
                        {row.title}
                      </p>
                      <p className="mt-1 max-w-xs text-[13px] leading-relaxed text-white/55">
                        {row.description}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="h-auto shrink-0 whitespace-nowrap rounded-full border-white/15 px-3 py-1 text-[11px] font-normal text-white/70"
                    style={{ fontFamily: "var(--font-mir-body)" }}
                  >
                    {row.badge}
                  </Badge>
                </div>
              ))}
            </div>

            {/* footer banner */}
            <div className="mt-4 flex flex-col gap-4 rounded-2xl bg-black/40 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p
                  className="text-[14px] font-semibold text-white"
                  style={{ fontFamily: "var(--font-mir-body)" }}
                >
                  Расширенная гарантия обсуждается отдельно
                </p>
                <p className="mt-1 text-[12px] text-white/50">
                  Условия зависят от агрегата и конкретного заказа.
                </p>
              </div>
              <Magnetic strength={0.2}>
                <Button
                  render={<a href="https://t.me/WorldZap" target="_blank" rel="noopener noreferrer" />}
                  nativeButton={false}
                  className="h-auto shrink-0 rounded-full bg-[var(--color-mir-accent)] px-5 py-2.5 text-[13px] font-medium text-white shadow-[0_8px_24px_-6px_rgba(255,87,34,0.6)] transition-all duration-300 hover:bg-[var(--color-mir-accent)] hover:shadow-[0_12px_32px_-4px_rgba(255,87,34,0.75)]"
                  style={{ fontFamily: "var(--font-mir-body)" }}
                >
                  Уточнить условия
                </Button>
              </Magnetic>
            </div>
            </SpotlightCard>
          </Reveal>
        </div>

        {/* Step strip — a real 4-step sequence, numbering earned */}
        <Reveal className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[var(--color-mir-paper-muted)] pt-8 sm:grid-cols-4">
          {STEPS.map((step, index) => {
            const isLast = index === STEPS.length - 1
            return (
              <div key={step.number} className="group flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-mir-accent)] text-[13px] font-semibold text-white shadow-[0_6px_16px_-4px_rgba(255,87,34,0.6)] transition-transform duration-300 group-hover:scale-110"
                  style={{ fontFamily: "var(--font-mir-body)" }}
                >
                  {step.number}
                </span>
                <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                  <p
                    className="text-[14px] leading-tight text-[var(--color-mir-body-ink)]"
                    style={{ fontFamily: "var(--font-mir-body)" }}
                  >
                    {step.label}
                  </p>
                  {isLast ? (
                    <Check className="size-4 shrink-0 text-[var(--color-mir-accent)]" />
                  ) : (
                    <ArrowRight className="hidden size-4 shrink-0 text-[var(--color-mir-body-ink)]/25 sm:block" />
                  )}
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
