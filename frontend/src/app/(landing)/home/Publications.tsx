import { Image } from '@nextui-org/image'
import { FC } from 'react'

const Publications: FC = () => {
  return (
    <div className='min-h-[70vh]'>
      <div className='relative'>
        <img
          src='/images/books.webp'
          alt=''
          className='w-screen h-full object-cover rounded-none blur-sm opacity-60'
        />
        <div className='absolute inset-0 flex flex-col gap-5 items-center justify-center h-full'>
          <h1 className='z-20 text-7xl font-medium font-roboto-serif text-neutral-950 mb-4 tracking-tight'>
            Our Publications
          </h1>
          <div className='grid grid-cols-4 gap-4 w-[90%] mx-auto'>
            <Image src='/images/publications/publication1.jpg' alt='' className='' />
            <Image src='/images/publications/publication2.jpg' alt='' className='' />
            <Image src='/images/publications/publication3.jpg' alt='' className='' />
            <Image src='/images/publications/publication4.jpg' alt='' className='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publications
