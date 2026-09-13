"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselImage {
  src: string
  alt: string
}

interface PhotoCarouselProps {
  images: CarouselImage[]
  className?: string
}

// Swipe distance (px) that counts as a deliberate "next/prev" gesture rather
// than a stray touch.
const SWIPE_THRESHOLD = 50

export function PhotoCarousel({ images, className }: PhotoCarouselProps) {
  const [index, setIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [dragging, setDragging] = useState(false)
  const frameRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)

  const count = images.length
  const slidePercent = 100 / count

  function goTo(i: number) {
    setIndex(((i % count) + count) % count)
  }

  // Hover tilt — same 3D-follow effect as before, on the outer frame only,
  // independent of the swipe/drag handling below (mouse vs. touch).
  function handleFrameMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = frameRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(1000px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) scale3d(1.02, 1.02, 1.02)`
  }

  function handleFrameMouseLeave() {
    const el = frameRef.current
    if (!el) return
    el.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)"
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
    setDragging(true)
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    setDragOffset(e.touches[0].clientX - touchStartX.current)
  }

  function handleTouchEnd() {
    if (Math.abs(dragOffset) > SWIPE_THRESHOLD) {
      goTo(index + (dragOffset < 0 ? 1 : -1))
    }
    touchStartX.current = null
    setDragging(false)
    setDragOffset(0)
  }

  return (
    <div
      ref={frameRef}
      onMouseMove={handleFrameMouseMove}
      onMouseLeave={handleFrameMouseLeave}
      className={cn(
        "group/carousel relative aspect-[32/29] w-full overflow-hidden rounded-[28px] bg-[var(--color-mir-surface)] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out will-change-transform [perspective:1000px]",
        className
      )}
    >
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="flex h-full touch-pan-y"
        style={{
          width: `${count * 100}%`,
          transform: `translateX(calc(${-index * slidePercent}% + ${dragging ? dragOffset : 0}px))`,
          transition: dragging ? "none" : "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {images.map((img, i) => (
          <div key={img.src} className="relative h-full shrink-0" style={{ width: `${100 / count}%` }}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-contain p-6 sm:p-8"
              priority={i === 0}
              draggable={false}
            />
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Предыдущее фото"
            className="absolute left-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 group-hover/carousel:opacity-100 sm:size-11 max-lg:opacity-100"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Следующее фото"
            className="absolute right-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 group-hover/carousel:opacity-100 sm:size-11 max-lg:opacity-100"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Фото ${i + 1} из ${count}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-6 bg-[var(--color-mir-accent)]" : "w-1.5 bg-white/40"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
