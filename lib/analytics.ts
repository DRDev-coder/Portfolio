declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

export function trackResumeDownload(source: string, fileName: string) {
    if (typeof window === "undefined") {
        return;
    }

    window.gtag?.("event", "resume_download", {
        event_category: "engagement",
        event_label: source,
        file_name: fileName,
    });
}
