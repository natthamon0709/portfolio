<template>
  <dialog
    ref="terminalDialogRef"
    class="max-w-2xl w-[94vw] m-auto rounded-2xl glass-card border border-cyber-cyan/50 p-0 text-slate-100 shadow-2xl backdrop:backdrop-blur-md"
    @click="onBackdropClick"
  >
    <div class="bg-slate-950/95 rounded-2xl overflow-hidden font-mono flex flex-col h-[520px] max-h-[82vh]">
      <!-- Title Bar -->
      <div class="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900/90 border-b border-white/10 select-none">
        <div class="flex items-center gap-2 min-w-0">
          <button @click="close" class="w-3 h-3 rounded-full bg-red-500/90 hover:bg-red-600 transition-colors cursor-pointer shrink-0" aria-label="Close"></button>
          <span class="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shrink-0"></span>
          <span class="w-3 h-3 rounded-full bg-green-500/80 inline-block shrink-0"></span>
          <span class="text-xs text-slate-400 ml-1 sm:ml-2 truncate">nut-kosem@terminal</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[10px] px-2 py-0.5 rounded bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40">
            Interactive CLI
          </span>
          <button @click="close" class="text-slate-400 hover:text-white text-xs cursor-pointer ml-2">
            ESC
          </button>
        </div>
      </div>

      <!-- Terminal Output Window -->
      <div ref="outputAreaRef" class="flex-1 overflow-y-auto p-4 space-y-3 text-xs sm:text-sm">
        <div class="text-slate-400 pb-2 border-b border-white/5 space-y-1">
          <p class="text-cyber-cyan font-bold">Welcome to Nut Kosem's Interactive CLI v1.0.0</p>
          <p>Type <span class="text-yellow-400 font-bold">help</span> to view available commands, or click quick chips below.</p>
        </div>

        <div v-for="(log, idx) in history" :key="idx" class="space-y-1">
          <!-- Command line -->
          <div v-if="log.command" class="flex items-center gap-2 text-slate-400">
            <span class="text-cyber-cyan font-bold">guest@portfolio:~$</span>
            <span class="text-white">{{ log.command }}</span>
          </div>
          <!-- Result Output -->
          <div class="text-slate-300 leading-relaxed whitespace-pre-wrap pl-2 border-l-2" :class="log.isError ? 'border-red-500 text-red-300' : 'border-cyber-cyan/30'">
            {{ log.output }}
          </div>
        </div>
      </div>

      <!-- Quick Command Chips -->
      <div class="px-4 py-2 bg-slate-900/60 border-t border-white/5 flex items-center gap-2 overflow-x-auto text-[11px]">
        <span class="text-slate-500 select-none">Quick:</span>
        <button
          v-for="cmd in quickCommands"
          :key="cmd"
          @click="runCommand(cmd)"
          class="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-cyber-cyan hover:border-cyber-cyan/30 border border-transparent transition-all cursor-pointer whitespace-nowrap"
        >
          {{ cmd }}
        </button>
      </div>

      <!-- Terminal Input Line -->
      <form @submit.prevent="handleSubmit" class="flex items-center gap-2 px-4 py-3 bg-black/60 border-t border-white/10">
        <span class="text-cyber-cyan font-bold text-xs sm:text-sm select-none">guest@portfolio:~$</span>
        <input
          ref="inputRef"
          v-model="inputCommand"
          type="text"
          maxlength="120"
          placeholder="type a command (e.g. help, skills, projects, contact, ai)..."
          class="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder-slate-600"
          autocomplete="off"
          spellcheck="false"
        />
        <button
          type="submit"
          class="text-xs px-3 py-1 rounded bg-cyber-cyan text-slate-950 font-bold hover:bg-cyan-300 transition-colors cursor-pointer"
        >
          Run
        </button>
      </form>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import profileData from '~/data/profile.json'

interface LogEntry {
  command?: string
  output: string
  isError?: boolean
}

const terminalDialogRef = ref<HTMLDialogElement | null>(null)
const outputAreaRef = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)
const inputCommand = ref('')

const quickCommands = ['help', 'skills', 'projects', 'experience', 'education', 'contact', 'ai', 'clear']

const history = ref<LogEntry[]>([
  {
    output: "System initialized. Computer Engineer profile loaded.\nRun 'help' to explore."
  }
])

const scrollToBottom = () => {
  nextTick(() => {
    if (outputAreaRef.value) {
      outputAreaRef.value.scrollTop = outputAreaRef.value.scrollHeight
    }
  })
}

const runCommand = (cmdText: string) => {
  const trimmed = cmdText.trim()
  if (!trimmed) return

  const cmd = trimmed.toLowerCase()

  if (cmd === 'clear') {
    history.value = []
    scrollToBottom()
    return
  }

  if (cmd === 'exit') {
    close()
    return
  }

  let output = ''
  let isError = false

  switch (cmd) {
    case 'help':
      output = `Available CLI Commands:
  • skills       - List backend, database, language, and IoT technical proficiencies
  • projects     - Summarize key production projects & architectural highlights
  • experience   - View corporate experience at Rudy Tech, So-at, and SCG
  • education    - Display degree, GPA (3.27), leadership, and national award
  • contact      - Print direct email, mobile phone, and location details
  • ai           - Show AI tools and orchestration steps behind this portfolio
  • resume       - Print JSON summary of candidate profile
  • clear        - Clear the terminal screen
  • exit         - Close this terminal modal`
      break

    case 'skills':
      output = `ENGINEERING COMPETENCIES:
[Backend & APIs]:   RESTful APIs (Core Specialty), Node.js/Express, Laravel MVC, OpenAPI Specs, Postman
[Databases]:        MySQL, Oracle Database (PL/SQL), Schema Normalization, Query Optimization
[Languages]:        PHP, Python (OpenCV/NLP), JavaScript (ES6+), TypeScript, SQL, C/C++
[DevOps / CI-CD]:   GitLab CI/CD Pipelines, Git/GitHub, Vercel & Nitro Deploy, Linux Server
[IoT & AI]:         ESP32 & NodeMCU, Node-RED Automation, IoT Cloud Open-Hub, Face Detection`
      break

    case 'projects':
      output = `FEATURED PROJECTS (14 Total):
1. [2023 AI]       AI Visual Similarity Matching Engine (Cosine Vector)
2. [2023 Backend]  3rd-Party Mobile API Integration Gateway
3. [2023 IoT]      Smart Farm Industrial Machine Sensor Telemetry
4. [2022 Full]     Enterprise Mobile CRM Low-Code Application
5. [2022 Backend]  Unified Core RESTful API Platform (Node.js/Laravel/MySQL)
6. [2021 Full]     Web CRM Platform (React, Redux, React Hook Form)
7. [2020 IoT]      Smart Home Controller (React Native + Cloud Hub)
...and 7 more in the Projects Bento grid.`
      break

    case 'experience':
      output = `CAREER TRACE:
1. Rudy Technology (2022 - Present) | Back-end Developer
   - RESTful APIs, complex SQL/MVC, mobile CRM low-code bridges, GitLab CI/CD, API specs.
2. So-at Solution (2021) | Software Engineer Intern
   - Web service incident resolution, SQL stored procedures, MVC web, Postman API validation.
3. SCG, Bang Sue (2020) | Engineering Intern
   - Enterprise database optimization, IoT hardware/software monitoring, UI design.`
      break

    case 'education':
      output = `ACADEMIC CREDENTIALS:
Institution: Sripatum University (Graduated 2021)
Degree:      Bachelor of Computer Engineering (B.Eng)
GPA:         3.27
Leadership:  • President, Computer and Technology Organization
             • Vice President, Samo Sripatum (Student Council)
             • Member, University IoT Research Group
Honors:      Distinguished IT Student Award (Ethics & Morality) - InCIT/nCIT 2020`
      break

    case 'contact':
      output = `DIRECT CONTACT INFO:
Name:     Ms. Natthamon Kosem (Nut)
Email:    ${profileData.profile.contact.email}
Mobile:   ${profileData.profile.contact.phone}
Location: ${profileData.profile.contact.location.en}
Address:  ${profileData.profile.contact.address}`
      break

    case 'ai':
      output = `AI BEHIND THE BUILD (COLLABORATION STEPS):
Step 1: Antigravity AI (Gemini 3.8 Flash)
        -> Resume OCR analysis, /caveman & /modern-web-guidance, interactive /grill-me session
Step 2: Antigravity AI
        -> Normalized raw resume into bilingual data/profile.json (14 projects, 3 companies, GPA 3.27)
Step 3: Antigravity IDE
        -> Nuxt 4 (v4.5.2) scaffold, Tailwind dark cyber theme, Nitro preset 'vercel' & vercel.json
Step 4: Antigravity IDE & Modern Web Guidance
        -> HTML5 Canvas particle constellation, 3D tilt Bento Grid, CLI terminal, native @starting-style dialogs
Step 5: Antigravity CLI
        -> Headless compilation, SSR verification, and generation of .vercel/output for 1-click deploy`
      break

    case 'resume':
      output = JSON.stringify(profileData.profile, null, 2)
      break

    default:
      output = `command not found: "${trimmed}". Type "help" for valid commands.`
      isError = true
      break
  }

  history.value.push({
    command: trimmed,
    output,
    isError
  })

  if (history.value.length > 50) {
    history.value = history.value.slice(-50)
  }

  scrollToBottom()
}

const handleSubmit = () => {
  if (!inputCommand.value) return
  runCommand(inputCommand.value)
  inputCommand.value = ''
}

const open = () => {
  terminalDialogRef.value?.showModal()
  nextTick(() => {
    inputRef.value?.focus()
    scrollToBottom()
  })
}

const close = () => {
  terminalDialogRef.value?.close()
}

const onBackdropClick = (e: MouseEvent) => {
  if (e.target === terminalDialogRef.value) {
    close()
  }
}

defineExpose({
  open,
  close
})
</script>
