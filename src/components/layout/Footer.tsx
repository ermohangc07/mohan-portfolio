import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/contact", label: "Contact" },
];

const social = [
  { href: "https://github.com/", label: "GitHub" },
  { href: "https://linkedin.com/", label: "LinkedIn" },
  { href: "https://youtube.com/", label: "YouTube" },
];

async function Year() {
  "use cache";
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-subtle">
        <span>© <Year /> Mohan</span>
        <div className="flex flex-wrap gap-6">
          {nav.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-fg">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-6">
          {social.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}