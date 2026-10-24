import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-16 px-6 pb-28 pt-24">
      <div className="fade-up flex min-w-[300px] flex-1 basis-[480px] flex-col gap-7">
        <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-subtle">
          Next.js developer · AI builder · Educator
        </span>
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tighter">
          I build with Next.js and AI, and teach others to do the same.
        </h1>
        <p className="max-w-xl text-[19px] leading-relaxed text-muted">
          I help businesses ship fast, reliable web products, and help developers grow through practical, project-based courses.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/courses">Explore courses</Button>
          <Button href="/contact" variant="secondary">Work with me</Button>
        </div>
        <p className="text-sm text-subtle">
          Developer · AI builder · Educator · Photographer · Content creator
        </p>
      </div>

      {/* Replace with next/image once you add public/portrait.jpg */}
      <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px] flex-[0_1_400px] overflow-hidden rounded-3xl border border-border">
        <Image
          src="/portrait.jpeg"
          alt="Portrait of Mohan"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
        />
      </div>
    </section>
  );
}