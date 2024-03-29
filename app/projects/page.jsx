'use client'

import React, { useState, useMemo } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
    {
        image: '/work/01.png',
        category: 'Full Stack',
        name: 'Ecommerce Website',
        description: 'Ecommerce Website using Django, Rest API, Stripe API, Bootstrap, js and scss',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'Ai',
        name: 'Chat Bot',
        description: 'Chat Bot using Python, Django and js',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'Ai',
        name: 'Gemini bot',
        description: 'Chat Bot using Python, Django, js and Gemini API',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'Full Stack',
        name: 'Restaurant Website',
        description: 'Restaurant Website using Django, Bootstrap, js and scss',
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
];

const uniqueCategories = ['all projects', ...new Set(projectData.map(item => item.category))];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('all projects');

    const filteredProjects = useMemo(() => projectData.filter(project => {
        return selectedCategory === 'all projects' ? true : project.category === selectedCategory;
    }), [selectedCategory]);

    return (
        <section className='min-h-screen pt-12'>
            <div className="container mx-auto">
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>
                <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory} className='mb-24 xl:mb-48'>
                    <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
                        {uniqueCategories.map((category, index) => (
                            <TabsTrigger value={category} key={index} className='capitalize w-[162px] md:w-auto'>
                                {category}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <TabsContent value={selectedCategory}>
                        <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {filteredProjects.length > 0 ? filteredProjects.map((project, index) => (
                                <ProjectCard project={project} key={project.name + index} />
                            )) : <p>No projects found in this category.</p>}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}

export default Projects;
