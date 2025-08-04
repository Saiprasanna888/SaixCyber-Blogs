import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPostById } from '@/services/blogService';
import { BlogPost, categoryMap } from '@/types/blog';
import { Skeleton } from '@/components/ui/skeleton';

const PostPage = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (id) {
                setLoading(true);
                const postData = await getPostById(id);
                setPost(postData);
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col bg-background text-foreground">
                <Navbar />
                <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
                    <Skeleton className="h-10 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-1/2 mb-8" />
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

    const categoryName = post.category ? categoryMap[post.category] : 'Uncategorized';

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
                <article className="prose dark:prose-invert max-w-none">
                    <Link to={`/${post.category}`} className="text-blue-600 hover:underline no-underline font-medium">
                        {categoryName}
                    </Link>
                    <h1 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">{post.title}</h1>
                    <p className="text-muted-foreground text-sm">
                        By {post.author} on {post.date}
                    </p>
                    {post.image_url && <img src={post.image_url} alt={post.title} className="rounded-lg my-8 w-full object-cover" />}
                    <div className="text-foreground whitespace-pre-wrap">{post.content}</div>
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default PostPage;