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
        <section className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-primary mb-4">Welcome to My Cybersecurity Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the depths of cybersecurity, from SOC analysis to real-world threats and personal insights.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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