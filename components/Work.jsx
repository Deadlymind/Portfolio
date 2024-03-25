'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';


// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';


const projectData= [
    {
        image: '/work/01.png',
        category: 'Full Stack',
        name: 'Ecommerce Website',
        description: 'Ecommerce Website using Django, Rest API, Stripe API, Bootstrap, js and scss ',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'Ai',
        name: 'Chat Bot',
        description: 'Chat Bot using Python,  Django and js ',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'Ai',
        name: ' Gemini bot',
        description: 'Chat Bot using Python,  Django, js and Gemini API ',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'Full Stack',
        name: ' Restaurant Website',
        description: 'Restaurant Website using Django, Bootstrap, js and scss ',
        link: '/',
        github: '/',
    },
    
    {
        image: '/work/4.png',
        category: 'Python',
        name: 'Cleaner',
        description: 'cleaner script using python',
        link: '/',
        github: '/',
    },
    
    {
        image: '/work/5.png',
        category: 'Coming Soon',
        name: 'E-Learning Platform',
        description: 'E-Learning Platform coming soon using the all powerful we have',
        link: '/',
        github: '/',
    },


];


const Work = () => {
    return (
    <section className="relative mb-12 xl:mb-48 " >
        <div className="container mx-auto ">
            {/* text */}
            <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left  mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start " >
                <h2 className="section-title mb-4 " >Latest Projects</h2>
                <p className="subtitle mb-8 " >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dolorem.</p>
                <Link href="/projects" ><Button>All projects</Button></Link>
            </div>
            {/* slider */}
            <div className="xl:max-w-[1000px] xl:absolute right-0 top-0  " >
                <Swiper
                    className='h-[480px] '
                    slidesPreviews={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                >
                    {/* show only the first 4 projects for the slides */}
                    {projectData.slice(0, 4).map((project, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    </section>
    );
}


export default Work