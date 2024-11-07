import {HTMLAttributes, ReactNode} from "react";

export function TypographyH1({children, className}: HTMLAttributes<HTMLHeadingElement> & {children: ReactNode}) {
    return (
        <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}>
            {children}
        </h1>
    )
}


export function TypographyH2({children, className}: HTMLAttributes<HTMLHeadingElement> & {children: ReactNode}) {
    return (
        <h2 className={`scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}>
            {children}
        </h2>
    )
}

export function TypographyH3({children}: {children: ReactNode}) {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {children}
        </h3>
    )
}

export function TypographyH4({children}: {children: ReactNode}) {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {children}
        </h4>
    )
}

export function TypographyP({children}: {children: ReactNode}) {
    return (
        <p className="leading-7">
            {children}
        </p>
    )
}

export function TypographyList({children}: {children: ReactNode}) {
    return (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {children}
        </ul>
    )
}

export function TypographyLarge({children}: {children: ReactNode}) {
    return <div className="text-lg font-semibold">{children}</div>
}

export function TypographyContent({children}: {children: ReactNode}) {
    return (
        <div>
            {children}
        </div>
    )
}