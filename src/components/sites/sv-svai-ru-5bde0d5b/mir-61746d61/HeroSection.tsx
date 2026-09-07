"use client"

import { useRef } from "react"
import Image from "next/image"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/sites/sv-svai-ru-5bde0d5b/shared/Reveal"
import { Magnetic } from "@/components/sites/sv-svai-ru-5bde0d5b/shared/Magnetic"

const FEATURES = [
  {
    title: "Гарантия 14 дней",
    description: "На крупные агрегаты, с момента получения.",
  },
  {
    title: "Фото и видео до оплаты",
    description: "Показываем состояние агрегата заранее.",
  },
  {
    title: "Для частных лиц и компаний",
    description: "Наличные, QR-код или счёт для юрлица.",
  },
]

// Callout points over the hero photo — a real brake kit, so the two calls
// out point at things actually visible in the frame rather than decorating
// an arbitrary spot.
const CALLOUTS = [
  {
    x: 26,
    y: 32,
    align: "left" as const,
    text: "Суппорты — без следов перегрева",
  },
  {
    x: 74,
    y: 66,
    align: "right" as const,
    text: "Диски проверены на выработку",
  },
]

const TICKER_ITEMS = [
  "Двигатели",
  "КПП",
  "Дефектовка",
  "Эндоскопия",
  "Доставка по России",
  "Установка",
]

export function HeroSection({ className }: { className?: string }) {
  const photoRef = useRef<HTMLDivElement>(null)

  function handlePhotoMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = photoRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(1000px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) scale3d(1.02, 1.02, 1.02)`
  }

  function handlePhotoLeave() {
    const el = photoRef.current
    if (!el) return
    el.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)"
  }

  return (
    <section
      id="top"
      className={cn(
        "relative isolate overflow-hidden bg-[var(--color-mir-bg)] pt-28 pb-14 lg:pt-36 lg:pb-20",
        className
      )}
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-[-20%] h-[600px] w-[600px] rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-mir-accent), transparent 70%)" }}
      />

      <div className="relative mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-14 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-12">
        <Reveal className="flex flex-col justify-center">
          <h1 className="font-[var(--font-mir-display)] text-[40px] leading-[1.08] font-bold text-[var(--color-mir-ink)] sm:text-[52px] lg:text-[64px]">
            Контрактный двигатель или КПП —{" "}
            <span className="text-[var(--color-mir-accent)] drop-shadow-[0_0_28px_rgba(255,87,34,0.35)]">
              проверенные до отправки
            </span>
          </h1>

          <p className="mt-6 max-w-[46ch] font-[var(--font-mir-body)] text-[16px] leading-[1.6] text-[var(--color-mir-ink-muted)] lg:text-[17px]">
            Подбираем агрегаты для иномарок и LADA, новые и контрактные.
            Сверяем совместимость с вашим автомобилем и присылаем фото
            и видео состояния до того, как вы платите.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Button
                render={<a href="#request" />}
                nativeButton={false}
                className="h-auto rounded-full bg-[var(--color-mir-accent)] px-7 py-4 font-[var(--font-mir-body)] text-[14px] font-semibold text-white shadow-[0_10px_30px_-8px_rgba(255,87,34,0.6)] transition-all duration-300 hover:bg-[var(--color-mir-accent)] hover:shadow-[0_14px_40px_-6px_rgba(255,87,34,0.75)]"
              >
                Оставить заявку
              </Button>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Button
                variant="outline"
                render={<a href="https://t.me" />}
                nativeButton={false}
                className="h-auto rounded-full border-white/15 bg-white/[0.03] px-7 py-4 font-[var(--font-mir-body)] text-[14px] font-medium text-[var(--color-mir-ink)] backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
              >
                Написать в Telegram
              </Button>
            </Magnetic>
          </div>

          <p className="mt-5 font-[var(--font-mir-body)] text-[13px] text-[var(--color-mir-ink-muted)]">
            Ижевск, отправка транспортной компанией в любой регион
          </p>

          <ul className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:grid sm:grid-cols-3 sm:gap-6">
            {FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 90}>
                <li className="group flex flex-col gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-mir-accent)]/15 text-[var(--color-mir-accent)] transition-transform duration-300 group-hover:scale-110">
                    <Check className="size-4" strokeWidth={2.5} />
                  </span>
                  <span className="font-[var(--font-mir-body)] text-[14px] font-semibold text-[var(--color-mir-ink)]">
                    {feature.title}
                  </span>
                  <span className="font-[var(--font-mir-body)] text-[13px] leading-[1.5] text-[var(--color-mir-ink-muted)]">
                    {feature.description}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="relative flex items-center [perspective:1000px]">
          <div
            ref={photoRef}
            onMouseMove={handlePhotoMove}
            onMouseLeave={handlePhotoLeave}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-[var(--color-mir-paper-muted)] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out will-change-transform"
          >
            <Image
              src="/sites/sv-svai-ru-5bde0d5b/mir-61746d61/images/brake-kit-hero.webp"
              alt="Комплект тормозов, подготовленный к отправке"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
              priority
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
            />

            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 400 500"
              aria-hidden="true"
            >
              {CALLOUTS.map((c) => (
                <g key={c.text}>
                  <circle
                    cx={(c.x / 100) * 400}
                    cy={(c.y / 100) * 500}
                    r="4"
                    fill="var(--color-mir-accent)"
                  >
                    <animate
                      attributeName="opacity"
                      values="1;0.4;1"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <line
                    x1={(c.x / 100) * 400}
                    y1={(c.y / 100) * 500}
                    x2={c.align === "left" ? 20 : 380}
                    y2={(c.y / 100) * 500}
                    stroke="var(--color-mir-accent)"
                    strokeWidth="1.5"
                  />
                </g>
              ))}
            </svg>

            {CALLOUTS.map((c) => (
              <div
                key={c.text}
                className={cn(
                  "absolute max-w-[160px] rounded-lg bg-[var(--color-mir-bg)]/90 px-3 py-2 font-[var(--font-mir-body)] text-[12px] leading-[1.4] text-[var(--color-mir-ink)] shadow-lg backdrop-blur-sm",
                  c.align === "left" ? "left-2 text-left" : "right-2 text-right"
                )}
                style={{ top: `calc(${c.y}% - 1.1em)` }}
              >
                {c.text}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="relative mt-14 w-full overflow-hidden border-t border-white/10 py-4 lg:mt-20">
        <div
          className="flex w-max animate-mir-marquee whitespace-nowrap font-[var(--font-mir-body)] text-[13px] text-[var(--color-mir-ink-muted)]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          {Array.from({ length: 4 }).map((_, rep) => (
            <span key={rep} className="pr-0">
              {TICKER_ITEMS.map((item, i) => (
                <span key={i} className="inline-flex items-center">
                  {item}
                  <span className="mx-4 h-1 w-1 rounded-full bg-[var(--color-mir-accent)]" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes mir-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-mir-marquee {
          animation: mir-marquee 28s linear infinite;
        }
      `}</style>
    </section>
  )
}
