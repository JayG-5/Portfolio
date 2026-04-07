export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-12 text-center text-sm text-zinc-500">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6">
        <div className="flex gap-6">
          <a
            href="mailto:jg55552758@gmail.com"
            className="transition-colors hover:text-white"
          >
            Email
          </a>
          <a
            href="https://github.com/jayg-5"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://kmong.com/@%EA%B9%80%EC%B2%A8%EC%A7%80%EB%84%A4"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Kmong
          </a>
        </div>
        <p>© 2026 김준균</p>
      </div>
    </footer>
  );
}
