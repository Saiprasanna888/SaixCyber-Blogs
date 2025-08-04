export interface BlogPost {
  id: string;
  category: 'soc-analyst' | 'cyberattacks' | 'tools-techniques' | 'news-journey';
  slug: string;
  title: string;
  date: string; // Format: YYYY-MM-DD
  author: string;
  previewContent: string;
  htmlPath: string; // Path to the static HTML file
}

export const categoryMap: Record<string, string> = {
  'soc-analyst': 'SOC Analyst Insights & Labs',
  'cyberattacks': 'Real-World Cyberattacks & Case Studies',
  'tools-techniques': 'Cybersecurity Tools & Techniques',
  'news-journey': 'Cybersecurity News & My Journey',
};

export const blogPosts: BlogPost[] = [
  {
    id: 'cyberattacks-2',
    category: 'cyberattacks',
    slug: 'what-is-a-homoglyph-attack',
    title: "What is a Homoglyph Attack? Here's How Hackers Fool Your Eyes 👁️",
    date: '2025-08-03',
    author: 'Saiprasanna',
    previewContent: 'Have you ever visited a website that looked exactly like your bank’s site, but something felt off? That could have been a homoglyph attack — a sneaky trick hackers use to fool your eyes.',
    htmlPath: '/posts/cyberattacks/what-is-a-homoglyph-attack.html',
  },
  {
    id: 'soc-analyst-1',
    category: 'soc-analyst',
    slug: 'understanding-siem-alerts',
    title: 'Understanding SIEM Alerts: A SOC Analyst\'s Guide',
    date: '2023-10-26',
    author: 'Saiprasanna',
    previewContent: 'Dive deep into the world of Security Information and Event Management (SIEM) alerts and learn how to effectively analyze and respond to them.',
    htmlPath: '/posts/soc-analyst/understanding-siem-alerts.html',
  },
  {
    id: 'cyberattacks-1',
    category: 'cyberattacks',
    slug: 'case-study-solarwinds-attack',
    title: 'Case Study: The SolarWinds Supply Chain Attack',
    date: '2023-09-15',
    author: 'Saiprasanna',
    previewContent: 'An in-depth look at the sophisticated SolarWinds attack, its impact, and the lessons learned for modern cybersecurity.',
    htmlPath: '/posts/cyberattacks/case-study-solarwinds-attack.html',
  },
  {
    id: 'tools-techniques-1',
    category: 'tools-techniques',
    slug: 'introduction-to-nmap',
    title: 'Introduction to Nmap: Your First Port Scan',
    date: '2023-08-01',
    author: 'Saiprasanna',
    previewContent: 'Get started with Nmap, the powerful network scanning tool, and learn the basics of port scanning for network reconnaissance.',
    htmlPath: '/posts/tools-techniques/introduction-to-nmap.html',
  },
  {
    id: 'news-journey-1',
    category: 'news-journey',
    slug: 'my-first-ctf-experience',
    title: 'My First CTF Experience: Lessons Learned',
    date: '2023-07-20',
    author: 'Saiprasanna',
    previewContent: 'Recounting my exciting journey through my first Capture The Flag (CTF) competition and the valuable insights gained.',
    htmlPath: '/posts/news-journey/my-first-ctf-experience.html',
  },
];

export const getPostsByCategory = (category: BlogPost['category']) => {
  return blogPosts.filter(post => post.category === category).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getLatestPostByCategory = (category: BlogPost['category']) => {
  const posts = getPostsByCategory(category);
  return posts.length > 0 ? posts[0] : null;
};

export const getAllPosts = () => {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};