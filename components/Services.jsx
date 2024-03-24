import { GanttChartSquare, Blocks, Gem, EarthLock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Back-End Development',
        description: 'Expert in Django for robust, scalable back-ends. Streamlines development with secure, efficient databases and APIs',
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Front-End Development',
        description: 'Specializes in React for dynamic, responsive UIs. Emphasizes performance, user experience, and modern web standards.',
    },
    {
        icon: <EarthLock size={72} strokeWidth={0.8} />,
        title: 'Web Security',
        description: 'Focuses on advanced security strategies to protect web applications. Ensures integrity and trust with proactive defenses.',
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