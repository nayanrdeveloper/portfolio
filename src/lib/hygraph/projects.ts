// server or client (server recommended)
const HYGRAPH = 'https://ap-south-1.cdn.hygraph.com/content/clqi0fx1w5llv01t47hg7agdt/master';

// --- LIST: minimal fields (title, slug, mainImage) ---
const LIST_QUERY = `
  query ProjectCards {
    projects(orderBy: publishedAt_DESC, stage: PUBLISHED) {
      id
      title
      slug
      mainImage { url width height }  # <-- preferred single hero image
    }
  }
`;

// --- DETAIL: all fields by slug ---
const DETAIL_QUERY = `
  query ProjectBySlug($slug: String!) {
    project(where: { slug: $slug }, stage: PUBLISHED) {
      id
      title
      slug
      description
      challenges
      learned
      strategy
      externalUrl
      views
      images { url width height }
      technology { name }
    }
  }
`;

// Types for convenience
export type ProjectCard = {
    id: string;
    title: string;
    slug: string;
    mainImage?: { url: string; width?: number | null; height?: number | null } | null;
};

export type ProjectDetail = {
    id: string;
    title: string;
    slug: string;
    description?: string | null;
    challenges?: string | null;
    learned?: string | null;
    strategy?: string | null;
    externalUrl?: string | null;
    views: number;
    images: { url: string; width?: number | null; height?: number | null }[];
    technology: { name: string; slug: string }[];
};

// --- Fetch helpers ---
export async function getProjectCards(): Promise<ProjectCard[]> {
    const res = await fetch(HYGRAPH, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // If using App Router and you want ISR:
        // next: { revalidate: 300, tags: ['projects'] },
        body: JSON.stringify({
            operationName: 'ProjectCards',
            query: LIST_QUERY,
            variables: {},
        }),
    });

    if (!res.ok) throw new Error(`Hygraph ${res.status}: ${await res.text()}`);
    const json = await res.json();
    if (json.errors) throw new Error(JSON.stringify(json.errors));
    const items = (json.data?.projects ?? []) as ProjectCard[];
    return items;
}

export async function getProjectBySlug(slug: string): Promise<ProjectDetail | null> {
    const res = await fetch(HYGRAPH, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // next: { revalidate: 300, tags: [`project:${slug}`] },
        body: JSON.stringify({
            operationName: 'ProjectBySlug',
            query: DETAIL_QUERY,
            variables: { slug },
        }),
    });

    if (!res.ok) throw new Error(`Hygraph ${res.status}: ${await res.text()}`);
    const json = await res.json();
    if (json.errors) throw new Error(JSON.stringify(json.errors));
    return (json.data?.project as ProjectDetail) ?? null;
}
