"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionTitle } from "./section";
import { FadeIn, FadeInStagger, StaggerItem } from "./motion";

interface Achievement {
  title: string;
  details: string[];
}

interface Project {
  name: string;
  period: string;
  summary: string;
  team: string;
  role: string;
  stack: string[];
  achievements: Achievement[];
  images?: string[];
  links?: { label: string; href: string }[];
}

interface Company {
  company: string;
  position: string;
  period: string;
  type: string;
  projects: Project[];
}

const experience: Company[] = [
  {
    company: "티라로보틱스",
    position: "프론트엔드",
    period: "2024.08 - 2026.04",
    type: "정규직",
    projects: [
      {
        name: "AMR 통합 관리 플랫폼",
        period: "2025.08 - 2026.04",
        summary:
          "3개 기술 스택으로 분산된 5개 앱을 단일 React 모노레포로 통합하고, 핵심 기능을 파사드 패턴의 독립 라이브러리로 패키징하여 신규 앱에서 조합만으로 화면을 구성할 수 있는 구조 설계",
        team: "프론트엔드 2명, 미들웨어 1명, 주행 3명",
        role: "프론트엔드",
        stack: [
          "React",
          "TypeScript",
          "Vite",
          "Three.js (R3F)",
          "Konva",
          "MUI",
          "Zustand",
          "Nx",
          "WebSocket",
        ],
        achievements: [
          {
            title: "모노레포 아키텍처 설계",
            details: [
              "3개 기술 스택(React, Vue.js, Flutter), 5개 독립 앱을 단일 React 모노레포로 통합 → 14개 공유 라이브러리 + 3개 앱 구조로 재편",
              "도메인별 라이브러리 분리: map-editor, json-schema-editor, ui, widget-system 등 파사드 패턴으로 단일 진입점만 노출",
              "앱 간 중복 구현 제거, 5개 앱 개별 교육 → 단일 앱으로 축소",
              "공유 디자인 토큰 + 컴포넌트 라이브러리로 UI/UX 패턴 통일",
            ],
          },
          {
            title: "Map Editor — Three.js(R3F) 기반 맵 편집 패키지",
            details: [
              "React Three Fiber 기반 2D/3D 맵 에디터 설계 및 구현 (편집 모드, 뷰어 모드 분리로 여러 앱에서 재사용)",
              "캔버스 인터렉션 UX: 다중 선택, 드래그 배치, 회전, 거리 측정, 터치 제스처",
              "WebSocket + Web Worker 기반 실시간 맵 데이터 스트리밍 및 비동기 렌더링 파이프라인",
              "7개 Zustand 스토어로 관심사 분리, 커맨드 패턴 기반 Undo/Redo",
            ],
          },
          {
            title: "JSON Schema Editor — 동적 폼 렌더링 패키지",
            details: [
              "JSON Schema를 파싱하여 트리 구조 UI를 자동 생성하는 범용 에디터 라이브러리 설계",
              "다중 객체 일괄 편집(Multi-Edit): N개 객체 데이터 병합, 값이 다른 필드는 Mixed placeholder + indeterminate 상태",
              "3개 앱의 서로 다른 도메인에서 스키마만 교체하여 동일 에디터 재사용",
            ],
          },
        ],
        images: Array.from({ length: 8 }, (_, i) => `/img/amr/${i + 1}.png`),
      },
      {
        name: "HMI (Human-Machine Interface)",
        period: "2024.08 - 2026.04",
        summary:
          "로봇 탑재 디스플레이에서 실행되는 터치 기반 HMI 개발 및 웹 마이그레이션",
        team: "앱 1명, 미들웨어 1명",
        role: "앱",
        stack: [
          "Flutter",
          "BLoC",
          "React",
          "Zustand",
          "WebSocket",
        ],
        achievements: [
          {
            title: "터치 기반 실시간 모니터링 HMI 개발",
            details: [
              "로봇 상태 실시간 대시보드: 배터리, 센서, 시스템 리소스, 작업 진행 상태 패널 구성",
              "조이스틱 수동 조작 UI, 안전 장치 상태 표시, 긴급 정지(EMO) 오버레이 등 현장 조작 인터페이스",
              "Idle/Active 모드 자동 전환, 키보드 입력 차단 등 키오스크 UX 설계",
              "한국어/영어 다국어 지원",
            ],
          },
          {
            title: "Flutter Linux → React 웹 마이그레이션",
            details: [
              "로봇 모델별 Flutter 브랜치 분기 → 단일 웹 앱 + 설정 기반 분기로 전환",
              "GTK WebKit2 키오스크 위에서 실행, 컨테이너 재빌드 없이 프론트엔드만 교체 가능한 구조로 배포 단순화",
            ],
          },
        ],
        images: [
          "/img/hmi/robot-display-1.png",
          "/img/hmi/robot-display-2.png",
          "/img/hmi/screens.png",
        ],
      },
    ],
  },
  {
    company: "김첨지네 어플리케이션",
    position: "앱 개발",
    period: "2022.06 - 재직중",
    type: "프리랜서",
    projects: [
      {
        name: "Kmong 외주 개발",
        period: "2023.06 - 2024.03",
        summary: "크몽 플랫폼을 통한 외주 개발 용역",
        team: "-",
        role: "앱 개발",
        stack: ["Flutter", "Dart"],
        achievements: [],
      },
      {
        name: "바다냉장고",
        period: "2024.06 - 2026.01",
        summary: "농수산/가공식품 B2B 플랫폼",
        team: "디자이너 1명, 앱 1명",
        role: "앱 개발",
        stack: ["Flutter", "GetX", "Git", "Figma"],
        achievements: [],
        images: [
          "/img/badanaengjanggo/login.png",
          "/img/badanaengjanggo/products.png",
          "/img/badanaengjanggo/invoice.png",
        ],
        links: [
          { label: "AOS", href: "https://play.google.com/store/apps/details?id=com.cnssolution.badam30" },
          { label: "iOS", href: "https://apps.apple.com/kr/app/bada-m-buy/id6670364868" },
        ],
      },
      {
        name: "Essayfit AI",
        period: "2022.05 - 2023.12",
        summary: "자연어처리를 이용한 미국대학 지원 에세이 첨삭 플랫폼",
        team: "PO 1명, PM 및 백엔드 1명, 인프라 및 백엔드 1명, 디자이너 1명, 프론트엔드 1명, QA 1명, 앱 1명(외주)",
        role: "앱 개발 (외주)",
        stack: ["Flutter", "Firebase", "Jira", "Slack", "Adobe XD"],
        achievements: [],
        images: Array.from({ length: 6 }, (_, i) => `/img/essayfit/${i}.png`),
        links: [
          { label: "Web", href: "https://essayfit-front.vercel.app/" },
        ],
      },
      {
        name: "공시록",
        period: "2023.01 - 2023.04",
        summary: "구독형 전자공시 알림 서비스",
        team: "백엔드 1명, 디자이너 1명, 앱 1명",
        role: "앱 개발",
        stack: ["Flutter", "Firebase", "Git", "Jira", "Slack", "Figma"],
        achievements: [
          {
            title: "기획부터 앱 배포까지 수행",
            details: [
              "백엔드 개발자인 형과 함께 만든 서비스. 외주를 위탁한 디자인을 제외하고 기획부터 배포까지 온전히 수행",
            ],
          },
        ],
        images: [
          "/img/noticelog/released.png",
          "/img/noticelog/intro.png",
          "/img/noticelog/today.png",
          "/img/noticelog/wishList.png",
          "/img/noticelog/calendar.png",
        ],
      },
    ],
  },
];

/* ─── Image Carousel ─── */
function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative overflow-hidden rounded-xl bg-zinc-950">
      <div className="flex items-center justify-center py-4" style={{ minHeight: 320 }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt=""
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            className="max-h-[460px] w-auto rounded-lg object-contain"
          />
        </AnimatePresence>
      </div>
      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white/70 backdrop-blur-sm transition hover:text-white"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white/70 backdrop-blur-sm transition hover:text-white"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-4 bg-sky-400" : "w-1.5 bg-zinc-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Project Block (Carousel + Description side by side) ─── */
function ProjectBlock({ project }: { project: Project }) {
  const hasImages = project.images && project.images.length > 0;
  const hasAchievements = project.achievements.length > 0;

  return (
    <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-5">
      {/* Title row */}
      <div className="mb-3 flex items-center gap-3">
        <h4 className="font-semibold text-zinc-100">{project.name}</h4>
        <span className="text-xs text-zinc-500">{project.period}</span>
      </div>

      {/* Layout: images left, description right (or stacked on mobile) */}
      <div className={hasImages ? "flex flex-col gap-5 lg:flex-row" : ""}>
        {/* Carousel */}
        {hasImages && (
          <div className="w-full shrink-0 lg:w-[280px]">
            <ImageCarousel images={project.images!} />
          </div>
        )}

        {/* Description */}
        <div className="flex-1">
          <p className="mb-3 text-sm leading-relaxed text-zinc-400">
            {project.summary}
          </p>

          <div className="mb-3 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md bg-sky-500/10 px-2 py-0.5 text-xs font-medium text-sky-400"
              >
                {s}
              </span>
            ))}
          </div>

          {project.team !== "-" && (
            <p className="mb-3 text-sm text-zinc-500">
              팀: {project.team} /{" "}
              <span className="text-sky-400">{project.role}</span>
            </p>
          )}

          {/* Achievements */}
          {hasAchievements && (
            <div className="space-y-3">
              {project.achievements.map((achievement) => (
                <div key={achievement.title}>
                  <p className="mb-1 text-sm font-medium text-zinc-300">
                    {achievement.title}
                  </p>
                  <ul className="space-y-0.5 pl-4">
                    {achievement.details.map((detail, i) => (
                      <li
                        key={i}
                        className="list-disc text-[13px] leading-relaxed text-zinc-400 marker:text-zinc-600"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Links */}
          {project.links && (
            <div className="mt-3 flex gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-zinc-700 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Company Card ─── */
function CompanyCard({ company }: { company: Company }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-colors hover:border-zinc-700">
      {/* Company header */}
      <div className="border-b border-zinc-800/60 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">{company.company}</h3>
            <p className="mt-0.5 text-sm text-zinc-400">{company.position}</p>
          </div>
          <div className="text-right">
            <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-400">
              {company.type}
            </span>
            <p className="mt-1 text-xs text-zinc-500">{company.period}</p>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-4 p-6">
        {company.projects.map((project) => (
          <ProjectBlock key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

/* ─── Section ─── */
export default function Experience() {
  return (
    <Section id="experience" className="border-t border-zinc-800/50">
      <FadeIn>
        <SectionTitle>Experience</SectionTitle>
      </FadeIn>
      <FadeInStagger className="space-y-8">
        {experience.map((company) => (
          <StaggerItem key={company.company}>
            <CompanyCard company={company} />
          </StaggerItem>
        ))}
      </FadeInStagger>
    </Section>
  );
}
