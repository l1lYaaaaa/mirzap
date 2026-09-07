# Behaviors — sv-svai.ru/mir

Observed via scroll sweep + DOM inspection (desktop viewport ~1512-1568px). Click/hover sweep was scoped to the interactions visibly implied by layout (tabs, accordion, play buttons) rather than exhaustively probing every element — flagged where approximated.

## Section 1 — Hero
- Bottom ticker: horizontally scrolling marquee of "ДВИГАТЕЛИ · КПП · ДЕФЕКТОВКА · ЭНДОСКОПИЯ · ДОСТАВКА ПО РОССИИ · УСТАНОВКА ·" — CSS `animation` infinite loop, duplicated text for seamless wrap.
- "01" large numeral top-right of hero image — static badge, not part of a counter.
- Two floating info chips over the hero image ("Проверка перед отправкой", "Помощь с установкой") — static positioned overlays, no hover state confirmed.

## Section 3 — Service modes (Автосервис / Малярный цех)
- Interaction model: **click-driven**. Two mode labels ("РЕЖИМ 01 АВТОСЕРВИС", "РЕЖИМ 02 МАЛЯРНЫЙ ЦЕХ") stacked with a "ПОДБОР + РАБОТЫ" red circular badge between them — clicking swaps the image/description panel content (Автосервис ↔ Малярный цех copy shown below). Only default "Автосервис" state was captured in this pass.

## Section 4 — Case showcase
- Interaction model: **click-driven tabs**, NOT scroll-driven — confirmed by scrolling through without content change until the section itself scrolled past.
- Right-hand stack of 3 cards (BMW X3 G01 / Nissan Terrano / Toyota RAV4) — clicking a card switches the large left stage content and updates a bottom progress bar (thin line, red fill from left, "01" / "03" labels at the ends).
- Default state on load: card 1 (BMW X3 G01, brake kit) active, progress bar ~1/3 filled.
- Transition style not measured (no computed-style diff performed); visually a simple crossfade/instant swap.

## Section 6 — Video testimonials
- Interaction model: **click-driven**. Play button (red circle, white triangle) over a video thumbnail — clicking presumably loads a RuTube iframe embed per the caption "Видео будут открываться прямо на сайте через RuTube." Not clicked during this pass (avoided triggering embeds).
- Right-hand list of 3 cards (Nissan Terrano / Toyota RAV4 / BMW X3 G01) mirrors the section-4 pattern — clicking switches the active video.

## Section 8 — FAQ accordion
- Interaction model: **click accordion**. Item 1 ("Что прислать для подбора?") is open by default (red background, expanded body text + a small "марка · модель · год · фото" chip). Items 2-7 collapsed with a "+" icon, single-line question, click presumably expands and toggles icon to "×".
- Only default state observed; other items not clicked in this pass.

## Section 9 — Task navigator (sticky pinned)
- Interaction model: **scroll-driven**, confirmed directly — the visual content stayed pinned across ~1300px of scroll delta (window.scrollY moved from ~11500 to 12886 while the screenshot did not change), consistent with an internal `position: sticky` panel inside a tall wrapper (`height: 1533` on the rec, but the pinned inner content is shorter).
- Left diagram: central red circle "ДВС / КПП" with four connected nodes (01 Двигатель или КПП, 02 Кузовная деталь, 03 Тормоза и подвеска, 04 Редкая оригинальная деталь) arranged around it — one node highlighted (red) at a time.
- Right panel updates its heading ("НУЖЕН ДВИГАТЕЛЬ ИЛИ КПП") and 4-item checklist to match the highlighted node, with a "01" / "04" step indicator top-right.
- Exact scroll-position thresholds per node were not individually measured (would require finer-grained scroll stepping than this pass's budget allowed) — implement as 4 roughly-equal scroll segments across the section's sticky range, adjustable later.

## Not exhaustively covered (flagged gaps)
- Hover states on buttons/links/cards were not individually diffed via getComputedStyle before/after — builders should use reasonable hover affordances (slight brightness/scale change on the red CTA buttons, underline or color shift on nav links) consistent with the site's sharp, high-contrast aesthetic, not exact extracted values.
- Mobile/tablet breakpoints were not inspected in this pass (see PAGE_TOPOLOGY.md).
