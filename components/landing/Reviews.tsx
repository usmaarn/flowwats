import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Icon} from "@iconify/react";
import Link from "next/link";

const reviews = [
    {
        id: 1,
        title: "Proposals",
        description: "Share Tools in minutes with pre-built, customizable templates.",
        icon: "pepicons-pencil:file",
    },
    {
        id: 2,
        title: "Quotes",
        description: "Find out in real time when they’re opened, viewed and signed.",
        icon: "bi:gem",
    },
    {
        id: 3,
        title: "Contracts",
        description: "Use our native CRM integrations to pull customer data into your Tools fast.",
        icon: "oui:copy-clipboard",
    },
    {
        id: 4,
        title: "eSignatures",
        description: "Keep your data secure with our legally-binding e-Signature software.",
        icon: "hugeicons:touch-interaction-02",
    },
    {
        id: 5,
        title: "Forms",
        description: "Share via direct link or by embedding them on your website, no coding necessary.",
        icon: "radix-icons:stack",
    },
    {
        id: 6,
        title: "Payments",
        description: "Collect them instantly right from your contract, while increasing your close rate by 36%.",
        icon: "icomoon-free:coin-dollar",
    },
];

export default function Reviews(){
    return(
        <section className="bg-gray-900">
            <div className="px-5 py-20 max-w-screen-lg mx-auto space-y-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-gray-300">
                    Review quickly and confidently using Lexend.
                </h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {reviews.map(review => (
                        <Link key={review.id} href="" className="hover:scale-105 transition">
                            <Card>
                                <CardHeader>
                                    <div className="w-full flex justify-between">
                                        <Icon icon={review.icon} className="text-4xl" />
                                        <Icon icon="ri:arrow-right-up-line" className="text-2xl "/>
                                    </div>
                                </CardHeader>
                                <CardContent className="mt-5 space-y-2">
                                    <CardTitle className="text-2xl">{review.title}</CardTitle>
                                    <CardDescription className="text-lg">
                                        {review.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}