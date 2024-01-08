import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='flex'>
      <Link href='/'>
        <Image src='/logo.png' width={54} height={54} priority alt='test' />
      </Link>
      <h2 className='h2 mt-3'>arwen Portfolio</h2>
    </div>
  )
}

export default Logo
