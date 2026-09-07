# Page Topology — sv-svai.ru/mir ("Мировые запчасти")

Source: Tilda-built static page (9 top-level `.t-rec` blocks inside `#allrecords`).
Body background: `rgb(9,12,16)` (near-black); sections alternate dark/light backgrounds internally.

Design tokens: see `src/app/globals.css` (`--color-mir-*`, `--font-mir-*`).
- Display font: "Druk Text Wide" → approximated with Oswald (commercial font, not redistributable)
- Body/label font: "Source Code Pro" (Google Font, monospace, weight 500-700, uppercase labels)
- Accent red: `#FF3B30`
- Ink (light text on dark): `#F7F7F2`, muted variant `rgba(247,247,242,.64)`

## Sections (top to bottom)

| # | rec id | Height | Name | Interaction model |
|---|--------|--------|------|--------------------|
| 1 | rec2470160861 | 1272 | Hero — "Двигатель или КПП под ваш автомобиль" | static (marquee ticker at bottom auto-scrolls) |
| 2 | rec2470310701 | 1613 | "Подбор агрегата без лотереи" — process + guarantee panel | static, numbered steps |
| 3 | rec2470343621 | 1733 | "Не только привезти. Проверить и установить" — service modes | click-driven (Автосервис / Малярный цех toggle) |
| 4 | rec2470404501 | 1741 | "Не обещания. Детали которые уже приехали" — case showcase | click-driven tabs (1/2/3 cards, progress bar under stage) |
| 5 | rec2470426351 | 1567 | "Условия без мелкого шрифта" — pricing/guarantee cards + "Гарантия по фактам" | static |
| 6 | rec2470452971 | 1513 | "Отзывы без пересказа" — video testimonials | click-driven (play button opens RuTube embed), tab list at right |
| 7 | rec2470476521 | 1507 | "Достаточно одного сообщения" — WhatsApp-style chat mockup | static (decorative chat UI, not functional) |
| 8 | rec2470506141 | 1681 | "Коротко без догадок" — FAQ accordion | click-driven accordion (item 1 open by default) |
| 9 | rec2470554431 | 1533 | "Выберите задачу. Мы подскажем, что прислать" — task navigator | scroll-driven (sticky-pinned diagram, `position: sticky` inside tall container; scrolling within the section cycles through 4 nodes: ДВС/КПП, кузовная деталь, тормоза и подвеска, редкая деталь). Right panel shows corresponding checklist (Нужен двигатель или КПП / etc, "01" of "04"). |

Footer/contact info (phone, Telegram/WhatsApp links, "Мировые запчасти" copyright) is embedded at the bottom of section 7 (chat mockup), not a separate record.

## Real assets (only 3 photographic images on the whole page — rest is CSS/SVG decoration)
- `brake-kit-hero.webp` — used in hero (section 1) is actually the SAME brake kit product photo reused in section 4's case study slot 1
- `brake-kit-case.png` — section 4, case card "BMW X3 G01 / Комплект тормозов 348мм"
- `brake-caliper-closeup.png` — section 4, floating overlay caliper close-up image

Other visual "photo" slots (engine on pallet, engine in service, bodywork panel) are **empty Tilda placeholders** — the live site shows literal "ЗАГРУЗИТЕ ФОТО ДВИГАТЕЛЯ В TILDA" text where an image was never uploaded by the site owner. These are not missing extraction — there is no source asset. Build these as empty/placeholder image containers matching the dark gradient box shown, do not fabricate photos.

## Global patterns
- Grain/noise texture overlay (inline SVG `feTurbulence` data-URI) appears on 3 dark sections (1, 3, 6) as a subtle background texture.
- Marquee ticker text loop at the bottom of the hero and repeated once more further down ("ДВИГАТЕЛИ · КПП · ДЕФЕКТОВКА · ЭНДОСКОПИЯ · ДОСТАВКА ПО РОССИИ · УСТАНОВКА ·").
- Numbered red circular badges ("14 дней гарантии", "01", "14", etc.) recur as a UI motif throughout.
- Progress/step bars (thin horizontal line with red fill + numbers at both ends) recur in sections 4 and 9.

## Responsive
Only desktop (1440-1568px observed) was inspected in this pass due to scope. Builders should apply mobile-first stacking (single column, full-width cards) as a reasonable default consistent with the template's responsive conventions — flag as an approximation, not verified against the live mobile breakpoint.
