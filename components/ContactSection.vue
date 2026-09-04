<template>
  <footer id="contact" class="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/10">
    <div class="glass-card rounded-3xl p-8 sm:p-12 border border-cyber-cyan/30 relative overflow-hidden">
      <!-- Glow background -->
      <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-cyber-cyan/15 rounded-full blur-3xl pointer-events-none" />
      <div class="absolute -right-20 -top-20 w-64 h-64 bg-cyber-purple/15 rounded-full blur-3xl pointer-events-none" />

      <div class="relative z-10 max-w-3xl space-y-6 text-left">
        <div class="inline-flex items-center gap-2 text-xs font-mono text-cyber-cyan uppercase tracking-wider">
          <span>// 05. DISPATCH_MESSAGE</span>
        </div>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          {{ currentLang === 'en' ? 'Let’s Build High-Impact Systems Together.' : 'ร่วมงานและสร้างสรรค์ระบบคุณภาพไปด้วยกัน' }}
        </h2>

        <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
          {{ currentLang === 'en'
            ? 'Whether you are scaling backend microservices, optimizing database systems, or architecting IoT solutions, I am ready to bring engineering excellence to your team.'
            : 'พร้อมนำทักษะด้านสถาปัตยกรรมแบ็กเอนด์ API, ฐานข้อมูลระดับองค์กร และวิศวกรรมระบบ IoT มาร่วมพัฒนาและยกระดับผลิตภัณฑ์ของคุณ' }}
        </p>

        <!-- Interactive Contact Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <!-- Email Card -->
          <div class="p-4 sm:p-5 rounded-2xl glass-card border border-white/10 hover:border-cyber-cyan/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group">
            <div class="min-w-0">
              <span class="text-xs font-mono text-slate-400">Direct Email:</span>
              <p class="text-sm font-mono text-white group-hover:text-cyber-cyan transition-colors break-all">
                {{ profileData.profile.contact.email }}
              </p>
            </div>
            <button
              @click="copyEmail"
              class="self-start sm:self-auto px-3.5 py-1.5 rounded-lg text-xs font-mono bg-cyber-cyan/15 hover:bg-cyber-cyan/30 text-cyber-cyan border border-cyber-cyan/30 transition-all cursor-pointer shrink-0"
            >
              {{ copied ? (currentLang === 'en' ? 'Copied!' : 'คัดลอกแล้ว!') : (currentLang === 'en' ? 'Copy Email' : 'คัดลอกอีเมล') }}
            </button>
          </div>

          <!-- Phone Card -->
          <div class="p-4 sm:p-5 rounded-2xl glass-card border border-white/10 hover:border-cyber-emerald/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group">
            <div>
              <span class="text-xs font-mono text-slate-400">Mobile Phone:</span>
              <p class="text-sm font-mono text-white group-hover:text-cyber-emerald transition-colors">
                {{ profileData.profile.contact.phone }}
              </p>
            </div>
            <a
              :href="`tel:${profileData.profile.contact.phone.replace(/-/g, '')}`"
              class="self-start sm:self-auto px-4 py-1.5 rounded-lg text-xs font-mono bg-cyber-emerald/15 hover:bg-cyber-emerald/30 text-cyber-emerald border border-cyber-emerald/30 transition-all shrink-0"
            >
              {{ currentLang === 'en' ? 'Call Directly' : 'โทรติดต่อ' }}
            </a>
          </div>
        </div>

        <!-- Location Note -->
        <div class="pt-2 text-xs font-mono text-slate-400 flex items-center gap-2">
          <span class="text-cyber-cyan">&bull;</span>
          <span>{{ profileData.profile.contact.address }}</span>
        </div>
      </div>
    </div>

    <!-- Bottom Copyright & Tech Stack Credit -->
    <div class="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 pb-28 sm:pb-16">
      <div>
        &copy; {{ new Date().getFullYear() }} Natthamon Kosem. Built with Nuxt 4 & Tailwind CSS.
      </div>
      <div class="flex items-center gap-3">
        <span class="text-slate-400">Deployed on Vercel</span>
        <span>&bull;</span>
        <a href="#about" class="text-cyber-cyan hover:underline">Back to top &uarr;</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import profileData from '~/data/profile.json'
import confetti from 'canvas-confetti'

const { currentLang } = useLanguage()
const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profileData.profile.contact.email)
    copied.value = true
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    })
    setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch (err) {
    console.error(err)
  }
}
</script>
