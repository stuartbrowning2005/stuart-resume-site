// ─── Resume Data ─────────────────────────────────────────────────────────────
// Update this object with your own information.
const data = {
  name: "Stuart Browning",
  title: "Software Engineer",
  location: "City, State",
  email: "stuart@example.com",
  linkedin: "https://linkedin.com/in/stuartbrowning",
  github: "https://github.com/stuartbrowning2005",
  about:
    "Passionate software engineer with experience building scalable web applications. I enjoy working across the full stack and collaborating with cross-functional teams to ship quality products.",
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Company Name",
      period: "2022 – Present",
      bullets: [
        "Led design and implementation of core product features used by 100k+ users",
        "Mentored junior engineers and drove code quality through structured reviews",
        "Reduced API latency by 40% through targeted caching and query optimization",
      ],
    },
    {
      title: "Software Engineer",
      company: "Previous Company",
      period: "2019 – 2022",
      bullets: [
        "Built and maintained RESTful APIs serving multiple client applications",
        "Collaborated with design and product teams to ship bi-weekly releases",
        "Migrated legacy monolith to a modular microservices architecture",
      ],
    },
  ],
  education: [
    {
      degree: "B.S. Computer Science",
      institution: "University Name",
      period: "2015 – 2019",
    },
  ],
  skills: [
    { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
    { category: "Frameworks", items: ["React", "Next.js", "Node.js", "Express"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "PostgreSQL"] },
  ],
};

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <span className="text-sm font-semibold tracking-tight text-gray-900">
          {data.name}
        </span>
        <nav className="flex gap-6">
          {["About", "Experience", "Education", "Skills"].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
              {section}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

// ─── Avatar ───────────────────────────────────────────────────────────────────
//
// To display your real headshot:
//   1. Copy your photo into the public/ folder.
//      Expected filename: "Stuart-headshot 2.jpg" (or .png)
//   2. Replace the <div> below with:
//
//      import Image from "next/image";
//
//      <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full ring-4 ring-white shadow-md">
//        <Image
//          src="/Stuart-headshot 2.jpg"
//          alt={data.name}
//          fill
//          className="object-cover"
//          priority
//        />
//      </div>

function Avatar() {
  return (
    <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-2xl font-bold text-indigo-600 shadow-sm">
      SB
    </div>
  );
}

// ─── Section Heading ─────────────────────────────────────────────────────────

function SectionHeading({ label }: { label: string }) {
  return (
    <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-indigo-600">
      {label}
    </h2>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Nav />

      <main className="mx-auto max-w-3xl px-6 py-16">
        {/* Hero */}
        <section className="mb-16 flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:text-left">
          <Avatar />
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {data.name}
            </h1>
            <p className="mt-1 text-lg text-gray-500">{data.title}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-500 sm:justify-start">
              <span>{data.location}</span>
              <a
                href={`mailto:${data.email}`}
                className="transition-colors hover:text-indigo-600"
              >
                {data.email}
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-indigo-600"
              >
                LinkedIn
              </a>
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-indigo-600"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        <hr className="mb-16 border-gray-100" />

        {/* About */}
        <section id="about" className="mb-16 scroll-mt-20">
          <SectionHeading label="About" />
          <p className="leading-relaxed text-gray-700">{data.about}</p>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-16 scroll-mt-20">
          <SectionHeading label="Experience" />
          <div className="space-y-10">
            {data.experience.map((job) => (
              <div key={`${job.company}-${job.period}`}>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-sm text-gray-500">{job.company}</p>
                  </div>
                  <span className="text-sm text-gray-400">{job.period}</span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-gray-700">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-300" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-16 scroll-mt-20">
          <SectionHeading label="Education" />
          <div className="space-y-6">
            {data.education.map((edu) => (
              <div
                key={edu.institution}
                className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-sm text-gray-500">{edu.institution}</p>
                </div>
                <span className="text-sm text-gray-400">{edu.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20">
          <SectionHeading label="Skills" />
          <div className="space-y-4">
            {data.skills.map(({ category, items }) => (
              <div
                key={category}
                className="flex flex-col gap-2 sm:flex-row sm:items-start"
              >
                <span className="w-24 shrink-0 pt-0.5 text-sm text-gray-500">
                  {category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
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

      <footer className="mt-20 border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        {data.name} &mdash; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
