"use client";

import { Section, SectionTitle } from "./section";
import { FadeIn, FadeInStagger, StaggerItem } from "./motion";

const skillGroups = [
  {
    category: "Language",
    skills: ["TypeScript", "JavaScript", "Dart", "Python"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Vite"],
  },
  {
    category: "Mobile",
    skills: ["Flutter"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Django", "Firebase", "PostgreSQL", "Redis"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "Jenkins", "GitHub Actions"],
  },
  {
    category: "Collaboration",
    skills: ["Git", "Jira", "Figma", "Notion"],
  },
];

export default function Skills() {
  return (
    <Section id="skills" className="border-t border-zinc-800/50">
      <FadeIn>
        <SectionTitle>Skills</SectionTitle>
      </FadeIn>
      <FadeInStagger className="space-y-8">
        {skillGroups.map((group) => (
          <StaggerItem key={group.category}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <span className="w-28 shrink-0 text-sm font-semibold text-sky-400">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </FadeInStagger>
    </Section>
  );
}
