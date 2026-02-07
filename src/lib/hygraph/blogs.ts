// server or client (server recommended)
const HYGRAPH = 'https://ap-south-1.cdn.hygraph.com/content/clqi0fx1w5llv01t47hg7agdt/master';

// --- LIST: all fields needed for card ---
const LIST_QUERY = `
  query Blogs {
    blogs(orderBy: date_DESC) {
      id
      title
      description
      url
      date
      readTime
      platform
      coverImage { url }
    }
  }
`;

export type HygraphBlog = {
    id: string;
    title: string;
    description: string;
    url?: string | null;
    date: string;
    readTime: string;
    platform: string;
    coverImage: { url: string } | null;
};

// --- Fetch helpers ---
export async function getBlogs(): Promise<HygraphBlog[]> {
    const res = await fetch(HYGRAPH, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // next: { revalidate: 300, tags: ['blogs'] },
        body: JSON.stringify({
            operationName: 'Blogs',
            query: LIST_QUERY,
            variables: {},
        }),
    });

    if (!res.ok) throw new Error(`Hygraph ${res.status}: ${await res.text()}`);
    const json = await res.json();
    if (json.errors) throw new Error(JSON.stringify(json.errors));
    return (json.data?.blogs ?? []) as HygraphBlog[];
}
