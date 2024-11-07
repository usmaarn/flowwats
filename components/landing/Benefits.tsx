import Image from "next/image";

const benefits = [
    {
        "id": "1.1",
        "title": "Automate your customer engagement",
        "description": "Connect with your audience at the right time without lifting a finger. Schedule messages, trigger responses based on user actions, and handle FAQs automatically.",
        "image": "01.svg"
    },
    {
        "id": "1.2",
        "title": "Streamlined campaign management",
        "description": "Flowwats simplifies your messaging campaigns, allowing you to send bulk messages while complying with WhatsApp’s policies.",
        "image": "02.svg"
    },
    {
        "id": "1.3",
        "title": "Enhance customer interactions",
        "description": "Integrate AI-driven chatbots for instant replies and create interactive messages with buttons and polls to keep your customers engaged.",
        "image": "03.svg"
    },
    {
        "id": "1.4",
        "title": "Insightful analytics at your fingertips",
        "description": "Track performance metrics such as open rates and responses, helping you make data-driven decisions that fuel growth.",
        "image": "04.svg"
    }
]


export default function Benefits() {
    return (
        <section className="px-5 py-20 max-w-screen-lg mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
                Benefits of using Flowwats
            </h1>
            <div className="space-y-5 md:space-y-10 divide-y">
                {benefits.map((benefit, index) => (
                    <div key={benefit.id} className="pt-5 md:pt-10 flex flex-col-reverse md:flex-row items-center gap-x-10 gap-y-5">
                        <div className="space-y-5 basis-1/2">
                            <p className="text-lg font-bold">0{index + 1}</p>
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
                                {benefit.title}
                            </h1>
                            <p className="lg:text-lg">{benefit.description}</p>
                        </div>
                        <div className="overflow-hidden rounded-2xl basis-1/2">
                            <Image
                                width={400}
                                height={400}
                                src={`/assets/images/benefits/${benefit.image}`}
                                alt={benefit.title}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}