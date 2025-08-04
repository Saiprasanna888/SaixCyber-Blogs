import React from 'react';
import { BlogPost, categoryMap } from '@/types/blog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const categoryName = post.category ? categoryMap[post.category] : 'Uncategorized';
  const previewContent = post.content ? post.content.substring(0, 120) + '...' : 'No preview available.';

  return (
    <Card className="w-full max-w-sm mx-auto hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <CardHeader>
        <Badge variant="secondary" className="mb-2 w-fit">{categoryName}</Badge>
        <CardTitle className="text-xl font-semibold text-primary">{post.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          By {post.author} on {post.date}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <p className="text-base text-foreground mb-4 line-clamp-3">{previewContent}</p>
        <Link to={`/post/${post.id}`} className="text-blue-600 hover:underline font-medium mt-auto">
          Read More &rarr;
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard;