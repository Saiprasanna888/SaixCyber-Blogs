export interface BlogPost {
    id: number;
    title: string;
    date: string | null;
    author: string | null;
    category: 'soc-analyst' | 'cyberattacks' | 'tools-techniques' | 'news-journey' | null;
    content: string | null;
    image_url: string | null;
}

export const categoryMap: Record<string, string> = {
    'soc-analyst': 'SOC Analyst Insights & Labs',
    'cyberattacks': 'Real-World Cyberattacks & Case Studies',
    'tools-techniques': 'Cybersecurity Tools & Techniques',
    'news-journey': 'Cybersecurity News & My Journey',
};