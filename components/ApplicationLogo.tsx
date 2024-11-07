import {TypographyH2} from "@/components/ui/typography";
import Link from "next/link";

export default function ApplicationLogo({className}: {className?: string}) {
    return (
        <Link href="/">
            <TypographyH2 className={className}>Flowwats</TypographyH2>
        </Link>
    )
}