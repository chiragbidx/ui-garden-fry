import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "LayoutGrid",
    title: "Drag-and-Drop Builder",
    description:
      "Design stunning emails visually—add sections, images & CTAs with zero code.",
  },
  {
    icon: "Clock",
    title: "Automated Workflows",
    description:
      "Set up welcome drips, autoresponders, and scheduled campaigns to run on autopilot.",
  },
  {
    icon: "FileBarChart2",
    title: "Live Reporting",
    description:
      "Track opens, clicks, bounces & more in beautiful dashboards. Spot trends, not just numbers.",
  },
  {
    icon: "Users",
    title: "Segmentation & Lists",
    description:
      "Simple contact management, tagging, and rule-driven targeting in one place.",
  },
  {
    icon: "Bot",
    title: "AI Campaign Assistant",
    description:
      "Let AI craft subject lines, test content variations, and boost your engagement rates.",
  },
  {
    icon: "ShieldCheck",
    title: "Compliance Ready",
    description:
      "GDPR, CAN-SPAM & privacy by default. No data reselling or hidden catch.",
  },
];

export const LayoutFeatureGridSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Mailvibe: Seriously Powerful, Surprisingly Simple
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Built from the ground up to remove friction—for marketers, founders,
        and anyone building an audience with email.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};