import {ReactNode} from "react";
import ApplicationLogo from "@/components/ApplicationLogo";

export default function Layout({children}: {children: ReactNode}) {
    return(
        <main>
            <div className="fixed top-5 left-5">
                <ApplicationLogo />
            </div>
            <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-800">
                {children}
            </div>
        </main>
    )
}