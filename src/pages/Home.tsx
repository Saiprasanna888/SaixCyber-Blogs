import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const categories = [
    { name: 'SOC Analyst Insights & Labs', slug: 'soc-analyst-insights' },
    { name: 'Real-World Cyberattacks & Case Studies', slug: 'cyberattacks-case-studies' },
    { name: 'Cybersecurity Tools & Techniques', slug: 'cybersecurity-tools' },
    { name: 'Cybersecurity News & My Journey', slug: 'cybersecurity-news-journey' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Cybersecurity Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exploring security operations, threat analysis, and my journey in cybersecurity.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map(cat => (
            <div key={cat.slug} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">{cat.name}</h2>
              <Link to={`/${cat.slug}`} className="text-blue-600 hover:underline">
                View all posts →
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;