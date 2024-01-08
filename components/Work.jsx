'use client'
import Link from 'next/link'
import { Button } from './ui/button'

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper style
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

// components
import ProjectCard from '@/components/ProjectCard'

const projectData = [
  {
    image: '/work/1.png',
    category: 'React JS',
    name: 'Marwen Portfolio',
    description: 'My porfolio website created using React Next JS',
    link: '',
    github: 'https://github.com/mavaleroso/my-portfolio',
    images: ['/work/1/1.png'],
  },
  {
    image: '/work/3.png',
    category: 'React JS + Django',
    name: 'Accounting Reporting System',
    description:
      'Handles the accounting reporting consolidation from the main system',
    link: '',
    github: 'https://github.com/mavaleroso/ars-web',
    images: ['/work/3/1.png', '/work/3/2.png'],
  },
  {
    image: '/work/5.png',
    category: 'React JS',
    name: 'Quiz App with AI',
    description:
      'I replicate the Quiz App from youtube to learn more about Next JS',
    link: 'https://marwen-quizmify-test.vercel.app/',
    github: 'https://github.com/mavaleroso/quizmify-test',
    images: ['/work/5/1.png'],
  },

  {
    image: '/work/4.png',
    category: 'Vue JS + Laravel',
    name: 'Vehicle Tracking System',
    description:
      'A web app I created to address DSWD General Services manual tracking and monitoring of its vehicle and travel funds',
    link: '',
    github: 'https://bitbucket.org/mavaleroso/gstracking',
    images: ['/work/4/1.png'],
  },

  {
    image: '/work/6.png',
    category: 'Vue JS + Laravel',
    name: 'Clinic Appointment System',
    description:
      'This is a clinic appoint system for school. I has also a mobile app counter part.',
    link: '',
    github: 'https://bitbucket.org/mavaleroso/csu_clinic_appt',
    images: ['/work/6/1.png', '/work/6/2.png'],
  },
  {
    image: '/work/7.png',
    category: 'Django',
    name: 'Hospital Pharmacy Inventory Management System',
    description:
      'This is an Inventory System for Medical Supplies and also it has sales features that generates invoices',
    link: '',
    github: 'https://github.com/mavaleroso/bcdh_pos',
    images: ['/work/7/1.png'],
  },
  {
    image: '/work/8.png',
    category: 'Flutter',
    name: 'Fuel Points System',
    description:
      'Mobile application for clients rewards through accumulation of points',
    link: '',
    github: 'https://github.com/gemarkalmacen/cbrfuel_mobile',
    images: [
      '/work/8/1.png',
      '/work/8/2.png',
      '/work/8/3.png',
      '/work/8/4.png',
      '/work/8/5.png',
      '/work/8/6.png',
      '/work/8/7.png',
      '/work/8/8.png',
    ],
  },
  {
    image: '/work/2.png',
    category: 'Codeigniter',
    name: 'Codenect',
    description:
      'A game web app that I created as a student to help people on programing basics and fundamentals',
    link: '',
    github: 'https://github.com/mavaleroso/codenect',
    images: [
      '/work/2/1.png',
      '/work/2/2.png',
      '/work/2/3.png',
      '/work/2/4.png',
      '/work/2/5.png',
      '/work/2/6.png',
      '/work/2/7.png',
      '/work/2/8.png',
      '/work/2/9.png',
      '/work/2/10.png',
    ],
  },
]

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/* text */}
        <div className=' max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>Some Projects</h2>
          <p className='subtitle mb-8'>
            These are sample projects I had over the years. You can navigate to
            see all of it through the button below.
          </p>
          <Link href='/projects'>
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[480px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work
