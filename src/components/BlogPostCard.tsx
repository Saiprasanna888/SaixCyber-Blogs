import React from 'react';
import { BlogPost } from '@/data/blogPosts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Card className="w-full max-w-sm mx-auto hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary">{post.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          By {post.author} on {post.date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-base text-foreground mb-4 line-clamp-3">{post.previewContent}</p>
        <a href={post.htmlPath} className="text-blue-600 hover:underline font-medium">
          Read More &rarr;
        </a>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard;