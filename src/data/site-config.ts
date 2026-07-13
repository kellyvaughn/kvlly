export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string[];
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    projectsPerPage?: number;
    postsPerPage?: number;
    speakingPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Kelly Vaughn | Engineering Leader, Speaker, Author',
    subtitle: 'Engineering Leader | Speaker | Author',
    description: 'Engineering Leader, Speaker, Author',
    image: {
        src: '/kelly-vaughn.jpg',
        alt: 'Kelly Vaughn | Engineering Leader, Speaker, Author'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Speaking',
            href: '/speaking'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: '•',
            href: ''
        },
        {
            text: '✉️ Modern Leader',
            href: 'https://modernleader.is'
        },
        {
            text: '✉️ After Burnout',
            href: 'https://afterburnout.co'
        }
    ],
    footerNavLinks: [
        {
            text: 'Modern Leader',
            href: 'https://modernleader.is'
        },
        {
            text: 'After Burnout',
            href: 'https://afterburnout.co'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Bluesky',
            href: 'https://bsky.app/profile/kvlly.com'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/kellyvaughn'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/kelllyvaughn'
        },
        {
            text: 'Threads',
            href: 'https://www.threads.net/@kelllyvaughn'
        }
    ],
    hero: {
        text: [
            "I'm **Kelly Vaughn**, an engineering leader and speaker based in Atlanta, GA. I'm currently a Sr. Engineering Manager at Zapier and I'm passionate about coaching individual contributors into leadership roles and mentoring managers to be impactful, empowering leaders.",
            'Outside of Zapier, I write [The Modern Leader](https://modernleader.is), a newsletter read by engineering leaders navigating AI, organizational design, and modern software teams. Through writing, speaking, and courses, I’ve built a combined social following of 180,000+ and a newsletter community focused on modern engineering leadership.',
            'You may see me speaking on podcasts or at conferences around the world.',
            "When I'm not working, you'll probably find me at Pilates, running, traveling to a new country, or spending time at a coffee shop to make a tiny dent in my never-ending book collection."
        ],
        image: {
            src: '/kelly-vaughn.jpg',
            alt: 'Headshot of Kelly Vaughn'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    speakingPerPage: 8
};

export default siteConfig;
