import type { Config } from '@netlify/functions';

export default async (req: Request) => {
    const redirects = [
        {
            from: 'sub',
            to: 'https://modernleader.is/subscribe?utm_source=twitter_profile&utm_medium=profile_link&utm_campaign=twitter_profile_link'
        }
    ];

    const path = req.url.split('/go/')[1].split('?')[0];
    const redirect = redirects.find((redirect) => redirect.from === path);
    const query = req.url.split('?')[1];

    if (redirect) {
        if (query) {
            return Response.redirect(`${redirect.to}?${query}`, 302);
        }
        return Response.redirect(redirect.to, 302);
    }
};

export const config: Config = {
    path: ['/go/*']
};
