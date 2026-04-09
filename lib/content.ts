import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export type ContentType = "blog" | "projects";

export type ContentMeta = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    tags: string[];
    readTime: number;
    problem?: string;
    whyItMatters?: string;
    approach?: string;
    challenges?: string;
    results?: string;
    learnings?: string;
};

export type ContentEntry = {
    meta: ContentMeta;
    content: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

function normalizeDate(input: unknown) {
    if (input instanceof Date) {
        return input.toISOString().slice(0, 10);
    }

    if (typeof input === "string") {
        return input;
    }

    return "1970-01-01";
}

function estimateReadTime(text: string) {
    const words = text.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 220));
}

export async function getContentList(type: ContentType): Promise<ContentMeta[]> {
    const directory = path.join(CONTENT_ROOT, type);
    const files = await fs.readdir(directory);

    const entries = await Promise.all(
        files
            .filter((file) => file.endsWith(".mdx"))
            .map(async (file) => {
                const slug = file.replace(/\.mdx$/, "");
                const raw = await fs.readFile(path.join(directory, file), "utf8");
                const { data, content } = matter(raw);

                return {
                    slug,
                    title: data.title ?? slug,
                    excerpt: data.excerpt ?? "",
                    date: normalizeDate(data.date),
                    tags: Array.isArray(data.tags) ? data.tags : [],
                    readTime: estimateReadTime(content),
                    problem: data.problem,
                    whyItMatters: data.whyItMatters,
                    approach: data.approach,
                    challenges: data.challenges,
                    results: data.results,
                    learnings: data.learnings,
                } satisfies ContentMeta;
            })
    );

    return entries.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export async function getContentBySlug(
    type: ContentType,
    slug: string
): Promise<ContentEntry | null> {
    const filePath = path.join(CONTENT_ROOT, type, `${slug}.mdx`);

    try {
        const raw = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(raw);

        return {
            meta: {
                slug,
                title: data.title ?? slug,
                excerpt: data.excerpt ?? "",
                date: normalizeDate(data.date),
                tags: Array.isArray(data.tags) ? data.tags : [],
                readTime: estimateReadTime(content),
                problem: data.problem,
                whyItMatters: data.whyItMatters,
                approach: data.approach,
                challenges: data.challenges,
                results: data.results,
                learnings: data.learnings,
            },
            content,
        };
    } catch {
        return null;
    }
}
