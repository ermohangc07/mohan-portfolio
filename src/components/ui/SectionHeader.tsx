export default function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-subtle">{label}</span>
      <h2 className="text-4xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}