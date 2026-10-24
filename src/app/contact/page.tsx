import type { Metadata } from "next";
import { Suspense } from "react";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/contact/ContactForm";
import { availability, contactInfo, socials } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project or ask about a course. Send Mohan a message.",
};

export default function Contact() {
  return (
    <section className="mx-auto flex max-w-[1200px] flex-wrap gap-16 px-6 pb-28 pt-24">
      <div className="flex min-w-[300px] flex-1 basis-[420px] flex-col gap-7">
        <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-subtle">Contact</span>
        <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tighter">
          Let&apos;s talk about your project.
        </h1>
        <p className="max-w-md text-[17px] leading-relaxed text-muted">
          Tell me what you&apos;re building, or ask which course fits you. {contactInfo.responseTime}.
        </p>

        <Card className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <span aria-hidden className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-base font-semibold">{availability.status}</span>
          </div>
          <p className="text-[15px] leading-relaxed text-muted">{availability.detail}</p>
        </Card>

        <dl className="flex flex-col gap-4 text-[15px]">
          <div>
            <dt className="text-sm text-subtle">Email</dt>
            <dd>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-white">{contactInfo.email}</a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-subtle">Based in</dt>
            <dd>{contactInfo.location}</dd>
          </div>
          <div>
            <dt className="text-sm text-subtle">Elsewhere</dt>
            <dd className="mt-1 flex flex-wrap gap-5">
              {socials.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-fg">
                  {s.label}
                </a>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      <div className="min-w-[300px] flex-1 basis-[460px]">
        <Suspense fallback={<div className="h-[560px] rounded-[20px] border border-border bg-card" />}>
          <ContactForm />
        </Suspense>
      </div>
    </section>
  );
}