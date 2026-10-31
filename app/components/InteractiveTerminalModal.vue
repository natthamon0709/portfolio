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

const quickCommands = ['help', 'skills', 'stack', 'projects', 'freelance', 'experience', 'education', 'contact', 'clear']

const history = ref<LogEntry[]>([
  {
    output: "System initialized. Computer Engineer & Full-Stack Developer profile loaded.\nRun 'help' or 'stack' to explore."
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
  • stack        - View full-stack engineering layers & architecture
  • skills       - List frontend, backend, database, devops, and IoT competencies
  • projects     - Summarize 15+ key production projects & architectural highlights
  • freelance    - Inspect VBX_APUST Industrial Dispensing Control HMI System
  • experience   - View corporate & freelance experience (Rudy Tech, Freelance, SCG)
  • education    - Display degree, GPA (3.27), leadership, and national award
  • contact      - Print direct email, mobile phone, and location details
  • resume       - Print JSON summary of candidate profile
  • clear        - Clear the terminal screen
  • exit         - Close this terminal modal`
      break

    case 'stack':
    case 'fullstack':
      output = `FULL-STACK ARCHITECTURE OVERVIEW:
┌─────────────────────────────────────────────────────────────┐
│ 1. FRONTEND / CLIENT TIER                                   │
│    • Vue 3 / Nuxt 4 (SSR, Composition API, Nitro Engine)    │
│    • React, Redux State, React Hook Form                    │
│    • TypeScript, Tailwind CSS, Responsive Web Design        │
├─────────────────────────────────────────────────────────────┤
│ 2. BACKEND & API SERVICES                                   │
│    • Node.js & Express, Laravel Framework (MVC)             │
│    • RESTful API Architecture, OpenAPI / Swagger Specs      │
│    • Sub-100ms Latency, Token Authentication, Rate-Limiting │
├─────────────────────────────────────────────────────────────┤
│ 3. DATABASE & PERSISTENCE TIER                              │
│    • MySQL (Relational Modeling, Index Optimization)         │
│    • Oracle Database (PL/SQL, Enterprise Stored Procedures) │
├─────────────────────────────────────────────────────────────┤
│ 4. DEVOPS, HARDWARE & TELEMETRY                             │
│    • GitLab CI/CD, Automated Testing, Vercel Edge Deploy    │
│    • Modbus TCP PLC (16 DI/DO), Cognex Vision, ESP32 IoT    │
└─────────────────────────────────────────────────────────────┘`
      break

    case 'skills':
      output = `FULL-STACK ENGINEERING COMPETENCIES:
[Frontend & Web]:    Vue.js / Nuxt 4, React & Redux, TypeScript, Tailwind CSS, State Management
[Backend & APIs]:    RESTful APIs (Core Specialty), Node.js/Express, Laravel MVC, OpenAPI Specs, Postman
[Databases]:         MySQL, Oracle Database (PL/SQL), Schema Normalization, Query Optimization
[Core Languages]:    TypeScript, JavaScript (ES6+), PHP, Python, SQL, C/C++
[DevOps / Deploy]:   GitLab CI/CD Pipelines, Git/GitHub, Docker, Vercel Deploy, Linux Server
[Industrial & IoT]:  Modbus TCP & PLC Control (16 DI/DO), Cognex Vision 2800, Keyence TCP, ESP32`
      break

    case 'projects':
      output = `FEATURED PROJECTS (15 Total):
1. [2025 Full Stack] Nuxt 4 Modern Engineering Portfolio (Vue 3/TS/Tailwind/Nitro)
2. [2024 Freelance]  VBX_APUST Industrial Dispensing Control HMI (Modbus TCP/Cognex Vision/Robot)
3. [2023 AI]         AI Visual Similarity Matching Engine (Cosine Vector)
4. [2023 Backend]    3rd-Party Mobile API Integration Gateway
5. [2023 IoT]        Smart Farm Industrial Machine Sensor Telemetry
6. [2022 Full Stack] Enterprise Mobile CRM Low-Code Application
7. [2022 Backend]    Unified Core RESTful API Platform (Node.js/Laravel/MySQL)
8. [2021 Full Stack] Web CRM Platform (React, Redux, React Hook Form, SQL API)
9. [2020 IoT]        Smart Home Controller (React Native + Cloud Hub)
...and 7 more in the Projects Bento grid.`
      break

    case 'freelance':
      output = `FREELANCE ENGINEERING PROJECT:
Project:      VBX_APUST (VBX Dispensing Control System)
Role:         Industrial Automation & HMI Developer (Freelance)
Year:         2024
Architecture:
  • Multi-Protocol HMI: Industrial HMI coordinating robot dispensers, vision inspection & safety interlocks
  • PLC Modbus TCP: 16 Digital Inputs / 16 Digital Outputs (pneumatic clamps, tower lights, safety switches)
  • Keyence Barcode: TCP Socket communication for model parsing & dynamic dispensing recipe selection
  • Cognex In-Sight 2800: HTTP REST API / TCP for real-time post-dispensing Pass/Fail quality inspection
  • Robot Dispenser: Motion dispatch commands and synchronized cycle execution
  • Finite State Machine: Standby -> Clamp -> Barcode Verify -> Safety Curtain -> Robot Dispense -> Vision Check -> Unclamp`
      break

    case 'experience':
      output = `CAREER TRACE:
1. Rudy Technology (2022 - Present) | Full-Stack & Back-end Developer
   - Full-stack web solutions, RESTful APIs, complex SQL/MVC, GitLab CI/CD, OpenAPI specs.
2. Freelance Industrial Automation (2023 - 2024) | Industrial Automation & HMI Engineer
   - VBX_APUST dispensing system, PLC Modbus TCP (16 DI/DO), Cognex Vision inspection, Keyence TCP.
3. So-at Solution (2021) | Software Engineer Intern (Full-Stack & Web Services)
   - Web service incident resolution, SQL stored procedures, MVC web, Postman API validation.
4. SCG, Bang Sue (2020) | Engineering Intern
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
      output = `AI & COMPUTER VISION PROJECTS:
• AI Visual Similarity Matching Engine (Cosine Vector Feature Extraction)
• Online Real-Time Face Detection (OpenCV & Video Streaming)
• Match AI Natural Language Processing Pipeline (Intent & Semantic Matching)`
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
