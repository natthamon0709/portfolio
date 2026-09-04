<template>
  <canvas
    ref="canvasRef"
    class="fixed inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-1000"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationFrameId: number | null = null

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

let handleResize: (() => void) | null = null
let handleMouseMove: ((e: MouseEvent) => void) | null = null
let handleMouseLeave: (() => void) | null = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  let width = (canvas.width = window.innerWidth)
  let height = (canvas.height = window.innerHeight)

  handleResize = () => {
    if (!canvas) return
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
  }
  window.addEventListener('resize', handleResize)

  // Mouse interaction
  const mouse = { x: -1000, y: -1000, radius: 120 }
  handleMouseMove = (e: MouseEvent) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }
  handleMouseLeave = () => {
    mouse.x = -1000
    mouse.y = -1000
  }
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseleave', handleMouseLeave)

  // Initialize particles
  const particleCount = Math.min(Math.floor((width * height) / 16000), 75)
  const colors = ['#06b6d4', '#8b5cf6', '#3b82f6', '#10b981']
  const particles: Particle[] = []

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.8,
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }

  const animate = () => {
    ctx.clearRect(0, 0, width, height)

    // Update & draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]
      p.x += p.vx
      p.y += p.vy

      // Wrap edges
      if (p.x < 0) p.x = width
      if (p.x > width) p.x = 0
      if (p.y < 0) p.y = height
      if (p.y > height) p.y = 0

      // Draw particle
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.shadowBlur = 8
      ctx.shadowColor = p.color
      ctx.fill()
      ctx.shadowBlur = 0

      // Connect with mouse
      const dxMouse = p.x - mouse.x
      const dyMouse = p.y - mouse.y
      const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)
      if (distMouse < mouse.radius) {
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(mouse.x, mouse.y)
        ctx.strokeStyle = `rgba(6, 182, 212, ${(1 - distMouse / mouse.radius) * 0.35})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Connect with nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j]
        const dx = p.x - p2.x
        const dy = p.y - p2.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 110) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.strokeStyle = `rgba(31, 45, 77, ${(1 - dist / 110) * 0.45})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate)
  }

  animate()
})

onBeforeUnmount(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }
  if (handleResize) {
    window.removeEventListener('resize', handleResize)
  }
  if (handleMouseMove) {
    window.removeEventListener('mousemove', handleMouseMove)
  }
  if (handleMouseLeave) {
    window.removeEventListener('mouseleave', handleMouseLeave)
  }
})
</script>
