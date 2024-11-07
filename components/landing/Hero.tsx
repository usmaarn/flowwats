import {Button, Space} from "antd";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div>
                <div className="absolute top-0 rotate-45">
                    <Image width={56} height={56} className="w-32px text-gray-900 dark:text-white" src="/assets/images/template/star-1.svg" alt="star-1" />
                </div>
                <div className="absolute top-0 right-0 rotate-45">
                    <Image width={56} height={56} src="/assets/images/template/star-2.svg" alt="star-2" />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 -rotate-12">
                    <Image width={56} height={56} src="/assets/images/template/icon-trophy.svg" alt="icon-trophy" />
                    {/*<Image width={56} height={56}  className="w-56px xl:w-64px d-none dark:d-block" src="/assets/images/template/icon-trophy-dark.svg" alt="icon-trophy-dark" />*/}
                </div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 rotate-45 ms-n3">
                    <Image width={56} height={56} src="/assets/images/template/icon-location.svg" alt="icon-location" />
                    {/*<Image width={56} height={56}  className="w-56px xl:w-64px d-none dark:d-block" src="/assets/images/template/icon-location-dark.svg" alt="icon-location-dark" />*/}
                </div>
                <div className="absolute top-72 left-10">
                    <Image width={56} height={56} src="/assets/images/template/icon-globe.svg" alt="icon-globe" />
                    {/*<Image width={56} height={56}  className="w-56px xl:w-64px d-none dark:d-block" src="/assets/images/template/icon-globe-dark.svg" alt="icon-globe-dark" />*/}
                </div>
                <div className="absolute top-72 right-10 rotate-45">
                    <Image width={56} height={56} src="/assets/images/template/icon-crown.svg" alt="icon-crown" />
                    {/*<Image width={56} height={56}  className="w-56px xl:w-64px d-none dark:d-block" src="/assets/images/template/icon-crown-dark.svg" alt="icon-crown-dark" />*/}
                </div>
                <div className="absolute bottom-0 -rotate-45">
                    <Image width={56} height={56} src="/assets/images/template/icon-diamond.svg" alt="icon-diamond" />
                    {/*<Image width={56} height={56}  className="w-56px xl:w-64px d-none dark:d-block" src="/assets/images/template/icon-diamond-dark.svg" alt="icon-diamond-dark" />*/}
                </div>
                <div className="absolute bottom-0 right-0 -rotate-12">
                    <Image width={56} height={56} src="/assets/images/template/icon-chat.svg" alt="icon-chat" />
                    {/*<Image width={56} height={56}  className="w-56px xl:w-64px d-none dark:d-block" src="/assets/images/template/icon-chat-dark.svg" alt="icon-chat-dark" />*/}
                </div>
            </div>
            <div className="max-w-screen-lg mx-auto px-5 py-10 md:py-20 space-y-10 md:space-y-20">
                <div className="text-center space-y-10 max-w-screen-md mx-auto">
                    <h1 className="text-4xl sm:text-xl md:text-6xl font-bold">
                        Streamlines all your project workflows
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
                        Drag-and-drop editing helps you build them fast,
                        with your choice of 750+ ready-to-use, free templates.
                    </p>
                    <Space className="flex flex-col sm:flex-row items-center justify-center w-full">
                        <Button type="primary" size="large">Start free 14-days trial</Button>
                        <Button size="large">Request a demo</Button>
                    </Space>
                    <p>No credit card required.</p>
                </div>

                <div className="max-w-screen-lg mx-auto relative">
                    <div className="absolute -right-24 bottom-0 hidden md:block">
                        <Image width={200} height={200} src="/assets/images/sitting.svg" alt="Sitting"/>
                    </div>
                    <div className="border-4 rounded-xl border-black overflow-hidden">
                        <Image width={500} height={500} className="md:hidden" src="/assets/images/dashboard.png" alt="dashboard"/>
                        <Image width={900} height={900} className="hidden md:block w-full" src="/assets/images/dashboard.png" alt="dashboard"/>
                    </div>
                </div>
            </div>
            <div className="hidden">
                <h1>Trusted for overall simplicity</h1>
                <p>Based on 4,000+ reviews with customer satisfaction on</p>
                <div className="flex items-center">
                    <Image width={100} height={100} src="/assets/images/brands/01.svg" alt="Trustpilot"/>
                    <Image width={100} height={100} src="/assets/images/brands/02.svg" alt="Trustpilot"/>
                    <Image width={100} height={100} src="/assets/images/brands/03.svg" alt="Trustpilot"/>
                    <Image width={100} height={100} src="/assets/images/brands/04.svg" alt="Trustpilot"/>
                </div>
            </div>
        </section>
    )
}