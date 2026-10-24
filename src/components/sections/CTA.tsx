import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="border-t border-border/70">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 py-28 text-center">
        <h2 className="max-w-[720px] text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.1] tracking-tighter">
          Ready to build something, or learn how?
        </h2>
        <p className="max-w-[520px] text-lg leading-relaxed text-muted">
          Start a project with me, or enroll in a course and begin today.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/contact">Get in touch</Button>
          <Button href="/courses" variant="secondary">Browse courses</Button>
        </div>
      </div>
    </section>
  );
}