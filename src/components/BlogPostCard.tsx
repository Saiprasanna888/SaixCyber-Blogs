import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, categoryMap } from '@/data/blogService';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const categoryName = categoryMap[post.category] || 'Uncategorized';

  return (
    <Card className="w-full max-w-sm mx-auto hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <CardHeader>
        <Badge variant="secondary" className="mb-2 w-fit">{categoryName}</Badge>
        <CardTitle className="text-xl font-semibold text-primary">{post.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          By {post.author} on {new Date(post.date).toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <p className="text-base text-foreground mb-4 line-clamp-3">{post.previewContent}</p>
        <Link to={`/posts/${post.id}`} className="text-blue-600 hover:underline font-medium mt-auto">
          Read More &rarr;
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard;