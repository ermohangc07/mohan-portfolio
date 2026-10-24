"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { sendMessage, type ContactState } from "@/app/contact/actions";

const initial: ContactState = { status: "idle" };

const field =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-[15px] text-fg placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg";

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendMessage, initial);
  const course = useSearchParams().get("course") ?? "";
  const v = state.values;

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-[20px] border border-border bg-card p-7">
        <h2 className="text-xl font-semibold">Message sent</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="flex flex-col gap-5 rounded-[20px] border border-border bg-card p-7">
      {/* Honeypot, hidden from people */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <input type="hidden" name="course" value={course} />

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input id="name" name="name" autoComplete="name" defaultValue={v?.name} aria-invalid={!!state.errors?.name} aria-describedby="name-err" className={field} />
        {state.errors?.name && <p id="name-err" className="text-sm text-red-400">{state.errors.name}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" defaultValue={v?.email} aria-invalid={!!state.errors?.email} aria-describedby="email-err" className={field} />
        {state.errors?.email && <p id="email-err" className="text-sm text-red-400">{state.errors.email}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="reason" className="text-sm font-medium">I&apos;m reaching out about</label>
        <select id="reason" name="reason" defaultValue={v?.reason ?? (course ? "course" : "project")} className={field}>
          <option value="project">Hiring you for a project</option>
          <option value="course">A course</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea id="message" name="message" rows={6} defaultValue={v?.message} aria-invalid={!!state.errors?.message} aria-describedby="message-err" placeholder="Tell me what you have in mind." className={field} />
        {state.errors?.message && <p id="message-err" className="text-sm text-red-400">{state.errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 items-center justify-center rounded-xl bg-fg px-6 text-[15px] font-medium text-bg transition-colors hover:bg-white disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
      <p aria-live="polite" className="text-sm text-red-400">{state.status === "error" ? state.message : ""}</p>
    </form>
  );
}