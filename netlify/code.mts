import type { Config } from '@netlify/functions';

export default async (req: Request) => {
    // Generate 8 character random string - capital letters and numbers
    return {
        statusCode: 200,
        body: Math.random().toString(36).substring(2, 10).toUpperCase()
    };
};

export const config: Config = {
    path: ['/code']
};
