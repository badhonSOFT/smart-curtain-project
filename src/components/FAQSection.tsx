import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is #TruePrice?",
      answer: "You get premium quality without brand markup, fake discounts, or inflated packaging. What you pay reflects only what you get. No hidden fees, no artificial price inflation just to offer 'discounts' later."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery takes 3-4 weeks after order confirmation. We manufacture each curtain to your exact specifications in Bangladesh, ensuring quality control and fair pricing."
    },
    {
      question: "Do I need a Zigbee Hub for Zigbee motors?",
      answer: "Yes, Zigbee motors require a hub for connectivity. If you select a Zigbee motor, we automatically include a hub in your order at transparent pricing - no surprise charges."
    },
    {
      question: "What's included in professional installation?",
      answer: "Professional installation includes mounting, motor setup, app configuration, and testing. Our certified technicians ensure everything works perfectly before leaving your home."
    },
    {
      question: "Can I control the curtains when I'm not at home?",
      answer: "Yes! With Wi-Fi connectivity, you can control your curtains from anywhere using our mobile app. Set schedules, check status, and operate remotely with internet connection."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bKash, Nagad, credit/debit cards through SSLCommerz, and bank transfers. You can pay 10% advance or get a ৳500 discount with full payment."
    },
    {
      question: "Is there a warranty?",
      answer: "Yes! We provide 2 years warranty on motors and 1 year on electronics. All parts are covered under our #TruePrice promise - no hidden service charges."
    },
    {
      question: "Why should I trust your pricing?",
      answer: "Unlike many brands that inflate prices to offer fake discounts, we price honestly from day one. Our #TruePrice model means you pay for actual value, not marketing gimmicks or brand premiums."
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-20 bg-secondary/30 scroll-snap-start">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
            Clear answers to common questions. No hidden information, just like our pricing.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass-effect rounded-lg sm:rounded-xl border-0 px-4 sm:px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline hover:text-primary font-medium py-4 sm:py-6 text-sm sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4 sm:pb-6 text-sm sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-base sm:text-lg text-accent font-medium px-2">
            Still have questions? We believe in transparency at every step.
          </p>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base px-2">
            Contact us for honest answers about our products and pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;