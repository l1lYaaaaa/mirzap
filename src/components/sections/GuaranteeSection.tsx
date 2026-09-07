import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/shared/Reveal"
import { Magnetic } from "@/components/shared/Magnetic"
import { SpotlightCard } from "@/components/shared/SpotlightCard"

interface GuaranteeCard {
  title: string
  description: string
  badge: string
  active?: boolean
}

const CARDS: GuaranteeCard[] = [
  {
    title: "Крупные агрегаты",
    description: "14 дней с момента получения. Расширенный вариант обсуждается отдельно.",
    badge: "Склад",
    active: true,
  },
  {
    title: "Физлица и юрлица",
    description: "Наличные, QR-код или расчётный счёт. Для юридических лиц — без НДС.",
    badge: "Оплата",
  },
  {
    title: "Любая транспортная компания",
    description: "Перевозчика и условия отправки согласовываем с клиентом.",
    badge: "Доставка",
  },
]

const BULLETS = [
  "Стандартная гарантия — 14 дней",
  "Расширенная гарантия обсуждается отдельно",
  "На кузовные детали гарантия не распространяется",
  "Состояние и комплектность согласовываются до оплаты",
]

export function GuaranteeSection() {
  return (
    <section className="border-t border-[var(--color-mir-paper-muted)] bg-[var(--color-mir-paper)] px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1320px]">
        <Reveal className="max-w-[52ch]">
          <h2
            className="text-[34px] leading-[1.1] font-bold text-[var(--color-mir-body-ink)] sm:text-[42px]"
            style={{ fontFamily: "var(--font-mir-display)" }}
          >
            Гарантия и оплата — без мелкого шрифта
          </h2>
          <p
            className="mt-4 text-[15px] leading-relaxed text-[var(--color-mir-body-ink-muted)]"
            style={{ fontFamily: "var(--font-mir-body)" }}
          >
            Объясняем сразу: как работает гарантия, какие способы оплаты
            доступны и как организуется отправка.
          </p>
        </Reveal>

        {/* Main grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 lg:mt-14 lg:grid-cols-[35%_1fr] lg:gap-6">
          {/* Left column: stacked cards */}
          <Reveal delay={80} className="flex flex-col gap-4">
            {CARDS.map((card) => (
              <SpotlightCard
                key={card.title}
                glow={card.active ? "rgba(255,255,255,0.25)" : "rgba(255,87,34,0.12)"}
                className={cn(
                  "relative flex flex-col justify-between rounded-3xl p-6 shadow-lg",
                  card.active
                    ? "bg-[var(--color-mir-accent)] text-white shadow-[0_20px_50px_-16px_rgba(255,87,34,0.6)]"
                    : "bg-[var(--color-mir-paper-muted)] text-[var(--color-mir-body-ink)]"
                )}
              >
                <Badge
                  className={cn(
                    "absolute right-5 top-5 h-auto rounded-full px-3 py-1 text-[11px] font-medium",
                    card.active
                      ? "bg-white/15 text-white"
                      : "bg-white text-[var(--color-mir-body-ink-muted)]"
                  )}
                >
                  {card.badge}
                </Badge>
                <h3
                  className="max-w-[85%] text-[19px] font-bold leading-tight sm:text-[22px]"
                  style={{ fontFamily: "var(--font-mir-display)" }}
                >
                  {card.title}
                </h3>
                <p
                  className={cn(
                    "mt-3 text-[14px] leading-relaxed",
                    card.active ? "text-white/85" : "text-[var(--color-mir-body-ink-muted)]"
                  )}
                >
                  {card.description}
                </p>
              </SpotlightCard>
            ))}
          </Reveal>

          {/* Right column: dark panel */}
          <Reveal delay={140}>
          <SpotlightCard className="relative overflow-hidden rounded-3xl bg-[var(--color-mir-bg)] p-6 shadow-2xl sm:p-10 lg:p-14">
            <div className="relative flex flex-col">
              <h2
                className="max-w-[20ch] text-[34px] leading-[1.08] font-bold text-white sm:text-[44px]"
                style={{ fontFamily: "var(--font-mir-display)" }}
              >
                14 дней гарантии на{" "}
                <span className="text-[var(--color-mir-accent)]">каждый агрегат</span>
              </h2>

              <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/60">
                Гарантийный срок начинается с момента получения двигателя,
                КПП или другого крупного агрегата.
              </p>

              <ul className="mt-8 flex flex-col gap-3">
                {BULLETS.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-[14px] text-white/85">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none bg-[var(--color-mir-accent)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Magnetic strength={0.2}>
                  <Button
                    type="button"
                    className="h-auto w-fit rounded-full bg-[var(--color-mir-accent)] px-6 py-3 text-[14px] font-medium text-white shadow-[0_10px_28px_-8px_rgba(255,87,34,0.65)] transition-all duration-300 hover:bg-[var(--color-mir-accent)] hover:shadow-[0_14px_36px_-6px_rgba(255,87,34,0.8)]"
                    style={{ fontFamily: "var(--font-mir-body)" }}
                  >
                    Обсудить условия
                  </Button>
                </Magnetic>
                <p className="max-w-[14rem] text-[12px] leading-relaxed text-white/40">
                  Финальные условия фиксируются по конкретному заказу.
                </p>
              </div>

              <div className="relative z-10 mt-10 w-fit max-w-xs rounded-2xl border-l-2 border-[var(--color-mir-accent)] bg-white/[0.04] p-4 shadow-lg">
                <p className="text-[12px] font-semibold text-[var(--color-mir-accent)]">Важно</p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                  На кузовные детали гарантия не распространяется.
                </p>
              </div>
            </div>
          </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
