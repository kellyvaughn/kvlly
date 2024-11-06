import type { Config } from '@netlify/functions';

export default async (req: Request) => {
    // Return a random 8 character code - numbers and capital letters. Just plaintext, nothing else.
    const code = Math.random().toString(36).substring(2, 10).toUpperCase();
    return new Response(code, {
        headers: {
            'content-type': 'text/plain'
        }
    });
};

export const config: Config = {
    path: ['/code']
};
