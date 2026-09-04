<template>
  <section id="about" class="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
    <!-- Top Status Badge -->
    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyber-cyan/30 text-xs sm:text-sm font-mono text-slate-300 mb-6 shadow-sm shadow-cyber-cyan/10">
      <span class="relative flex h-2 w-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-cyber-emerald"></span>
      </span>
      <span>{{ profileData.profile.badge[currentLang] }}</span>
    </div>

    <!-- Main Grid: Hero Info + Avatar & Terminal Card -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <!-- Left: Introduction -->
      <div class="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
        <div class="space-y-2">
          <p class="text-xs sm:text-sm font-mono uppercase tracking-widest text-cyber-cyan font-semibold">
            // {{ currentLang === 'en' ? 'Computer Engineer & Back-End Architect' : 'วิศวกรคอมพิวเตอร์ & นักพัฒนาแบ็กเอนด์' }}
          </p>
          <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            {{ profileData.profile.name[currentLang] }}
            <span class="block text-xl sm:text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-blue-400 to-cyber-purple mt-1 sm:mt-1.5">
              ({{ profileData.profile.nickname[currentLang] }}) &bull; {{ profileData.profile.role[currentLang] }}
            </span>
          </h1>
        </div>

        <p class="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-light">
          {{ profileData.profile.bio[currentLang] }}
        </p>

        <!-- Action CTAs -->
        <div class="flex flex-wrap gap-2.5 sm:gap-3 pt-1 sm:pt-2">
          <a
            href="#projects"
            class="w-full sm:w-auto text-center justify-center px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <span>{{ currentLang === 'en' ? 'View 14+ Projects' : 'ดูผลงานทั้งหมด (14 โครงการ)' }}</span>
            <span aria-hidden="true">&rarr;</span>
          </a>

          <button
            @click="$emit('open-terminal')"
            class="flex-1 sm:flex-none justify-center px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold glass-card border border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan/10 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>$ terminal</span>
          </button>

          <a
            href="#contact"
            class="flex-1 sm:flex-none text-center justify-center px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold glass-card border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          >
            {{ currentLang === 'en' ? 'Contact Nut' : 'ติดต่อคุณนัท' }}
          </a>
        </div>

        <!-- Quick Contacts Bar -->
        <div class="pt-4 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-mono text-slate-400 border-t border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-cyber-cyan font-bold">Email:</span>
            <a :href="`mailto:${profileData.profile.contact.email}`" class="text-slate-200 hover:text-cyber-cyan underline underline-offset-4 break-all">
              {{ profileData.profile.contact.email }}
            </a>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-cyber-cyan font-bold">Tel:</span>
            <a :href="`tel:${profileData.profile.contact.phone.replace(/-/g, '')}`" class="text-slate-200 hover:text-cyber-cyan">
              {{ profileData.profile.contact.phone }}
            </a>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-cyber-cyan font-bold">Location:</span>
            <span>{{ profileData.profile.contact.location[currentLang] }}</span>
          </div>
        </div>
      </div>

      <!-- Right: Real Portrait Image Card with Cyber Aesthetic -->
      <div class="lg:col-span-5 max-w-sm sm:max-w-md mx-auto lg:max-w-none w-full">
        <div class="relative group">
          <!-- Background Glow Effect -->
          <div class="absolute -inset-1 bg-gradient-to-r from-cyber-cyan via-blue-600 to-cyber-purple rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-700 pointer-events-none" />

          <!-- Main Glass Card -->
          <div class="relative rounded-3xl glass-card border border-white/15 p-4 sm:p-5 shadow-2xl overflow-hidden bg-slate-950/80 backdrop-blur-xl">
            <!-- Top Controls -->
            <div class="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-red-500/90 inline-block" />
                <span class="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span class="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span class="text-xs font-mono text-slate-400 ml-2">natthamon-kosem.profile</span>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20">
                B.Eng
              </span>
            </div>

            <!-- Profile Image Container -->
            <div class="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[380px] w-full bg-slate-900 border border-white/10 group">
              <img
                :src="imageSrc"
                :alt="profileData.profile.name[currentLang]"
                class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                @error="onImgError"
              />

              <!-- Gradient overlay on image bottom -->
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              <!-- Overlay Badges on Image -->
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                <div class="glass-card px-3 py-1.5 rounded-xl border border-white/15 backdrop-blur-md">
                  <p class="text-xs font-bold text-white leading-none">
                    {{ profileData.profile.name[currentLang] }}
                  </p>
                  <p class="text-[10px] font-mono text-cyber-cyan mt-1">
                    {{ currentLang === 'en' ? 'Back-end Developer' : 'วิศวกรแบ็กเอนด์' }}
                  </p>
                </div>
                <div class="glass-card px-2.5 py-1.5 rounded-xl border border-cyber-emerald/40 backdrop-blur-md flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse" />
                  <span class="text-[10px] font-mono text-emerald-300 font-semibold">Active</span>
                </div>
              </div>
            </div>

            <!-- Mini Terminal Footer in Card -->
            <div class="mt-3 pt-3 border-t border-white/10 font-mono text-xs text-slate-400 flex items-center justify-between">
              <div class="flex items-center gap-1.5">
                <span class="text-cyber-cyan">$</span>
                <span class="text-slate-300">cat expertise.json</span>
              </div>
              <button
                @click="$emit('open-terminal')"
                class="text-cyber-cyan hover:underline text-xs flex items-center gap-1 cursor-pointer"
              >
                <span>Launch CLI</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Row -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      <div
        v-for="(stat, idx) in profileData.stats"
        :key="idx"
        class="glass-card rounded-2xl p-5 border border-white/5 hover:border-cyber-cyan/30 transition-all text-center group"
      >
        <div class="text-3xl sm:text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyber-cyan to-blue-400 group-hover:scale-105 transition-transform">
          {{ stat.value }}
        </div>
        <div class="text-xs sm:text-sm font-mono text-slate-400 mt-1">
          {{ stat.label[currentLang] }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import profileData from '~/data/profile.json'
import nutProfileImg from '~/assets/images/nut-profile.jpg'

defineEmits<{
  (e: 'open-terminal'): void
}>()

const { currentLang } = useLanguage()
const imageSrc = ref(nutProfileImg || profileData.profile.avatar)

const onImgError = (e: Event) => {
  const target = e.target as HTMLImageElement
  if (target && target.src !== profileData.profile.avatar) {
    target.src = profileData.profile.avatar
  }
}
</script>
