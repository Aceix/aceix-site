<template>
  <div class="portfolio-container" :class="{ 'fade-in': isVisible }">
    <header class="header">
      <div class="header-content">
        <h1 class="name">{{ name }}</h1>
        <span>Engineer and Designer</span>
      </div>
    </header>

    <main class="main-content">
      <section class="bio-section">
        <h2 class="section-title">$ whoami</h2>
        <div class="content-block">
          <p>{{ bio }}</p>
        </div>
      </section>

      <section class="projects-section">
        <h2 class="section-title">$ ls ~/work-experience</h2>
        <div class="content-block">
          <div v-for="experience in workExperience" :key="experience.name" class="project-item">
            <div class="project-header">
              <span class="project-name">{{ experience.name }}</span>
              <span class="project-period">{{ experience.period }}</span>
            </div>
            <div class="company-name">{{ experience.company }}</div>
            <p class="project-description">{{ experience.description }}</p>
            <div class="project-tech">Technologies: {{ experience.tech }}</div>
            <div class="highlights" v-if="experience.highlights">
              <div
                class="highlight-item"
                v-for="highlight in experience.highlights"
                :key="highlight"
              >
                • {{ highlight }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="interests-section">
        <h2 class="section-title">$ cat ~/current_interests.txt</h2>
        <div class="content-block">
          <ul class="interests-list">
            <li v-for="interest in interests" :key="interest" class="interest-item">
              → {{ interest }}
            </li>
          </ul>
        </div>
      </section>

      <section class="contact-section">
        <h2 class="section-title">$ find ~/socials -type l</h2>
        <div class="content-block">
          <div class="social-links">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="social-link"
            >
              {{ social.name }} → {{ social.handle }}
            </a>
          </div>
        </div>
      </section>

      <section class="projects-section">
        <h2 class="section-title">$ ls ~/projects</h2>
        <div class="content-block">
          <div v-for="project in projects" :key="project.name" class="project-item">
            <div class="project-header">
              <span class="project-name">{{ project.name }}</span>
              <span class="project-period">{{ project.period }}</span>
            </div>
            <div class="project-tech">{{ project.tech }}</div>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-links">
              <a v-if="project.github" :href="project.github" target="_blank" class="project-link">
                [github]
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank" class="project-link">
                [demo]
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p class="footer-text">Built with Vue.js ❤️</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, computed, onMounted, type Ref } from 'vue'

const textColor = inject<Ref<string>>('textColor', ref('white'))
const toggleTheme = inject<() => void>('toggleTheme', () => {})

const computedTextColor = computed(() => textColor.value)
const isVisible = ref(false)

// Trigger fade-in animation when component mounts
onMounted(() => {
  // Small delay to ensure smooth transition
  setTimeout(() => {
    isVisible.value = true
  }, 50)
})

// Portfolio data - customize these with your information
const name = 'Kwesi Frempong-Smart'
const bio = `With over 8 years of experience as a versatile full-stack software engineer,
I have a proven track record of taking ownership and delivering high-impact solutions.
My career highlights include developing a Java microservice for security settlement transactions at Morgan Stanley,
leading a frontend team to build a new Web UI at Netmaker, and increasing revenue by over 30% at Clearspace Labs by
building a critical module for a healthcare platform. I am a professional with expertise across a wide range of
technologies, including TypeScript, Go, React/Next, Vue/Nuxt and AWS. I have dabbled with small Blockchain, IoT and AI/ML projects.`

const workExperience = ref([
  {
    name: 'Senior Software Engineer',
    company: 'Netmaker Inc.',
    period: '2022 - 2025',
    description:
      'I contribute to building a fast, easy-to-use VPN software backed by WireGuard. I am primarily responsible for building and maintaining the frontend with React and client GUI apps, but I also apply my knowledge in Linux, networking and Golang to develop the product as a whole, including the backend and CI/CD pipelines.',
    tech: 'Go, React, Sqlite, Linux, Docker, Kubernetes, Helm, Electron, Testing (Playwright, Vitest)',
    highlights: [
      'Led team of 3 developers',
      'Architected scalable solutions serving 1K+ users',
      'Developed and maintained key features for the Zero-Trust platform',
    ],
  },
  {
    name: 'Software Engineer',
    company: 'Turntabl/Morgan Stanley',
    period: '2020 - 2022',
    description:
      'I was a key developer on a team that built a highly-available rule engine microservice in Java to process high-value financial transactions. This mission-critical system was responsible for processing security settlement transactions worth millions of dollars and was rigorously validated through multiple levels of testing, including unit, component, and end-to-end. I further demonstrated my versatility by developing microservices for a PoC trading engine that communicated via protocols like REST, SOAP and PubSub, and by building the supporting CI/CD pipelines to streamline deployment',
    tech: 'Angular, React, Java, SQL, Azure, Terraform, Bash, Testing (JUnit, Cucumber, Karma/Jasmine, Cypress)',
    highlights: [
      'Spearheaded the development of the frontend for the rule engine microservice',
      'Built and maintained a high-availability rule engine microservice serving global customers',
      'Built pipelines to automate testing, deployment and environment provisioning; including monitoring and alerting',
    ],
  },
  {
    name: 'Frontend Developer',
    company: 'Clearspace Labs',
    period: '2019 - 2020',
    description:
      'From drawing accurate user stories from client interactions, I achieved and maintained optimum user engagement by designing (with Figma) and building user-friendly, performant frontends with Vue for Serenity; a next-gen healthcare platform.',
    tech: 'Vue, JavaScript, Python, CI/CD, Git, Postgres',
    highlights: [
      'I increased the revenue generated from Serenity by over 30% by building a module for COVID-19 testing',
      'I successfully translated customer requirements into technical solutions',
      'I implemented role-based access control (RBAC) and improved security across the platform',
    ],
  },
])

const projects = ref([
  {
    name: 'Gofer',
    tech: 'React, SaaS',
    description:
      'Enable 3rd-party merchants to easily sell goods to customers by building easy-to-use user interfaces with React for Gofer SaaS.',
    github: null,
    demo: 'https://gofer.com.gh',
    period: 'May 2021 - August 2021',
  },
  {
    name: 'Regulus',
    tech: 'Vue.js, Finance SaaS',
    description:
      'Developed pages and bots for a finance-based SaaS that facilitates easy personal finance, including saving, investments and loan/mortgage tracking.',
    github: null,
    demo: 'https://regulus.finance',
    period: 'February 2021 - May 2021',
  },
  {
    name: 'GoFiber Documentation',
    tech: 'Go, Documentation',
    description: 'Resolved a code error in the GoFiber documentation while learning the framework.',
    github: 'https://github.com/gofiber/docs/pull/146',
    demo: null,
    period: 'December 2020',
  },
  {
    name: 'ReScript - Blockchain Engineer',
    tech: 'React, Blockchain',
    description:
      'Prototype blockchain-based transcript "request-and-transfer" platform to easily and securely transfer student transcripts to prospective schools while keeping trust to prevent fraud.',
    github: null,
    demo: null,
    period: 'April 2019',
  },
  {
    name: 'Youdle - Electron Engineer',
    tech: 'Electron.js, Vue.js',
    description:
      'Convenience app for downloading YouTube videos. Developed for Ubuntu and other platforms.',
    github: 'https://github.com/Aceix/youdle',
    demo: null,
    period: 'June 2018',
  },
  {
    name: 'Kido - IoT Developer',
    tech: 'NodeMCU ESP8266, C++, Vue.js, Apache Cordova, MQTT',
    description:
      'Team project to prevent road accidents due to broken down vehicles on roadsides. Wrote programme for Arduino-like board to communicate with remote MQTT server and built mobile application.',
    github: null,
    demo: null,
    period: 'March 2018',
  },
  {
    name: 'Predix ICC Energy Management System',
    tech: 'PostgreSQL, Node.js, jQuery, GE Predix IIoT',
    description:
      'Developed a prototype energy management system for offices with General Electric Predix Industrial IoT cloud platform.',
    github: null,
    demo: null,
    period: 'May 2017 - September 2017',
  },
])

const interests = ref([
  'Web security and Networking',
  'Blockchain & Decentralized Systems',
  'AI Engineering',
  'System Architecture & Design Patterns',
])

const socialLinks = ref([
  {
    name: 'github',
    handle: '@Aceix',
    url: 'https://github.com/Aceix',
  },
  {
    name: 'email',
    handle: 'me@theaceix.site',
    url: 'mailto:me@theaceix.site?subject=Hello%20Aceix&body=I%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.',
  },
  {
    name: 'linkedin',
    handle: '/in/Kwesi%20Frempong-Smart',
    url: 'https://www.linkedin.com/in/kwesi-frempong-smart-26b7b2127/',
  },
])

const lastUpdated = new Date().toLocaleDateString('en-GB', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})
</script>

<style scoped>
.portfolio-container {
  min-height: 100vh;
  background: #000;
  color: v-bind(computedTextColor);
  font-family: 'Courier New', monospace;
  line-height: 1.6;
  padding: 0;
  margin: 0;
  opacity: 0;
  transition: opacity 0.6s ease-in;
}

.portfolio-container.fade-in {
  opacity: 1;
}

.header {
  padding: 2rem 0;
  border-bottom: 1px solid v-bind(computedTextColor === 'white' ? '#333': '#0f4c0f');
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
}

.name {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  color: v-bind(computedTextColor);
}

.theme-toggle {
  background: transparent;
  border: 1px solid v-bind(computedTextColor);
  color: v-bind(computedTextColor);
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: v-bind(computedTextColor);
  color: #000;
}

.main-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

section {
  margin: 3rem 0;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: v-bind(computedTextColor === 'white' ? '#00ff00': '#00aa00');
  font-weight: normal;
}

.content-block {
  margin-left: 2rem;
  padding: 1rem 0;
}

.highlights {
  margin-top: 1rem;
}

.project-item {
  margin-bottom: 2rem;
  padding: 1rem 0;
  border-bottom: 1px solid v-bind(computedTextColor === 'white' ? '#222': '#0a3d0a');
}

.project-item:last-child {
  border-bottom: none;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.project-name {
  font-weight: bold;
  font-size: 1.1rem;
  color: v-bind(computedTextColor);
}

.project-tech {
  font-size: 0.9rem;
  color: v-bind(computedTextColor === 'white' ? '#888': '#666');
}

.project-description {
  margin: 0.5rem 0;
  color: v-bind(computedTextColor === 'white' ? '#ccc': '#aaa');
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.project-link {
  color: v-bind(computedTextColor === 'white' ? '#00ff00': '#00aa00');
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.project-link:hover {
  opacity: 0.7;
  text-decoration: underline;
}

.interests-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.interest-item {
  margin: 0.5rem 0;
  color: v-bind(computedTextColor === 'white' ? '#ccc': '#aaa');
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.social-link {
  color: v-bind(computedTextColor === 'white' ? '#00ff00': '#00aa00');
  text-decoration: none;
  transition: opacity 0.3s ease;
  display: block;
}

.social-link:hover {
  opacity: 0.7;
  text-decoration: underline;
}

.footer {
  margin-top: 4rem;
  padding: 2rem 0;
  border-top: 1px solid v-bind(computedTextColor === 'white' ? '#333': '#0f4c0f');
  text-align: center;
}

.footer-text {
  color: v-bind(computedTextColor === 'white' ? '#666': '#555');
  font-size: 0.9rem;
  margin: 0;
}

/* Responsive design */
@media (max-width: 768px) {
  .header-content {
    padding: 0 1rem;
    flex-direction: column;
    gap: 1rem;
  }

  .name {
    font-size: 2rem;
  }

  .main-content {
    padding: 0 1rem;
  }

  .content-block {
    margin-left: 1rem;
  }

  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .social-links {
    align-items: center;
  }
}

@media (max-width: 480px) {
  .name {
    font-size: 1.5rem;
  }

  .section-title {
    font-size: 1.2rem;
  }

  .content-block {
    margin-left: 0.5rem;
  }
}
</style>
