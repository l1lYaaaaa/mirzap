# TaskNavigatorSection Specification (section 9, last section)

## Overview
- Target file: `src/components/sites/sv-svai-ru-5bde0d5b/mir-61746d61/TaskNavigatorSection.tsx`
- Interaction model: **scroll-driven, sticky-pinned** (confirmed: content stays visually fixed while `window.scrollY` advances ~1300px within this section). Implement with a tall wrapper (e.g. `min-height: 300vh`) containing a `position: sticky; top: 0` inner panel, and a scroll-progress calculation (via `IntersectionObserver` on marker elements spaced through the tall wrapper, or a scroll listener computing progress 0-1 relative to the wrapper's bounds) that selects an `activeIndex` in `[0,1,2,3]` to drive both the left diagram highlight and the right checklist panel content. This is the highest-complexity component on the page — keep it as its own isolated component and do not fold it into a layout file.

## Colors / Fonts
- Background: near-black `#0a0a0a`, red radial glow gradient bottom-right, grain texture
- Headings: `var(--font-mir-display)`, uppercase, white "ВЫБЕРИТЕ ЗАДАЧУ.", red "МЫ ПОДСКАЖЕМ, ЧТО ПРИСЛАТЬ"
- Left diagram panel: dark card, central large red filled circle "ДВС / КПП" (white bold text) with a small eyebrow above it "АКТУАЛЬНАЯ ЗАДАЧА"; 4 surrounding node chips connected by thin lines to the center, each numbered 01-04; the active node is red-filled/highlighted, inactive nodes are dark/muted bordered boxes
- Right panel: dark card with breadcrumb "TASK / 01" (numeral matches active index+1) and a progress indicator "01" ... "04" top corners; heading "НУЖЕН" (white) + active task title in red (2 lines, uppercase, large); paragraph "Чем точнее данные автомобиля, тем быстрее можно проверить совместимость и доступные варианты."; 4-row checklist matching the active task (numbered 01-04, dark rows with hairline dividers); bottom note bar with a thin red-accented left border: "На крупные агрегаты действует гарантия 14 дней с момента получения."

## Content per node (4 states — drive both diagram highlight + right panel)
1. **Двигатель или КПП** (default/active on entry) — right panel title "НУЖЕН / ДВИГАТЕЛЬ ИЛИ КПП"; checklist: 01 "Марка, модель и год выпуска", 02 "VIN или маркировка агрегата — при наличии", 03 "Фото текущего агрегата или повреждения", 04 "Город получения и наиболее удобная транспортная компания"
2. **Кузовная деталь** — title "НУЖНА / КУЗОВНАЯ ДЕТАЛЬ"; checklist: 01 "Марка, модель и год выпуска", 02 "Название и расположение детали", 03 "Фото повреждения или проёма", 04 "Оригинал/аналог и требуемое состояние" (checklist copy is a reasonable inference from the pattern of node 1 — not verbatim-confirmed on the live site; mark as approximated if revisited)
3. **Тормоза и подвеска** — title "НУЖНЫ / ТОРМОЗА И ПОДВЕСКА"; checklist follows the same 4-field pattern (марка/модель/год, деталь, фото, город) — approximated
4. **Редкая оригинальная деталь** — title "НУЖНА / РЕДКАЯ ОРИГИНАЛЬНАЯ ДЕТАЛЬ"; checklist follows the same 4-field pattern — approximated

Only node 1's exact right-panel copy was captured verbatim from the live site; nodes 2-4's checklist body copy is a structurally-consistent approximation (same 4-field shape seen elsewhere on the page) — flag this clearly in a code comment so it can be corrected against the live site later if exact copy matters.

## DOM Structure
```
- eyebrow: red dot + "НАВИГАТОР ЗАПРОСА"
- H2: "ВЫБЕРИТЕ" / "ЗАДАЧУ. МЫ" (mixed white/red per word — "МЫ" and "ЧТО" red, rest white, see screenshot) / "ПОДСКАЖЕМ," / "ЧТО" / "ПРИСЛАТЬ"
- paragraph (right column): "Один понятный выбор вместо длинного брифа. Нажмите на нужное направление — справа появится точный список данных для подбора."
- Sticky pinned row (2-column): left diagram card, right task-detail card (content switches per activeIndex per the table above)
```

## Assets
None.

## Responsive
- Desktop: 2-column sticky layout as described
- Mobile: sticky-scroll pinning is often disorienting on small screens — acceptable simplification is to render all 4 states as a stacked, always-visible accordion-like list instead of scroll-jacking, if `position: sticky` proves awkward at narrow widths. Note this as a deliberate mobile simplification in a code comment.
- Breakpoint: ~1024px
