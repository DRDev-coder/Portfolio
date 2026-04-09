import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
    h1: (props) => (
        <h1 className="mt-2 text-balance text-3xl font-bold leading-tight text-slate-100 md:text-4xl" {...props} />
    ),
    h2: (props) => <h2 className="mt-12 text-2xl font-semibold tracking-tight text-slate-100" {...props} />,
    h3: (props) => <h3 className="mt-8 text-xl font-semibold text-slate-100" {...props} />,
    p: (props) => <p className="mt-5 text-[1.02rem] leading-8 text-slate-300" {...props} />,
    ul: (props) => <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-300" {...props} />,
    ol: (props) => <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300" {...props} />,
    blockquote: (props) => (
        <blockquote
            className="mt-6 border-l-2 border-primary/70 pl-5 italic text-slate-300"
            {...props}
        />
    ),
    code: (props) => (
        <code
            className="rounded bg-slate-800/80 px-1.5 py-0.5 text-[0.88em] text-accent"
            {...props}
        />
    ),
    a: (props) => (
        <a className="text-accent transition-colors hover:text-cyan-300 hover:underline" {...props} />
    ),
};
