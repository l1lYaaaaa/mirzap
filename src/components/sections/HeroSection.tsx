"use client"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/shared/Reveal"
import { Magnetic } from "@/components/shared/Magnetic"
import { PhotoCarousel } from "@/components/shared/PhotoCarousel"
import { basePath } from "@/lib/base-path"
import { smoothScrollToId } from "@/lib/smooth-scroll"

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

const HERO_PHOTOS = [
  { src: `${basePath}/images/carousel-transmission.jpg`, alt: "Контрактная АКПП на складе" },
  { src: `${basePath}/images/carousel-engine.png`, alt: "Контрактный двигатель" },
  { src: `${basePath}/images/carousel-door.png`, alt: "Кузовная деталь — дверь" },
  { src: `${basePath}/images/carousel-badge.png`, alt: "Деталь с камерой заднего вида" },
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
  return (
    <section
      id="top"
      className={cn(
        "relative isolate overflow-hidden bg-[var(--color-mir-bg)] pt-28 pb-0 lg:pt-36 lg:pb-0",
        className
      )}
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-[-20%] h-[600px] w-[600px] rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-mir-accent), transparent 70%)" }}
      />

      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-14 px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-10 lg:px-12">
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
                onClick={(e) => {
                  e.preventDefault()
                  smoothScrollToId("request")
                }}
                className="h-auto rounded-full bg-[var(--color-mir-accent)] px-7 py-4 font-[var(--font-mir-body)] text-[14px] font-semibold text-white shadow-[0_10px_30px_-8px_rgba(255,87,34,0.6)] transition-all duration-300 hover:bg-[var(--color-mir-accent)] hover:shadow-[0_14px_40px_-6px_rgba(255,87,34,0.75)]"
              >
                Оставить заявку
              </Button>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Button
                variant="outline"
                render={<a href="https://t.me/WorldZap" target="_blank" rel="noopener noreferrer" />}
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

        <Reveal delay={100} className="relative flex items-center">
          <PhotoCarousel images={HERO_PHOTOS} className="w-full" />
        </Reveal>
      </div>

      <div className="relative mt-14 w-full overflow-hidden border-t border-white/10 py-5 lg:mt-20 lg:py-6">
        <div
          className="flex w-max animate-mir-marquee whitespace-nowrap font-[var(--font-mir-body)] text-[16px] font-medium text-[var(--color-mir-ink-muted)] sm:text-[19px] lg:text-[22px]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          {Array.from({ length: 16 }).map((_, rep) => (
            <span key={rep} className="pr-0">
              {TICKER_ITEMS.map((item, i) => (
                <span key={i} className="inline-flex items-center">
                  {item}
                  <span className="mx-3 h-1 w-1 shrink-0 rounded-full bg-[var(--color-mir-accent)] sm:mx-4 lg:mx-6" />
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
          animation: mir-marquee 150s linear infinite;
        }
      `}</style>
    </section>
  )
}
