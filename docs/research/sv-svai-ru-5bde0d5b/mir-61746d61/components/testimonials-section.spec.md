# TestimonialsSection Specification (section 6)

## Overview
- Target file: `src/components/sites/sv-svai-ru-5bde0d5b/mir-61746d61/TestimonialsSection.tsx`
- Interaction model: **click-driven** — right card list switches the active video (React `useState`); play button is a static overlay (do NOT wire a real RuTube embed; render the play button as a visual affordance only, since embedding third-party video is out of scope for this pass — add a TODO comment only if truly necessary, otherwise just make it a styled button)

## Colors / Fonts
- Background: light `#F4F4F0`, grain/noise texture overlay on the dark video stage only
- Headings: `var(--font-mir-display)`, uppercase, black, red word "БЕЗ"
- Video stage: large dark rounded panel (`#0a0a0a`-ish with reddish radial gradient tint), breadcrumb label "CLIENT / VIDEO / 06" top-left, centered red circular play button (white triangle icon), large muted-gray wordmark text of the car name behind/under the button (e.g. "NISSAN TERRANO" in huge outlined/faint type), caption row below stage: small red/muted label "ВИДЕООТЗЫВЫ · ДВИГАТЕЛЬ 04М" (approximate — verify against DOM if revisited), car name bold left, large "01" numeral right
- Right stack of 3 cards: active card red-filled white text, inactive white/light cards black text, each with a small pill badge top-right ("АГРЕГАТ", "КУЗОВ")

## DOM Structure
```
- eyebrow: red dot + "ВИДЕООТЗЫВЫ КЛИЕНТОВ"
- H2: "ОТЗЫВЫ" (black) + "БЕЗ" (red) / "ПЕРЕСКАЗА" (red)
- paragraph (right column): "Реальные автомобили, выполненные работы и результат после установки. Видео будут открываться прямо на сайте через RuTube."
- Video stage (changes per active tab, default = tab 0 Nissan Terrano):
  breadcrumb "CLIENT / VIDEO / 06", small caption top-right area "ДВИГАТЕЛЬ 04М" / "ПОДБОР И" / "УСТАНОВКА" (stacked tiny labels), centered play button, background wordmark "NISSAN TERRANO" (huge, low-contrast gray)
  below-stage caption bar: "ВИДЕООТЗЫВ · ДВИГАТЕЛЬ 04М" (small red label) then bold "NISSAN TERRANO" left / "01" giant numeral right
- Right card stack:
  01 NISSAN TERRANO — "Замена двигателя QR25 после неудачного ремонта" — badge "АГРЕГАТ" (active/red)
  02 TOYOTA RAV4 — "Четверть и дверь для дальнейшего восстановления" — badge "КУЗОВ"
  03 BMW X3 G01 — "Комплект тормозов 348 мм от BMW M340i G20" — badge "АГРЕГАТ"
```

## Assets
None — no downloadable video/photo asset (RuTube-hosted, external). Use the wordmark-text + play-button treatment described above instead of a real thumbnail.

## Responsive
- Desktop: video stage ~65% width, right card stack ~35% beside it
- Mobile: stage full width, card stack below as vertical list
- Breakpoint: ~1024px
