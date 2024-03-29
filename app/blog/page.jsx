'use client'

import React, { useState, useMemo } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import BlogCard from '@/components/BlogCard';

const blogData = [
  {
    id: 1,
    imagePath: '/blog/back.webp',
    altText: 'Backend Development Illustration',
    name: 'Backend Development',
    category: 'Backend',
    description: 'Explore the intricacies of server-side development and understand how backend systems work.',
    link: '/blog/backend',
    createdAt: '2024-03-26',
    author: 'Deadlymind',
    tags: ['Development', 'Backend', 'Programming']
  },
  {
    id: 2,
    imagePath: '/blog/front.webp',
    altText: 'Frontend Development Illustration',
    name: 'Frontend Development',
    category: 'Frontend',
    description: 'Dive into the world of frontend development to create engaging and interactive user experiences on the web.',
    link: '/blog/frontend',
    createdAt: '2024-03-26',
    author: 'Deadlymind',
    tags: ['Development', 'Frontend', 'Web Design']
  },
  {
    id: 3,
    imagePath: '/blog/full.png',
    altText: 'Full Stack Development Illustration',
    name: 'Full Stack Development',
    category: 'Full Stack',
    description: 'Master both the frontend and backend of web development to build comprehensive and efficient web applications.',
    link: '/blog/fullstack',
    createdAt: '2024-03-26',
    author: 'Deadlymind',
    tags: ['Development', 'Full Stack', 'Web Applications']
  },
];

const uniqueCategories = ['all articles', ...new Set(blogData.map((item) => item.category))];

const MyBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all articles');

  const filteredBlogData = useMemo(() => blogData.filter(blog => {
    return selectedCategory === 'all articles' ? true : blog.category === selectedCategory;
  }), [selectedCategory]);

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Blog</h2>
        <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {uniqueCategories.map((category, index) => (
              <TabsTrigger value={category} key={index} className='capitalize w-[162px] md:w-auto'>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={selectedCategory}>
            <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
              {filteredBlogData.length > 0 ? (
                filteredBlogData.map((blog) => (
                  <BlogCard blog={blog} key={blog.id} />
                ))
              ) : (
                <p>No articles found in this category.</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default MyBlog;
