const HEADER_OFFSET = 88;
const DURATION = 650;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

export function smoothScrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const startY = window.scrollY;
  const targetY = startY + target.getBoundingClientRect().top - HEADER_OFFSET;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(now: number) {
    const elapsed = Math.min((now - startTime) / DURATION, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(elapsed));
    if (elapsed < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
