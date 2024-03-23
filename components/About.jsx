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
        icon: <MailIcon size={20} />,
        text: 'oussamaayari2014@gmail.com',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Tunis, Ariana >>>> Mnihla',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+216 55 952 585',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Software developer',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born in 1998',
    },
    {
        icon: <Briefcase size={20} />,
        text: 'Oussama Ayari',
    },
]

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

const about = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    };

    console.log(getData(qualificationsData, 'education'))
    return (
    <div>about</div>
    )
}

export default about