import { supabase } from '@/integrations/supabase/client';
import type { BlogPost } from '@/types/blog';

export const getAllPosts = async (): Promise<BlogPost[]> => {
    const { data, error } = await supabase
        .from('Blogs')
        .select('*')
        .order('date', { ascending: false });

    if (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
    return data as BlogPost[];
};

export const getPostsByCategory = async (category: string): Promise<BlogPost[]> => {
    const { data, error } = await supabase
        .from('Blogs')
        .select('*')
        .eq('category', category)
        .order('date', { ascending: false });

    if (error) {
        console.error(`Error fetching posts for category ${category}:`, error);
        return [];
    }
    return data as BlogPost[];
};

export const getLatestPostByCategory = async (category: string): Promise<BlogPost | null> => {
    const { data, error } = await supabase
        .from('Blogs')
        .select('*')
        .eq('category', category)
        .order('date', { ascending: false })
        .limit(1)
        .single();

    if (error) {
        if (error.code !== 'PGRST116') { // PGRST116 means no rows found, which is not an error here
            console.error(`Error fetching latest post for category ${category}:`, error);
        }
        return null;
    }
    return data as BlogPost;
};

export const getPostById = async (id: string): Promise<BlogPost | null> => {
    const { data, error } = await supabase
        .from('Blogs')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error(`Error fetching post with id ${id}:`, error);
        return null;
    }
    return data as BlogPost;
};