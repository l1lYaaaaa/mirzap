"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { Magnetic } from "@/components/shared/Magnetic";

interface ChatBubbleProps {
  from: "bot" | "user";
  children: React.ReactNode;
}

function ChatBubble({ from, children }: ChatBubbleProps) {
  return (
    <div className={cn("flex", from === "user" ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-[14px] leading-snug shadow-sm",
          from === "user"
            ? "rounded-br-sm bg-[var(--color-mir-accent)] text-white"
            : "rounded-bl-sm bg-white/[0.06] text-white/85"
        )}
      >
        {children}
      </div>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

function FormField({ label, placeholder, value, onChange }: FormFieldProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[12px] text-white/45">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[14px] text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-[var(--color-mir-accent)] focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(255,87,34,0.15)]"
      />
    </label>
  );
}

type Channel = "telegram" | "whatsapp" | "max";

const CHANNEL_LINKS: Record<Channel, string> = {
  telegram: "https://t.me/WorldZap",
  whatsapp: "https://wa.me/79829937300",
  max: "https://max.ru/",
};

const CHANNEL_LABELS: Record<Channel, string> = {
  telegram: "Telegram",
  whatsapp: "WhatsApp",
  max: "MAX",
};

export function ChatRequestSection() {
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [part, setPart] = useState("");
  const [city, setCity] = useState("");
  const [channel, setChannel] = useState<Channel>("whatsapp");

  const vehicleText = brand
    ? year
      ? `${brand}, ${year} год`
      : brand
    : year
      ? `Автомобиль не указан, ${year} год`
      : "Автомобиль не указан";

  const previewMessage = `${vehicleText}. Нужна деталь: ${part || "не указана"}. Город — ${city || "не указан"}.`;

  const summaryText = `${brand || "Марка и модель"} · ${year ? `${year} год` : "год выпуска"} · ${part || "нужная деталь"} · ${city || "город"}`;

  return (
    <section id="request" className="bg-[var(--color-mir-bg)] px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1320px]">
        <Reveal className="mb-12 max-w-[52ch] lg:mb-16">
          <h2
            className="text-[34px] leading-[1.1] font-bold text-white sm:text-[42px]"
            style={{ fontFamily: "var(--font-mir-display)" }}
          >
            Заявка — в одном сообщении
          </h2>
          <p
            className="mt-4 text-[15px] leading-relaxed text-white/55"
            style={{ fontFamily: "var(--font-mir-body)" }}
          >
            Не нужно искать деталь в каталоге. Пришлите данные автомобиля —
            менеджер уточнит только то, чего не хватает.
          </p>
        </Reveal>

        <Reveal delay={100} className="lg:flex lg:items-start lg:gap-10">
          {/* chat panel */}
          <div className="relative w-full rounded-[28px] bg-[var(--color-mir-surface)] p-5 shadow-2xl sm:p-7 lg:w-[68%]">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-mir-accent)] text-[14px] font-bold text-white shadow-[0_6px_20px_-4px_rgba(255,87,34,0.6)]">
                МЗ
              </div>
              <div className="min-w-0">
                <div className="text-[14px] font-semibold text-white">
                  Мировые запчасти
                </div>
                <div className="truncate text-[12px] text-white/40">
                  Подбор двигателя, КПП и других деталей
                </div>
              </div>
              <div className="ml-auto flex shrink-0 items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-[12px] text-white/40">Менеджер на связи</span>
              </div>
            </div>

            <div className="mb-6 flex flex-col gap-3">
              <ChatBubble from="bot">
                Здравствуйте! Подскажите марку, модель и год выпуска автомобиля.
              </ChatBubble>
              <ChatBubble from="user">{previewMessage}</ChatBubble>
              <ChatBubble from="bot">
                Принято, проверю совместимость и наличие по вашим параметрам.
              </ChatBubble>
              <ChatBubble from="user">
                Фото детали приложены уже в {CHANNEL_LABELS[channel]}.
              </ChatBubble>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <FormField
                label="Марка и модель"
                placeholder="Например, Nissan Terrano"
                value={brand}
                onChange={setBrand}
              />
              <FormField
                label="Год выпуска"
                placeholder="Например, 2019"
                value={year}
                onChange={setYear}
              />
              <FormField
                label="Какая деталь нужна"
                placeholder="Например, двигатель QR25"
                value={part}
                onChange={setPart}
              />
              <FormField
                label="Ваш город"
                placeholder="Например, Ижевск"
                value={city}
                onChange={setCity}
              />
            </div>

            <Magnetic strength={0.15}>
              <Button
                render={<a href={CHANNEL_LINKS[channel]} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                className="h-auto w-full gap-2 rounded-full bg-[var(--color-mir-accent)] px-6 py-4 text-[14px] font-medium text-white shadow-[0_10px_30px_-8px_rgba(255,87,34,0.65)] transition-all duration-300 hover:bg-[var(--color-mir-accent)] hover:shadow-[0_14px_38px_-6px_rgba(255,87,34,0.8)]"
              >
                Открыть сообщение в {CHANNEL_LABELS[channel]}
                <ArrowUpRight className="size-4" aria-hidden />
              </Button>
            </Magnetic>
          </div>

          {/* summary card */}
          <div className="mt-6 w-full rounded-[28px] bg-[var(--color-mir-surface)] p-5 shadow-2xl lg:mt-0 lg:w-[32%]">
            <div className="mb-3 text-[12px] text-white/40">Что получится</div>
            <p className="mb-4 text-[14px] leading-snug text-white/80">
              {summaryText}
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="h-auto rounded-full bg-white/10 px-3 py-1.5 text-[12px] text-white">
                +7 982 993-73-00
              </Badge>
              <Badge
                render={<button type="button" onClick={() => setChannel("telegram")} />}
                className={cn(
                  "h-auto cursor-pointer rounded-full px-3 py-1.5 text-[12px] transition-all duration-300",
                  channel === "telegram"
                    ? "bg-[var(--color-mir-accent)] text-white shadow-[0_4px_14px_-2px_rgba(255,87,34,0.6)]"
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                Telegram
              </Badge>
              <Badge
                render={<button type="button" onClick={() => setChannel("whatsapp")} />}
                className={cn(
                  "h-auto cursor-pointer rounded-full px-3 py-1.5 text-[12px] transition-all duration-300",
                  channel === "whatsapp"
                    ? "bg-[var(--color-mir-accent)] text-white shadow-[0_4px_14px_-2px_rgba(255,87,34,0.6)]"
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                WhatsApp
              </Badge>
              <Badge
                render={<button type="button" onClick={() => setChannel("max")} />}
                className={cn(
                  "h-auto cursor-pointer rounded-full px-3 py-1.5 text-[12px] transition-all duration-300",
                  channel === "max"
                    ? "bg-[var(--color-mir-accent)] text-white shadow-[0_4px_14px_-2px_rgba(255,87,34,0.6)]"
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                MAX
              </Badge>
            </div>
            <p className="mt-3 text-[12px] text-white/35">Отвечаем в течение часа.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
