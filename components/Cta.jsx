import { Button } from './ui/button'
import Link from 'next/link'

const Cta = () => {
  return (
    <section className='py-24 bg-tertiary dark:bg-secondary/40'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <h2 className='h2 max-w-xl text-center mb-2 tracking-[4px]'>
            Prepared to turn your ideas into reality?
          </h2>
          <h3 className='h3 tracking-[4px] text-center mb-8'>
            Well I'm here to help 👋.
          </h3>
          <Link href='/contact'>
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta
