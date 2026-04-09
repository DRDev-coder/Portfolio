type GitHubUser = {
    login: string;
    name: string | null;
    avatar_url: string;
    html_url: string;
    followers: number;
    following: number;
    public_repos: number;
};

type GitHubRepo = {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    updated_at: string;
};

type GitHubEvent = {
    type: string;
    created_at: string;
};

export type GitHubProfileData = {
    user: GitHubUser;
    pinnedRepos: GitHubRepo[];
    topRepos: GitHubRepo[];
    activity: {
        recentEvents: number;
        pushEvents: number;
        activeDaysLastMonth: number;
    };
} | null;

async function fetchFromGitHub<T>(url: string): Promise<T> {
    const response = await fetch(url, {
        headers: {
            Accept: "application/vnd.github+json",
        },
        next: {
            revalidate: 3600,
        },
    });

    if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
    }

    return response.json() as Promise<T>;
}

export async function getGitHubProfileData(
    username: string,
    pinnedRepoNames: string[] = []
): Promise<GitHubProfileData> {
    if (!username) {
        return null;
    }

    try {
        const [user, repos, events] = await Promise.all([
            fetchFromGitHub<GitHubUser>(`https://api.github.com/users/${username}`),
            fetchFromGitHub<GitHubRepo[]>(
                `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
            ),
            fetchFromGitHub<GitHubEvent[]>(
                `https://api.github.com/users/${username}/events/public?per_page=100`
            ),
        ]);

        const pinnedRepos = pinnedRepoNames
            .map((repoName) => repos.find((repo) => repo.name.toLowerCase() === repoName.toLowerCase()))
            .filter((repo): repo is GitHubRepo => Boolean(repo));

        const topRepos = [...repos]
            .filter((repo) => !pinnedRepos.some((pinned) => pinned.id === repo.id))
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6);

        const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
        const recentEvents = events.filter(
            (event) => new Date(event.created_at).getTime() > thirtyDaysAgo
        );

        const activeDays = new Set(
            recentEvents.map((event) => new Date(event.created_at).toISOString().slice(0, 10))
        );

        const pushEvents = recentEvents.filter((event) => event.type === "PushEvent").length;

        return {
            user,
            pinnedRepos,
            topRepos,
            activity: {
                recentEvents: recentEvents.length,
                pushEvents,
                activeDaysLastMonth: activeDays.size,
            },
        };
    } catch {
        return null;
    }
}
