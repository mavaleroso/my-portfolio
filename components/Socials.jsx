'use client'

import React from 'react'
import {
  RiGoogleFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from 'react-icons/ri'

import Link from 'next/link'

const icons = [
  {
    path: 'https://www.facebook.com/marwen.valeroso/',
    name: <RiFacebookFill />,
  },
  {
    path: 'https://www.instagram.com/mreawn_vlrsaeoo/',
    name: <RiInstagramFill />,
  },
  {
    path: 'https://www.linkedin.com/in/marwen-valeroso-b86b02135/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/mavaleroso',
    name: <RiGithubFill />,
  },
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target='_blank'>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
