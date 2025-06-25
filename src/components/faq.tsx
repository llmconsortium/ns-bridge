import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FaqItem {
  q: string;
  a: string;
}

export function Faq({ faqs }: { faqs: FaqItem[] }) {
  if (!faqs || faqs.length === 0) {
    return <p className="text-muted-foreground">No questions have been added yet.</p>
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger>{faq.q}</AccordionTrigger>
          <AccordionContent>
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
