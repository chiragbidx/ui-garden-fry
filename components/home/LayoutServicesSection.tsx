import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Inbox-Focused Sending",
    description:
      "SendGrid, Mailgun, and AWS SES-backed delivery. Built-in sender authentication & best-practice compliance.",
    pro: 1,
  },
  {
    title: "AI-Powered Campaign Copy",
    description:
      "Get instant subject line, preview text, and content suggestions (GPT-powered).",
    pro: 1,
  },
  {
    title: "Contact Management & Growth",
    description: "Easy imports, tags, segments, and opt-in forms put growth on autopilot.",
    pro: 0,
  },
  {
    title: "Visual Editor & Templates",
    description: "Build beautiful, responsive campaigns with our drag-and-drop editor and pro template library.",
    pro: 1,
  },
];

export const LayoutServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        All you need for world-class email
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Mailvibe covers every part of your lifecycle—creation, delivery, and engagement—without the bloat.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
}