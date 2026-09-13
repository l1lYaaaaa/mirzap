"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Reveal } from "@/components/shared/Reveal"
import { Magnetic } from "@/components/shared/Magnetic"
import { basePath } from "@/lib/base-path"

interface CaseItem {
  id: number
  car: string
  badge: string
  cardTitle: string
  breadcrumb: string
  titleLines: string[]
  body: string
  bullets: string[]
  ctaLabel: string
  caption: string
  hasPhoto: boolean
}

const CASES: CaseItem[] = [
  {
    id: 0,
    car: "BMW X3 G01",
    badge: "Агрегат",
    cardTitle: "Комплект тормозов 348 мм от BMW M340i G20",
    breadcrumb: "BMW X3 G01 · агрегат",
    titleLines: ["Комплект тормозов", "348 мм"],
    body: "Штатной системы владельцу уже не хватало. Подобрали комплект от BMW M340i G20 без покупки дорогого нового решения.",
    bullets: [
      "Передние и задние тормозные диски",
      "Комплект суппортов",
      "Пробег комплекта — 74 000 км",
    ],
    ctaLabel: "Обсудить этот вариант",
    caption: "Совпадение с датами замен и переписки при обращении",
    hasPhoto: true,
  },
  {
    id: 1,
    car: "Nissan Terrano",
    badge: "Двигатель",
    cardTitle: "Замена двигателя QR25 после неудачного ремонта",
    breadcrumb: "Nissan Terrano · двигатель",
    titleLines: ["Данные по кейсу", "уточняются"],
    body: "Данные по этому кейсу уточняются.",
    bullets: [],
    ctaLabel: "Обсудить этот вариант",
    caption: "Данные по этому кейсу уточняются",
    hasPhoto: false,
  },
  {
    id: 2,
    car: "Toyota RAV4",
    badge: "Кузов",
    cardTitle: "Б/у крыло и дверь для дальнейшего восстановления",
    breadcrumb: "Toyota RAV4 · кузов",
    titleLines: ["Данные по кейсу", "уточняются"],
    body: "Данные по этому кейсу уточняются.",
    bullets: [],
    ctaLabel: "Обсудить этот вариант",
    caption: "Данные по этому кейсу уточняются",
    hasPhoto: false,
  },
]

export function CaseShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="cases" className="border-t border-[var(--color-mir-paper-muted)] bg-[var(--color-mir-paper)] px-6 pt-10 pb-16 lg:px-12 lg:pt-14 lg:pb-24">
      <div className="mx-auto max-w-[1320px]">
        <Reveal className="max-w-[56ch]">
          <h2
            className="text-[34px] leading-[1.1] font-bold text-[var(--color-mir-body-ink)] sm:text-[42px]"
            style={{ fontFamily: "var(--font-mir-display)" }}
          >
            Три задачи, которые уже решили
          </h2>
          <p
            className="mt-4 text-[15px] leading-relaxed text-[var(--color-mir-body-ink-muted)]"
            style={{ fontFamily: "var(--font-mir-body)" }}
          >
            Апгрейд тормозов, замена двигателя и кузовное восстановление —
            переключайте карточки справа.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <Tabs
            value={String(activeIndex)}
            onValueChange={(value) => setActiveIndex(Number(value))}
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">
              {/* Stage panel */}
              <div className="flex-1 overflow-hidden rounded-[28px] shadow-2xl lg:flex">
                {CASES.map((active) => (
                  <TabsContent
                    key={active.id}
                    value={String(active.id)}
                    className="flex flex-col lg:flex-row lg:w-full data-[hidden]:hidden animate-in fade-in duration-300"
                  >
                    {/* Text side */}
                    <div className="flex flex-col justify-between gap-8 bg-[var(--color-mir-bg)] p-6 sm:p-8 lg:w-[45%] lg:p-10">
                      <div>
                        <p
                          className="mb-6 text-[13px] text-white/45"
                          style={{ fontFamily: "var(--font-mir-body)" }}
                        >
                          {active.breadcrumb}
                        </p>
                        <h3
                          className="mb-5 text-[26px] leading-[1.1] font-bold text-white sm:text-[32px]"
                          style={{ fontFamily: "var(--font-mir-display)" }}
                        >
                          {active.titleLines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </h3>
                        <p className="mb-6 text-[14px] leading-relaxed text-white/70">
                          {active.body}
                        </p>
                        {active.bullets.length > 0 && (
                          <ul className="space-y-3">
                            {active.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex items-start gap-3 text-[14px] text-white"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[var(--color-mir-accent)]" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div>
                        <Magnetic strength={0.2}>
                          <Button
                            render={<a href="https://t.me/WorldZap" target="_blank" rel="noopener noreferrer" />}
                            nativeButton={false}
                            className="h-auto rounded-full bg-[var(--color-mir-accent)] px-6 py-3 text-[14px] font-medium text-white shadow-[0_8px_24px_-6px_rgba(255,87,34,0.6)] transition-all duration-300 hover:bg-[var(--color-mir-accent)] hover:shadow-[0_12px_32px_-4px_rgba(255,87,34,0.75)]"
                          >
                            {active.ctaLabel}
                          </Button>
                        </Magnetic>
                        <p className="mt-3 text-[12px] text-white/45">{active.caption}</p>
                      </div>
                    </div>

                    {/* Photo side */}
                    <div className="relative min-h-[280px] flex-1 overflow-hidden bg-white lg:min-h-0">
                      {active.hasPhoto ? (
                        <>
                          <Image
                            src={`${basePath}/images/brake-kit-case.png`}
                            alt={active.cardTitle}
                            fill
                            sizes="(min-width: 1024px) 55vw, 100vw"
                            className="object-cover"
                          />
                          <Badge className="absolute left-4 top-4 h-auto gap-1.5 rounded-full bg-[var(--color-mir-accent)] px-3 py-1.5 text-[11px] font-medium text-white shadow-lg sm:left-6 sm:top-6">
                            Реальный заказ
                          </Badge>
                          <div className="absolute bottom-4 right-4 h-28 w-28 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl transition-transform duration-300 hover:scale-105 sm:bottom-6 sm:right-6 sm:h-36 sm:w-36">
                            <Image
                              src={`${basePath}/images/brake-caliper-closeup.png`}
                              alt="Крупный план тормозного суппорта"
                              fill
                              sizes="144px"
                              className="object-cover"
                            />
                          </div>
                        </>
                      ) : (
                        <div className="flex h-full min-h-[280px] w-full items-center justify-center bg-[var(--color-mir-paper-muted)]">
                          <span
                            className="text-[13px] text-[var(--color-mir-body-ink-muted)]"
                            style={{ fontFamily: "var(--font-mir-body)" }}
                          >
                            Фото уточняется
                          </span>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                ))}
              </div>

              {/* Card stack */}
              <TabsList className="h-auto w-auto flex-row gap-3 overflow-x-auto rounded-none bg-transparent p-0 pb-2 lg:w-[280px] lg:shrink-0 lg:flex-col lg:overflow-visible lg:pb-0">
                {CASES.map((item) => (
                  <TabsTrigger
                    key={item.id}
                    value={String(item.id)}
                    className={cn(
                      "relative h-auto w-[220px] shrink-0 flex-none rounded-2xl border-none p-5 text-left shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg lg:w-full",
                      "bg-[var(--color-mir-paper-muted)] text-[var(--color-mir-body-ink)] hover:bg-[var(--color-mir-paper-muted)]/70",
                      "data-active:bg-[var(--color-mir-accent)] data-active:text-white data-active:shadow-[0_16px_40px_-12px_rgba(255,87,34,0.55)] data-active:hover:bg-[var(--color-mir-accent)]"
                    )}
                  >
                    <span className="flex w-full flex-col items-start">
                      <Badge
                        className={cn(
                          "absolute right-4 top-4 h-auto rounded-full px-2.5 py-1 text-[11px] font-medium",
                          item.id === activeIndex
                            ? "bg-white/20 text-white"
                            : "bg-white text-[var(--color-mir-body-ink-muted)]"
                        )}
                      >
                        {item.badge}
                      </Badge>
                      <p
                        className={cn(
                          "mb-3 text-[13px]",
                          item.id === activeIndex ? "text-white/75" : "text-[var(--color-mir-body-ink-muted)]"
                        )}
                        style={{ fontFamily: "var(--font-mir-body)" }}
                      >
                        {item.car}
                      </p>
                      <p className="pr-16 text-[14px] font-medium leading-snug whitespace-normal">
                        {item.cardTitle}
                      </p>
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        </Reveal>
      </div>
    </section>
  )
}
