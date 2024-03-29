import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const BlogCard = ({ blog }) => {


  return (
    <Link href={blog.link} passHref>
      <div className="cursor-pointer">
        <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
          <CardHeader className="p-4 mb-1">
            <div className="flex items-center gap-x-4">
              <Image src={blog.imagePath} alt={blog.altText} width={70} height={70} priority />
              <div className="flex flex-col">
                <CardTitle className="text-lg font-semibold">{blog.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{blog.author} - {blog.createdAt}</p>
              </div>
            </div>
          </CardHeader>
          <CardDescription className="text-lg text-muted-foreground">{blog.description}</CardDescription>
        </Card>
      </div>
    </Link>
  );
};

export default BlogCard;
