# GuaranteeSection Specification (section 5)

## Overview
- Target file: `src/components/sites/sv-svai-ru-5bde0d5b/mir-61746d61/GuaranteeSection.tsx`
- Interaction model: static

## Colors / Fonts
- Background: light `#F4F4F0`/white transitioning to a dark card + a full-dark "Гарантия по фактам" panel further right
- Headings: `var(--font-mir-display)`, uppercase, black, red word "БЕЗ"
- 3 stacked left cards: card 1 red-filled (`#FF3B30`, white text) "КРУПНЫЕ АГРЕГАТЫ", cards 2-3 white/light with black text ("ФИЗЛИЦА И ЮРЛИЦА", "ЛЮБАЯ ТРАНСПОРТНАЯ КОМПАНИЯ") — each has a small pill badge top-right ("СКЛАД", "ОПЛАТА", "ДОСТАВКА")
- Right dark panel "ГАРАНТИЯ ПО ФАКТАМ": near-black `#0a0a0a`, breadcrumb "TERMS / CONDITIONS / 05", large heading "14 ДНЕЙ" / "НА" / "АГРЕГАТЫ" (white/red split same style as H1), bullet list (red dot markers): "Стандартная гарантия — 14 дней", "Расширенная гарантия обсуждается отдельно", "На кузовные детали гарантия не распространяется", "Состояние и комплектность согласовываются до оплаты"; button "Уточнить условия ↗"; small dark note box "ВАЖНО / На кузовные детали гарантия не распространяется."; giant faint numeral "14" bottom-right (decorative, low-opacity white)
- Top-right small heading "ГАРАНТИЯ ПО ФАКТАМ" with "ПО" in red, "14 ДНЕЙ" red circular badge

## DOM Structure
```
- eyebrow: red dot + "ДО ОФОРМЛЕНИЯ ЗАКАЗА"
- H2: "УСЛОВИЯ" (black) + "БЕЗ" (red) / "МЕЛКОГО" (black) / "ШРИФТА" (black)
- paragraph (right column): "Сразу объясняем, как работает гарантия, какие способы оплаты доступны и как организуется отправка."
- Left column, 3 stacked cards:
  01 КРУПНЫЕ АГРЕГАТЫ — "14 дней с момента получения. Расширенный вариант обсуждается отдельно." — badge "СКЛАД" (active/red)
  02 ФИЗЛИЦА И ЮРЛИЦА — "Наличные, QR-код или расчётный счёт. Для юридических лиц — без НДС." — badge "ОПЛАТА"
  03 ЛЮБАЯ ТРАНСПОРТНАЯ КОМПАНИЯ — "Перевозчика и условия отправки согласовываем с клиентом." — badge "ДОСТАВКА"
- Right dark panel:
  - breadcrumb "TERMS / CONDITIONS / 05"
  - heading row: "ГАРАНТИЯ" "ПО" (red) "ФАКТАМ" + red circular "14 ДНЕЙ" badge (top area)
  - large heading: "14 ДНЕЙ" (white) / "НА" (white) / "АГРЕГАТЫ" (red)
  - paragraph: "Гарантийный срок начинается с момента получения двигателя, КПП или другого крупного агрегата."
  - bullet list (red dots): "Стандартная гарантия — 14 дней", "Расширенная гарантия обсуждается отдельно", "На кузовные детали гарантия не распространяется", "Состояние и комплектность согласовываются до оплаты"
  - button: "Уточнить условия ↗" + caption "Финальные условия фиксируются по конкретному заказу."
  - small note box (bottom-right area): "ВАЖНО" / "На кузовные детали гарантия не распространяется."
  - giant decorative numeral "14" bottom-right, very large, low-opacity
```

## Assets
None — this section is pure typography/cards, no photos.

## Responsive
- Desktop: 2-column (stacked cards left ~35%, dark panel right ~65%)
- Mobile: stack single column, dark panel's giant "14" numeral scales down or is hidden below a size threshold
- Breakpoint: ~1024px
