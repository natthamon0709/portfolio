<template>
  <section id="skills" class="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
    <!-- Header -->
    <div class="text-left mb-12 space-y-2">
      <div class="inline-flex items-center gap-2 text-xs font-mono text-cyber-cyan uppercase tracking-wider">
        <span>// 03. TECH_STACK</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {{ currentLang === 'en' ? 'Full-Stack & Engineering Competencies' : 'ทักษะและความเชี่ยวชาญฟูลสแตก & วิศวกรรม' }}
      </h2>
      <p class="text-slate-400 text-sm sm:text-base max-w-xl">
        {{ currentLang === 'en'
          ? 'Production-tested technologies across frontend, backend, databases, DevOps, and real-world industrial IoT.'
          : 'เทคโนโลยี สถาปัตยกรรม และทักษะระบบที่ผ่านการใช้งานจริง ครบทั้งฟรอนต์เอนด์, แบ็กเอนด์, ฐานข้อมูล, DevOps และ IoT' }}
      </p>
    </div>

    <!-- Skills Grid: 6 Balanced Cards (3x2 on desktop) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- 01. Frontend & Modern Web -->
      <div class="glass-card rounded-2xl p-4 sm:p-6 border border-white/5 hover:border-indigo-500/40 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-5 pb-3 border-b border-white/10">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded bg-indigo-500 inline-block shadow-sm shadow-indigo-500/50" />
              <h3 class="text-lg font-bold text-white font-mono">
                {{ currentLang === 'en' ? 'Frontend & Modern Web' : 'ฟรอนต์เอนด์ & เว็บสมัยใหม่' }}
              </h3>
            </div>
            <span class="text-[11px] font-mono text-indigo-400">Full-Stack UI</span>
          </div>

          <div class="space-y-3.5">
            <div
              v-for="skill in profileData.skills.frontend"
              :key="skill.name"
              class="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-indigo-500/30 transition-all group"
            >
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {{ skill.name }}
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-medium">
                  {{ skill.badge[currentLang] }}
                </span>
              </div>
              <p class="text-xs text-slate-400 font-mono leading-relaxed">
                {{ skill.detail[currentLang] }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 02. Backend & APIs -->
      <div class="glass-card rounded-2xl p-4 sm:p-6 border border-white/5 hover:border-cyber-cyan/40 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-5 pb-3 border-b border-white/10">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded bg-cyber-cyan inline-block shadow-sm shadow-cyber-cyan/50" />
              <h3 class="text-lg font-bold text-white font-mono">
                {{ currentLang === 'en' ? 'Backend & APIs' : 'สถาปัตยกรรมแบ็กเอนด์ & API' }}
              </h3>
            </div>
            <span class="text-[11px] font-mono text-cyber-cyan">Production</span>
          </div>

          <div class="space-y-3.5">
            <div
              v-for="skill in profileData.skills.backend"
              :key="skill.name"
              class="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-cyber-cyan/30 transition-all group"
            >
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="text-sm font-bold text-white group-hover:text-cyber-cyan transition-colors">
                  {{ skill.name }}
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30 font-medium">
                  {{ skill.badge[currentLang] }}
                </span>
              </div>
              <p class="text-xs text-slate-400 font-mono leading-relaxed">
                {{ skill.detail[currentLang] }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 03. Databases -->
      <div class="glass-card rounded-2xl p-4 sm:p-6 border border-white/5 hover:border-purple-500/40 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-5 pb-3 border-b border-white/10">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded bg-cyber-purple inline-block shadow-sm shadow-cyber-purple/50" />
              <h3 class="text-lg font-bold text-white font-mono">
                {{ currentLang === 'en' ? 'Databases & Schemas' : 'ฐานข้อมูล (MySQL & Oracle)' }}
              </h3>
            </div>
            <span class="text-[11px] font-mono text-purple-400">Enterprise</span>
          </div>

          <div class="space-y-3.5">
            <div
              v-for="skill in profileData.skills.database"
              :key="skill.name"
              class="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-purple-500/30 transition-all group"
            >
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                  {{ skill.name }}
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 font-medium">
                  {{ skill.badge[currentLang] }}
                </span>
              </div>
              <p class="text-xs text-slate-400 font-mono leading-relaxed">
                {{ skill.detail[currentLang] }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 04. Languages -->
      <div class="glass-card rounded-2xl p-4 sm:p-6 border border-white/5 hover:border-blue-500/40 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-5 pb-3 border-b border-white/10">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded bg-blue-500 inline-block shadow-sm shadow-blue-500/50" />
              <h3 class="text-lg font-bold text-white font-mono">
                {{ currentLang === 'en' ? 'Core Languages' : 'ภาษาคอมพิวเตอร์หลัก' }}
              </h3>
            </div>
            <span class="text-[11px] font-mono text-blue-400">Polyglot</span>
          </div>

          <div class="space-y-3">
            <div
              v-for="skill in profileData.skills.languages"
              :key="skill.name"
              class="p-2.5 rounded-xl bg-black/40 border border-white/5 hover:border-blue-500/30 transition-all group flex flex-col justify-between"
            >
              <div class="flex items-center justify-between gap-2">
                <span class="text-xs sm:text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                  {{ skill.name }}
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">
                  {{ skill.badge[currentLang] }}
                </span>
              </div>
              <p class="text-[11px] text-slate-400 font-mono mt-1 leading-normal">
                {{ skill.detail[currentLang] }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 05. DevOps & Deployments -->
      <div class="glass-card rounded-2xl p-4 sm:p-6 border border-white/5 hover:border-amber-500/40 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-5 pb-3 border-b border-white/10">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded bg-cyber-amber inline-block shadow-sm shadow-cyber-amber/50" />
              <h3 class="text-lg font-bold text-white font-mono">
                {{ currentLang === 'en' ? 'DevOps & Deployments' : 'DevOps & การส่งมอบงาน' }}
              </h3>
            </div>
            <span class="text-[11px] font-mono text-amber-400">Automation</span>
          </div>

          <div class="space-y-3.5">
            <div
              v-for="skill in profileData.skills.devops"
              :key="skill.name"
              class="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-amber-500/30 transition-all group"
            >
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                  {{ skill.name }}
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 font-medium">
                  {{ skill.badge[currentLang] }}
                </span>
              </div>
              <p class="text-xs text-slate-400 font-mono leading-relaxed">
                {{ skill.detail[currentLang] }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 06. IoT & Machine Vision -->
      <div class="glass-card rounded-2xl p-4 sm:p-6 border border-white/5 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-5 pb-3 border-b border-white/10">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded bg-cyber-emerald inline-block shadow-sm shadow-cyber-emerald/50" />
              <h3 class="text-lg font-bold text-white font-mono">
                {{ currentLang === 'en' ? 'IoT & Computer Vision' : 'IoT & คอมพิวเตอร์วิทัศน์' }}
              </h3>
            </div>
            <span class="text-[11px] font-mono text-emerald-400">Hardware & ML</span>
          </div>

          <div class="space-y-3.5">
            <div
              v-for="skill in profileData.skills.iotAi"
              :key="skill.name"
              class="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-emerald-500/30 transition-all group"
            >
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {{ skill.name }}
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium">
                  {{ skill.badge[currentLang] }}
                </span>
              </div>
              <p class="text-xs text-slate-400 font-mono leading-relaxed">
                {{ skill.detail[currentLang] }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'
import profileData from '~/data/profile.json'

const { currentLang } = useLanguage()
</script>
