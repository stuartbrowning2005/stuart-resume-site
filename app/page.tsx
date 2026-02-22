// ─── Resume Data ─────────────────────────────────────────────────────────────
// Update this object with your own information.
const data = {
  name: "Stuart Browning",
  title: "B.S. Management — Finance & Computer Science",
  institution: "Tulane University · A.B. Freeman School of Business",
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
      institution: "Tulane University · A.B. Freeman School of Business",
      location: "New Orleans, LA",
      period: "Expected May 2027",
      coursework:
        "Financial Accounting · Managerial Accounting · Computer Science 1 & 2 · Business Analytics · Financial Management · Intro to Marketing · Microeconomics · Macroeconomics · Business Statistics · Legal Environment of Business",
    },
    {
      degree: "Study Abroad",
      institution: "John Cabot University",
      location: "",
      period: "",
      coursework: "Programming Concepts & Applications",
    },
    {
      degree: "High School Diploma",
      institution: "Miami Country Day School",
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

// ─── Icons ────────────────────────────────────────────────────────────────────

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-[#faf8f5]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <span className="text-sm font-semibold tracking-tight text-stone-900">
          {data.name}
        </span>
        <nav className="hidden gap-6 sm:flex">
          {["About", "Experience", "Education", "Skills"].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase()}`}
              className="text-sm text-stone-500 transition-colors hover:text-stone-900"
            >
              {s}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-600 shadow-sm transition-all hover:border-stone-300 hover:shadow"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-600 shadow-sm transition-all hover:border-stone-300 hover:shadow"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

// ─── Avatar ───────────────────────────────────────────────────────────────────
//
// To display your real headshot:
//   1. Copy your photo into the public/ folder (e.g. "Stuart-headshot 2.jpg")
//   2. Replace the Avatar function below with:
//
//      import Image from "next/image";
//
//      function Avatar() {
//        return (
//          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full ring-4 ring-white shadow-sm">
//            <Image
//              src="/Stuart-headshot 2.jpg"
//              alt={data.name}
//              fill
//              className="object-cover"
//              priority
//            />
//          </div>
//        );
//      }

function Avatar() {
  return (
    <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-stone-200 text-2xl font-bold text-stone-500 ring-4 ring-white shadow-sm">
      SB
    </div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <h2 className="whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-stone-400">
        {label}
      </h2>
      <div className="h-px flex-1 bg-stone-200" />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900">
      <Nav />

      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Hero */}
        <section className="mb-16 flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:text-left">
          <Avatar />
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-stone-900">
              {data.name}
            </h1>
            <p className="mt-1 text-lg text-stone-500">{data.title}</p>
            <p className="mt-0.5 text-sm text-stone-400">{data.institution}</p>
            <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-stone-600 sm:justify-start">
              <a
                href={`mailto:${data.email}`}
                className="transition-colors hover:text-stone-900"
              >
                {data.email}
              </a>
              <a
                href={`tel:${data.phone}`}
                className="transition-colors hover:text-stone-900"
              >
                {data.phone}
              </a>
              <span>{data.location}</span>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-14 scroll-mt-20">
          <SectionHeader label="About" />
          <p className="text-base leading-relaxed text-stone-600">{data.about}</p>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-14 scroll-mt-20">
          <SectionHeader label="Experience" />
          <div className="space-y-5">
            {data.experience.map((job) => (
              <div
                key={`${job.company}-${job.period}`}
                className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-stone-900">{job.title}</h3>
                    <p className="mt-0.5 text-sm text-stone-500">
                      {job.company} &middot; {job.location}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 text-sm text-stone-400 sm:mt-0">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-stone-600">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-stone-300" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-14 scroll-mt-20">
          <SectionHeader label="Education" />
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div
                key={edu.institution}
                className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-stone-900">{edu.degree}</h3>
                    <p className="mt-0.5 text-sm text-stone-500">
                      {edu.institution}
                      {edu.location ? ` · ${edu.location}` : ""}
                    </p>
                  </div>
                  {edu.period && (
                    <span className="mt-1 shrink-0 text-sm text-stone-400 sm:mt-0">
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
        <section id="skills" className="scroll-mt-20">
          <SectionHeader label="Skills" />
          <div className="space-y-4">
            {data.skills.map(({ category, items }) => (
              <div
                key={category}
                className="flex flex-col gap-2 sm:flex-row sm:items-center"
              >
                <span className="w-20 shrink-0 text-sm text-stone-400">
                  {category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-stone-200 bg-white px-3 py-1 text-sm text-stone-600 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-20 border-t border-stone-200 py-8 text-center text-sm text-stone-400">
        {data.name} &mdash; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
