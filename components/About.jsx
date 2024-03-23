import Devlmg from "./DevImg";
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Oussama Ayari',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+216 55 952 585',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'oussamaayari2014@gmail.com',
    },

    {
        icon: <Calendar size={20} />,
        text: 'Born on september 1998',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Software developer',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Tunis, Ariana : Mnihla',
    },

];

const qualificationsData = [
    {
        title: 'education',
        data: [
            {
                university: 'online harvard university',
                qualification: 'Computer Science',
                year: '2018 - 2019',
            },
            {
                university: 'Coursera',
                qualification: 'Meta Back-End Developer',
                year: '2023 - 2024',
            },
            {
                university: 'CODE4LEARN',
                qualification: 'fULL STACK WEB DEVELOPER',
                year: '2023 - 2024',
            },
            {
                university: 'CODEZILLA',
                qualification: 'MASTER PYTHON DEVELOPER',
                year: '2023 - 2024',
            },
        ],
    },
    {
        title: 'Experience',
        data: [
            {
                company: 'Potato Academy',
                qualification: 'Founder and CEO and Developer',
                year: '2024 - present',
            },
        ]
    }
];

const skillsData = [
    {
        title: 'Skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Back-End Development',
            },
            {
                name: 'Python, Django',
            },
            {
                name: 'Front-End Development',
            },
            {
                name: 'JavaScript, ReactJS',
            },

        ]
    },
    {
        title: 'ToolsimgPath',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/ajax.svg',
            },
            {
                imgPath: '/about/css.svg',
            },
            {
                imgPath: '/about/django.svg',
            },
            {
                imgPath: '/about/docker.svg',
            },
            {
                imgPath: '/about/git.svg',
            },
            {
                imgPath: '/about/github.svg',
            },
            {
                imgPath: '/about/html.svg',
            },
            {
                imgPath: '/about/javascript.svg',
            },
            {
                imgPath: '/about/jquery.svg',
            },
            {
                imgPath: '/about/linux.svg',
            },
            {
                imgPath: '/about/postgresql.svg',
            },
            {
                imgPath: '/about/python.svg',
            },
            {
                imgPath: '/about/react.svg',
            },
            {
                imgPath: '/about/redis.svg',
            },
            {
                imgPath: '/about/tailwindcss.svg',
            },
            {
                imgPath: '/about/sqlite.svg',
            },


        ]
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    };

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
            </div>
            <div className="flex flex-col xl:flex-row">
                {/* image */}
                <div className="hidden xl:flex flex-1 relative">
                    <Devlmg
                        containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative ml-8'
                        imgSrc='/about/test2.webp'
                    />
                </div>
                {/* tabs */}
                <div className="flex-1">
                    <Tabs defaultValue="personal">
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px]  ' >
                            <TabsTrigger className='w-[162px] xl:w-auto' value="personal">Personal Info</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value="qualifications">Qualifications</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value="skills">Skills</TabsTrigger>
                        </TabsList>
                        {/* tabs content */}
                        <div className="text-lg mt-12 xl:mt-8 " >
                            {/* personal info */}
                            <TabsContent value='personal'>
                                <div className="text-center xl:text-left " >
                                    <h3 className="h3 mb-4 " >Exemplary Digital Craftsmanship</h3>
                                    <p className="subtitle max-w-xl mx-auto xl:mx-0 " >
                                        Anchored in the pursuit of innovation, my mission is to blend cutting-edge
                                        technology with creative genius to forge websites that redefine intuitiveness,
                                        captivating users with exceptional and transformative digital experiences
                                    </p>
                                    {/* icons */}
                                    <div className="grid xl:grid-cols-2 gap-4 mb-12 " >
                                        {infoData.map((item, index) => {
                                            return (
                                                <div className="flex items-center gap-x-4 mx-auto xl:mx-0 " key={index} >
                                                    <div className="text-primary" >{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </TabsContent>
                            {/* qualifications */}
                            <TabsContent value='qualifications'>Qualifications</TabsContent>
                            {/* skills */}
                            <TabsContent value='skills'>Skills</TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}

export default About