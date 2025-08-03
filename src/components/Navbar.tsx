import { Link } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const categories = [
    { name: 'SOC Analyst Insights & Labs', slug: 'soc-analyst' },
    { name: 'Real-World Cyberattacks & Case Studies', slug: 'cyberattacks' },
    { name: 'Cybersecurity Tools & Techniques', slug: 'tools-techniques' },
    { name: 'Cybersecurity News & My Journey', slug: 'news-journey' }
  ];

  const navLinks = (
    <>
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
    </>
  );

  const mobileNavLinks = (
    <div className="flex flex-col space-y-4 text-lg p-4">
      <Link to="/" className="hover:text-blue-400">Home</Link>
      <Link to="/about" className="hover:text-blue-400">About</Link>
      <h3 className="font-bold pt-4 border-t border-gray-700">Categories</h3>
      {categories.map(cat => (
        <Link key={cat.slug} to={`/${cat.slug}`} className="hover:text-blue-400 pl-2">{cat.name}</Link>
      ))}
    </div>
  );

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl sm:text-2xl font-bold">Cyber Defenders' Hub</Link>
        
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks}
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900 text-white border-l-gray-700 w-full sm:w-3/4">
              {mobileNavLinks}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;