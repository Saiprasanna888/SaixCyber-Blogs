import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPostCard from '@/components/BlogPostCard';
import { getAllPosts, getLatestPostByCategory } from '@/services/blogService';
import { BlogPost } from '@/types/blog';
import { Link } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

const Index = () => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
        <div className="text-center p-8 border-2 border-red-300 rounded-lg bg-white shadow-lg max-w-lg">
          <h1 className="text-2xl font-bold mb-4 text-red-700">Configuration Error: Supabase Keys Missing</h1>
          <p className="mb-4 text-gray-700">
            The application cannot connect to the database because the required Supabase credentials are not set.
          </p>
          <p className="mb-2 text-gray-700 font-medium">To fix this, please do the following:</p>
          <ol className="text-left list-decimal list-inside mb-4 text-gray-600 space-y-2">
            <li>Create a new file named <code className="bg-red-100 text-red-800 p-1 rounded">.env</code> in the main project folder (the same folder as <code className="bg-gray-200 p-1 rounded">package.json</code>).</li>
            <li>Add the following content to the <code className="bg-red-100 text-red-800 p-1 rounded">.env</code> file:</li>
          </ol>
          <pre className="bg-gray-100 p-4 rounded text-left text-sm text-gray-700 mb-4 overflow-x-auto">
            <code className="whitespace-pre-wrap break-words">
              VITE_SUPABASE_URL=https://dajryufixunnnkfucgce.supabase.co
              <br />
              VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhanJ5dWZpeHVubm5rZnVjZ2NlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyNjA2NzAsImV4cCI6MjA2OTgzNjY3MH0.xWeWh3srrDFKLVeP9XHaGpPCcenl7TWQT2-nE8UAp90
            </code>
          </pre>
          <p className="text-gray-700">
            After creating and saving the file, click the <strong className="text-red-700">Rebuild</strong> button above the chat to apply the changes.
          </p>
        </div>
      </div>
    );
  }

  const categories = [
    { id: 'soc-analyst', title: 'SOC Analyst Insights & Labs', image: '/images/soc-analyst-insights-labs.png' },
    { id: 'cyberattacks', title: 'Real-World Cyberattacks & Case Studies', image: '/images/real-world-cyberattacks.png' },
    { id: 'tools-techniques', title: 'Cybersecurity Tools & Techniques', image: '/images/cybersecurity-tools-techniques.png' },
    { id: 'news-journey', title: 'Cybersecurity News & My Journey', image: '/images/cybersecurity-news-journey.png' },
  ];

  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [latestCategoryPosts, setLatestCategoryPosts] = useState<Record<string, BlogPost | null>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const allPosts = await getAllPosts();
      setRecentPosts(allPosts.slice(0, 3));

      const latestPosts: Record<string, BlogPost | null> = {};
      for (const category of categories) {
        const latestPost = await getLatestPostByCategory(category.id);
        latestPosts[category.id] = latestPost;
      }
      setLatestCategoryPosts(latestPosts);

      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section 
          className="relative bg-cover bg-center rounded-lg overflow-hidden mb-12" 
          style={{ backgroundImage: "url('/images/Home.png')", height: '60vh', minHeight: '400px' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">CYBER DEFENDERS' HUB</h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto drop-shadow-md">
              Insights for SOC Analysts & Security Professionals
            </p>
            <a href="#recent-blogs" className="mt-8 px-6 py-3 sm:px-8 bg-lime-400 text-black font-bold rounded-md hover:bg-lime-500 transition-colors duration-300">
              Explore Articles
            </a>
          </div>
        </section>

        <section id="recent-blogs" className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">Recent Blogs</h2>
          {loading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="w-full max-w-sm mx-auto flex flex-col gap-2 p-4 border rounded-lg">
                    <Skeleton className="h-4 w-1/3 mb-2" />
                    <Skeleton className="h-6 w-full mb-1" />
                    <Skeleton className="h-4 w-1/2 mb-4" />
                    <Skeleton className="h-16 w-full mb-4" />
                    <Skeleton className="h-5 w-1/4" />
                  </div>
                ))}
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>

        <section id="categories-section" className="py-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">Explore by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => {
              const latestPost = latestCategoryPosts[category.id];
              return (
                <Link to={`/${category.id}`} key={category.id} className="group block bg-card rounded-lg shadow-md border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { e.currentTarget.src = '/placeholder.svg'; }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 text-center">{category.title}</h3>
                    {loading ? (
                       <div className="w-full max-w-sm mx-auto flex flex-col gap-2 p-4">
                          <Skeleton className="h-4 w-1/4 mx-auto mb-4" />
                          <Skeleton className="h-4 w-1/3 mb-2" />
                          <Skeleton className="h-6 w-full mb-1" />
                          <Skeleton className="h-4 w-1/2 mb-4" />
                       </div>
                    ) : latestPost ? (
                      <div>
                        <p className="text-center text-sm text-muted-foreground mb-4">Latest Post:</p>
                        <BlogPostCard post={latestPost} />
                      </div>
                    ) : (
                      <p className="text-center text-muted-foreground mt-4">No posts in this category yet.</p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;