import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Starter",
    popular: 0,
    price: "$0",
    description:
      "For testing & solo creators: core features, 500 contacts, unlimited sends.",
    buttonText: "Try free",
    benefitList: [
      "500 contacts",
      "Unlimited email campaigns",
      "Basic analytics",
      "Mailvibe watermark",
    ],
  },
  {
    title: "Pro",
    popular: 1,
    price: "$19",
    description:
      "Best for growing brands: 2,500 contacts, advanced analytics, and AI tools.",
    buttonText: "Start Pro",
    benefitList: [
      "2,500 contacts",
      "AI content assistant",
      "Premium templates",
      "No Mailvibe branding",
      "Priority email support",
    ],
  },
  {
    title: "Team",
    popular: 0,
    price: "$59",
    description:
      "Organizations: APIs, subaccounts, team analytics, and personal onboarding.",
    buttonText: "Upgrade to Team",
    benefitList: [
      "10,000 contacts",
      "Multiple users (subaccounts)",
      "Integrations & API access",
      "Team analytics",
      "White-glove onboarding",
    ],
  },
];

export const LayoutPricingSection = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Simple, fair pricing for every stage
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        No contracts. No surprises. Every paid plan includes full support and unlimited campaigns.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">{price}</span>
                  <span className="text-muted-foreground"> /mo</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                  asChild
                >
                  <a href="/auth#signup">{buttonText}</a>
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
      <p className="text-muted-foreground text-center mt-8">
        Need a custom plan or want to discuss large-volume pricing?{" "}
        <a className="underline font-semibold" href="mailto:hi@chirag.co">Contact Chirag</a>
      </p>
    </section>
  );
};