import { GanttChartSquare, Blocks, Gem, EarthLock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Back-End Development',
        description: 'Leveraging Django, I craft the core of web applications with an emphasis on robust databases, secure APIs, and scalable architecture. My approach accelerates development with Django`s efficient management tools, ensuring your backend is not just powerful but also future-proof.',
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Front-End Development',
        description: ' specialize in React to create responsive and intuitive user interfaces. With a focus on component-based architecture and efficient state management, I ensure your web application is both beautiful and performant, delivering an outstanding user experience.',
    },
    {
        icon: <EarthLock size={72} strokeWidth={0.8} />,
        title: 'Web Security',
        description: 'My focus on web security integrates secure coding, data protection, and threat mitigation to protect your applications. By prioritizing security from the ground up, I ensure your web presence is safeguarded against evolving digital threats, maintaining user trust.',
    },
]

const Services = () => {
    return (
    <section className="mb-12 xl:mb-36 " >
        <div className="container mx-auto " >
            <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto " >My Services</h2>
            {/* grid items */}
            <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8  " >
                {servicesData.map((item, index) => {
                    return (
                        <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative " key={index} >
                            <CardHeader className="text-primary absolute -top-[60px] " >
                                <div className="w-[140px] h1-[80px] bg-white dark:bg-background flex justify-center items-center  " >{item.icon}</div>
                            </CardHeader>
                            <CardContent className="text-center  " >
                                <CardTitle className=" mb-4" >{item.title}</CardTitle>
                                <CardDescription className="text-lg" >{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    </section>
    )
}

export default Services