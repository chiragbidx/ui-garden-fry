export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  featureCards: { title: string; subtitle: string; body: string }[];
};

export type LogosContent = {
  title: string;
  subtitle: string;
  logos: string[];
};

export type FeaturesContent = {
  title: string;
  intro: string;
  items: { title: string; body: string }[];
};

export type MetricsContent = {
  title: string;
  blurb: string;
  stats: { label: string; value: string }[];
  snapshot: string[];
};

export type PricingContent = {
  title: string;
  blurb: string;
  ctas: { sales: { label: string; href: string }; terms: { label: string; href: string } };
  plans: { name: string; price: string; desc: string; features: string[]; cta: { label: string; href: string } }[];
};

export type SecurityContent = {
  title: string;
  blurb: string;
  checklist: string[];
  badges: string[];
  cta: { label: string; href: string };
};

export type DocsSupportContent = {
  title: string;
  blurb: string;
  links: { label: string; link: string }[];
  supportBullets: string[];
  supportBadge: string;
  supportCta: { label: string; href: string };
};

export type LegalContent = {
  title: string;
  blurb: string;
  docs: { label: string; link: string; tag?: string }[];
  corporate: string[];
  note: string;
};

export type CtaContent = {
  title: string;
  blurb: string;
  productLinks: { label: string; href: string }[];
  resourceLinks: { label: string; href: string }[];
  footer: string;
};

export type HomeContent = {
  hero: HeroContent;
  logos: LogosContent;
  features: FeaturesContent;
  metrics: MetricsContent;
  pricing: PricingContent;
  security: SecurityContent;
  docs: DocsSupportContent;
  legal: LegalContent;
  cta: CtaContent;
};

export const defaultHomeContent: HomeContent = {
  hero: {
    eyebrow: "Launch campaigns, grow your business",
    title: "Mailvibe — effortless, modern email marketing for ambitious teams.",
    subtitle:
      "Design beautiful emails, manage your list, track results, and discover what works. No clunky workflows. No hassle. Start sending with Mailvibe in minutes.",
    primaryCta: { label: "Start Free Trial", href: "/auth#signup" },
    secondaryCta: { label: "See Features", href: "#features" },
    featureCards: [
      { title: "Campaigns", subtitle: "Send in seconds", body: "The fastest way to create, test and launch beautiful marketing emails — no code required." },
      { title: "Subscribers", subtitle: "List growth tools", body: "Easy forms, advanced segmentation, and automated list hygiene to grow your audience." },
      { title: "Analytics", subtitle: "Track every open", body: "Real-time reports, engagement metrics, and recommendations on what resonates." },
      { title: "AI Assist", subtitle: "Copy that works", body: "Write winning subject lines and get content ideas with smart suggestions." },
    ],
  },
  logos: {
    title: "Used by leading brands",
    subtitle: "Mailvibe powers the communication of fast-growing teams",
    logos: ["Stripe", "Linear", "Segment", "Notion", "OpenAI", "Monday.com", "Figma", "Loom", "Intercom", "Salesforce"],
  },
  features: {
    title: "What sets Mailvibe apart?",
    intro: "Unlike old-school tools, Mailvibe is built for simplicity, efficiency, and results.",
    items: [
      { title: "Drag-and-drop Editor", body: "Design emails visually, easily dropping in images, buttons, and more." },
      { title: "Automated Campaigns", body: "Send the right message at the right time, every time, with powerful automations." },
      { title: "Deliverability Focus", body: "Industry-best practices and infrastructure to help your messages land in the inbox." },
      { title: "Simple List Management", body: "Import, segment and clean lists with no CSV headaches." },
      { title: "Smart Analytics", body: "See what’s working, what’s not, and actionable tips for better results." },
      { title: "Affordable Scalability", body: "Flexible plans — no contract required." },
    ],
  },
  metrics: {
    title: "Our customers see real results",
    blurb: "From solopreneurs to high-volume senders, Mailvibe unlocks rapid growth.",
    stats: [
      { label: "Deliverability rate", value: "99.3%" },
      { label: "Avg. uplift in opens", value: "+12.7%" },
      { label: "Customer support rating", value: "4.9/5" },
      { label: "Campaigns sent", value: "175,800+" },
    ],
    snapshot: [
      "Intuitive campaign builder",
      "No-maintenance deliverability",
      "Live engagement metrics",
      "Flexible email API for developers",
      "Integrations: Zapier, Stripe, Slack, more",
    ],
  },
  pricing: {
    title: "Plans for every stage",
    blurb: "Start free and upgrade as you grow. All paid plans include priority support and unlimited campaigns.",
    ctas: {
      sales: { label: "Contact founder", href: "mailto:hi@chirag.co" },
      terms: { label: "Terms of service", href: "#legal" },
    },
    plans: [
      {
        name: "Starter",
        price: "$0",
        desc: "Perfect to start and try Mailvibe.",
        features: ["Up to 500 contacts", "Unlimited campaigns", "Live analytics", "Mailvibe watermark"],
        cta: { label: "Try free", href: "/auth#signup" },
      },
      {
        name: "Pro",
        price: "$19",
        desc: "Best for growing creators & startups.",
        features: ["2,500 contacts", "No Mailvibe branding", "AI assistant & scheduling", "Premium templates", "Priority support"],
        cta: { label: "Start Pro", href: "/auth#signup" },
      },
      {
        name: "Team",
        price: "$59",
        desc: "Collaborative sending for organizations",
        features: ["10,000 contacts", "Subaccounts & roles", "API & integrations", "White glove onboarding", "Team analytics"],
        cta: { label: "Upgrade to Team", href: "/auth#signup" },
      },
    ],
  },
  security: {
    title: "Your data. Your trust.",
    blurb: "Mailvibe applies security best practices behind the scenes: encryption, access controls, and compliance standards.",
    checklist: [
      "GDPR-Ready infrastructure",
      "Data encrypted at rest and in transit",
      "EU hosting available",
      "Strict access controls and monitoring",
      "No contact list reselling. Ever.",
    ],
    badges: ["GDPR", "SOC2-Ready", "SSL Secured", "Data-resident"],
    cta: { label: "Contact for DPA", href: "mailto:hi@chirag.co" },
  },
  docs: {
    title: "Simple docs, real humans",
    blurb: "Get started fast with rich guides and email/skype help direct from the founder. Zero chatbot angst.",
    links: [
      { label: "Getting Started", link: "#" },
      { label: "API Reference", link: "#" },
      { label: "Deliverability tips", link: "#" },
      { label: "Templates", link: "#" },
    ],
    supportBullets: [
      "Personal onboarding calls",
      "2-hr response on business days",
      "GDPR/data assistance",
      "Bulk sending guidance",
    ],
    supportBadge: "Direct founder support",
    supportCta: { label: "Contact support", href: "mailto:hi@chirag.co" },
  },
  legal: {
    title: "Clear, honest policies",
    blurb: "No tricks. Mailvibe is a one-person startup—expect transparency and fast answers.",
    docs: [
      { label: "Terms of Service", link: "#" },
      { label: "Privacy Policy", link: "#" },
    ],
    corporate: [
      "Mailvibe — Built and run by Chirag Dodiya",
      "Remote first, serving customers worldwide",
      "Custom agreements available upon request",
    ],
    note: "Request a compliance packet or privacy answer: hi@chirag.co",
  },
  cta: {
    title: "Launch your next campaign today",
    blurb: "Move from idea to impact in record time. Mailvibe gets your message delivered.",
    productLinks: [
      { label: "Start Free Trial", href: "/auth#signup" },
      { label: "Book live demo", href: "mailto:hi@chirag.co" },
      { label: "See pricing", href: "#pricing" },
    ],
    resourceLinks: [
      { label: "Docs", href: "#" },
      { label: "Contact", href: "#contact" },
      { label: "X/Twitter", href: "https://x.com" },
    ],
    footer: "Built with ♥ by Chirag Dodiya • Mailvibe.io",
  },
};

// Helper for future overrides (e.g., reading JSON from env or file)
export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}