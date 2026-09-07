# ChatRequestSection + SiteFooter Specification (section 7)

## Overview
- Target files:
  - `src/components/sites/sv-svai-ru-5bde0d5b/mir-61746d61/ChatRequestSection.tsx`
  - `src/components/sites/sv-svai-ru-5bde0d5b/shared/SiteFooter.tsx`
- Interaction model: static decorative mockup (the form fields ARE real inputs styled to look like a chat, but submission has no backend — style only, no functional network call). Footer links are static.

## Colors / Fonts
- Background: near-black `#0a0a0a`, grain/noise texture overlay, large faint circular ring graphic bottom-left (decorative, low-opacity white/gray outline)
- Headings: `var(--font-mir-display)`, uppercase, white "ДОСТАТОЧНО", red "ОДНОГО" / "СООБЩЕНИЯ"
- Chat mockup panel: dark card `#111`-ish, rounded ~24px, breadcrumb "REQUEST / MESSAGE / 07"
  - avatar chip "М3" (red circle, white bold initials) + "Мировые запчасти" / "Подбор двигателя, КПП и других деталей" + green online dot + "МЕНЕДЖЕР НА СВЯЗИ"
  - chat bubbles: incoming (dark gray bg, left-aligned) and outgoing/user (red bg `#FF3B30`, right-aligned) — sample conversation: bot asks for марку/модель/год, user replies "Nissan Terrano, 2019 год. Нужен двигатель QR25. Город — Ижевск.", bot replies about checking compatibility, user note "Фото детали приложены уже в WhatsApp."
  - form row: 4 text inputs styled as dark rounded fields with placeholder labels — "Марка и модель", "Год выпуска", "Какая деталь нужна", "Ваш город"
  - primary CTA: full-width red button "Открыть готовое сообщение в WhatsApp ↗"
  - floating red circular button "ОТПРАВИТЬ ЗАПРОС" positioned to the right of the panel, with concentric ring decoration around it
  - small floating summary card bottom-right: "ЧТО ПОЛУЧИТСЯ" heading, "Nissan Terrano · 2019 · двигатель QR25 · Ижевск" summary line, 3 pill buttons "+7 982 993-73-00" / "Telegram" / "WhatsApp", small caption "Ответим в течение..."
- Footer (bottom of this section, full-width dark bar): left "© Мировые запчасти" + "Ижевск" + "отправка по России", right links "Позвонить", "Telegram", "WhatsApp"

## DOM Structure
```
- eyebrow: red dot + "НАЧАТЬ ПОДБОР"
- H2: "ДОСТАТОЧНО" (white) / "ОДНОГО" (red) / "СООБЩЕНИЯ" (red)
- paragraph (right column): "Не нужно искать товар в каталоге. Пришлите данные автомобиля и нужную деталь — дальше менеджер уточнит только необходимое."
- Chat panel: as described above, with 2 bot bubbles + 2 user bubbles (sample conversation), 4-field form grid (2x2 on desktop), full-width WhatsApp CTA button
- Floating "ОТПРАВИТЬ ЗАПРОС" circular button (visual accent, positioned via absolute/relative offset to the right of the chat panel)
- Floating summary card (bottom-right, overlapping the chat panel edge)
- SiteFooter: "© Мировые запчасти", "Ижевск", "отправка по России" (left) / "Позвонить", "Telegram", "WhatsApp" (right links)
```

## Assets
None.

## Responsive
- Desktop: chat panel ~70% width with floating elements positioned absolutely to its right/bottom
- Mobile: chat panel full width, floating button/summary card become inline elements below the panel instead of absolutely positioned overlaps, footer stacks to 2 rows
- Breakpoint: ~1024px
