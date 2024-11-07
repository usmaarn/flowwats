import {NextUIProvider} from "@nextui-org/system"
import {ReactNode} from "react";

export default function AppProvider({children}: {children: ReactNode}) {
    return(
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}