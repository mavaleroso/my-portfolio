'use client'
import React, { useState } from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
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
]

// get unique categories plus
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
]

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories)
  const [category, setCategory] = useState('all projects')

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all Projects, else filter by category
    return category === 'all projects' ? project : project.category === category
  })
  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-7 lg:max-w-[1028px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects
