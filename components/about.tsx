"use client";

import { Section, SectionTitle } from "./section";
import { FadeIn, FadeInStagger, StaggerItem } from "./motion";

const info = [
  { label: "연락처", value: "010-5555-2758" },
  { label: "이메일", value: "jg55552758@gmail.com", href: "mailto:jg55552758@gmail.com" },
  { label: "GitHub", value: "JayG-5", href: "https://github.com/JayG-5" },
];

const education = [
  {
    school: "한국방송통신대학교",
    major: "컴퓨터과학과",
    period: "2025.03 - 재학 중",
  },
  {
    school: "한국폴리텍 VII 대학 부산캠퍼스",
    major: "IT융합제어과",
    period: "2021.03 - 2023.02 (졸업)",
  },
];

const certifications = [
  {
    title: "이스트소프트 백엔드 개발자 부트캠프 1기 수료",
    period: "2023.04 ~ 2023.09",
    detail: "Python, Django, PostgreSQL, AWS, Docker",
  },
];

export default function About() {
  return (
    <Section id="about">
      <FadeIn>
        <SectionTitle>About</SectionTitle>
      </FadeIn>

      {/* Contact Info */}
      <FadeInStagger className="mb-12 grid gap-4 sm:grid-cols-3">
        {info.map((item) => (
          <StaggerItem key={item.label}>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-zinc-700 hover:bg-zinc-900">
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sky-400 transition-colors hover:text-sky-300"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-zinc-200">{item.value}</p>
              )}
            </div>
          </StaggerItem>
        ))}
      </FadeInStagger>

      {/* Education */}
      <FadeIn>
        <h3 className="mb-4 text-lg font-semibold text-zinc-300">학력</h3>
      </FadeIn>
      <FadeInStagger className="mb-12 space-y-3">
        {education.map((edu) => (
          <StaggerItem key={edu.school}>
            <div className="flex items-start justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-zinc-700">
              <div>
                <p className="font-medium text-zinc-200">{edu.school}</p>
                <p className="text-sm text-zinc-400">{edu.major}</p>
              </div>
              <span className="shrink-0 text-xs text-zinc-500">{edu.period}</span>
            </div>
          </StaggerItem>
        ))}
      </FadeInStagger>

      {/* Certifications */}
      <FadeIn>
        <h3 className="mb-4 text-lg font-semibold text-zinc-300">수료/자격</h3>
      </FadeIn>
      <FadeInStagger className="space-y-3">
        {certifications.map((cert) => (
          <StaggerItem key={cert.title}>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-zinc-700">
              <div className="flex items-start justify-between">
                <p className="font-medium text-zinc-200">{cert.title}</p>
                <span className="shrink-0 text-xs text-zinc-500">{cert.period}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-500">{cert.detail}</p>
            </div>
          </StaggerItem>
        ))}
      </FadeInStagger>
    </Section>
  );
}
