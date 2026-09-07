# FAQSection Specification (section 8)

## Overview
- Target file: `src/components/sites/sv-svai-ru-5bde0d5b/mir-61746d61/FAQSection.tsx`
- Interaction model: **click accordion** (React `useState<number | null>`, item 0 open by default)

## Colors / Fonts
- Background: light `#F4F4F0`/white
- Headings: `var(--font-mir-display)`, uppercase, black "КОРОТКО.", red "БЕЗ ДОГАДОК"
- Open item: red-filled `#FF3B30` chevron/arrow-shaped block (right edge has a triangular notch, like a "ticket stub" cut), white text, small "×" close icon top-right, expanded body text + a small dark chip showing "марка · модель · год · фото" (mini illustration of what to send)
- Closed items: white/light background, black text, numbered in red (`01`-`07`), "+" icon in a light circular button on the right, same ticket-notch shape on the right edge
- Divider: thin hairline between items when closed (list style)

## DOM Structure
```
- eyebrow: red dot + "ПЕРЕД ЗАЯВКОЙ"
- H2: "КОРОТКО." (black) / "БЕЗ ДОГАДОК" (red)
- paragraph (right column): "Ответы на вопросы, которые чаще всего появляются перед подбором, оплатой и отправкой запчасти."
- Accordion items (numbered 01-07), item 01 open by default:
  01 "Что прислать для подбора?" (open) — body: "Пришлите марку, модель, год выпуска и фото нужной детали или повреждения. Если этих данных будет недостаточно, менеджер дополнительно запросит VIN." + mini chip "минимум для старта: Марка · модель · год · фото"
  02 "Работаете только с иномарками?" (closed)
  03 "Можно заказать новую и б/у деталь?" (closed)
  04 "Какая гарантия действует?" (closed)
  05 "Как можно оплатить заказ?" (closed)
  06 "Как проходит отправка?" (closed)
  07 "Поможете с установкой?" (closed)
- Bottom bar: "Не нашли ответ на свой вопрос?" / "Напишите менеджеру — разберём конкретную задачу по автомобилю и нужной детали." + button "Перейти к заявке ↗"
```
Note: only item 01's body text was captured from the live site (others were not expanded during this extraction pass) — builder should leave items 02-07 collapsed-only with question text, and can leave body empty/omitted until expanded (do not fabricate answer copy).

## Assets
None.

## Responsive
- Desktop: each item full-width row, "ticket notch" shape on the right edge (clip-path or pseudo-element triangle)
- Mobile: notch shape can be simplified to a plain rounded-right edge if clip-path proves visually awkward at narrow widths
- Breakpoint: ~640px
