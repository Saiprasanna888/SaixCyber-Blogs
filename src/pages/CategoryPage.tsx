import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogPostCard from '../components/BlogPostCard';
import { getPostsByCategory } from '../services/blogService';
import { BlogPost, categoryMap } from '../types/blog';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const categoryBanners: Record<string, string> = {
  'soc-analyst': '/images/soc-analyst-insights-labs.png',
  'cyberattacks': '/images/real-world-cyberattacks.png',
  'tools-techniques': '/images/cybersecurity-tools-techniques.png',
  'news-journey': '/images/cybersecurity-news-journey.png',
};

const CategoryPage = () => {
  const { category: categorySlug } = useParams<{ category: string }>();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categoryTitle, setCategoryTitle] = useState<string>('');
  const [bannerImage, setBannerImage] = useState<string>('/placeholder.svg');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      if (categorySlug && categoryMap[categorySlug]) {
        setLoading(true);
        setCategoryTitle(categoryMap[categorySlug]);
        setBannerImage(categoryBanners[categorySlug] || '/placeholder.svg');
        const postsData = await getPostsByCategory(categorySlug);
        setPosts(postsData);
        setLoading(false);
      } else {
        setCategoryTitle('Category Not Found');
        setPosts([]);
        setLoading(false);
      }
    };
    fetchPosts();
  }, [categorySlug]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <section 
          className="relative bg-cover bg-center h-48 sm:h-56 md:h-64 mb-8 md:mb-12 flex items-end justify-center" 
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 text-center text-white/80 p-4 pb-6 md:pb-8">
            <h1 className="text-3xl text-center sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">{categoryTitle}</h1>
          </div>
        </section>
        
        <div className="container mx-auto px-4 pb-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-full max-w-sm mx-auto flex flex-col gap-2 p-4 border rounded-lg">
                  <Skeleton className="h-4 w-1/3 mb-2" />
                  <Skeleton className="h-6 w-full mb-1" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <Skeleton className="h-16 w-full mb-4" />
                  <Skeleton className="h-5 w-1/4" />
                </div>
              ))}
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              <p>No posts found in this category yet.</p>
              <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
                &larr; Back to Homepage
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;