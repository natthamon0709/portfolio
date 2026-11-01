<template>
  <section id="experience" class="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
    <!-- Section Header -->
    <div class="text-left mb-12 space-y-2">
      <div class="inline-flex items-center gap-2 text-xs font-mono text-cyber-cyan uppercase tracking-wider">
        <span>01. CAREER_TRACE & CAPABILITIES</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {{ currentLang === 'en' ? 'Full-Stack Experience & Engineering Impact' : 'ประสบการณ์ทำงาน & ศักยภาพฟูลสแตก' }}
      </h2>
      <p class="text-slate-400 text-sm sm:text-base max-w-2xl">
        {{ currentLang === 'en'
          ? 'Proven track record delivering modern reactive frontends, architecting mission-critical backend APIs, optimizing enterprise databases (MySQL/Oracle), and leading industrial IoT systems.'
          : 'เส้นทางการทำงานจริงที่พิสูจน์แล้ว ทั้งการพัฒนาฟรอนต์เอนด์สมัยใหม่, สถาปัตยกรรม RESTful API, การบริหารฐานข้อมูลระดับองค์กร (MySQL/Oracle) และระบบ IoT ครบวงจร' }}
      </p>
    </div>

    <!-- 4 Core Full-Stack Engineering Pillars -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      <!-- Pillar 01: Modern Frontend -->
      <div class="glass-card rounded-2xl p-5 border border-indigo-500/30 hover:border-indigo-500/60 transition-all">
        <div class="text-xs font-mono text-indigo-400 font-bold mb-1">PILLAR 01</div>
        <h3 class="text-base font-bold text-white mb-1.5">
          {{ currentLang === 'en' ? 'Frontend & Modern Web' : 'ฟรอนต์เอนด์ & เว็บสมัยใหม่' }}
        </h3>
        <p class="text-xs text-slate-400 font-mono leading-relaxed">
          {{ currentLang === 'en'
            ? 'Vue 3 / Nuxt 4, React, Redux, TypeScript, Tailwind CSS, SSR, and responsive micro-interactions.'
            : 'Vue 3 / Nuxt 4, React, Redux, TypeScript, Tailwind CSS, สถาปัตยกรรม SSR และเว็บเรสปอนซีฟ' }}
        </p>
      </div>

      <!-- Pillar 02: RESTful APIs -->
      <div class="glass-card rounded-2xl p-5 border border-cyber-cyan/30 hover:border-cyber-cyan/60 transition-all">
        <div class="text-xs font-mono text-cyber-cyan font-bold mb-1">PILLAR 02</div>
        <h3 class="text-base font-bold text-white mb-1.5">
          {{ currentLang === 'en' ? 'Backend & Microservices' : 'สถาปัตยกรรม API & แบ็กเอนด์' }}
        </h3>
        <p class="text-xs text-slate-400 font-mono leading-relaxed">
          {{ currentLang === 'en'
            ? 'Sub-100ms latency, high-throughput Node.js & Laravel MVC, token auth lifecycle, and 99.9% uptime.'
            : 'Latency ต่ำกว่า 100ms, โครงสร้าง Node.js & Laravel, จัดการ Auth Token และเสถียรภาพ 99.9%' }}
        </p>
      </div>

      <!-- Pillar 03: Enterprise SQL -->
      <div class="glass-card rounded-2xl p-5 border border-purple-500/30 hover:border-purple-500/60 transition-all">
        <div class="text-xs font-mono text-purple-400 font-bold mb-1">PILLAR 03</div>
        <h3 class="text-base font-bold text-white mb-1.5">
          {{ currentLang === 'en' ? 'Enterprise SQL & Schemas' : 'ฐานข้อมูลองค์กร (MySQL/Oracle)' }}
        </h3>
        <p class="text-xs text-slate-400 font-mono leading-relaxed">
          {{ currentLang === 'en'
            ? 'Relational schema normalization, B-Tree index tuning, stored procedures, and complex data integrity.'
            : 'การออกแบบ Normalization, ปรับแต่ง Index แก้ปัญหาคอขวด, Stored Procedure และธุรกรรมปลอดภัย' }}
        </p>
      </div>

      <!-- Pillar 04: DevOps & IoT -->
      <div class="glass-card rounded-2xl p-5 border border-emerald-500/30 hover:border-emerald-500/60 transition-all">
        <div class="text-xs font-mono text-emerald-400 font-bold mb-1">PILLAR 04</div>
        <h3 class="text-base font-bold text-white mb-1.5">
          {{ currentLang === 'en' ? 'DevOps, Cloud & IoT Systems' : 'DevOps & ระบบอัตโนมัติ IoT' }}
        </h3>
        <p class="text-xs text-slate-400 font-mono leading-relaxed">
          {{ currentLang === 'en'
            ? 'GitLab CI/CD automated pipelines, Nitro/Vercel edge deploy, Modbus TCP PLC, and Cognex Vision.'
            : 'ไปป์ไลน์ GitLab CI/CD อัตโนมัติ, Nitro/Vercel Deploy, ควบคุม PLC Modbus TCP และระบบ Machine Vision' }}
        </p>
      </div>
    </div>

    <!-- Timeline Grid -->
    <div class="relative border-l-2 border-slate-800 ml-2.5 sm:ml-4 md:ml-8 space-y-8 sm:space-y-12">
      <div
        v-for="(exp, idx) in profileData.experiences"
        :key="idx"
        class="relative pl-4 sm:pl-6 md:pl-10 group"
      >
        <!-- Timeline Node with glowing color -->
        <div
          class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 bg-cyber-bg transition-all duration-300 group-hover:scale-125"
          :style="{ borderColor: exp.color, boxShadow: `0 0 12px ${exp.color}80` }"
        />

        <!-- Experience Card -->
        <div class="glass-card rounded-2xl p-4 sm:p-6 sm:p-7 border border-white/5 group-hover:border-white/20 transition-all">
          <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
                  {{ exp.company }}
                </h3>
                <span class="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                  {{ exp.type[currentLang] }}
                </span>
              </div>
              <p class="text-sm font-mono text-cyber-cyan mt-1 font-semibold">
                {{ exp.role[currentLang] }}
              </p>
            </div>
            <div class="text-xs font-mono px-3 py-1.5 rounded-lg bg-black/50 text-slate-300 border border-slate-800">
              {{ exp.period }}
            </div>
          </div>

          <!-- Highlight Bullets -->
          <ul class="space-y-2.5 mt-5 text-xs sm:text-sm text-slate-300">
            <li
              v-for="(item, i) in exp.highlights[currentLang]"
              :key="i"
              class="flex items-start gap-2.5 leading-relaxed"
            >
              <span class="text-cyber-cyan mt-1 text-xs select-none">&bull;</span>
              <span>{{ item }}</span>
            </li>
          </ul>

          <!-- Skill Badges -->
          <div class="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-800/80">
            <span
              v-for="(skill, sIdx) in exp.skills"
              :key="sIdx"
              class="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5 hover:border-cyber-cyan/40 hover:text-cyber-cyan transition-colors"
            >
              #{{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- Education Item in Timeline -->
      <div class="relative pl-4 sm:pl-6 md:pl-10 group">
        <div
          class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-amber-400 bg-cyber-bg transition-all duration-300 group-hover:scale-125"
          style="box-shadow: 0 0 12px rgba(251, 191, 36, 0.5);"
        />

        <div class="glass-card rounded-2xl p-4 sm:p-6 sm:p-7 border border-white/5 group-hover:border-amber-400/40 transition-all">
          <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {{ profileData.education.institution[currentLang] }}
                </h3>
                <span class="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 font-bold">
                  GPA {{ profileData.education.gpa }}
                </span>
              </div>
              <p class="text-sm font-mono text-slate-300 mt-1">
                {{ profileData.education.degree[currentLang] }}
              </p>
            </div>
            <div class="text-xs font-mono px-3 py-1.5 rounded-lg bg-black/50 text-slate-300 border border-slate-800">
              Class of {{ profileData.education.year }}
            </div>
          </div>

          <!-- Leadership Roles -->
          <div class="mt-5 space-y-2.5">
            <p class="text-xs font-mono uppercase tracking-wider text-amber-400/90 font-bold">
              {{ currentLang === 'en' ? 'Leadership & Campus Impact' : 'บทบาทผู้นำและกิจกรรมขับเคลื่อนในมหาวิทยาลัย' }}
            </p>
            <ul class="space-y-2 text-xs sm:text-sm text-slate-300">
              <li
                v-for="(role, rIdx) in profileData.education.leadership[currentLang]"
                :key="rIdx"
                class="flex items-start gap-2.5"
              >
                <span class="text-amber-400 mt-1 text-xs select-none">&bull;</span>
                <span>{{ role }}</span>
              </li>
            </ul>
          </div>

          <!-- Academic Honor Award -->
          <div class="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-amber-300">
            <span>&starf;</span>
            <span class="font-semibold">{{ profileData.education.award.title[currentLang] }}</span>
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
