import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogPostCard from '../components/BlogPostCard';
import { getPostsByCategory, BlogPost, categoryMap } from '../data/blogPosts';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    if (categorySlug && categoryMap[categorySlug]) {
      const categoryTyped = categorySlug as BlogPost['category'];
      setPosts(getPostsByCategory(categoryTyped));
      setCategoryTitle(categoryMap[categorySlug]);
      setBannerImage(categoryBanners[categorySlug] || '/placeholder.svg');
    } else {
      setCategoryTitle('Category Not Found');
      setPosts([]);
    }
  }, [categorySlug]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <section 
          className="relative bg-cover bg-center h-64 mb-12 flex items-center justify-center" 
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">{categoryTitle}</h1>
          </div>
        </section>
        
        <div className="container mx-auto px-4 pb-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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