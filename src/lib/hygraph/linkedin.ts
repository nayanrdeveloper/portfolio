// server or client (server recommended)
const HYGRAPH = 'https://ap-south-1.cdn.hygraph.com/content/clqi0fx1w5llv01t47hg7agdt/master';

// --- LIST: all fields needed for card ---
const LIST_QUERY = `
  query LinkedInPosts {
    linkedInPosts(orderBy: publishDate_DESC, stage: PUBLISHED) {
      id
      content
      publishDate
      publishedAt
      url
      image { url }
      likes
      comments
    }
  }
`;

export type HygraphLinkedInPost = {
    id: string;
    content: string;
    publishDate?: string;
    publishedAt: string;
    url: string;
    image: { url: string } | null;
    likes: number;
    comments: number;
};

// --- Fetch helpers ---
export async function getLinkedInPosts(): Promise<HygraphLinkedInPost[]> {
    const res = await fetch(HYGRAPH, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // next: { revalidate: 300, tags: ['linkedin'] },
        body: JSON.stringify({
            operationName: 'LinkedInPosts',
            query: LIST_QUERY,
            variables: {},
        }),
    });

    if (!res.ok) throw new Error(`Hygraph ${res.status}: ${await res.text()}`);
    const json = await res.json();
    if (json.errors) throw new Error(JSON.stringify(json.errors));
    return (json.data?.linkedInPosts ?? []) as HygraphLinkedInPost[];
}
