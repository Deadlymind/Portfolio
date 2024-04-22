'use client'

import React, { useState } from 'react';
import BlogCard from '@/components/BlogCard';

// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



const blogData = [
    {
        id: 1,
        imagePath: '/blog/back.webp',
        altText: 'Backend Development Illustration',
        name: 'Backend Development',
        category: 'Backend',
        description: 'Explore the intricacies of server-side development and understand how backend systems work.',
        link: 'https://www.linkedin.com/posts/deadlymind_understand-how-backend-system-work-part-1-activity-7186217629181751296-4Uld?utm_source=share&utm_medium=member_desktop',
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

const Blog = () => {
    return (
        <section className="mb-12 xl:mb-32" >
            <div className="container mx-auto">
                {/* slider */}
                <div className="h-[350px] " >
                    <Swiper
                        className="h-[350px]"
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1400: { slidesPerView: 3 },
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >

                        {blogData.map((blog, index) => {
                            return (
                                <SwiperSlide key={index} >
                                    <BlogCard blog={blog} />
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Blog


{/*const Blog = () => {

    return (
      <section className="mb-12 xl:mb-32">
        <div className="container mx-auto">
          <h2 className='section-title mb-12 text-center mx-auto'>My Blog</h2>
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1400: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="h-[350px]"
          >
            {filteredBlog.map((blog) => (
              <SwiperSlide key={blog.id}>
                <BlogCard blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  };
  
export default Blog; */   }
