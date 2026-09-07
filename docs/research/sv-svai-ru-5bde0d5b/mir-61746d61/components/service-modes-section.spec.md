# ServiceModesSection Specification (section 3)

## Overview
- Target file: `src/components/sites/sv-svai-ru-5bde0d5b/mir-61746d61/ServiceModesSection.tsx`
- Interaction model: **click-driven toggle** between two modes ("Автосервис" / "Малярный цех") using React `useState`

## Colors / Fonts
- Background: near-black `#0a0a0a` with faint grid texture pattern (subtle vertical/horizontal lines, low opacity white)
- Headings: `var(--font-mir-display)`, uppercase, white, red accent line "ПРОВЕРИТЬ И УСТАНОВИТЬ"
- Labels/body: `var(--font-mir-mono)`
- Mode toggle labels ("РЕЖИМ 01" / "РЕЖИМ 02"): small boxed/bordered buttons, active state highlighted with red border or filled red background; inactive state dim/muted border
- Central circular badge "ПОДБОР + РАБОТЫ": red filled circle, white bold text, positioned between/over the two mode panels
- Dark card panel below (image placeholder + description): near-black card with breadcrumb label "SERVICE / WORKSPACE / 03"
- Right info card "ЧТО МОЖЕМ СДЕЛАТЬ": dark card, eyebrow "РАБОТЫ ПО СОГЛАСОВАНИЮ", 4 numbered rows with pill badges on the right ("ДИАГНОСТИКА", "ПРОВЕРКА", "ДЕМОНТАЖ", "УСТАНОВКА"), divider lines between rows
- Bottom banner: "Состав работ зависит от автомобиля и состояния узлов" + button "Обсудить задачу ↗"
- Below: 4-step strip mirroring section 2's pattern: Дефектовка → Подбор решения → Работы и установка → Проверка результата (checkmark)

## DOM Structure
```
- eyebrow: red dot + "ПОСЛЕ ПОДБОРА"
- H2: "НЕ ТОЛЬКО ПРИВЕЗТИ." (white) / "ПРОВЕРИТЬ И" (red) / "УСТАНОВИТЬ" (red)
- paragraph (right column): "Подбор агрегата можно связать с диагностикой, снятием, установкой и восстановлением автомобиля."
- Toggle row: "РЕЖИМ 01 АВТОСЕРВИС" (default active) | central red circle "ПОДБОР + РАБОТЫ" | "РЕЖИМ 02 МАЛЯРНЫЙ ЦЕХ"
- Content panel (changes with toggle state):
  - Автосервис (default): breadcrumb "SERVICE / WORKSPACE / 03", label "РЕЖИМ 01", title "АВТОСЕРВИС", placeholder image box "ЗАГРУЗИТЕ ФОТО В TILDA" (no real asset — genuine empty slot), below-panel caption "Автосервис" / "Диагностика, эндоскопия, снятие и установка"
  - Малярный цех: caption "Малярный цех" / "Стапель, сварка, разбор и восстановление" (same placeholder image treatment)
- Right card "ЧТО МОЖЕМ СДЕЛАТЬ" (eyebrow "РАБОТЫ ПО СОГЛАСОВАНИЮ"):
  01 Дефектовка агрегата — "Оцениваем состояние и определяем дальнейший сценарий работ." — ДИАГНОСТИКА
  02 Эндоскопия двигателя — "Бензиновые двигатели; дизельные — по предварительному согласованию." — ПРОВЕРКА
  03 Снятие агрегата — "Демонтаж двигателя или КПП с автомобиля перед заменой." — ДЕМОНТАЖ
  04 Установка агрегата — "Монтаж подобранного двигателя или КПП и дальнейшая проверка." — УСТАНОВКА
  footer: "Состав работ зависит от автомобиля и состояния узлов" + button "Обсудить задачу ↗"
- 4-step strip: Дефектовка → Подбор решения → Работы и установка → Проверка результата
```

## Assets
None (placeholder image box — no real asset for either mode).

## Responsive
- Desktop: toggle row 3-column (label / badge / label), content panel + right card 2-column
- Mobile: toggle stacks vertically with badge centered, panels stack, step strip 2x2 grid
- Breakpoint: ~1024px
