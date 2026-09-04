export interface LocalizedString {
  en: string
  th: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: LocalizedString
  address: string
  github?: string
  linkedin?: string
}

export interface ProfileInfo {
  name: LocalizedString
  nickname: LocalizedString
  avatar: string
  role: LocalizedString
  badge: LocalizedString
  contact: ContactInfo
  bio: LocalizedString
}

export interface StatItem {
  value: string
  label: LocalizedString
}

export interface ExperienceItem {
  company: string
  role: LocalizedString
  period: string
  location: string
  type: LocalizedString
  color: string
  highlights: {
    en: string[]
    th: string[]
  }
  skills: string[]
}

export interface ProjectItem {
  id: string
  year: string
  category: 'ai' | 'backend' | 'iot' | 'fullstack' | string
  title: LocalizedString
  description: LocalizedString
  tags: string[]
  featured: boolean
  stats?: string
}

export interface SkillItem {
  name: string
  badge: LocalizedString
  detail: LocalizedString
  highlight: boolean
}

export interface SkillsGroup {
  languages: SkillItem[]
  backend: SkillItem[]
  database: SkillItem[]
  devops: SkillItem[]
  iotAi: SkillItem[]
}

export interface EducationItem {
  institution: LocalizedString
  degree: LocalizedString
  year: string
  gpa: string
  leadership: {
    en: string[]
    th: string[]
  }
  award: {
    title: LocalizedString
    year: string
  }
}

export interface AiStepRecipe {
  prompt: string
  input: string
  output: string
}

export interface AiStepItem {
  step: number
  tool: string
  badge: string
  name: LocalizedString
  description: LocalizedString
  recipe: AiStepRecipe
  icon: string
}

export interface AiShowcaseData {
  title: LocalizedString
  subtitle: LocalizedString
  steps: AiStepItem[]
}

export interface PortfolioData {
  profile: ProfileInfo
  stats: StatItem[]
  experiences: ExperienceItem[]
  projects: ProjectItem[]
  skills: SkillsGroup
  education: EducationItem
  aiShowcase: AiShowcaseData
}

export interface TerminalModalExpose {
  open: () => void
  close: () => void
}
