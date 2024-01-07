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
    path: '/',
    name: <RiGoogleFill />,
  },
  {
    path: '/',
    name: <RiFacebookFill />,
  },
  {
    path: '/',
    name: <RiInstagramFill />,
  },
  {
    path: '/',
    name: <RiLinkedinFill />,
  },
  {
    path: '/',
    name: <RiGithubFill />,
  },
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
