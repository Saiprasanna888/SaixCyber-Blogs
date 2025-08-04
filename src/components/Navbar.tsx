import { Link } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const categories = [
    { name: 'SOC Analyst Insights & Labs', slug: 'soc-analyst' },
    { name: 'Real-World Cyberattacks & Case Studies', slug: 'cyberattacks' },
    { name: 'Cybersecurity Tools & Techniques', slug: 'tools-techniques' },
    { name: 'Cybersecurity News & My Journey', slug: 'news-journey' }
  ];

  const navLinks = (
    <>
      <Link to="/" className="hover:text-primary-foreground/80 transition-colors">Home</Link>
      <Link to="/about" className="hover:text-primary-foreground/80 transition-colors">About</Link>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center hover:text-primary-foreground/80 transition-colors">
          Categories <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {categories.map(cat => (
            <DropdownMenuItem key={cat.slug} asChild>
              <Link to={`/${cat.slug}`} className="w-full">{cat.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );

  const mobileNavLinks = (
    <div className="flex flex-col space-y-4 text-lg p-4">
      <Link to="/" className="hover:text-accent-foreground">Home</Link>
      <Link to="/about" className="hover:text-accent-foreground">About</Link>
      <h3 className="font-bold pt-4 border-t border-border">Categories</h3>
      {categories.map(cat => (
        <Link key={cat.slug} to={`/${cat.slug}`} className="hover:text-accent-foreground pl-2">{cat.name}</Link>
      ))}
    </div>
  );

  return (
    <nav className="bg-primary text-primary-foreground p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl sm:text-2xl font-bold">SaixCyber-Blogs</Link>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden md:flex space-x-6 items-center">
              {navLinks}
            </div>

            <ThemeToggle />

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-3/4">
                  {mobileNavLinks}
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;