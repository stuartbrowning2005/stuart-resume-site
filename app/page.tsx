// app/page.tsx — Stuart Browning, personal site (overhaul, Oct 2026)
import Image from "next/image";
import ScrollTop from "./ScrollTop";

const data = {
  name: "Stuart Browning",
  tagline: "Entrepreneur, Co-founder of Atlas Workbench",
  intro:
    "Senior at Tulane studying Finance and Computer Science. Co-founder of Atlas Workbench, a spatial workspace where an AI agent works across the tools your team already uses.",
  email: "Stuartbrowning2005@gmail.com",
  phone: "+1 (305) 401-1031",
  location: "New Orleans, Louisiana · New York, New York",
  linkedin: "https://www.linkedin.com/in/stuart-e-browning",
  github: "https://github.com/stuartbrowning2005",

  about: [
    "I'm a senior at Tulane pursuing a dual degree in Finance and Computer Science, graduating December 2027.",
    "Across internships at zerohash, Republic, and Doorway in New York and London, I've worked on crypto payments infrastructure, product, software engineering, operations, and enterprise sales. Today I'm a co-founder of Atlas Workbench, and we're shipping our beta on November 9th, 2026.",
  ],

  experience: [
    {
      company: "Atlas Workbench",
      title: "Co-founder",
      location: "New Orleans, Louisiana",
      url: "https://atlasworkbench.ai",
      period: "Sep 2026 – Present",
      bullets: [
        "Co-founded Atlas Workbench, a spatial canvas where an AI agent reads and acts across a team's connected tools. Beta launches November 9th, 2026.",
        "Our beta supports GitHub, Figma, Jira, Confluence, and Slack.",
      ],
    },
    {
      company: "zerohash",
      title: "Product Management Intern",
      location: "New York, New York",
      period: "May 2026 – Aug 2026",
      bullets: [
        "Scoped an AI support layer for the Connect dashboard chatbot to expand automated resolution beyond its initial use cases.",
        "Led EU-parity scoping for the Payouts and Payins products, defining deployment scope, entity branding, disclosures, and regulatory readiness across product, legal, compliance, and engineering.",
        "Designed Travel Rule sender-information flows for the EU Payins product.",
        "Defined a donations version of the Payins SDK for crypto-native events, including payment edge cases and KYC configuration.",
        "Gathered requirements from engineering, compliance, legal, support, marketing, and finance to set scope and out-of-scope boundaries.",
        "Produced Figma and Lucid flow diagrams to align stakeholders.",
        "Embedded with the sales team for a week, joining live prospect calls to bring customer requirements and objections back into product scope.",
      ],
    },
    {
      company: "Republic",
      title: "Product Management Intern",
      location: "New York, New York",
      period: "Jun 2025 – Aug 2025",
      bullets: [
        "Productized and automated manual operations for crypto payment methods.",
        "Wrote a PRD to compliantly productize engineering-initiated disbursements from a third-party crypto payment processor to escrow.",
        "Built a working prototype in Figma, Bolt, and Cursor to match the PRD.",
        "Interviewed business and engineering stakeholders to map current processes and remove engineering-support bottlenecks.",
      ],
    },
    {
      company: "Republic",
      title: "Intern to the Chief of Staff",
      location: "New York, New York",
      period: "Jun 2024 – Aug 2024",
      bullets: [
        "Supported the Chief of Staff in the Office of the CEO on high-priority strategic initiatives.",
        "Built a custom CRM in Excel and Python to track relationships with Republic's institutional investors.",
      ],
    },
    {
      company: "Doorway",
      title: "Inbound Data Analyst Intern",
      location: "London, England",
      period: "Jun 2023 – Aug 2023",
      bullets: [
        "Qualified inbound leads with the Sales and Marketing teams.",
        "Produced weekly reports on emerging sales opportunities.",
      ],
    },
  ],

  education: [
    {
      school: "Tulane University",
      detail: "A.B. Freeman School of Business · B.S. Management (Finance & Computer Science)",
      period: "Expected Dec 2027",
      location: "New Orleans, Louisiana",
    },
    { school: "John Cabot University", detail: "Study abroad", period: "", location: "Rome, Italy" },
    { school: "Miami Country Day School", detail: "High school diploma", period: "", location: "Miami, Florida" },
  ],

  skills: {
    Languages: ["TypeScript", "JavaScript", "Python", "Java", "C"],
    Building: ["React", "Next.js", "Tauri", "Node.js", "Tailwind CSS", "Firebase"],
    Tools: ["Claude Code", "Cursor", "Figma", "Excel", "PowerPoint"],
  },
};

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-white/[0.07]">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">
        <h2 className="mb-8 font-serif text-4xl italic text-[#ece8df] md:text-5xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e0e0c] text-[#ece8df] antialiased selection:bg-[#d9b56b] selection:text-black">
      <ScrollTop />
      {/* Nav */}
      <nav className="sticky top-0 z-10 border-b border-white/[0.07] bg-[#0e0e0c]/85 backdrop-blur">
        <div className="flex items-center justify-end px-6 py-4 md:px-10">
          <div className="flex items-center gap-7 text-sm text-[#a9a499]">
            <a href="#about" className="hidden hover:text-white sm:inline">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a
              href="#contact"
              className="bg-[#f2c84b] px-6 py-3 text-base font-medium text-black transition hover:bg-[#f7d66e]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-6 pb-14 pt-16 md:px-10 md:pb-16 md:pt-24">
        <div className="grid items-end gap-10 md:grid-cols-[1fr_280px] md:gap-16">
          <div>
            <h1 className="font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
              Stuart
              <br />
              Browning
            </h1>
            <p className="mt-6 font-serif text-2xl italic text-[#d9b56b] md:text-3xl">
              {data.tagline}
            </p>

            <dl className="mt-10 grid max-w-xl grid-cols-[90px_1fr] gap-y-2 text-sm">
              <dt className="text-[#7d786d]">Email</dt>
              <dd>
                <a href={`mailto:${data.email}`} className="hover:text-[#d9b56b]">{data.email}</a>
              </dd>
              <dt className="text-[#7d786d]">Phone</dt>
              <dd>
                <a href={`tel:${data.phone}`} className="hover:text-[#d9b56b]">{data.phone}</a>
              </dd>
              <dt className="text-[#7d786d]">Based in</dt>
              <dd>{data.location}</dd>
              <dt className="text-[#7d786d]">Elsewhere</dt>
              <dd className="flex gap-4">
                <a href={data.linkedin} className="underline decoration-white/20 underline-offset-4 hover:text-[#d9b56b]">LinkedIn</a>
                <a href={data.github} className="underline decoration-white/20 underline-offset-4 hover:text-[#d9b56b]">GitHub</a>
              </dd>
            </dl>
          </div>

          <div className="relative aspect-[4/5] w-56 overflow-hidden rounded-xl md:w-full">
            <Image
              src="/headshot.jpg"
              alt="Stuart Browning"
              fill
              sizes="(min-width: 768px) 280px, 224px"
              className="object-cover object-[center_15%] brightness-[0.9] saturate-[0.85]"
              priority
            />
          </div>
        </div>
      </section>

      <Section id="about" title="About">
        <div className="max-w-3xl space-y-5 text-xl leading-relaxed text-[#c4bfb4]">
          {data.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-14">
          {data.experience.map((e) => (
            <div key={e.company + e.title} className="grid gap-3 md:grid-cols-[220px_1fr] md:gap-10">
              <div className="text-sm text-[#7d786d]">
                <p>{e.period}</p>
                <p>{e.location}</p>
              </div>
              <div>
                <h3 className="font-serif text-3xl leading-tight">
                  {"url" in e && e.url ? (
                    <a href={e.url} className="hover:text-[#d9b56b]">{e.company} ↗</a>
                  ) : (
                    e.company
                  )}
                </h3>
                <p className="mt-1 text-[#d9b56b]">{e.title}</p>
                <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-relaxed text-[#b3aea3] marker:text-[#5f5b52]">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="space-y-10">
          {data.education.map((ed) => (
            <div key={ed.school} className="grid gap-3 md:grid-cols-[220px_1fr] md:gap-10">
              <div className="text-sm text-[#7d786d]">
                {ed.period && <p>{ed.period}</p>}
                <p>{ed.location}</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl">{ed.school}</h3>
                <p className="mt-1 text-[#b3aea3]">{ed.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Skills">
        <div className="space-y-6">
          {Object.entries(data.skills).map(([group, items]) => (
            <div key={group} className="grid gap-3 md:grid-cols-[220px_1fr] md:gap-10">
              <p className="text-sm text-[#7d786d]">{group}</p>
              <p className="text-lg text-[#c4bfb4]">{items.join("  ·  ")}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Get in touch">
        <a
          href={`mailto:${data.email}`}
          className="block break-all font-serif text-3xl hover:text-[#d9b56b] md:text-5xl"
        >
          {data.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-6 text-[#a9a499]">
          <a href={`tel:${data.phone}`} className="hover:text-white">{data.phone}</a>
          <a href={data.linkedin} className="hover:text-white">LinkedIn ↗</a>
          <a href={data.github} className="hover:text-white">GitHub ↗</a>
        </div>
      </Section>

      <footer className="border-t border-white/[0.07] py-8 text-center text-xs text-[#5f5b52]">
        © {new Date().getFullYear()} Stuart Browning
      </footer>
    </main>
  );
}
