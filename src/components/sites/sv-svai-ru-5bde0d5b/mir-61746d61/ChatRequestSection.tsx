import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/sites/sv-svai-ru-5bde0d5b/shared/Reveal";
import { Magnetic } from "@/components/sites/sv-svai-ru-5bde0d5b/shared/Magnetic";

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
}

function FormField({ label, placeholder }: FormFieldProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[12px] text-white/45">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[14px] text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-[var(--color-mir-accent)] focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(255,87,34,0.15)]"
      />
    </label>
  );
}

export function ChatRequestSection() {
  return (
    <section className="bg-[var(--color-mir-bg)] px-6 py-20 lg:px-12 lg:py-28">
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
              <ChatBubble from="user">
                Nissan Terrano, 2019 год. Нужен двигатель QR25. Город — Ижевск.
              </ChatBubble>
              <ChatBubble from="bot">
                Принято, проверю совместимость и наличие по вашим параметрам.
              </ChatBubble>
              <ChatBubble from="user">Фото детали приложены уже в WhatsApp.</ChatBubble>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <FormField label="Марка и модель" placeholder="Например, Nissan Terrano" />
              <FormField label="Год выпуска" placeholder="Например, 2019" />
              <FormField label="Какая деталь нужна" placeholder="Например, двигатель QR25" />
              <FormField label="Ваш город" placeholder="Например, Ижевск" />
            </div>

            <Magnetic strength={0.15}>
              <Button
                type="button"
                className="h-auto w-full gap-2 rounded-full bg-[var(--color-mir-accent)] px-6 py-4 text-[14px] font-medium text-white shadow-[0_10px_30px_-8px_rgba(255,87,34,0.65)] transition-all duration-300 hover:bg-[var(--color-mir-accent)] hover:shadow-[0_14px_38px_-6px_rgba(255,87,34,0.8)]"
              >
                Открыть сообщение в WhatsApp
                <ArrowUpRight className="size-4" aria-hidden />
              </Button>
            </Magnetic>
          </div>

          {/* summary card */}
          <div className="mt-6 w-full rounded-[28px] bg-[var(--color-mir-surface)] p-5 shadow-2xl lg:mt-0 lg:w-[32%]">
            <div className="mb-3 text-[12px] text-white/40">Что получится</div>
            <p className="mb-4 text-[14px] leading-snug text-white/80">
              Nissan Terrano · 2019 · двигатель QR25 · Ижевск
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="h-auto rounded-full bg-white/10 px-3 py-1.5 text-[12px] text-white">
                +7 982 993-73-00
              </Badge>
              <Badge className="h-auto rounded-full bg-white/10 px-3 py-1.5 text-[12px] text-white">
                Telegram
              </Badge>
              <Badge className="h-auto rounded-full bg-[var(--color-mir-accent)] px-3 py-1.5 text-[12px] text-white shadow-[0_4px_14px_-2px_rgba(255,87,34,0.6)]">
                WhatsApp
              </Badge>
            </div>
            <p className="mt-3 text-[12px] text-white/35">Отвечаем в течение часа.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
