# CaseShowcaseSection Specification (section 4)

## Overview
- Target file: `src/components/sites/sv-svai-ru-5bde0d5b/mir-61746d61/CaseShowcaseSection.tsx`
- Interaction model: **click-driven tabs** (React `useState<0|1|2>`), NOT scroll/time-driven (confirmed by scroll sweep — content only changes on click)

## Colors / Fonts
- Background: light `#F4F4F0` / white
- Headings: `var(--font-mir-display)`, uppercase, black, red accent lines "ДЕТАЛИ, КОТОРЫЕ УЖЕ ПРИЕХАЛИ"
- Stage panel: split card, left half near-black `#0a0a0a` (text side), right half white/light (product photo side), rounded corners ~24px, overflow hidden
- Right-hand card stack: 3 stacked cards — active card has red background `#FF3B30` with white text; inactive cards have white/light background with black text and a small muted pill badge top-right ("АГРЕГАТ", "ДВИГАТЕЛЬ", "КУЗОВ")
- Bottom progress bar: thin gray track full-width, red fill segment sized to `(activeIndex+1)/3`, "01" left label, "03" right label in `var(--font-mir-mono)`

## DOM Structure
```
- eyebrow: red dot + "РЕАЛЬНЫЕ ЗАКАЗЫ"
- H2: "НЕ ОБЕЩАНИЯ." (black) / "ДЕТАЛИ," (red) / "КОТОРЫЕ УЖЕ" (red) / "ПРИЕХАЛИ" (red)
- paragraph (right column): "Три разные задачи: апгрейд тормозов, замена двигателя и кузовное восстановление. Переключайте кейсы справа."
- Stage panel (split, changes per active tab):
  Tab 0 (BMW X3 G01, default active): left dark panel — breadcrumb "BMW X3 G01 · АГРЕГАТ", title "КОМПЛЕКТ ТОРМОЗОВ" / "348 ММ", body "Штатной системы владельцу уже не хватало. Подобрали комплект от BMW M340i G20 без покупки дорогого нового решения.", bullet list: "Передние и задние тормозные диски", "Комплект суппортов", "Пробег комплекта — 74 000 км", button "Обсудить агрегат ↗" + small caption "Совпадение с датами замен и переписки при обращении"; right photo side: `brake-kit-case.png` full-bleed product shot with small red "РЕАЛЬНЫЙ ЗАКАЗ" circular badge top-left-ish and a floating white card with `brake-caliper-closeup.png` bottom-right overlapping the photo
  Tab 1 (Nissan Terrano): only card label known ("Замена двигателя d4d после неудачного ремонта" per section-6 subtitle reuse) — build with same layout shape, use placeholder text "Данные по этому кейсу уточняются" and an empty placeholder image box (no asset available for this tab)
  Tab 2 (Toyota RAV4): card subtitle "Б/у мансарда и новая дверь для дальнейшего восстановления" — same layout shape, placeholder image box (no asset available)
- Right card stack (click to switch active tab):
  01 BMW X3 G01 — "Комплект тормозов 348 мм от BMW M340i G20" — badge "АГРЕГАТ"
  02 Nissan Terrano — "Замена двигателя QR25 после неудачного ремонта" — badge "ДВИГАТЕЛЬ"
  03 Toyota RAV4 — "Б/у крыло и дверь для дальнейшего восстановления" — badge "КУЗОВ"
- Progress bar below stage: "01" ... track (33%/66%/100% red fill by tab) ... "03"
```

## Assets
- `brake-kit-case.png` at `/sites/sv-svai-ru-5bde0d5b/mir-61746d61/images/brake-kit-case.png` (tab 0 main photo)
- `brake-caliper-closeup.png` at `/sites/sv-svai-ru-5bde0d5b/mir-61746d61/images/brake-caliper-closeup.png` (tab 0 floating overlay)
- Tabs 1-2 have no real photo — use an empty gradient placeholder box, do not fabricate a car photo.

## Responsive
- Desktop: stage panel 2-column split (dark text ~45% / photo ~55%), right stack as vertical column beside stage
- Mobile: stage stacks (text above photo), right stack becomes horizontal scroll or stacks below stage
- Breakpoint: ~1024px
