import { prefersFinePointer, prefersReducedMotion } from './prefersReducedMotion'

export function initHeroParallax(stage: HTMLElement): () => void {
  if (prefersReducedMotion() || !prefersFinePointer()) {
    return () => {}
  }

  let rafId = 0
  let targetX = 0
  let targetY = 0
  let currentX = 0
  let currentY = 0

  const applyParallax = () => {
    currentX += (targetX - currentX) * 0.07
    currentY += (targetY - currentY) * 0.07

    stage.style.setProperty('--hero-parallax-x', currentX.toFixed(4))
    stage.style.setProperty('--hero-parallax-y', currentY.toFixed(4))

    const settled =
      Math.abs(targetX - currentX) < 0.0005 && Math.abs(targetY - currentY) < 0.0005

    if (settled) {
      rafId = 0
      return
    }

    rafId = window.requestAnimationFrame(applyParallax)
  }

  const scheduleUpdate = () => {
    if (!rafId) {
      rafId = window.requestAnimationFrame(applyParallax)
    }
  }

  const onPointerMove = (event: PointerEvent) => {
    const rect = stage.getBoundingClientRect()
    if (rect.width === 0 || rect.height === 0) return

    targetX = (event.clientX - rect.left) / rect.width - 0.5
    targetY = (event.clientY - rect.top) / rect.height - 0.5
    scheduleUpdate()
  }

  const onPointerLeave = () => {
    targetX = 0
    targetY = 0
    scheduleUpdate()
  }

  stage.addEventListener('pointermove', onPointerMove, { passive: true })
  stage.addEventListener('pointerleave', onPointerLeave, { passive: true })

  return () => {
    stage.removeEventListener('pointermove', onPointerMove)
    stage.removeEventListener('pointerleave', onPointerLeave)

    if (rafId) {
      window.cancelAnimationFrame(rafId)
    }

    stage.style.removeProperty('--hero-parallax-x')
    stage.style.removeProperty('--hero-parallax-y')
  }
}
