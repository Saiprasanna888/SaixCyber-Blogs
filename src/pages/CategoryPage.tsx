import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CategoryPage = () => {
  const { category } = useParams();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 capitalize">
          {category?.replace(/-/g, ' ')}
        </h1>
        {/* Posts will be rendered here */}
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;