import { createRoot } from 'react-dom/client';
import App from './App';
import './globals.css';
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from '@/contexts/AuthContext';

const root = createRoot(document.getElementById('root')!);
root.render(
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeProvider>
);