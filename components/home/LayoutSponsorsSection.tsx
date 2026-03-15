"use client";

import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "Crown",
    name: "Vercel",
  },
  {
    icon: "Vegan",
    name: "Stripe",
  },
  {
    icon: "Ghost",
    name: "OpenAI",
  },
  {
    icon: "Puzzle",
    name: "SendGrid",
  },
  {
    icon: "Cloud",
    name: "AWS SES",
  },
  {
    icon: "Mail",
    name: "Mailgun",
  },
  {
    icon: "Zap",
    name: "Zapier",
  },
];

export const LayoutSponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">
        Trusted by best-of-breed platforms
      </h2>

      <div className="relative overflow-hidden rounded-xl border border-border/60 bg-card/60 p-4">
        <div className="flex w-max gap-12 animate-marquee">
          {sponsors.flatMap((item) => [item, item]).map(({ icon, name }, idx) => (
            <div key={`${name}-${idx}`} className="flex items-center text-xl md:text-2xl font-medium text-foreground/85">
              <Icon name={icon as keyof typeof icons} size={32} className="mr-2 text-primary" />
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};