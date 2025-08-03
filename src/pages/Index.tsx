import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPostCard from '@/components/BlogPostCard';
import { getLatestPostByCategory, getAllPosts, BlogPost } from '@/data/blogPosts';
import { Link } from 'react-router-dom';

const Index = () => {
  const categories = [
    { id: 'soc-analyst', title: 'SOC Analyst Insights & Labs', image: '/images/categories/soc-analyst.png' },
    { id: 'cyberattacks', title: 'Real-World Cyberattacks & Case Studies', image: '/images/categories/cyberattacks.png' },
    { id: 'tools-techniques', title: 'Cybersecurity Tools & Techniques', image: '/images/categories/tools-techniques.png' },
    { id: 'news-journey', title: 'Cybersecurity News & My Journey', image: '/images/categories/news-journey.png' },
  ];

  const recentPosts = getAllPosts().slice(0, 3);

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
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">CYBER DEFENDERS' HUB</h1>
            <p className="text-xl max-w-2xl mx-auto drop-shadow-md">
              Insights for SOC Analysts & Security Professionals
            </p>
            <a href="#recent-blogs" className="mt-8 px-8 py-3 bg-lime-400 text-black font-bold rounded-md hover:bg-lime-500 transition-colors duration-300">
              Explore Articles
            </a>
          </div>
        </section>

        <section id="recent-blogs" className="mb-12">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">Recent Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        <section id="categories-section" className="py-12">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">Explore by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => {
              const latestPost = getLatestPostByCategory(category.id as BlogPost['category']);
              return (
                <Link to={`/${category.id}`} key={category.id} className="group block bg-card rounded-lg shadow-md border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { e.currentTarget.src = '/placeholder.svg'; }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 transition-opacity duration-300 group-hover:bg-opacity-60">
                      <h3 className="text-2xl font-bold text-white text-center drop-shadow-lg">{category.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    {latestPost ? (
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