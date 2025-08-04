import { createRoot } from 'react-dom/client';
import App from './App';
import './globals.css';
import { ThemeProvider } from "@/components/ThemeProvider";

const root = createRoot(document.getElementById('root')!);
root.render(
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
    <App />
  </ThemeProvider>
);