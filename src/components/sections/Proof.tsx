import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { stats, testimonials } from "@/data/proof";

export default function Proof() {
  return (
    <section className="border-t border-border/70">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-24">
        <SectionHeader label="Trust" title="Trusted by students and clients" />
        <div className="grid gap-5 sm:grid-cols-3">
          {stats.map((s) => (
            <Card key={s.label}>
              <div className="text-4xl font-semibold tracking-tight">{s.value}</div>
              <div className="mt-1.5 text-[15px] text-muted">{s.label}</div>
            </Card>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <Card key={t.author} className="flex flex-col gap-5">
              <p className="text-[17px] leading-relaxed">{t.quote}</p>
              <p className="text-sm text-subtle">{t.author}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}