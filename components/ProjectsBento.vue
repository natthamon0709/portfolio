<template>
  <section id="projects" class="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
      <div class="text-left space-y-2">
        <div class="inline-flex items-center gap-2 text-xs font-mono text-cyber-cyan uppercase tracking-wider">
          <span>// 02. PORTFOLIO_INDEX</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {{ currentLang === 'en' ? 'Featured Technical Projects' : 'ผลงานและโครงงานวิศวกรรม' }}
        </h2>
        <p class="text-slate-400 text-sm sm:text-base max-w-xl">
          {{ currentLang === 'en'
            ? 'Interactive showcase of 14+ engineered systems spanning RESTful APIs, IoT telemetry, and AI models.'
            : 'รวมผลงาน 14 โครงการ ทั้งระบบแบ็กเอนด์ API, โซลูชัน IoT เซ็นเซอร์ และโมเดล AI ตรวจจับ' }}
        </p>
      </div>

      <!-- Category Filter Pills -->
      <div class="flex items-center gap-1.5 p-1 rounded-xl glass-card border border-white/10 max-w-full overflow-x-auto no-scrollbar self-start md:self-auto shrink-0">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="selectedCategory = cat.id"
          class="px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5"
          :class="selectedCategory === cat.id
            ? 'bg-cyber-cyan text-slate-950 font-bold shadow-md shadow-cyber-cyan/30'
            : 'text-slate-400 hover:text-white hover:bg-white/5'"
        >
          <span>{{ cat.label[currentLang] }}</span>
          <span
            class="text-[10px] px-1.5 py-0.2 rounded-full"
            :class="selectedCategory === cat.id ? 'bg-slate-950/20 text-slate-950' : 'bg-white/10 text-slate-400'"
          >
            {{ getCount(cat.id) }}
          </span>
        </button>
      </div>
    </div>

    <!-- Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        @mousemove="onMouseMove($event, project.id)"
        @mouseleave="onMouseLeave(project.id)"
        :style="getCardStyle(project.id)"
        class="glass-card rounded-2xl p-6 border border-white/5 hover:border-cyber-cyan/40 transition-all duration-200 flex flex-col justify-between relative group cursor-pointer overflow-hidden transform-gpu"
        @click="selectedProject = project; openDialog()"
      >
        <!-- Background Neon Highlight -->
        <div class="absolute -right-16 -top-16 w-32 h-32 bg-cyber-cyan/10 rounded-full blur-2xl group-hover:bg-cyber-cyan/25 transition-all pointer-events-none" />

        <div>
          <!-- Top Row: Category & Year -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span
              class="text-[11px] font-mono uppercase px-2 py-0.5 rounded-md border"
              :class="getCategoryBadgeClass(project.category)"
            >
              {{ project.category }}
            </span>
            <span class="text-xs font-mono text-slate-300">{{ project.year }}</span>
          </div>

          <!-- Title -->
          <h3 class="text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors mb-2 line-clamp-2">
            {{ project.title[currentLang] }}
          </h3>

          <!-- Description -->
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
            {{ project.description[currentLang] }}
          </p>
        </div>

        <div>
          <!-- Key Metric Tag -->
          <div v-if="project.stats" class="text-xs font-mono text-cyber-cyan/90 mb-3 flex items-center gap-1.5">
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
            <span>{{ project.stats }}</span>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
            <span
              v-for="(tag, tIdx) in project.tags.slice(0, 3)"
              :key="tIdx"
              class="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300"
            >
              {{ tag }}
            </span>
            <span v-if="project.tags.length > 3" class="text-[11px] font-mono px-1 py-0.5 text-slate-400">
              +{{ project.tags.length - 3 }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Detail Dialog (Conforms to modern-web-guidance) -->
    <dialog
      ref="dialogRef"
      class="max-w-2xl w-[94vw] m-auto rounded-2xl glass-card border border-cyber-cyan/40 p-0 text-slate-100 shadow-2xl backdrop:backdrop-blur-md max-h-[88vh] overflow-y-auto"
      @click="onBackdropClick"
    >
      <div v-if="selectedProject" class="p-5 sm:p-8 space-y-5 sm:space-y-6">
        <div class="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-mono uppercase px-2 py-0.5 rounded-md border" :class="getCategoryBadgeClass(selectedProject.category)">
                {{ selectedProject.category }}
              </span>
              <span class="text-xs font-mono text-slate-400">Year {{ selectedProject.year }}</span>
            </div>
            <h3 class="text-2xl font-bold text-white">
              {{ selectedProject.title[currentLang] }}
            </h3>
          </div>
          <button
            @click="closeDialog"
            class="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            &times;
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <h4 class="text-xs font-mono uppercase tracking-wider text-cyber-cyan mb-1">
              // {{ currentLang === 'en' ? 'System Overview' : 'ภาพรวมระบบ' }}
            </h4>
            <p class="text-sm sm:text-base text-slate-200 leading-relaxed">
              {{ selectedProject.description[currentLang] }}
            </p>
          </div>

          <div v-if="selectedProject.stats" class="p-3 rounded-xl bg-black/40 border border-cyber-cyan/20">
            <span class="text-xs font-mono text-slate-400">Architecture Feature:</span>
            <p class="text-sm font-mono text-cyber-cyan font-bold mt-0.5">{{ selectedProject.stats }}</p>
          </div>

          <div>
            <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              // {{ currentLang === 'en' ? 'Technology Stack' : 'เทคโนโลยีที่ใช้' }}
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(tag, idx) in selectedProject.tags"
                :key="idx"
                class="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-slate-200 border border-white/10"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <div class="flex justify-end pt-4 border-t border-white/10">
          <button
            @click="closeDialog"
            class="px-5 py-2 rounded-xl font-mono text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
          >
            {{ currentLang === 'en' ? 'Close' : 'ปิดหน้าต่าง' }}
          </button>
        </div>
      </div>
    </dialog>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import type { ProjectItem } from '~/types/portfolio'
import profileData from '~/data/profile.json'

const { currentLang } = useLanguage()

const selectedCategory = ref<string>('all')
const selectedProject = ref<ProjectItem | null>(null)
const dialogRef = ref<HTMLDialogElement | null>(null)

// 3D Card Tilt state
const tiltMap = reactive<Record<string, { rx: number; ry: number }>>({})

const onMouseMove = (e: MouseEvent, id: string) => {
  const card = e.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  
  // Calculate rotation (max 10deg)
  const rx = -(y / (rect.height / 2)) * 8
  const ry = (x / (rect.width / 2)) * 8
  tiltMap[id] = { rx, ry }
}

const onMouseLeave = (id: string) => {
  tiltMap[id] = { rx: 0, ry: 0 }
}

const getCardStyle = (id: string) => {
  const tilt = tiltMap[id]
  if (!tilt || (tilt.rx === 0 && tilt.ry === 0)) {
    return {
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.3s ease-out'
    }
  }
  return {
    transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
    transition: 'transform 0.05s ease-out'
  }
}

const categories = [
  { id: 'all', label: { en: 'All Systems', th: 'ทั้งหมด' } },
  { id: 'backend', label: { en: 'Backend & APIs', th: 'แบ็กเอนด์ & API' } },
  { id: 'iot', label: { en: 'IoT & Embedded', th: 'IoT & อุปกรณ์' } },
  { id: 'ai', label: { en: 'AI & Vision', th: 'AI & วิทัศน์' } },
  { id: 'fullstack', label: { en: 'Apps & CRM', th: 'แอป & CRM' } }
]

const getCount = (catId: string) => {
  if (catId === 'all') return profileData.projects.length
  return profileData.projects.filter(p => p.category === catId).length
}

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') return profileData.projects
  return profileData.projects.filter(p => p.category === selectedCategory.value)
})

const getCategoryBadgeClass = (category: string) => {
  switch (category) {
    case 'backend':
      return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
    case 'ai':
      return 'bg-purple-500/10 text-purple-400 border-purple-500/30'
    case 'iot':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
    default:
      return 'bg-amber-500/10 text-amber-400 border-amber-500/30'
  }
}

const openDialog = () => {
  dialogRef.value?.showModal()
}

const closeDialog = () => {
  dialogRef.value?.close()
}

const onBackdropClick = (e: MouseEvent) => {
  if (e.target === dialogRef.value) {
    closeDialog()
  }
}
</script>
