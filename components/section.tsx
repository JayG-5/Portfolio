export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className="mx-auto max-w-4xl">{children}</div>
    </section>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
      {children}
      <span className="ml-2 inline-block h-1 w-8 rounded-full bg-sky-500 align-middle" />
    </h2>
  );
}
