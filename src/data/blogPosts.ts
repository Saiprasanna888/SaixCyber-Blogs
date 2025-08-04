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
    id: 'soc-analyst-1',
    category: 'soc-analyst',
    slug: 'soc-analyst-guide',
    title: "SOC Analyst Guide — Understanding SOC, SIEM, EDR, and Frameworks 🛡️",
    date: '2025-08-03',
    author: 'Saiprasanna',
    previewContent: 'A detailed guide for beginners and aspiring SOC Analysts covering SOC, SIEM, EDR, and the frameworks that govern them.',
    htmlPath: '/posts/soc-analyst/soc-analyst-guide.html',
  },
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