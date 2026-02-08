'use server';

const HYGRAPH = 'https://ap-south-1.cdn.hygraph.com/content/clqi0fx1w5llv01t47hg7agdt/master';
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN;

const CREATE_MUTATION = `
  mutation CreateTestimonial($name: String!, $role: String!, $company: String, $content: String!, $rating: Int!) {
    createTestimonial(data: {name: $name, role: $role, company: $company, content: $content, rating: $rating}) {
      id
    }
  }
`;

const PUBLISH_MUTATION = `
  mutation PublishTestimonial($id: ID!) {
    publishTestimonial(where: {id: $id}, to: PUBLISHED) {
      id
    }
  }
`;

export async function addTestimonial(formData: FormData) {
    const name = formData.get('name') as string;
    const role = formData.get('role') as string;
    const company = formData.get('company') as string;
    const content = formData.get('content') as string;
    const rating = parseInt(formData.get('rating') as string);

    if (!HYGRAPH_TOKEN) {
        console.warn('HYGRAPH_TOKEN is missing. Testimonial will NOT be saved.');
        // Simulate success for UI demo purposes
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return { success: true, message: 'Testimonial submitted! (Simulation: Token missing)' };
    }

    try {
        // 1. Create
        const res = await fetch(HYGRAPH, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${HYGRAPH_TOKEN}`,
            },
            body: JSON.stringify({
                query: CREATE_MUTATION,
                variables: { name, role, company, content, rating },
            }),
        });

        const json = await res.json();
        if (json.errors) throw new Error(JSON.stringify(json.errors));

        const id = json.data?.createTestimonial?.id;
        if (!id) throw new Error('Failed to create testimonial');

        // 2. Publish (Optional: remove if you want to review first)
        // await fetch(HYGRAPH, { ... })

        return { success: true, message: 'Testimonial submitted successfully!' };
    } catch (error) {
        console.error('Failed to add testimonial:', error);
        return { success: false, message: 'Failed to submit testimonial. Please try again.' };
    }
}
