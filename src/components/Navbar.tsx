import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const Navbar = () => {
  const categories = [
    { name: 'SOC Analyst Insights & Labs', slug: 'soc-analyst' },
    { name: 'Real-World Cyberattacks & Case Studies', slug: 'cyberattacks' },
    { name: 'Cybersecurity Tools & Techniques', slug: 'tools-techniques' },
    { name: 'Cybersecurity News & My Journey', slug: 'news-journey' }
  ];

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Cyber Defenders' Hub</Link>
        
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:text-blue-400">
              Categories <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 text-white">
              {categories.map(cat => (
                <DropdownMenuItem key={cat.slug}>
                  <Link to={`/${cat.slug}`} className="w-full">{cat.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;