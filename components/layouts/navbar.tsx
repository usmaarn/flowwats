"use client"

import ApplicationLogo from "@/components/ApplicationLogo";
import Link from "next/link";
import {Button, Drawer} from "antd";
import {MenuOutlined} from "@ant-design/icons";
import {useState} from "react";

export default function Navbar(){
    const [show, setShow] = useState(false);
    return (
        <div className="h-20 z-50 flex items-center">
            <div className="max-w-screen-2xl mx-auto px-5 flex items-center w-full gap-10">
                <header className="flex items-center justify-between w-full lg:w-auto">
                    <ApplicationLogo />
                    <div className="lg:hidden">
                        <Button size="large" icon={<MenuOutlined />} onClick={() => setShow(true)} />
                        <Drawer onClose={() => setShow(false)} open={show} placement="left">

                        </Drawer>
                    </div>
                </header>
                <div className="hidden lg:flex flex-grow items-center justify-between">
                    <nav className="flex items-center gap-5">
                        <Link href="">Features</Link>
                        <Link href="">Pricing</Link>
                        <Link href="">Insights</Link>
                        <Link href="">About</Link>
                        <Link href="">Contact</Link>
                        <Link href="">More</Link>
                    </nav>
                    <nav className="flex items-center gap-5">
                        <Link href="">Request a demo</Link>
                        <Link href="">Login</Link>
                        <Link href="">
                            <Button type="primary">Start free trial</Button>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}