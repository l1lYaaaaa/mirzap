"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/shared/Reveal"

interface TaskNode {
  nodeLabel: string
  heading: string
  checklist: [string, string, string, string]
}

// NOTE: node 0 ("Двигатель или КПП") is verbatim-confirmed against the live
// site. Nodes 1-3's checklist copy is a structurally-consistent
// approximation, following the same 4-item pattern (make/model/year -> part
// identification -> photo evidence -> logistics), but was not individually
// verbatim-confirmed against sv-svai.ru/mir.
const TASK_NODES: TaskNode[] = [
  {
    nodeLabel: "Двигатель или КПП",
    heading: "Нужен двигатель или КПП",
    checklist: [
      "Марка, модель и год выпуска",
      "VIN или маркировка агрегата — при наличии",
      "Фото текущего агрегата или повреждения",
      "Город получения и наиболее удобная транспортная компания",
    ],
  },
  {
    nodeLabel: "Кузовная деталь",
    heading: "Нужна кузовная деталь",
    checklist: [
      "Марка, модель и год выпуска",
      "Название и расположение детали",
      "Фото повреждения или проёма",
      "Оригинал/аналог и требуемое состояние",
    ],
  },
  {
    nodeLabel: "Тормоза и подвеска",
    heading: "Нужны тормоза или подвеска",
    checklist: [
      "Марка, модель и год выпуска",
      "Название узла или детали",
      "Фото износа или повреждения",
      "Город получения и транспортная компания",
    ],
  },
  {
    nodeLabel: "Редкая деталь",
    heading: "Нужна редкая оригинальная деталь",
    checklist: [
      "Марка, модель и год выпуска",
      "Точное название детали или каталожный номер",
      "Фото и состояние по возможности",
      "Город получения и сроки",
    ],
  },
]

// Diagram node positions around the central hub, expressed as percentages of
// the panel so they scale with the container.
const NODE_POSITIONS = [
  "top-2 left-1/2 -translate-x-1/2",
  "top-1/2 right-2 -translate-y-1/2",
  "bottom-2 left-1/2 -translate-x-1/2",
  "top-1/2 left-2 -translate-y-1/2",
]

function TaskDiagram({
  activeIndex,
  onSelect,
}: {
  activeIndex: number
  onSelect: (index: number) => void
}) {
  return (
    <div className="relative flex aspect-square w-full max-w-sm items-center justify-center rounded-[28px] border border-white/10 bg-black/30 p-8 shadow-2xl">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line x1="50" y1="50" x2="50" y2="10" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        <line x1="50" y1="50" x2="90" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        <line x1="50" y1="50" x2="50" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        <line x1="50" y1="50" x2="10" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-[var(--color-mir-accent)] shadow-[0_0_50px_-4px_rgba(255,87,34,0.7)] transition-transform duration-500 hover:scale-105">
        <span
          className="px-2 text-center text-[14px] font-bold leading-tight text-white"
          style={{ fontFamily: "var(--font-mir-body)" }}
        >
          ДВС / КПП
        </span>
      </div>

      {TASK_NODES.map((node, i) => {
        const isActive = i === activeIndex
        return (
          <button
            key={node.nodeLabel}
            type="button"
            onClick={() => onSelect(i)}
            aria-pressed={isActive}
            className={cn(
              "absolute z-10 w-24 rounded-xl border px-2 py-1.5 text-[12px] leading-tight shadow-md transition-all duration-300 hover:scale-105",
              NODE_POSITIONS[i],
              isActive
                ? "border-[var(--color-mir-accent)] bg-[var(--color-mir-accent)] text-white shadow-[0_8px_24px_-6px_rgba(255,87,34,0.6)]"
                : "border-white/10 bg-white/[0.05] text-white/55 hover:border-white/30 hover:text-white/85"
            )}
            style={{ fontFamily: "var(--font-mir-body)" }}
          >
            {node.nodeLabel}
          </button>
        )
      })}
    </div>
  )
}

function TaskDetailPanel({ activeIndex }: { activeIndex: number }) {
  const active = TASK_NODES[activeIndex]

  return (
    <div className="flex w-full flex-col rounded-[28px] border border-white/10 bg-black/30 p-6 shadow-2xl sm:p-8">
      <div className="flex items-center gap-2">
        {TASK_NODES.map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === activeIndex ? "w-6 bg-[var(--color-mir-accent)]" : "w-1.5 bg-white/20"
            )}
          />
        ))}
      </div>

      <h3
        key={active.heading}
        className="mt-5 animate-in fade-in slide-in-from-bottom-1 text-[26px] leading-[1.15] font-bold text-white duration-500 sm:text-[30px]"
        style={{ fontFamily: "var(--font-mir-display)" }}
      >
        {active.heading}
      </h3>

      <p className="mt-3 max-w-md text-[14px] text-white/55">
        Чем точнее данные автомобиля, тем быстрее можно проверить совместимость
        и доступные варианты.
      </p>

      <ul className="mt-6 flex flex-col">
        {active.checklist.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 border-t border-white/10 py-3 text-[14px] text-white/80 last:border-b"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-mir-accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-xl border-l-2 border-[var(--color-mir-accent)] bg-white/[0.04] py-3 pl-4 pr-4 text-[13px] text-white/50">
        На крупные агрегаты действует гарантия 14 дней с момента получения.
      </div>
    </div>
  )
}

export function TaskNavigatorSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative overflow-hidden bg-[var(--color-mir-bg)]">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full opacity-25 blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--color-mir-accent), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-[1320px] px-6 pt-20 lg:px-12">
        <Reveal className="max-w-[52ch]">
          <h2
            className="text-[34px] leading-[1.1] font-bold text-white sm:text-[42px]"
            style={{ fontFamily: "var(--font-mir-display)" }}
          >
            Скажите, что нужно — подскажем, что прислать
          </h2>
          <p
            className="mt-4 text-[15px] leading-relaxed text-white/55"
            style={{ fontFamily: "var(--font-mir-body)" }}
          >
            Один понятный выбор вместо длинного брифа. Нажмите на нужное
            направление — справа появится точный список данных для подбора.
          </p>
        </Reveal>
      </div>

      <Reveal
        delay={100}
        className="relative mx-auto mt-10 flex max-w-[1320px] flex-col items-center gap-10 px-6 pb-16 lg:flex-row lg:items-center lg:px-12 lg:pb-24"
      >
        <div className="flex w-full justify-center lg:w-1/2">
          <TaskDiagram activeIndex={activeIndex} onSelect={setActiveIndex} />
        </div>
        <div className="w-full lg:w-1/2">
          <TaskDetailPanel activeIndex={activeIndex} />
        </div>
      </Reveal>
    </section>
  )
}
