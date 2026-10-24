"use server";

import { Resend } from "resend";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
  values?: { name: string; email: string; reason: string; course: string; message: string };
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real users never fill this hidden field
  if (formData.get("website")) return { status: "success", message: "Thanks, your message was sent." };

  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    reason: String(formData.get("reason") ?? "project"),
    course: String(formData.get("course") ?? ""),
    message: String(formData.get("message") ?? "").trim(),
  };

  const errors: NonNullable<ContactState["errors"]> = {};
  if (values.name.length < 2) errors.name = "Please enter your name.";
  if (!emailPattern.test(values.email)) errors.email = "Please enter a valid email address.";
  if (values.message.length < 10) errors.message = "Please write at least a short sentence.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values, message: "Please fix the highlighted fields." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Contact form: missing env vars:", {
      RESEND_API_KEY: !!apiKey,
      CONTACT_TO_EMAIL: !!to,
      CONTACT_FROM_EMAIL: !!from,
    });
    return { status: "error", values, message: "Something went wrong on my side. Please email me directly instead." };
  }

  const reasonLabel = { project: "Project", course: "Course", other: "Other" }[values.reason] ?? "Other";

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Portfolio <${from}>`,
      to,
      replyTo: values.email,
      subject: `[${reasonLabel}] New message from ${values.name}`,
      text: [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Topic: ${reasonLabel}`,
        values.course ? `Course: ${values.course}` : null,
        "",
        values.message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    });

    if (error) {
      console.error("Contact form: Resend error", error);
      return { status: "error", values, message: "Your message couldn't be sent. Please try again in a moment." };
    }
  } catch (err) {
    console.error("Contact form: unexpected error", err);
    return { status: "error", values, message: "Your message couldn't be sent. Please try again in a moment." };
  }

  return { status: "success", message: "Thanks, your message was sent. I'll get back to you soon." };
}