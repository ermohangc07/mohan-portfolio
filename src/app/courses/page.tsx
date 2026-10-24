import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { courses } from "@/data/courses";
import { benefits, faqs } from "@/data/coursesPage";
import { testimonials } from "@/data/proof";

export const metadata: Metadata = {
  title: "Courses",
  description: "Practical, project-based courses in Next.js, AI building and photography.",
};

const categories = Array.from(new Set(courses.map((c) => c.category)));

export default function Courses() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto flex max-w-[1200px] flex-col gap-7 px-6 pb-24 pt-24">
        <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-subtle">Courses</span>
        <h1 className="max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tighter">
          Learn by building real things.
        </h1>
        <p className="max-w-xl text-[19px] leading-relaxed text-muted">
          [One or two sentences on your teaching approach and the result students can expect.]
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="#courses">See all courses</Button>
          <Button href="/contact" variant="secondary">Ask a question</Button>
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-border/70">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-24">
          <SectionHeader label="Categories" title="Choose your path" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const inCat = courses.filter((c) => c.category === cat);
              return (
                <a
                  key={cat}
                  href={`#${inCat[0].slug}`}
                  className="rounded-[20px] border border-border bg-card p-7 transition-colors hover:border-zinc-600"
                >
                  <div className="text-lg font-semibold">{cat}</div>
                  <div className="mt-1.5 text-[15px] text-muted">
                    {inCat.length} {inCat.length === 1 ? "course" : "courses"}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course cards */}
      <section id="courses" className="border-t border-border/70">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-24">
          <SectionHeader label="All courses" title="Featured courses" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
            <div key={c.slug} id={c.slug} className="scroll-mt-24">
            <Card className="flex h-full flex-col gap-4">
                <div className="aspect-video rounded-xl border border-border bg-[#17171A]" />
                <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-subtle">{c.category}</span>
                <h3 className="text-xl font-semibold leading-snug">{c.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{c.summary}</p>
                <div className="mt-auto flex items-center justify-between pt-2">
                <span className="text-xl font-semibold">{c.price}</span>
                <Button href={`/contact?course=${c.slug}`} variant="secondary">Enroll</Button>
                </div>
            </Card>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-border/70">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-24">
          <SectionHeader label="Why learn here" title="What you get" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Card key={i}>
                <h3 className="text-base font-semibold">{b.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{b.detail}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border/70">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-24">
          <SectionHeader label="Student results" title="What students say" />
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

      {/* FAQ */}
      <section className="border-t border-border/70">
        <div className="mx-auto flex max-w-[800px] flex-col gap-12 px-6 py-24">
          <SectionHeader label="FAQ" title="Common questions" />
          <div className="flex flex-col">
            {faqs.map((f) => (
              <details key={f.q} className="group border-t border-border py-5 last:border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-medium">
                  {f.q}
                  <span aria-hidden className="text-muted transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="border-t border-border/70">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 py-28 text-center">
          <h2 className="max-w-[640px] text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] tracking-tighter">
            Ready to start learning?
          </h2>
          <p className="max-w-[480px] text-lg leading-relaxed text-muted">
            Pick a course and enroll today, or reach out if you&apos;re not sure which one fits.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="#courses">Enroll now</Button>
            <Button href="/contact" variant="secondary">Talk to me first</Button>
          </div>
        </div>
      </section>
    </>
  );
}