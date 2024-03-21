import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Send} from 'lucide-react';

import {
    RiFileList2Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
} from 'react-icons/ri';

// components
import Devlmg from './Devlmg';
import Badge from './Badge';
import Socials from './Socials';


const Hero = () => {
    return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-pink-100 ' >
        <div className="container mx-auto">
            <div className='flex justify-between gap-x-8' >
                {/* text */}
                <div>text</div>
                {/* image */}
                <div>image</div>
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