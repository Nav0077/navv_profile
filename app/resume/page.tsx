"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Download, ExternalLink, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
              <ArrowLeft className="w-5 h-5" />
            </motion.div>
            <motion.span
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-medium"
            >
              Back to Portfolio
            </motion.span>
          </Link>
          <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Download className="w-4 h-4 mr-2" /> Download Resume
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-zinc-800/50 rounded-xl border border-white/10 overflow-hidden">
          {/* Resume Header */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-32 h-32 rounded-full border-4 border-purple-500 overflow-hidden flex-shrink-0">
                <img src="/profile.jpg?height=128&width=128" alt="NAV" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
                    NAV
                  </span>
                </h1>
                <h2 className="text-xl mb-4">Senior Game Developer</h2>
                <p className="text-white/80 max-w-2xl mb-6">
                  Passionate and creative frontend developer with 5+ years of experience building modern, responsive web
                  applications. Specialized in React, Next.js, and modern JavaScript frameworks with a strong focus on
                  user experience and performance optimization.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span className="text-white/80">basnetnavraj4@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span className="text-white/80">+977 9864726814</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="text-white/80">Nepalgunj, Nepal</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resume Content */}
          <div className="p-8 md:p-12 space-y-10">
            {/* Work Experience */}
            <ResumeSection title="Work Experience" delay={0.1}>
              <div className="space-y-8">
                <ExperienceItem
                  title="Senior Game Developer"
                  company="AnyX Inc."
                  period="2021 - Present"
                  location="Kathmandu, Nepal"
                  delay={0.2}
                >
                  <ul className="list-disc pl-5 space-y-2 text-white/80">
                    <li>
                      Led the frontend development of the company's flagship product, resulting in a 40% increase in
                      user engagement.
                    </li>
                    <li>
                      Implemented modern React architecture with Next.js, improving page load times by 60% and SEO
                      rankings.
                    </li>
                    <li>
                      Mentored junior developers and established frontend best practices and coding standards for the
                      team.
                    </li>
                    <li>
                      Collaborated with UX/UI designers to implement responsive designs and ensure accessibility
                      compliance.
                    </li>
                  </ul>
                </ExperienceItem>

                <ExperienceItem
                  title="Frontend Developer"
                  company="WebSolutions Ltd."
                  period="2018 - 2021"
                  location="Boston, USA"
                  delay={0.3}
                >
                  <ul className="list-disc pl-5 space-y-2 text-white/80">
                    <li>
                      Developed and maintained multiple client websites using React, Vue.js, and vanilla JavaScript.
                    </li>
                    <li>Implemented responsive designs and ensured cross-browser compatibility for all projects.</li>
                    <li>Integrated RESTful APIs and GraphQL endpoints with frontend applications.</li>
                    <li>Participated in agile development processes, including daily stand-ups and sprint planning.</li>
                  </ul>
                </ExperienceItem>

                <ExperienceItem
                  title="Junior Web Developer"
                  company="Digital Creations"
                  period="2016 - 2018"
                  location="Chicago, USA"
                  delay={0.4}
                >
                  <ul className="list-disc pl-5 space-y-2 text-white/80">
                  
                    <li>Assisted in the development of client websites using HTML, CSS, and JavaScript.</li>
                    <li>Implemented responsive designs based on provided mockups.</li>
                    <li>Collaborated with the design team to ensure pixel-perfect implementation.</li>
                    <li>Maintained and updated existing websites, fixing bugs and implementing new features.</li>
                  </ul>
                </ExperienceItem>
              </div>
            </ResumeSection>

            {/* Education */}
            <ResumeSection title="Education" delay={0.5}>
              <div className="space-y-6">
                <ExperienceItem
                  title="Master of Computer Science"
                  company="New York University"
                  period="2030 - 2032"
                  location="New York, USA"
                  delay={0.6}
                >
                  <p className="text-white/80">
                    Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors.
                  </p>
                </ExperienceItem>

                <ExperienceItem
                  title="Bachelor of Science in Computer Science and Information Technology"
                  company="TU University"
                  period="2024 - Running"
                  location="Kathmandu, Nepal"
                  delay={0.7}
                >
                  <p className="text-white/80">
                    Focused on Software Engineering and Web Development. Dean's List for all semesters.
                  </p>
                </ExperienceItem>
              </div>
            </ResumeSection>

            {/* Skills */}
            <ResumeSection title="Skills" delay={0.8}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillCategory title="Frontend Development" delay={0.9}>
                  <SkillItem name="HTML5/CSS3" level={95} />
                  <SkillItem name="JavaScript (ES6+)" level={90} />
                  <SkillItem name="React.js" level={95} />
                  <SkillItem name="Next.js" level={90} />
                  <SkillItem name="TypeScript" level={85} />
                  <SkillItem name="Tailwind CSS" level={90} />
                </SkillCategory>

                <SkillCategory title="Backend & Tools" delay={1.0}>
                  <SkillItem name="Node.js" level={80} />
                  <SkillItem name="RESTful APIs" level={85} />
                  <SkillItem name="Unity" level={85} />
                  <SkillItem name="Git/GitHub" level={90} />
                  <SkillItem name="Docker" level={70} />
                  <SkillItem name="Unreal Engine" level={85} />
                </SkillCategory>

                <SkillCategory title="Design & UI/UX" delay={1.1}>
                  <SkillItem name="Figma" level={85} />
                  <SkillItem name="Adobe XD" level={80} />
                  <SkillItem name="Responsive Design" level={95} />
                  <SkillItem name="UI/UX Principles" level={85} />
                  <SkillItem name="Accessibility (WCAG)" level={80} />
                </SkillCategory>

                <SkillCategory title="Soft Skills" delay={1.2}>
                  <SkillItem name="Communication" level={90} />
                  <SkillItem name="Team Leadership" level={85} />
                  <SkillItem name="Problem Solving" level={95} />
                  <SkillItem name="Time Management" level={85} />
                  <SkillItem name="Agile Methodologies" level={90} />
                </SkillCategory>
              </div>
            </ResumeSection>

            {/* Certifications */}
            <ResumeSection title="Certifications & Awards" delay={1.3}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "AWS Certified Developer",
                    issuer: "Amazon Web Services",
                    date: "2022",
                    link: "#",
                  },
                  {
                    title: "Google Professional Web Developer",
                    issuer: "Google",
                    date: "2031",
                    link: "#",
                  },
                  {
                    title: "React Advanced Certification",
                    issuer: "Meta",
                    date: "2028",
                    link: "#",
                  },
                  {
                    title: "Best Game Developer Award",
                    issuer: "GameDev Conference",
                    date: "2029",
                    link: "#",
                  },
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    className="flex items-start gap-4 bg-zinc-700/20 p-4 rounded-lg border border-white/5"
                  >
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 flex-shrink-0">
                      {index % 2 === 0 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12.3 2.9c.7-.7 1.7-.7 2.4 0l6.4 6.4c.7.7.7 1.7 0 2.4l-6.4 6.4c-.7.7-1.7.7-2.4 0l-6.4-6.4c-.7-.7-.7-1.7 0-2.4z" />
                          <path d="M17 8l-5 5" />
                          <path d="M12 16v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h4" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M8.21 13.89 7 23l-5-1 9.34-9.34a15.52 15.52 0 0 0 5.64 5.64L8.21 13.89zm0 0L3 13l10-10 1 5-5.79 5.89z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{cert.title}</h4>
                        <a href={cert.link} className="text-purple-400 hover:text-purple-300">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-white/60 text-sm">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ResumeSection>

            {/* Languages */}
            <ResumeSection title="Languages" delay={1.8}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { language: "Nepal", level: "Native", proficiency: 100 },
                  { language: "English", level: "Native", proficiency: 100 },
                  { language: "Spanish", level: "Fluent", proficiency: 85 },
                  { language: "French", level: "Intermediate", proficiency: 60 },
                ].map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.9 + index * 0.1 }}
                    className="bg-zinc-700/20 p-4 rounded-lg border border-white/5"
                  >
                    <div className="flex justify-between mb-2">
                      <h4 className="font-semibold">{lang.language}</h4>
                      <span className="text-white/60 text-sm">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        style={{ width: `${lang.proficiency}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ResumeSection>

            {/* References */}
            <ResumeSection title="References" delay={2.2}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.3 }}
                className="text-white/80 italic"
              >
                Professional references are available upon request.
              </motion.p>
            </ResumeSection>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-white/60">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2.4 }}>
          © {new Date().getFullYear()} NAV. All rights reserved.
        </motion.p>
      </footer>
    </div>
  )
}

// Helper Components
function ResumeSection({ title, children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }}>
      <h2 className="text-2xl font-bold mb-6 relative inline-block">
        {title}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform translate-y-2"></div>
      </h2>
      {children}
    </motion.div>
  )
}

function ExperienceItem({ title, company, period, location, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="border-l-2 border-purple-500 pl-6 relative"
    >
      <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1"></div>
      <div className="mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex flex-wrap gap-2 text-white/60 text-sm">
          <span>{company}</span>
          <span className="hidden sm:inline">•</span>
          <span>{period}</span>
          <span className="hidden sm:inline">•</span>
          <span>{location}</span>
        </div>
      </div>
      <div className="mt-3">{children}</div>
    </motion.div>
  )
}

function SkillCategory({ title, children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay }}>
      <h3 className="font-semibold mb-4 text-lg">{title}</h3>
      <div className="space-y-3">{children}</div>
    </motion.div>
  )
}

function SkillItem({ name, level }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-white/80">{name}</span>
        <span className="text-white/60 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  )
}
