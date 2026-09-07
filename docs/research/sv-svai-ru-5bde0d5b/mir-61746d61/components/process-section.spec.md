# ProcessSection Specification (section 2)

## Overview
- Target file: `src/components/sites/sv-svai-ru-5bde0d5b/mir-61746d61/ProcessSection.tsx`
- Interaction model: static

## Colors / Fonts
- Background: light off-white `#F4F4F0` transitioning from the dark hero above (simple hard section break is fine)
- Headings: `var(--font-mir-display)`, uppercase, black text `#0a0a0a`, red accent word "БЕЗ ЛОТЕРЕИ"
- Body/labels: `var(--font-mir-mono)`
- Numbered step chips (01-04): red circular badge with white bold numeral
- Dark card panel (right, "ЧТО ПРОВЕРЯЕМ"): background near-black `#0a0a0a`/`#111`, white text, red numerals, small pill badges per row ("ОБЯЗАТЕЛЬНО", "ДО ОПЛАТЫ", "СОГЛАСУЕМ", "14 ДНЕЙ") right-aligned, subtle divider lines between rows
- Bottom banner inside dark card: black strip with "Расширенная гарантия обсуждается отдельно" + muted subtext + red pill button "Отправить данные ↗"

## DOM Structure
```
- eyebrow: red dot + "ГЛАВНОЕ НАПРАВЛЕНИЕ"
- H2: "ПОДБОР АГРЕГАТА" / "БЕЗ ЛОТЕРЕИ" (red)
- paragraph (right-aligned column): "Сначала сверяем автомобиль, затем проверяем сам агрегат и только после этого согласовываем покупку и отправку."
- Left: dark image/mock panel with breadcrumb-style label "AGGREGATE / CONTROL / 02", red "14 ДНЕЙ ГАРАНТИИ" circular badge top-right, two small red numbered dots ("01","02") positioned on the panel, "ЗАГРУЗИТЕ ФОТО ДВИГАТЕЛЯ В TILDA" placeholder text centered (this is a genuine empty Tilda image slot — render as an empty gradient placeholder box, no real photo available), bottom-left overlay tags "Угол 01" / "Фронт 02"
- Right: dark card "ЧТО ПРОВЕРЯЕМ" (eyebrow "КОНТРОЛЬ ПЕРЕД ЗАКАЗОМ") with 4 rows:
  01 Совместимость — "Сверяем агрегат с данными автомобиля и нужной модификацией." — badge "ОБЯЗАТЕЛЬНО"
  02 Фото и видео — "Показываем доступные материалы до оплаты и отправки." — badge "ДО ОПЛАТЫ"
  03 Условия поставки — "Фиксируем выбранный вариант и согласовываем транспортную компанию." — badge "СОГЛАСУЕМ"
  04 Гарантия — "На крупные агрегаты — 14 дней с момента получения." — badge "14 ДНЕЙ"
  footer banner: "Расширенная гарантия обсуждается отдельно" / "Условия зависят от агрегата и конкретного заказа." + button "Отправить данные ↗"
- Below both columns: 4-step horizontal strip with arrows between:
  ШАГ 01 Марка, модель и год →
  ШАГ 02 Фото детали или VIN →
  ШАГ 03 Показываем варианты →
  ШАГ 04 Оплата и отправка (checkmark instead of arrow, last item)
```

## Assets
None (placeholder image box only — no real asset).

## Responsive
- Desktop: 2-column (image left, dark card right), step strip as 4 equal columns
- Mobile: stack single column, step strip wraps to 2x2 grid
- Breakpoint: ~1024px for columns, ~640px for step strip grid
