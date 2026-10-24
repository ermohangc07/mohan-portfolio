import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { journey, mission, story, techStack, tools, values } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description: "The story, mission and values behind Mohan's work in development, AI and teaching.",
};

export default function About() {
  return (
    <>
      {/* Intro: story + portrait */}
      <section className="mx-auto flex max-w-[1200px] flex-wrap gap-16 px-6 pb-24 pt-24">
        <div className="flex min-w-[300px] flex-1 basis-[480px] flex-col gap-7">
          <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-subtle">About</span>
          <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tighter">
            Developer, builder and teacher.
          </h1>
          <div className="flex max-w-xl flex-col gap-5 text-[17px] leading-relaxed text-muted">
            {story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="mx-auto flex aspect-[4/5] w-full max-w-[360px] flex-[0_1_360px] items-center justify-center self-start rounded-3xl border border-border bg-card text-sm text-subtle">
          [Your portrait]
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-border/70">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-24">
          <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-subtle">Mission</span>
          <p className="max-w-3xl text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-snug tracking-tight">
            {mission}
          </p>
        </div>
      </section>

      {/* Journey */}
      <section className="border-t border-border/70">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-24">
          <SectionHeader label="Journey" title="How I got here" />
          <ol className="flex flex-col">
            {journey.map((j, i) => (
              <li key={i} className="grid gap-2 border-t border-border py-6 sm:grid-cols-[160px_1fr]">
                <span className="text-sm text-subtle">{j.period}</span>
                <div>
                  <div className="text-lg font-semibold">{j.title}</div>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">{j.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border/70">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-24">
          <SectionHeader label="Values" title="What I care about" />
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Card key={i}>
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{v.detail}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stack + tools */}
      <section className="border-t border-border/70">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-24">
          <SectionHeader label="Toolkit" title="Tech stack and tools" />
          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <h3 className="mb-[18px] text-base font-semibold">Tech stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </Card>
            <Card>
              <h3 className="mb-[18px] text-base font-semibold">Tools I use</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/70">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 py-28 text-center">
          <h2 className="max-w-[640px] text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] tracking-tighter">
            Let&apos;s work together.
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/contact">Get in touch</Button>
            <Button href="/courses" variant="secondary">Browse courses</Button>
          </div>
        </div>
      </section>
    </>
  );
}