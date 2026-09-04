<template>
  <nav
    class="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] sm:max-w-none px-3 sm:px-4 py-2 sm:py-2.5 rounded-full glass-card border border-white/15 shadow-2xl shadow-black/80 flex items-center gap-1 sm:gap-2 md:gap-3 transition-all duration-300 backdrop-blur-xl overflow-x-auto no-scrollbar"
    role="navigation"
    aria-label="Quick navigation dock"
  >
    <!-- Nav Links -->
    <a
      v-for="item in navItems"
      :key="item.href"
      :href="item.href"
      class="text-[11px] sm:text-xs md:text-sm font-mono px-2 sm:px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-cyber-cyan hover:bg-white/5 transition-colors whitespace-nowrap"
    >
      <span class="sm:hidden">{{ item.short[currentLang] }}</span>
      <span class="hidden sm:inline">{{ item.label[currentLang] }}</span>
    </a>

    <!-- Divider -->
    <div class="h-4 w-[1px] bg-slate-700/60 mx-0.5 sm:mx-1 shrink-0" aria-hidden="true" />

    <!-- Terminal Button -->
    <button
      @click="$emit('open-terminal')"
      class="text-[11px] sm:text-xs md:text-sm font-mono px-2 sm:px-2.5 py-1.5 rounded-lg bg-cyber-cyan/15 text-cyber-cyan hover:bg-cyber-cyan/25 border border-cyber-cyan/40 flex items-center gap-1 sm:gap-1.5 transition-all shadow-sm shadow-cyber-cyan/20 cursor-pointer shrink-0"
      title="Open Developer Terminal"
    >
      <span class="inline-block w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-cyber-cyan animate-pulse" />
      <span>CLI</span>
    </button>

    <!-- Language Switcher -->
    <button
      @click="toggleLanguage"
      class="text-[11px] sm:text-xs font-mono font-semibold px-2 sm:px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 flex items-center gap-0.5 sm:gap-1 transition-all cursor-pointer shrink-0"
      :title="currentLang === 'en' ? 'Switch to Thai' : 'Switch to English'"
    >
      <span :class="currentLang === 'en' ? 'text-cyber-cyan font-bold' : 'text-slate-400'">EN</span>
      <span class="text-slate-500">/</span>
      <span :class="currentLang === 'th' ? 'text-cyber-cyan font-bold' : 'text-slate-400'">TH</span>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'

defineEmits<{
  (e: 'open-terminal'): void
}>()

const { currentLang, toggleLanguage } = useLanguage()

const navItems = [
  { href: '#about', label: { en: 'About', th: 'เกี่ยวกับ' }, short: { en: 'Bio', th: 'ประวัติ' } },
  { href: '#experience', label: { en: 'Experience', th: 'ประสบการณ์' }, short: { en: 'Exp', th: 'งาน' } },
  { href: '#projects', label: { en: 'Projects', th: 'ผลงาน' }, short: { en: 'Proj', th: 'ผลงาน' } },
  { href: '#skills', label: { en: 'Skills', th: 'ทักษะ' }, short: { en: 'Skills', th: 'ทักษะ' } },
  { href: '#ai-showcase', label: { en: 'AI Build', th: 'สร้างด้วย AI' }, short: { en: 'AI', th: 'AI' } }
]
</script>
