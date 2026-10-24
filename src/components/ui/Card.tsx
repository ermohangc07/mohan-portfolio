export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-[20px] border border-border bg-card p-7 ${className}`}>
      {children}
    </div>
  );
}