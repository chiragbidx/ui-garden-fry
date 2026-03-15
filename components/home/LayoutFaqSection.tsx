import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Can I try Mailvibe for free?",
    answer: "Absolutely! The Starter plan gives you all core features and no credit card is required.",
    value: "item-1",
  },
  {
    question: "How is Mailvibe different from older email tools?",
    answer:
      "Mailvibe focuses on simplicity, speed, and deliverability—providing a powerful, modern experience, AI content assistance, and direct founder support.",
    value: "item-2",
  },
  {
    question: "Will my emails actually reach inboxes?",
    answer:
      "Yes. Mailvibe is built atop proven infrastructure partners and follows strict deliverability practices to maximize inbox placement.",
    value: "item-3",
  },
  {
    question: "Can I use my own sending domain?",
    answer: "Yes! You can authenticate your sending domain or use Mailvibe's trusted pools for instant sending.",
    value: "item-4",
  },
  {
    question: "What happens if I need help?",
    answer: "You get fast, direct access to the founder. No support tickets or giant queues.",
    value: "item-5",
  },
];

export const LayoutFaqSection = () => {
  return (
    <section id="faq" className="container mx-auto md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQ
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};