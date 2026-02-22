// ─── Resume Data ─────────────────────────────────────────────────────────────
const SAGE = "#8fa99a";

const data = {
  name: "Stuart Browning",
  title: "Finance & Computer Science",
  institution: "Tulane University",
  location: "New Orleans, LA",
  email: "Stuartbrowning2005@gmail.com",
  phone: "+1 (305) 401-1031",
  linkedin: "https://www.linkedin.com/in/stuart-e-browning",
  github: "https://github.com/stuartbrowning2005",
  about:
    "Finance and Computer Science student at Tulane University with hands-on experience in product management, data analysis, and software development. I thrive at the intersection of technical and business thinking — from writing product specs and shipping Figma prototypes to building automation tools in Python.",
  experience: [
    {
      title: "Product Management Intern",
      company: "Republic",
      location: "New York, NY",
      period: "Summer 2025",
      bullets: [
        "Productized and automated manual operations for crypto payment methods.",
        "Led discovery into areas of opportunity to minimize manual engineering support bottlenecks.",
        "Interviewed business and engineering stakeholders to build context around current processes and limitations.",
        "Delivered a PRD with specifications to compliantly productize engineering-initiated disbursements from a third-party crypto payment processor to escrow.",
        "Leveraged Figma and AI tools (Bolt, Cursor) to deliver a working prototype aligned with the PRD.",
        "Participated in daily Scrum ceremonies — stand-ups, backlog grooming, and retrospectives.",
      ],
    },
    {
      title: "Intern to the Chief of Staff",
      company: "Republic",
      location: "New York, NY",
      period: "Jun 2024 – Aug 2024",
      bullets: [
        "Interned in the Office of the CEO, supporting the Chief of Staff on high-priority initiatives and strategic projects.",
        "Built a custom CRM in Excel and Python to eliminate redundancies, streamline data management, and enhance relationship tracking for Republic's institutional investors.",
      ],
    },
    {
      title: "Inbound Data Analyst Intern",
      company: "Doorway",
      location: "London, England",
      period: "Jun 2023 – Aug 2023",
      bullets: [
        "Collaborated with Sales and Marketing teams to evaluate and qualify inbound leads.",
        "Developed and delivered weekly Excel and PowerPoint reports highlighting emerging sales opportunities.",
      ],
    },
  ],
  education: [
    {
      degree: "B.S. in Management (Finance & Computer Science)",
      school: "Tulane University",
      sub: "A.B. Freeman School of Business",
      location: "New Orleans, LA",
      period: "Expected May 2027",
      coursework:
        "Financial Accounting · Managerial Accounting · CS 1 & 2 · Business Analytics · Financial Management · Intro to Marketing · Microeconomics · Macroeconomics · Business Statistics · Legal Environment of Business",
    },
    {
      degree: "Study Abroad",
      school: "John Cabot University",
      sub: "",
      location: "",
      period: "",
      coursework: "Programming Concepts & Applications",
    },
    {
      degree: "High School Diploma",
      school: "Miami Country Day School",
      sub: "",
      location: "Miami, FL",
      period: "",
      coursework: "",
    },
  ],
  skills: [
    { category: "Software", items: ["Python", "Java", "C"] },
    { category: "Web", items: ["React", "Next.js", "Firebase", "Tailwind CSS"] },
    { category: "Tools", items: ["Excel", "PowerPoint", "Figma", "Bolt"] },
  ],
};

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="flex items-center justify-between border-b border-stone-100 bg-white px-8 py-5">
      <span className="text-xs uppercase tracking-[0.2em] text-stone-400">
        Curriculum Vitae
      </span>
      <nav className="hidden gap-8 sm:flex">
        <a
          href="#about"
          className="text-xs text-stone-500 transition-colors hover:text-stone-900"
        >
          about
        </a>
        <a
          href="#experience"
          className="text-xs text-stone-500 transition-colors hover:text-stone-900"
        >
          résumé
        </a>
        <a
          href="#contact"
          className="text-xs text-stone-500 transition-colors hover:text-stone-900"
        >
          contact
        </a>
      </nav>
      <a
        href="#contact"
        className="rounded-sm bg-stone-900 px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-stone-700"
      >
        Get in touch
      </a>
    </header>
  );
}

// ─── Avatar ───────────────────────────────────────────────────────────────────
//
// Replace the src below with your actual image path (e.g. "/headshot.jpg").
// The image fills the entire right panel — no borders, no frame.
// Use object-top to anchor on the face, or object-center for full portrait.

import Image from "next/image";

function Avatar() {
  return (
    <Image
      src="/headshot.jpg"
      alt="Stuart Browning"
      fill
      className="object-cover object-top"
      priority
    />
  );
}

// ─── Section label ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-10 text-xs uppercase tracking-[0.2em] text-stone-400">
      {children}
    </p>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <Nav />

      {/* ── Hero: split panel ── */}
      <section
        className="flex flex-col sm:flex-row"
        style={{ minHeight: "calc(100vh - 65px)" }}
      >
        {/* Left: contact info */}
        <div className="flex flex-col justify-center px-10 py-16 sm:w-5/12 sm:px-14">
          <h1 className="font-serif text-[3rem] font-light leading-none tracking-tight text-stone-900 sm:text-[4.5rem]">
            {data.name}
          </h1>
          <p className="mt-3 font-serif text-xl italic text-stone-500">
            {data.title}
          </p>
          <p className="mt-1 text-xs text-stone-400">{data.institution}</p>

          <div className="mt-10 space-y-3">
            <div className="flex items-baseline gap-4">
              <span className="w-16 shrink-0 text-xs text-stone-400">
                Phone
              </span>
              <a
                href={`tel:${data.phone}`}
                className="text-sm text-stone-700 transition-colors hover:text-stone-900"
              >
                {data.phone}
              </a>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-16 shrink-0 text-xs text-stone-400">
                Email
              </span>
              <a
                href={`mailto:${data.email}`}
                className="break-all text-sm text-stone-700 transition-colors hover:text-stone-900"
              >
                {data.email}
              </a>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-16 shrink-0 text-xs text-stone-400">
                Address
              </span>
              <span className="text-sm text-stone-700">{data.location}</span>
            </div>
          </div>

          <div className="mt-4 flex gap-3 pl-20">
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-400 underline underline-offset-2 transition-colors hover:text-stone-900"
            >
              LinkedIn
            </a>
            <span className="text-stone-200">·</span>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-400 underline underline-offset-2 transition-colors hover:text-stone-900"
            >
              GitHub
            </a>
          </div>

          <a
            href="#about"
            className="mt-14 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-400 transition-colors hover:text-stone-700"
          >
            See full CV <span>↓</span>
          </a>
        </div>

        {/* Right: full-bleed photo panel */}
        <div
          className="relative min-h-[55vw] flex-1 overflow-hidden sm:min-h-0"
          style={{ backgroundColor: SAGE }}
        >
          <Avatar />
        </div>
      </section>

      {/* ── Content ── */}
      <div className="mx-auto max-w-3xl px-8 py-24">
        {/* About */}
        <section id="about" className="mb-24 scroll-mt-8">
          <SectionLabel>About</SectionLabel>
          <p className="font-serif text-2xl font-light leading-relaxed text-stone-700 sm:text-3xl">
            {data.about}
          </p>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-24 scroll-mt-8">
          <SectionLabel>Experience</SectionLabel>
          <div className="divide-y divide-stone-100">
            {data.experience.map((job) => (
              <div
                key={`${job.company}-${job.period}`}
                className="py-10 first:pt-0 last:pb-0"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-stone-900">
                      {job.company}
                    </h3>
                    <p className="font-serif text-lg italic text-stone-500">
                      {job.title}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-stone-400">
                      {job.location}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 text-xs uppercase tracking-widest text-stone-400">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {job.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-4 text-sm leading-relaxed text-stone-600"
                    >
                      <span className="mt-[9px] h-px w-4 shrink-0 bg-stone-300" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-24 scroll-mt-8">
          <SectionLabel>Education</SectionLabel>
          <div className="divide-y divide-stone-100">
            {data.education.map((edu) => (
              <div key={edu.school} className="py-8 first:pt-0 last:pb-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-stone-900">
                      {edu.school}
                    </h3>
                    {edu.sub && (
                      <p className="text-xs text-stone-400">{edu.sub}</p>
                    )}
                    <p className="font-serif text-lg italic text-stone-500">
                      {edu.degree}
                    </p>
                    {edu.location && (
                      <p className="mt-1 text-xs uppercase tracking-widest text-stone-400">
                        {edu.location}
                      </p>
                    )}
                  </div>
                  {edu.period && (
                    <span className="mt-1 shrink-0 text-xs uppercase tracking-widest text-stone-400">
                      {edu.period}
                    </span>
                  )}
                </div>
                {edu.coursework && (
                  <p className="mt-3 text-xs leading-relaxed text-stone-400">
                    {edu.coursework}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-8">
          <SectionLabel>Skills & Tools</SectionLabel>
          <div className="space-y-6">
            {data.skills.map(({ category, items }) => (
              <div key={category} className="flex gap-8">
                <span className="w-20 shrink-0 text-xs uppercase tracking-widest text-stone-400">
                  {category}
                </span>
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="font-serif text-xl text-stone-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── Contact footer ── */}
      <section id="contact" className="border-t border-stone-100 py-24 text-center">
        <p className="font-serif text-4xl font-light text-stone-700">
          Get in touch
        </p>
        <a
          href={`mailto:${data.email}`}
          className="mt-4 block font-serif text-xl italic text-stone-500 transition-colors hover:text-stone-900"
        >
          {data.email}
        </a>
        <p className="mt-2 text-sm text-stone-400">{data.phone}</p>
        <div className="mt-6 flex justify-center gap-4 text-xs text-stone-400">
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-stone-700"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-stone-700"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
