# mirzap

Сайт «Мировые запчасти» — подбор контрактных двигателей и КПП для иномарок и LADA. Проверка совместимости, фото и видео состояния до оплаты, гарантия 14 дней.

Построен на Next.js (App Router) + Tailwind CSS v4 + shadcn/ui.

## Разработка

```bash
npm install
npm run dev
```

Откроется на [localhost:3000](http://localhost:3000).

## Команды

| Команда | Назначение |
| --- | --- |
| `npm run dev` | Локальный сервер разработки |
| `npm run build` | Продакшн-сборка (статический экспорт) |
| `npm run lint` | Проверка ESLint |
| `npm run typecheck` | Проверка типов TypeScript |
| `npm run check` | Всё сразу: lint + typecheck + build |

## Структура

```
src/
  app/                 # Роут и глобальные стили
  components/
    sections/          # Секции главной страницы
    shared/             # Общие компоненты (Reveal, Magnetic, шапка, футер)
    ui/                 # Примитивы shadcn/ui
public/
  images/              # Изображения сайта
```

## Деплой

Сайт собирается как статический экспорт (`output: "export"`) и автоматически деплоится на **GitHub Pages** при пуше в `master` — см. `.github/workflows/deploy.yml`.
