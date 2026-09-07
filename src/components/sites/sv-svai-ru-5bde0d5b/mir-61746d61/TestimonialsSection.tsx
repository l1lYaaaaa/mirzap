"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "@/components/sites/sv-svai-ru-5bde0d5b/shared/Reveal";

interface Testimonial {
  name: string;
  description: string;
  badge: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Nissan Terrano",
    description: "Замена двигателя QR25 после неудачного ремонта",
    badge: "Агрегат",
  },
  {
    name: "Toyota RAV4",
    description: "Крыло и дверь для дальнейшего восстановления",
    badge: "Кузов",
  },
  {
    name: "BMW X3 G01",
    description: "Комплект тормозов 348 мм от BMW M340i G20",
    badge: "Агрегат",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="border-t border-[var(--color-mir-paper-muted)] bg-[var(--color-mir-paper)] px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1320px]">
        <Reveal className="max-w-[56ch]">
          <h2
            className="text-[34px] leading-[1.1] font-bold text-[var(--color-mir-body-ink)] sm:text-[42px]"
            style={{ fontFamily: "var(--font-mir-display)" }}
          >
            Клиенты рассказывают своими словами
          </h2>
          <p
            className="mt-4 text-[15px] leading-relaxed text-[var(--color-mir-body-ink-muted)]"
            style={{ fontFamily: "var(--font-mir-body)" }}
          >
            Реальные автомобили и результат после установки. Видео открываются
            прямо на сайте через RuTube.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <Tabs
            value={String(activeIndex)}
            onValueChange={(value) => setActiveIndex(Number(value))}
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-6">
              {/* Video stage */}
              <div className="lg:w-[65%]">
                {TESTIMONIALS.map((active, index) => (
                  <TabsContent
                    key={active.name}
                    value={String(index)}
                    className="data-[hidden]:hidden animate-in fade-in duration-300"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-[var(--color-mir-surface)] to-[var(--color-mir-bg)] shadow-2xl sm:aspect-[16/10]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          aria-hidden
                          className="absolute h-20 w-20 animate-ping rounded-full bg-[var(--color-mir-accent)]/30 sm:h-24 sm:w-24"
                        />
                        <Button
                          type="button"
                          onClick={() => console.log("play video", active.name)}
                          aria-label={`Воспроизвести видеоотзыв: ${active.name}`}
                          className="group relative h-16 w-16 rounded-full bg-[var(--color-mir-accent)] p-0 shadow-[0_10px_40px_-8px_rgba(255,87,34,0.7)] transition-transform duration-300 hover:scale-110 hover:bg-[var(--color-mir-accent)] sm:h-20 sm:w-20"
                        >
                          <Play
                            className="ml-1 h-6 w-6 fill-white text-white sm:h-7 sm:w-7"
                            strokeWidth={0}
                          />
                        </Button>
                      </div>
                    </div>

                    <div className="mt-5 flex items-end justify-between border-b border-[var(--color-mir-paper-muted)] pb-5">
                      <div>
                        <div
                          className="text-[20px] font-bold text-[var(--color-mir-body-ink)] sm:text-[24px]"
                          style={{ fontFamily: "var(--font-mir-display)" }}
                        >
                          {active.name}
                        </div>
                        <p className="mt-1 text-[13px] text-[var(--color-mir-body-ink-muted)]">
                          {active.description}
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </div>

              {/* Right card stack */}
              <TabsList className="h-auto w-auto flex-col gap-4 rounded-none bg-transparent p-0 lg:w-[35%]">
                {TESTIMONIALS.map((item, index) => (
                  <TabsTrigger
                    key={item.name}
                    value={String(index)}
                    className={cn(
                      "relative h-auto w-full flex-col items-start gap-3 rounded-2xl border-none p-5 text-left shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",
                      "bg-[var(--color-mir-paper-muted)] text-[var(--color-mir-body-ink)] hover:bg-[var(--color-mir-paper-muted)]/70",
                      "data-active:bg-[var(--color-mir-accent)] data-active:text-white data-active:shadow-[0_16px_40px_-12px_rgba(255,87,34,0.55)] data-active:hover:bg-[var(--color-mir-accent)]"
                    )}
                  >
                    <Badge
                      className={cn(
                        "absolute top-4 right-4 h-auto rounded-full px-2.5 py-1 text-[11px] font-medium",
                        index === activeIndex
                          ? "bg-white/15 text-white"
                          : "bg-white text-[var(--color-mir-body-ink-muted)]"
                      )}
                    >
                      {item.badge}
                    </Badge>

                    <span
                      className="pr-20 text-[16px] font-bold whitespace-normal"
                      style={{ fontFamily: "var(--font-mir-display)" }}
                    >
                      {item.name}
                    </span>

                    <p
                      className={cn(
                        "text-[14px] leading-snug whitespace-normal",
                        index === activeIndex ? "text-white/85" : "text-[var(--color-mir-body-ink-muted)]"
                      )}
                    >
                      {item.description}
                    </p>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
