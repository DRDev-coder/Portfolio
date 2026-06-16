import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "rounded-lg border border-white/12 bg-transparent transition-all duration-300 hover:border-white/22 hover:bg-white/[0.02]",
                className
            )}
            {...props}
        />
    );
}

function CardHeader({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("p-6", className)} {...props} />;
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3
            className={cn("font-serif text-lg font-bold tracking-tight text-foreground", className)}
            {...props}
        />
    );
}

function CardDescription({
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return <p className={cn("text-sm text-white/55", className)} {...props} />;
}

function CardContent({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("px-6 pb-6", className)} {...props} />;
}

export { Card, CardContent, CardDescription, CardHeader, CardTitle };
