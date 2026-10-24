import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { courses } from "@/data/courses";

export default function FeaturedCourses() {
  return (
    <section className="border-t border-border/70">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader label="Courses" title="Featured courses" />
          <Link href="/courses" className="text-[15px] hover:text-white">
            View all courses →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <Card key={c.slug} className="flex flex-col gap-4">
              <div className="aspect-video rounded-xl border border-border bg-[#17171A]" />
              <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-subtle">{c.category}</span>
              <h3 className="text-xl font-semibold leading-snug">{c.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{c.summary}</p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="text-xl font-semibold">{c.price}</span>
                <Button href={`/courses#${c.slug}`} variant="secondary">Enroll</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}