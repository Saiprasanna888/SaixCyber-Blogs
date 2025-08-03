import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  const categoryLinks = [
    { name: 'SOC Analyst Insights & Labs', path: '/#soc-analyst' },
    { name: 'Real-World Cyberattacks & Case Studies', path: '/#cyberattacks' },
    { name: 'Cybersecurity Tools & Techniques', path: '/#tools-techniques' },
    { name: 'Cybersecurity News & My Journey', path: '/#news-journey' },
  ];

  return (
    <nav className="bg-primary text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          CyberBlog
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {mainLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="hover:text-accent-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:text-accent-foreground transition-colors">
              Categories <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background text-foreground">
              {categoryLinks.map((link) => (
                <DropdownMenuItem key={link.name} asChild>
                  <a
                    href={link.path}
                    className="w-full cursor-pointer hover:bg-accent hover:text-accent-foreground"
                  >
                    {link.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-background text-foreground">
              <nav className="flex flex-col gap-4 pt-8">
                {mainLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="text-lg font-medium">Categories</div>
                <div className="flex flex-col gap-2 pl-4">
                  {categoryLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.path}
                      className="text-base font-medium hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;