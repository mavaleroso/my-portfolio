import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { Card, CardHeader, CardContent } from './ui/card'
import { Github, Link2Icon, EyeIcon } from 'lucide-react'
import { Badge } from './ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const ProjectCard = ({ project }) => {
  return (
    <Card className='group overflow-hidden relative'>
      <CardHeader className='p-0'>
        {/* image */}
        <div className='relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden'>
          <Image
            className='absolute bottom-0 shadow-2xl'
            src={project.image}
            width={247}
            height={250}
            alt=''
            priority
          />
          {/* btn links */}
          <div className='flex gap-x-4'>
            {project.link && (
              <Link
                href={project.link}
                target='_blank'
                className='bg-primary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
              >
                <Link2Icon className='text-white' />
              </Link>
            )}
            <Link
              href={project.github}
              target='_blank'
              className='bg-primary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
            >
              <Github className='text-white' />
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size='icon'
                  className='bg-primary w-[54px] h-[54px] rounded-full justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 hidden xl:flex'
                >
                  <EyeIcon className='text-white' />
                </Button>
              </DialogTrigger>
              <DialogContent className='max-w-screen-lg h-screen bg-transparent border-none'>
                <Carousel className='w-[900px] max-h-sm mx-auto '>
                  <CarouselContent>
                    {project.images.map((img, index) => (
                      <CarouselItem key={index} className='overflow-auto'>
                        <div className='p-1 flex h-screen'>
                          <Image
                            src={img}
                            className='m-auto'
                            width={1000}
                            height={1000}
                            blurDataURL='data:...'
                            placeholder='blur'
                            priority
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardHeader>
      <div className='h-full px-8 py-6'>
        <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>
          {project.category}
        </Badge>
        <h4 className='h4 mb-1'>{project.name}</h4>
        <p className='text-muted-foreground text-lg'>{project.description}</p>
      </div>
    </Card>
  )
}

export default ProjectCard
