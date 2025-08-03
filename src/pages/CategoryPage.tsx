import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogPostCard from '../components/BlogPostCard';
import { getPostsByCategory, BlogPost } from '../data/blogPosts';
import { useEffect, useState } from 'react';

const categoryMap: Record<string, string> = {
  'soc-analyst': 'SOC Analyst Insights & Labs',
  'cyberattacks': 'Real-World Cyberattacks & Case Studies',
  'tools-techniques': 'Cybersecurity Tools & Techniques',
  'news-journey': 'Cybersecurity News & My Journey',
};

const CategoryPage = () => {
  const { category: categorySlug } = useParams<{ category: string }>();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categoryTitle, setCategoryTitle] = useState<string>('');

  useEffect(() => {
    if (categorySlug && categoryMap[categorySlug]) {
      const categoryTyped = categorySlug as BlogPost['category'];
      setPosts(getPostsByCategory(categoryTyped));
      setCategoryTitle(categoryMap[categorySlug]);
    } else {
      setCategoryTitle('Category Not Found');
      setPosts([]);
    }
  }, [categorySlug]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          {categoryTitle}
        </h1>
        
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
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;