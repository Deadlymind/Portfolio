'use client';

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';



const Form = () => {
    return (
    <form className="flex flex-col gap-y-4 " >
        {/* input */}
        <div className="relative flex items-center" >
            <Input placeholder="Full Name" type="name" id='name'  />
            <User className="absolute right-6" size={20} />
        </div>
        {/* input */}
        <div className="relative flex items-center" >
            <Input placeholder="Email" type="email" id='email'  />
            <MailIcon className="absolute right-6" size={20} />
        </div>
        {/* textarea */}
        <div className="relative flex items-center" >
            <Textarea placeholder="Type your message here..." className="resize-none" name="messages" type="text" id='text'  />
            <MessageSquare className="absolute top-4 right-6" size={20} />
        </div>
        {/* button */}
        <Button className="flex item-center gap-x-1  max-w-[166px] " >Let's Talk
            <ArrowRightIcon className="ml-2" size={20} />
        </Button>
    </form>
    )
}

export default Form