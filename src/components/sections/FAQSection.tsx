"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/shared/Reveal";
import { Magnetic } from "@/components/shared/Magnetic";

interface FAQItem {
  question: string;
  body?: string;
  chip?: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Что прислать для подбора?",
    body: "Пришлите марку, модель, год выпуска и фото нужной детали или повреждения. Если этих данных будет недостаточно, менеджер дополнительно запросит VIN.",
    chip: "Минимум для старта: марка, модель, год, фото",
  },
  {
    question: "Работаете только с иномарками?",
    body: "Уточняется",
  },
  {
    question: "Можно заказать новую и б/у деталь?",
    body: "Уточняется",
  },
  {
    question: "Какая гарантия действует?",
    body: "Уточняется",
  },
  {
    question: "Как можно оплатить заказ?",
    body: "Уточняется",
  },
  {
    question: "Как проходит отправка?",
    body: "Уточняется",
  },
  {
    question: "Поможете с установкой?",
    body: "Уточняется",
  },
];

export function FAQSection() {
  return (
    <section className="bg-[var(--color-mir-paper)] px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1320px]">
        <Reveal className="max-w-[52ch]">
          <h2
            className="text-[34px] leading-[1.1] font-bold text-[var(--color-mir-body-ink)] sm:text-[42px]"
            style={{ fontFamily: "var(--font-mir-display)" }}
          >
            Вопросы, которые задают чаще всего
          </h2>
          <p
            className="mt-4 text-[15px] leading-relaxed text-[var(--color-mir-body-ink-muted)]"
            style={{ fontFamily: "var(--font-mir-body)" }}
          >
            О подборе, оплате и отправке — до того, как вы напишете нам.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <Accordion
            defaultValue={["0"]}
            className="mt-10 flex-col divide-y divide-[var(--color-mir-paper-muted)] overflow-hidden rounded-[28px] border border-[var(--color-mir-paper-muted)] shadow-sm"
          >
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={String(index)}
                className={cn(
                  "border-none transition-colors duration-300",
                  "data-open:bg-[var(--color-mir-accent)] data-open:text-white",
                  "not-data-open:bg-[var(--color-mir-paper)] not-data-open:text-[var(--color-mir-body-ink)] not-data-open:hover:bg-[var(--color-mir-paper-muted)]/40"
                )}
              >
                <AccordionTrigger className="flex w-full items-center gap-4 px-6 py-5 text-left hover:no-underline sm:px-8 sm:py-6 **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-current">
                  <span className="flex-1 text-[16px] font-medium sm:text-[18px]">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 sm:px-8">
                  {item.body && (
                    <p className="max-w-xl text-[14px] leading-relaxed text-white/90 sm:text-[15px]">
                      {item.body}
                    </p>
                  )}
                  {item.chip && (
                    <div
                      className="mt-4 inline-flex items-center rounded-full bg-[var(--color-mir-bg)] px-4 py-2 text-[13px] text-white/90"
                      style={{ fontFamily: "var(--font-mir-body)" }}
                    >
                      {item.chip}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal
          delay={140}
          className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[28px] bg-[var(--color-mir-bg)] px-6 py-8 shadow-xl sm:mt-14 sm:flex-row sm:items-center sm:px-10"
        >
          <div>
            <p
              className="text-[20px] font-bold text-white sm:text-[24px]"
              style={{ fontFamily: "var(--font-mir-display)" }}
            >
              Не нашли ответ на свой вопрос?
            </p>
            <p className="mt-2 max-w-md text-[14px] leading-relaxed text-white/65 sm:text-[15px]">
              Напишите менеджеру — разберём конкретную задачу по автомобилю и
              нужной детали.
            </p>
          </div>
          <Magnetic strength={0.2}>
            <Button
              type="button"
              className="h-auto shrink-0 rounded-full bg-[var(--color-mir-accent)] px-6 py-3 text-[14px] font-medium text-white shadow-[0_10px_28px_-8px_rgba(255,87,34,0.65)] transition-all duration-300 hover:bg-[var(--color-mir-accent)] hover:shadow-[0_14px_36px_-6px_rgba(255,87,34,0.8)] sm:text-[15px]"
            >
              Перейти к заявке
            </Button>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
