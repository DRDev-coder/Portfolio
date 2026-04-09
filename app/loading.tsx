export default function Loading() {
    return (
        <div className="flex min-h-[60vh] items-center justify-center">
            <div className="relative h-16 w-16">
                <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
                <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-accent" />
            </div>
        </div>
    );
}
