import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import CategoryPage from './pages/CategoryPage';
import BlogPostPage from './pages/BlogPostPage';
import NotFound from './pages/NotFound';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<BlogPostPage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;