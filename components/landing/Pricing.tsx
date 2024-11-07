import {Button} from "antd";
import {Icon} from "@iconify/react";


export default function Pricing(){
    return (
        <section className="p-5 max-w-screen-2xl mx-auto">
            <div className="">
                <div className="text-center">
                    <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                        Simple, scalable pricing.
                    </h1>
                    <p className="md:text-xl">No extra charges. No hidden fees.</p>
                </div>
                <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <PricingCard
                        features={[
                            "Real-time tracking and notifications",
                            "Real-time analytics",
                            "Drag and drop templates",
                            "Project Management",
                        ]}
                        price={19}
                        title="Essentials"
                        description="For creating impressive tools that generate results."
                        priceDescription="Seat per month, 2 seats max"
                        featuresHeading="Key features"
                    />

                    <PricingCard
                        title="Business"
                        features={[
                            "CRM and Zapier integrations",
                            "Content reporting",
                            "Unlimited team workspaces",
                            "Approval workflows",
                            "Salesforce integration",
                        ]}
                        price={49}
                        description="For seamless integrations and sending tools in bulk."
                        priceDescription="Seat per month, 2 seats max"
                        featuresHeading="Everything in Essentials, plus"
                    />

                    <PricingCard
                        features={[
                            "Unlimited files uploads",
                            "Real-time tracking and notifications",
                            "User performance",
                            "SSO support and custom user roles",
                            "Bulk send & Forms*",
                        ]}
                        price={69}
                        title="Enterprise"
                        description="For large companies with complex Tool workflows."
                        priceDescription="Per‑seat or per‑tool pricing"
                        featuresHeading="Everything in Business, plus"
                    />
                </div>

                <p className="text-center text-gray-400 mt-10">
                    Prices exclude any applicable taxes.
                </p>
            </div>
        </section>
    )
}



function PricingCard(props: {
    features: string[],
    price: number,
    title: string
    description: string
    priceDescription: string
    featuresHeading: string
}) {
    return (
        <div className="p-10 bg-[#F6EDE9] rounded-2xl max-w-96 space-y-8">
            <div className="space-y-5">
                <h3 className="text-2xl font-bold">{props.title}</h3>
                <p className="md:text-lg">{props.description}</p>
            </div>
            <div className="">
                <h1 className="text-4xl font-bold">${props.price} USD</h1>
                <p>{props.priceDescription}</p>
            </div>
            <div className="text-center">
                <Button type="primary" className="w-full" size="large">
                    Start a free trial
                </Button>
                <p>No credit card required</p>
            </div>
            <div className="">
                <h6 className="font-bold">{props.featuresHeading}:</h6>
                <ul className="text-sm space-y-3 mt-5">
                    {props.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <Icon icon="lets-icons:check-fill" className="text-primary text-xl" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}