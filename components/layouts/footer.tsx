import ApplicationLogo from "@/components/ApplicationLogo";
import {Icon} from "@iconify/react";
import Link from "next/link";

const socialLinks = [
    {href: "https://twitter.com/flowwats", icon: "mdi:twitter"},
    {href: "https://github.com/flowwats", icon: "mdi:github"},
    {href: "https://www.linkedin.com/company/flowwats/", icon: "mdi:linkedin"},
    {href: "https://www.facebook.com/flowwats", icon: "mdi:facebook"},
    {href: "https://www.instagram.com/flowwats/", icon: "mdi:instagram"},
    {href: "https://www.youtube.com/@flowwats", icon: "mdi:youtube"},
];

const footerLinks = [
    [
        {href: "/features", label: "Features"},
        {href: "/pricing", label: "Pricing"},
        {href: "/integrations", label: "Integrations"},
        {href: "/blog", label: "Blog"},
    ],
    [
        {href: "/about", label: "About"},
        {href: "/careers", label: "Careers"},
        {href: "/contact", label: "Contact"},
    ],
    [
        {href: "/request-demo", label: "Request a demo"},
        {href: "/sign-in", label: "Sign in"},
        {href: "/sign-up", label: "Sign up"},
    ],
    [
        {href: "/shop", label: "Shop"},
        {href: "/cart", label: "Cart"},
        {href: "/checkout", label: "Checkout"},
        {href: "/order-confirmation", label: "Order confirmation"},
    ],
]


export default function Footer() {
    return (
        <footer className="bg-gray-900 p-5 text-gray-200 font-light">
            <div className="max-w-screen-xl py-10 mx-auto grid sm:grid-cols-2 md:grid-cols-6 gap-x-10 gap-y-5">
                <div className="sm:col-span-2 space-y-5">
                    <ApplicationLogo/>
                    <p className="text-gray-400">
                        This powerful tool eliminates the need to leave Salesforce to get things done as I can create a
                        custom proposal with dynamic pricing tables.
                    </p>
                </div>
                {footerLinks.map((footerLink, value) => (
                    <ul key={value} className="space-y-2">
                        {footerLink.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href} className="hover:text-primary">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
            <div className="py-10 border-t flex flex-col gap-10 md:flex-row items-center justify-between border-gray-700 max-w-screen-xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center gap-3 text-sm">
                    <p className="text-center text-gray-400">
                        © {new Date().getFullYear()} Flowwats. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        <Link href="">Privacy Policy</Link>
                        <Link href="">Legal</Link>
                        <Link href="">Cookie Settings</Link>
                    </div>
                </div>
                <div className="">
                    <ul className="space-x-5">
                        {socialLinks.map(socialLink => (
                            <li key={socialLink.href} className="inline-block">
                                <Link href={socialLink.href} className="text-gray-400 hover:text-primary">
                                    <Icon icon={socialLink.icon} className="text-2xl" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}