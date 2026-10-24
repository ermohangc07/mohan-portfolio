import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section className="border-t border-border/70">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-24">
        <SectionHeader label="Skills" title="What I work with" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <Card key={group.title}>
              <h3 className="mb-[18px] text-base font-semibold">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}