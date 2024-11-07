"use client"

import {Button, Space} from "antd";
import {Modal} from "antd";
import {useState} from "react";
import Image from "next/image";

export default function CTA(){
    return (
        <section className="bg-secondary dark:bg-gray-900">
            <div className="relative max-w-screen-2xl mx-auto md:py-20">
                <Image
                    src="/assets/images/template/chatting.svg"
                    alt="svg"
                    width={200}
                    height={200}
                    className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2"
                />
                <div className="flex flex-col items-center justify-center gap-5 max-w-screen-md mx-auto px-5 py-10">
                    <h1 className="text-3xl msm:text-4xl md:text-5xl font-bold text-center">
                        Create stunning websites that fits <span className="text-primary">your needs</span>.
                    </h1>
                    <p>Try Flowwats today.</p>
                    <Space className="">
                        <Button type="primary" size="large">Try Flowwats today</Button>
                        <Button size="large">Contact Sales</Button>
                    </Space>
                    <p>
                        14-day trial, no credit card required.
                    </p>
                </div>
                <Image
                    src="/assets/images/template/talking.svg"
                    alt="svg"
                    width={200}
                    height={200}
                    className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2"
                />
            </div>
        </section>
    )
}

export function Compliance(){
    const [open, setOpen] = useState(true);

    return(
        <Modal
            title="GDPR Compliance"
            open={open}
            centered
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
        >
            <div>
                <p className="fs-6 mt-1">We use cookies to ensure you get the best experience on our website. By
                    continuing to use our site, you accept our use of cookies,
                    <a className='uc-link text-underline' href='page-privacy.html'>privacy policy</a>
                    and
                    <a className='uc-link text-underline' href='page-terms.html'>terms of service</a>.
                </p>
            </div>
        </Modal>
    )
}