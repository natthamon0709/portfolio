<template>
  <div class="min-h-screen bg-cyber-bg text-slate-100 cyber-grid relative selection:bg-cyber-cyan selection:text-slate-950 font-sans">
    <!-- Interactive Canvas Particles -->
    <BackgroundCanvas />

    <!-- Main Content Flow -->
    <main class="relative z-10">
      <!-- 00. Hero & Executive Summary -->
      <HeroSection @open-terminal="openTerminal" />

      <!-- 01. Work Experience & Education Timeline -->
      <ExperienceSection />

      <!-- 02. Interactive 3D Projects Bento Grid -->
      <ProjectsBento />

      <!-- 03. Engineering Skills Matrix -->
      <SkillsMatrix />

      <!-- 04. AI Behind the Build (Requested requirement) -->
      <AiShowcaseSection />

      <!-- 05. Contact & Footer -->
      <ContactSection />
    </main>

    <!-- Floating Navigation & Language Switcher Dock -->
    <FloatingDock @open-terminal="openTerminal" />

    <!-- Developer Interactive CLI Terminal Modal -->
    <InteractiveTerminalModal ref="terminalRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TerminalModalExpose } from '~/types/portfolio'

const route = useRoute()
if (route.path && route.path !== '/') {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}

const terminalRef = ref<TerminalModalExpose | null>(null)

const openTerminal = () => {
  terminalRef.value?.open()
}
</script>
