import Link from "next/link";

export default function NotFound() {
    return (
        <section className="container py-24">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">404</p>
            <h1 className="mt-3 text-4xl font-bold text-slate-100">Page not found</h1>
            <p className="mt-4 text-slate-300">The page you are looking for does not exist.</p>
            <Link href="/" className="mt-6 inline-block text-primary hover:underline">
                Return home
            </Link>
        </section>
    );
}
