export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-border bg-card px-3.5 py-2 text-sm text-zinc-300">
      {children}
    </span>
  );
}