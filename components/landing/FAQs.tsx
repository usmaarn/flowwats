import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const faqs = [
    {
        "id": 1,
        "question": "How does Flowwarts enhance my customer engagement?",
        "answer": "Flowwarts automates your messaging, ensuring timely and relevant communication that increases customer satisfaction and loyalty."
    },
    {
        "id": 2,
        "question": "What types of businesses can benefit from Flowwarts?",
        "answer": "Flowwarts works across various industries—be it healthcare, e-commerce, or tech—helping you streamline your customer interactions effectively."
    },
    {
        "id": 3,
        "question": "Is the setup process complicated?",
        "answer": "Not at all! Flowwarts is designed for ease of use, with straightforward onboarding and integration to get you started quickly."
    },
    {
        "id": 4,
        "question": "Can I track the performance of my messaging campaigns?",
        "answer": "Absolutely! Flowwarts offers real-time analytics, allowing you to monitor the success of your campaigns and adjust strategies as needed."
    }
];

export default function FAQs(){
    return(
        <section className="bg-white dark:bg-gray-900">
            <div className="container max-w-4xl px-6 py-10 mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
                    Frequently asked questions
                </h1>
                <Accordion type="single" collapsible className="mt-10 border divide-y rounded-2xl">
                    {faqs.map((faq) => (
                        <AccordionItem
                            key={faq.id} value={faq.id.toString()}
                            className=""
                        >
                            <AccordionTrigger className="p-5 text-left font-semibold text-gray-700 dark:text-white">
                                {faq.question}
                            </AccordionTrigger>

                            <AccordionContent className="p-5 text-sm text-gray-500 dark:text-gray-300 bg-gray-100">
                                <div dangerouslySetInnerHTML={{__html: faq.answer}}/>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}