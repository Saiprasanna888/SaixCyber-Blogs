import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPostCard from '@/components/BlogPostCard';
import { getLatestPostByCategory, BlogPost } from '@/data/blogPosts';

const Index = () => {
  const categories = [
    { id: 'soc-analyst', title: 'SOC Analyst Insights & Labs' },
    { id: 'cyberattacks', title: 'Real-World Cyberattacks & Case Studies' },
    { id: 'tools-techniques', title: 'Cybersecurity Tools & Techniques' },
    { id: 'news-journey', title: 'Cybersecurity News & My Journey' },
  ];

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
            <a href="#categories-section" className="mt-8 px-8 py-3 bg-lime-400 text-black font-bold rounded-md hover:bg-lime-500 transition-colors duration-300">
              Explore Articles
            </a>
          </div>
        </section>

        <section id="categories-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {categories.map((category) => {
            const latestPost = getLatestPostByCategory(category.id as BlogPost['category']);
            return (
              <div key={category.id} id={category.id} className="bg-card p-6 rounded-lg shadow-md border border-border">
                <h2 className="text-3xl font-bold text-primary mb-6 text-center">{category.title}</h2>
                {latestPost ? (
                  <BlogPostCard post={latestPost} />
                ) : (
                  <p className="text-center text-muted-foreground">No posts in this category yet.</p>
                )}
              </div>
            );
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;