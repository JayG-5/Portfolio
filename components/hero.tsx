"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6">
      {/* Background gradient orb */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
          김준균
        </h1>
        <p className="mt-4 text-lg text-zinc-400 sm:text-xl">
          Frontend & Mobile Developer
        </p>
        <p className="mt-1 text-sm text-zinc-500">경력 3년 11개월</p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 mt-8 max-w-xl text-center leading-relaxed text-zinc-500"
      >
        프론트엔드(React)와 모바일(Flutter)에 경험있는, 일관된 사용자 경험과
        상태 관리 구조를 설계하는 데 집중하는 개발자입니다.
        <br />
        다양한 클라이언트 환경에서 확장 가능한 구조를 만드는 것을 중요하게
        생각합니다.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 mt-10 flex gap-4"
      >
        <a
          href="https://github.com/JayG-5"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-zinc-700 px-6 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-sky-500 hover:text-white"
        >
          GitHub
        </a>
        <a
          href="https://kmong.com/@%EA%B9%80%EC%B2%A8%EC%A7%80%EB%84%A4"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-500"
        >
          크몽 프로필
        </a>
        <a
          href="mailto:jg55552758@gmail.com"
          className="rounded-full border border-zinc-700 px-6 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-sky-500 hover:text-white"
        >
          Contact
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-6 w-4 rounded-full border-2 border-zinc-600"
        >
          <div className="mx-auto mt-1 h-1.5 w-0.5 rounded-full bg-zinc-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
