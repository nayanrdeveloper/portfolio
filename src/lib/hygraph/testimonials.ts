// server or client (server recommended)
const HYGRAPH = 'https://ap-south-1.cdn.hygraph.com/content/clqi0fx1w5llv01t47hg7agdt/master';

// --- LIST: all fields needed for card ---
const LIST_QUERY = `
  query Testimonials {
    testimonials {
      id
      name
      role
      company
      content
      rating
      image { url }
    }
  }
`;

export type HygraphTestimonial = {
    id: string;
    name: string;
    role: string;
    company?: string;
    content: string;
    rating: number;
    image?: { url: string } | null;
};

// --- Fetch helpers ---
export async function getTestimonials(): Promise<HygraphTestimonial[]> {
    const res = await fetch(HYGRAPH, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // next: { revalidate: 300, tags: ['testimonials'] },
        body: JSON.stringify({
            operationName: 'Testimonials',
            query: LIST_QUERY,
            variables: {},
        }),
    });

    if (!res.ok) throw new Error(`Hygraph ${res.status}: ${await res.text()}`);
    const json = await res.json();
    if (json.errors) throw new Error(JSON.stringify(json.errors));
    return (json.data?.testimonials ?? []) as HygraphTestimonial[];
}
