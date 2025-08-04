import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogPost, getPostById } from '@/data/blogService';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Skeleton } from '@/components/ui/skeleton';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        setLoading(true);
        const postId = parseInt(id, 10);
        if (!isNaN(postId)) {
          const fetchedPost = await getPostById(postId);
          setPost(fetchedPost);
        }
        setLoading(false);
      }
    };
    window.scrollTo(0, 0);
    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/2 mb-8" />
          <Skeleton className="w-full h-96 mb-8" />
          <Skeleton className="h-6 w-full mb-4" />
          <Skeleton className="h-6 w-full mb-4" />
          <Skeleton className="h-6 w-5/6 mb-4" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold">Post not found</h1>
          <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
            &larr; Back to Homepage
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold text-primary mb-3">{post.title}</h1>
            <p className="text-muted-foreground">
              By {post.author} on {new Date(post.date).toLocaleDateString()}
            </p>
          </header>
          {post.image_url && (
            <img 
              src={post.image_url} 
              alt={post.title} 
              className="w-full h-auto max-h-96 object-cover rounded-lg mb-8"
            />
          )}
          <div 
            className="prose dark:prose-invert max-w-none" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;