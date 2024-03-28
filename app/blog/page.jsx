'use client'

import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Blog from '@/components/Blog';

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
      description: 'Dive into the world of frontend development to create engaging and interactive user experiences on the web.', // Descriptive text about frontend development
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
]

const uniqueCategories = ['All Articles', ...new Set(blogData.map((item) => item.category))];

const page = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('All Articles');

  const filteredBlog = blogData.filter((blog) => {
    // if category is 'All Articles', return all blog, else filter by category
    return category === 'All Articles'
      ? blog
      : blog.category === category
  })

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto" >My Blog</h2>
        {/* tabs */}
        <Tabs defaultValue={category} >
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none' >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto' > {category} </TabsTrigger>
              )
            })}
          </TabsList>
          {/* tabs content */}
          <div>tabs content</div>
        </Tabs>
      </div>
    </section>
  )
}

export default page