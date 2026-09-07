# Header + HeroSection Specification

## Overview
- Target files:
  - `src/components/sites/sv-svai-ru-5bde0d5b/shared/SiteHeader.tsx`
  - `src/components/sites/sv-svai-ru-5bde0d5b/mir-61746d61/HeroSection.tsx`
- Interaction model: static, except a CSS marquee ticker (auto-scrolling, infinite)

## Colors / Fonts (exact)
- Section background: `#090c10` (near-black), grain/noise texture overlay (subtle, low opacity — approximate with a repeating inline SVG `feTurbulence` data-URI background at ~4-6% opacity, `mix-blend-mode: overlay`)
- Heading color: `rgb(247,247,242)` / `#F7F7F2`
- Heading font: `var(--font-mir-display)` (Oswald fallback for Druk Text Wide), uppercase, weight 700, font-size 112px desktop, letter-spacing 0.448px, line-height 107.52px (~0.96 ratio)
- Accent word "ПОД ВАШ АВТОМОБИЛЬ" is red: `#FF3B30`
- Body/label font everywhere: `var(--font-mir-mono)` (Source Code Pro), weight 500
- Body paragraph color: `rgba(247,247,242,.64)`, font-size 19px, line-height 31.92px
- Primary CTA button: bg `#FF3B30`, text `#F7F7F2`, font `var(--font-mir-mono)` weight 700, font-size 12px, uppercase, letter-spacing normal, rounded pill shape, padding ~16px 24px
- Secondary CTA ("Написать в Telegram"): outlined/ghost button, same font, white/transparent bg with border

## DOM Structure
```
SiteHeader (fixed/sticky, transparent over hero)
  - logo mark (small square icon, red diagonal accent) + "Мировые запчасти" wordmark + "НОВЫЕ И Б/У АВТОЗАПЧАСТИ" subtext (tiny, muted, tracked)
  - nav links: "Двигатели и КПП", "Сервис", "Кейсы", "Оставить запрос"
  - phone button top-right: red dot + "+7 982 993-73-00"

HeroSection
  - eyebrow row: red dot + "ИЖЕВСК · ОТПРАВКА ЛЮБОЙ ТК"
  - H1: "ДВИГАТЕЛЬ ИЛИ КПП" (line 1, white) / "ПОД ВАШ АВТОМОБИЛЬ" (line 2, red)
  - paragraph: "Подбираем новые и б/у агрегаты для иномарок и LADA. Проверяем совместимость, состояние и реальные условия поставки до оплаты."
  - button row: "Отправить запрос ↗" (primary red), "Написать в Telegram" (secondary)
  - 3-column feature strip below buttons: "14 дней гарантии" / "На крупные агрегаты с момента получения.", "Фото и видео" / "Показываем состояние до согласования заказа.", "ФЛ и ЮЛ" / "Оплата наличными, по QR или на расчётный счёт."
  - right: large image panel (rounded corners, light gray bg) showing `brake-kit-hero.webp` at `/sites/sv-svai-ru-5bde0d5b/mir-61746d61/images/brake-kit-hero.webp`, large "01" numeral bottom-right overlapping the panel, two floating dark chip overlays on top of the image: "Проверка перед отправкой" / "Совместимость, состояние, маркировки и доступные материалы." (top-right chip) and "Помощь с установкой" / "Снятие и установка агрегатов через автосервис." (lower-left chip, slightly below the panel's vertical center)
  - bottom marquee ticker (full-width, dark strip below hero): repeating text "ДВИГАТЕЛИ · КПП · ДЕФЕКТОВКА · ЭНДОСКОПИЯ · ДОСТАВКА ПО РОССИИ · УСТАНОВКА · " scrolling left infinitely (CSS `@keyframes marquee` translateX 0 → -50%, duplicate the text node twice, `animation: marquee 24s linear infinite`)
```

## Assets
- `public/sites/sv-svai-ru-5bde0d5b/mir-61746d61/images/brake-kit-hero.webp` (already downloaded)

## Text Content (verbatim)
See DOM structure above — all copy is inline.

## Responsive
- Desktop (1440px+): 2-column hero (text left ~50%, image right ~45%)
- Mobile (390px): stack single column, image below text, H1 reduces to ~48-56px, feature strip stacks to single column
- Breakpoint: ~1024px
