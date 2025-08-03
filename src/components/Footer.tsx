import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} CyberSec Blog by Saiprasanna
        </p>
        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener">
            <Github className="h-6 w-6 hover:text-blue-400" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener">
            <Linkedin className="h-6 w-6 hover:text-blue-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;