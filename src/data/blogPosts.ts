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
    id: 'tools-techniques-3',
    category: 'tools-techniques',
    slug: 'dorkgpt-ai-google-dorking',
    title: 'DorkGPT – AI-Powered Google Dorking for SOC Analysts 🔍',
    date: '2025-08-10',
    author: 'Saiprasanna',
    previewContent: 'Discover DorkGPT, an AI tool that helps you create advanced Google search queries to find leaked data, exposed files, and other online risks faster.',
    htmlPath: '/posts/tools-techniques/dorkgpt-ai-google-dorking.html',
  },
  {
    id: 'cyberattacks-3',
    category: 'cyberattacks',
    slug: 'double-file-extension-spoofing',
    title: 'Cybersecurity Awareness: That “.pdf” File Might Not Be Safe at All! 📎',
    date: '2025-08-10',
    author: 'Saiprasanna',
    previewContent: 'Have you ever opened a file thinking it was just a harmless PDF? You might have fallen for a Double File Extension Spoofing trick.',
    htmlPath: '/posts/cyberattacks/double-file-extension-spoofing.html',
  },
  {
    id: 'tools-techniques-2',
    category: 'tools-techniques',
    slug: 'fofa-cybersecurity-search-engine',
    title: 'FOFA – The Cybersecurity Search Engine That Sees Everything 🔍',
    date: '2025-08-10',
    author: 'Saiprasanna',
    previewContent: 'Ever wondered how cybersecurity experts find hidden devices, servers, and websites across the entire internet? They often use a powerful tool called FOFA (Fingerprint of All).',
    htmlPath: '/posts/tools-techniques/fofa-cybersecurity-search-engine.html',
  },
  {
    id: 'news-journey-1',
    category: 'news-journey',
    slug: 'ransomhub-letsdefend-homelab',
    title: "RansomHub Ransomware: What I Learned from LetsDefend Labs & My Home Lab Projects 🧠",
    date: '2025-08-04',
    author: 'Saiprasanna',
    previewContent: 'A deep dive into the RansomHub ransomware group, connecting threat intelligence with hands-on practice from LetsDefend and home lab projects.',
    htmlPath: '/posts/news-journey/ransomhub-letsdefend-homelab.html',
  },
  {
    id: 'tools-techniques-1',
    category: 'tools-techniques',
    slug: 'rare-cybersecurity-tools',
    title: "Rare Cybersecurity Tools Every SOC Analyst Should Know 🧩",
    date: '2025-08-04',
    author: 'Saiprasanna',
    previewContent: 'Explore rare and underrated cybersecurity tools like TheHive, Velociraptor, and YARA that can give SOC Analysts an edge in defending against modern attacks.',
    htmlPath: '/posts/tools-techniques/rare-cybersecurity-tools.html',
  },
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