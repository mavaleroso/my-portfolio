import { GanttChartSquare, Blocks, Gem } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Web Design',
    description:
      "I do web design services such as blogs, promotional, advertisement, and personal customization. The clients I have ranges from students, individual people, businessman, and event organizers. As what I've experience they do prefer having ther ideas incorporated and manifested by professionals not only limited to resources but the impact it held to their audience.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Web Development',
    description:
      "Most of my projects comes from Web Development, takes time but worth the output and satisfaction it gives to my clients. As I experience over the years embodiment of the works and process clients required needs to be emphasized and strictly look at to deliver best user's experience.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Mobile Development',
    description:
      'Nowadays mobiles had the leading on used devices, thats why applications need to be portable and freely used everywhere whether its online or offline. Clients preferred things thay they can monitor everyday and anywhere as possible.',
  },
]

const Services = () => {
  return (
    <section className='my-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          My Services
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className='w-full max-w-[424px] h-[400px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                key={index}
              >
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <CardDescription className='text-lg'>
                    {item.description}
                  </CardDescription>
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
