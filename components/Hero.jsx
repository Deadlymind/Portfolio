import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Send} from 'lucide-react';3




import {
    RiFileList2Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
    RiBracesFill,
    RiBriefcase4Fill,
    RiMedal2Fill,
    RiRefreshFill,
    RiComputerFill,
    RiCodeBoxFill,
} from 'react-icons/ri';

// components
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';


const Hero = () => {
    return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none ' >
        <div className="container mx-auto">
            <div className='flex justify-between gap-x-8' >
                {/* text */}
                <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left ' >
                    <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] ' >Software developer</div>
                    <h1 class='h1 mb-4'>Hello, My Name is Oussama Ayari</h1>
                    <p class='subtitle max-w-[490px] mx-auto xl:mx-0'>
                        In a perpetual cycle of mastering new technologies, I relentlessly expand my skill set and push the boundaries of my creative potential. Join me to explore the journey I've undertaken in my field, the significant milestones I've reached, and the unwavering passion that fuels my professional endeavors.
                    </p>
                    {/* buttons */}
                    <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 ' >
                        <Link href="/contact" >
                            <Button className='hidden md:inline-flex gap-x-2' >
                                Contact me <Send size={18} />
                            </Button>
                        </Link>
                        <a href='/Resume.pdf' download="resume.pdf" target="_blank" className='hidden md:inline-flex w-full md:w-auto'>
                            <Button variant='secondary' className='gap-x-2'>
                                Download CV
                                <Download size={18} />
                            </Button>
                        </a>
                    </div>
                    {/* socials */}
                    <Socials
                        containerStyles='hidden md:flex gap-x-6 mx-auto xl:mx-0'
                        iconStyles='text-foreground text-[22px] hover:text-primary transition-all'
                    />
                </div>
                {/* image */}
                <div className='hidden xl:flex relative ' >
                    {/* badge 1 */}
                    <Badge
                    containerStyles='absolute top-[20%] -left-[11rem]  '
                    icon={<RiBriefcase4Fill />}
                    endCountNum={2}
                    badgeText='Years Of Experience'
                    />
                    {/* badge 2 */}
                    <Badge
                    containerStyles='absolute top-[91.1%] -left-[5rem]  '
                    icon={<RiTodoFill />}
                    endCountNum={50}
                    endCountText='+'
                    badgeText='Finished projects'
                    />
                    {/* badge 3 */}
                    <Badge
                    containerStyles='absolute top-[44%] -right-[11rem]  '
                    icon={<RiCodeBoxFill  />}
                    endCountNum={20}
                    endCountText='+'
                    badgeText='Tech Skills'
                    />
                    <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 ' ></div>
                    <DevImg imgStyles='w-[500px] h-[500px] ' containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom ' imgSrc='/hero/test2.webp' />
                </div>
            </div>
            {/* icon */}
            <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce '  >
                <RiArrowDownSLine className='text-3xl text-primary ' />
            </div>
        </div>
    </section>
    );
};

export default Hero