export function SiteFooter() {
  return (
    <footer className="w-full bg-[var(--color-mir-bg)] px-4 py-6 sm:px-6 lg:px-10 font-[var(--font-mir-body)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1 text-xs text-white/40 sm:flex-row sm:items-center sm:gap-3">
          <span className="text-white/70">© Мировые запчасти</span>
          <span className="hidden sm:inline" aria-hidden>
            ·
          </span>
          <span>Ижевск</span>
          <span className="hidden sm:inline" aria-hidden>
            ·
          </span>
          <span>отправка по России</span>
        </div>

        <nav className="flex items-center gap-5 text-xs">
          <a
            href="tel:+79829937300"
            className="relative text-white/60 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full"
          >
            Позвонить
          </a>
          <a
            href="https://t.me/"
            className="relative text-white/60 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full"
          >
            Telegram
          </a>
          <a
            href="https://wa.me/"
            className="relative text-white/60 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </footer>
  );
}
