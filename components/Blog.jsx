'use client';

import Image from 'next/image';
import Link from 'next/link';


import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";


// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';


// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

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




const Blog = () => {
    return (
    <section className="mb-12 xl:mb-32 " >
        <div className="container mx-auto">
            <h2 className='section-title mb-12 text-denter mx-auto ' > My Blog</h2>
            {/* slider */}
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1400: { slidesPerView: 3 },
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className="h-[350px]  "

            >
                {blogData.map((post, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Link href={post.link}>
                                <div className="cursor-pointer">
                                    <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                                        <CardHeader className="p-4 mb-1">
                                            <div className="flex items-center gap-x-4">
                                                {/* image */}
                                                <Image src={post.imagePath} alt={post.altText} width={70} height={70} priority />
                                                {/* name and date */}
                                                <div className="flex flex-col">
                                                    <CardTitle className="text-lg font-semibold">{post.name}</CardTitle>
                                                    <p className="text-sm text-muted-foreground">{post.author} - {post.createdAt}</p>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardDescription className="text-lg text-muted-foreground">{post.description}</CardDescription>
                                    </Card>
                                </div>
                            </Link>
                        </SwiperSlide>
                    );
                })}

            </Swiper>
        </div>
    </section>
    );
};

export default Blog