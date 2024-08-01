import type { Config } from '@netlify/functions';

export default async (req: Request) => {
    console.log(req);

    const url = 'https://api.beehiiv.com/v2/publications/pub_190d9520-1141-44f1-8790-19a2b81e35e5/subscriptions';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`
        },
        body: `{"email":"${req.email}","reactivate_existing":false,"send_welcome_email":false,"utm_source":"Maven","utm_campaign":"waitlist","utm_medium":"import","referring_site":"www.maven.com","custom_fields":[{"name":"Maven","value":"true"}]}`
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

export const config: Config = {
    path: ['/maven']
};
