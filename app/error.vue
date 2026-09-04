<template>
  <div class="min-h-screen bg-cyber-bg text-slate-100 cyber-grid relative selection:bg-cyber-cyan selection:text-slate-950 font-sans flex items-center justify-center px-4">
    <div class="relative z-10 max-w-lg w-full glass-card rounded-3xl p-8 sm:p-10 border border-cyber-cyan/40 text-center shadow-2xl overflow-hidden">
      <!-- Ambient Glow -->
      <div class="absolute -right-16 -top-16 w-36 h-36 bg-cyber-cyan/15 rounded-full blur-3xl pointer-events-none" />
      <div class="absolute -left-16 -bottom-16 w-36 h-36 bg-cyber-purple/15 rounded-full blur-3xl pointer-events-none" />

      <!-- Status Code Badge -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-xs font-mono text-cyber-cyan mb-6">
        <span>ERROR_CODE // {{ error?.statusCode || 500 }}</span>
      </div>

      <!-- Heading -->
      <h1 class="text-4xl sm:text-5xl font-bold font-mono text-white mb-3">
        {{ is404 ? 'PAGE_NOT_FOUND' : 'SYSTEM_EXCEPTION' }}
      </h1>

      <!-- Description -->
      <p class="text-sm sm:text-base text-slate-300 font-mono mb-8 leading-relaxed">
        {{ is404
          ? 'The requested endpoint or resource does not exist on this server.'
          : 'An unexpected runtime condition was intercepted by the error boundary.' }}
      </p>

      <!-- Recovery Button -->
      <button
        @click="handleError"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
      >
        <span>&larr; Return to Portfolio</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  error?: {
    statusCode?: number
    message?: string
    stack?: string
  }
}>()

const is404 = computed(() => props.error?.statusCode === 404)

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>
