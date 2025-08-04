import { supabase } from '@/integrations/supabase/client';

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  category: 'soc-analyst' | 'cyberattacks' | 'tools-techniques' | 'news-journey' | string;
  content: string;
  image_url: string;
  previewContent: string;
  slug: string;
}

export const categoryMap: Record<string, string> = {
  'soc-analyst': 'SOC Analyst Insights & Labs',
  'cyberattacks': 'Real-World Cyberattacks & Case Studies',
  'tools-techniques': 'Cybersecurity Tools & Techniques',
  'news-journey': 'Cybersecurity News & My Journey',
};

const processPost = (post: any): BlogPost => ({
  ...post,
  previewContent: post.content ? `${post.content.substring(0, 150)}...` : '',
  slug: post.title ? post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') : '',
});

export const getAllPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('Blogs')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
  return data.map(processPost);
};

export const getPostsByCategory = async (category: string): Promise<BlogPost[]> => {
    const { data, error } = await supabase
        .from('Blogs')
        .select('*')
        .eq('category', category)
        .order('date', { ascending: false });

    if (error) {
        console.error(`Error fetching blogs for category ${category}:`, error);
        return [];
    }
    return data.map(processPost);
};

export const getPostById = async (id: number): Promise<BlogPost | null> => {
    const { data, error } = await supabase
        .from('Blogs')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error(`Error fetching blog with id ${id}:`, error);
        return null;
    }
    return data ? processPost(data) : null;
};

export const getLatestPostByCategory = async (category: string): Promise<BlogPost | null> => {
    const { data, error } = await supabase
        .from('Blogs')
        .select('*')
        .eq('category', category)
        .order('date', { ascending: false })
        .limit(1)
        .single();

    if (error && error.code !== 'PGRST116') { // Ignore "0 rows" error
         console.error(`Error fetching latest post for category ${category}:`, error);
    }
    return data ? processPost(data) : null;
};