import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import {ReactNode} from "react";

export default function PublicLayout({children}: {children: ReactNode}) {
    return(
        <main>
            <Navbar/>
            {children}
            <Footer/>
        </main>
    )
}