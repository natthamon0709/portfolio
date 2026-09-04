<template>
  <section id="experience" class="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
    <!-- Section Header -->
    <div class="text-left mb-12 space-y-2">
      <div class="inline-flex items-center gap-2 text-xs font-mono text-cyber-cyan uppercase tracking-wider">
        <span>// 01. CAREER_TRACE & CAPABILITIES</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {{ currentLang === 'en' ? 'Engineering Experience & Impact' : 'ประสบการณ์ทำงาน & ศักยภาพทางวิศวกรรม' }}
      </h2>
      <p class="text-slate-400 text-sm sm:text-base max-w-2xl">
        {{ currentLang === 'en'
          ? 'Proven track record architecting mission-critical backend APIs, optimizing enterprise databases (MySQL/Oracle), and leading IoT systems from design to production.'
          : 'เส้นทางการทำงานจริงที่พิสูจน์แล้ว ทั้งการออกแบบสถาปัตยกรรม RESTful API ระดับ Mission-Critical, การปรับแต่งฐานข้อมูลระดับองค์กร (MySQL/Oracle) และระบบ IoT ครบวงจร' }}
      </p>
    </div>

    <!-- 3 Core Engineering Pillars -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
      <div class="glass-card rounded-2xl p-5 border border-cyber-cyan/30 hover:border-cyber-cyan/60 transition-all">
        <div class="text-xs font-mono text-cyber-cyan font-bold mb-1">PILLAR 01</div>
        <h3 class="text-base font-bold text-white mb-1.5">
          {{ currentLang === 'en' ? 'RESTful API & Microservices' : 'สถาปัตยกรรม API & ไมโครเซอร์วิส' }}
        </h3>
        <p class="text-xs text-slate-400 font-mono leading-relaxed">
          {{ currentLang === 'en'
            ? 'Sub-100ms latency, high-throughput token rotation, rate-limiting, and 99.9% uptime for mobile & web apps.'
            : 'Latency ต่ำกว่า 100ms, จัดการ Token และ Rate-Limiting รองรับเว็บและโมบายล์ พร้อมเสถียรภาพ 99.9%' }}
        </p>
      </div>

      <div class="glass-card rounded-2xl p-5 border border-purple-500/30 hover:border-purple-500/60 transition-all">
        <div class="text-xs font-mono text-purple-400 font-bold mb-1">PILLAR 02</div>
        <h3 class="text-base font-bold text-white mb-1.5">
          {{ currentLang === 'en' ? 'Enterprise SQL & Schemas' : 'ฐานข้อมูลองค์กร (MySQL & Oracle)' }}
        </h3>
        <p class="text-xs text-slate-400 font-mono leading-relaxed">
          {{ currentLang === 'en'
            ? 'Database normalization, B-Tree index optimization, stored procedures, and complex data migration.'
            : 'การออกแบบ Normalization, ปรับแต่ง Index แก้ปัญหาคอขวด, เขียน Stored Procedure และไมเกรตข้อมูล' }}
        </p>
      </div>

      <div class="glass-card rounded-2xl p-5 border border-emerald-500/30 hover:border-emerald-500/60 transition-all">
        <div class="text-xs font-mono text-emerald-400 font-bold mb-1">PILLAR 03</div>
        <h3 class="text-base font-bold text-white mb-1.5">
          {{ currentLang === 'en' ? 'IoT Telemetry & Industrial UI' : 'IoT เทเลเมทรี & ฮาร์ดแวร์หน้างาน' }}
        </h3>
        <p class="text-xs text-slate-400 font-mono leading-relaxed">
          {{ currentLang === 'en'
            ? 'ESP32 firmware, real-time sensor polling, Node-RED flows, and field engineer interfaces at SCG.'
            : 'เขียนเฟิร์มแวร์ ESP32, สตรีมมิ่งข้อมูลเซ็นเซอร์สด, ระบบ Node-RED และ UI สำหรับวิศวกรหน้างานจริง' }}
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
              // {{ currentLang === 'en' ? 'Leadership & Campus Impact' : 'บทบาทผู้นำและกิจกรรมขับเคลื่อนในมหาวิทยาลัย' }}
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
