<template>
  <section id="ai-showcase" class="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
    <!-- Header -->
    <div class="text-left mb-12 space-y-2">
      <div class="inline-flex items-center gap-2 text-xs font-mono text-cyber-purple uppercase tracking-wider">
        <span>// 04. AI_COLLABORATION_LOG</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {{ profileData.aiShowcase.title[currentLang] }}
      </h2>
      <p class="text-slate-400 text-sm sm:text-base max-w-2xl">
        {{ profileData.aiShowcase.subtitle[currentLang] }}
      </p>
    </div>

    <!-- AI Pipeline Steps -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="step in profileData.aiShowcase.steps"
        :key="step.step"
        class="glass-card rounded-2xl p-6 border border-white/5 hover:border-cyber-purple/50 transition-all flex flex-col justify-between group relative overflow-hidden"
      >
        <!-- Ambient Glow -->
        <div class="absolute -right-12 -top-12 w-28 h-28 bg-cyber-purple/10 rounded-full blur-2xl group-hover:bg-cyber-purple/25 transition-all pointer-events-none" />

        <div>
          <!-- Step Header -->
          <div class="flex items-center justify-between gap-2 mb-4">
            <span class="text-xs font-mono px-2.5 py-1 rounded-full bg-cyber-purple/20 text-purple-300 border border-cyber-purple/30 font-semibold">
              STEP 0{{ step.step }}
            </span>
            <span class="text-xs font-mono text-slate-400 font-semibold">
              {{ step.tool }}
            </span>
          </div>

          <!-- Step Title -->
          <h3 class="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyber-cyan transition-colors">
            {{ step.name[currentLang] }}
          </h3>

          <!-- Role Badge -->
          <div class="inline-block text-[11px] font-mono text-purple-300/90 mb-3 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-800/40">
            {{ step.badge }}
          </div>

          <!-- Description -->
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            {{ step.description[currentLang] }}
          </p>
        </div>

        <!-- Action / View Recipe Button -->
        <div>
          <button
            @click="openInspect(step)"
            class="w-full py-2 px-3 rounded-xl font-mono text-xs font-semibold glass-card border border-cyber-purple/40 text-purple-300 hover:bg-cyber-purple/20 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-purple-500/10"
          >
            <span>{{ currentLang === 'en' ? 'View Collaboration Details & Prompt' : 'ดูคำสั่ง Prompt & ขั้นตอนการทำ' }}</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </div>

    <!-- AI Architecture Summary Box -->
    <div class="mt-10 rounded-2xl glass-card border border-white/10 p-6 sm:p-8">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h3 class="text-lg font-bold text-white font-mono flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-cyber-emerald animate-pulse" />
            <span>{{ currentLang === 'en' ? 'Step-by-Step AI Co-Pilot Summary' : 'สรุปกระบวนการทำงานร่วมกันทีละขั้นตอน' }}</span>
          </h3>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">
            {{ currentLang === 'en'
              ? 'Human engineer directed intent & requirements, while Antigravity AI orchestrated fullstack synthesis and verification.'
              : 'คุณกำหนดเป้าหมายและตัดสินใจในแต่ละจุด และให้ Antigravity AI ช่วยสังเคราะห์โครงสร้าง โค้ด และตรวจสอบระบบ' }}
          </p>
        </div>
        <div class="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span class="px-2.5 py-1 rounded bg-white/5 border border-white/10">Nuxt v4.5.2</span>
          <span class="px-2.5 py-1 rounded bg-white/5 border border-white/10">Nitro Vercel</span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mt-6 text-xs font-mono text-slate-300">
        <div
          v-for="step in profileData.aiShowcase.steps"
          :key="step.step"
          class="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col justify-between"
        >
          <div>
            <div class="text-cyber-cyan mb-1 text-[11px]">STEP 0{{ step.step }}</div>
            <div class="text-white font-semibold text-xs">{{ step.tool }}</div>
          </div>
          <div class="text-[11px] text-slate-400 mt-2 line-clamp-2">
            {{ step.name[currentLang] }}
          </div>
        </div>
      </div>
    </div>

    <!-- Modern Web Dialog for AI Inspect (Conforms to modern-web-guidance) -->
    <dialog
      ref="inspectDialogRef"
      class="max-w-2xl w-[94vw] m-auto rounded-2xl glass-card border border-cyber-purple/40 p-0 text-slate-100 shadow-2xl backdrop:backdrop-blur-md max-h-[88vh] overflow-y-auto"
      @click="onBackdropClick"
    >
      <div v-if="activeStep" class="p-5 sm:p-8 space-y-5 sm:space-y-6">
        <!-- Header -->
        <div class="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-mono px-2 py-0.5 rounded bg-cyber-purple/20 text-purple-300 border border-cyber-purple/40">
                STEP 0{{ activeStep.step }}
              </span>
              <span class="text-xs font-mono text-slate-400">{{ activeStep.tool }}</span>
            </div>
            <h3 class="text-xl font-bold text-white">
              {{ activeStep.name[currentLang] }}
            </h3>
          </div>
          <button
            @click="closeInspect"
            class="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            &times;
          </button>
        </div>

        <!-- Recipe Content -->
        <div class="space-y-4 text-xs sm:text-sm">
          <div>
            <div class="text-xs font-mono uppercase tracking-wider text-cyber-cyan mb-1.5 font-semibold">
              // {{ currentLang === 'en' ? 'Engineered Prompt / User Directive' : 'คำสั่ง Prompt / สิ่งที่คุณสั่งให้ผมทำ' }}
            </div>
            <div class="p-3.5 rounded-xl bg-black/60 border border-white/10 font-mono text-slate-300 leading-relaxed text-xs">
              {{ activeStep.recipe.prompt }}
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <div class="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                // {{ currentLang === 'en' ? 'Input Source' : 'ข้อมูลที่ส่งให้ AI (Input)' }}
              </div>
              <div class="font-mono text-slate-200 text-xs">
                {{ activeStep.recipe.input }}
              </div>
            </div>
            <div class="p-3.5 rounded-xl bg-black/40 border border-cyber-emerald/20">
              <div class="text-[11px] font-mono text-cyber-emerald uppercase tracking-wider mb-1">
                // {{ currentLang === 'en' ? 'Result Delivered' : 'ผลลัพธ์ที่ AI สร้างให้ (Output)' }}
              </div>
              <div class="font-mono text-slate-200 text-xs">
                {{ activeStep.recipe.output }}
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="flex justify-end pt-4 border-t border-white/10">
          <button
            @click="closeInspect"
            class="px-5 py-2 rounded-xl font-mono text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
          >
            {{ currentLang === 'en' ? 'Done' : 'ปิด' }}
          </button>
        </div>
      </div>
    </dialog>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import type { AiStepItem } from '~/types/portfolio'
import profileData from '~/data/profile.json'

const { currentLang } = useLanguage()

const activeStep = ref<AiStepItem | null>(null)
const inspectDialogRef = ref<HTMLDialogElement | null>(null)

const openInspect = (step: AiStepItem) => {
  activeStep.value = step
  inspectDialogRef.value?.showModal()
}

const closeInspect = () => {
  inspectDialogRef.value?.close()
}

const onBackdropClick = (e: MouseEvent) => {
  if (e.target === inspectDialogRef.value) {
    closeInspect()
  }
}
</script>
