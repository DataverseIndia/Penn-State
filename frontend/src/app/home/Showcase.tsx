import { Image } from '@nextui-org/image'
import { FC } from 'react'

const Showcase: FC = () => {
  return (
    <section className='w-[80%] mx-auto py-20'>
      <h1 className='text-center font-roboto-serif text-5xl font-semibold tracking-tight'>Recent Showcase</h1>
      <div className='grid grid-cols-2 gap-10 mt-20'>
         <div className='flex flex-col gap-7'>
            <div className='flex flex-col gap-2'>
              <Image src='/images/showcase/showcase-1.png' alt=''/>
              <h1 className='text-2xl font-roboto-serif font-medium'>Nano Materials</h1>
              <p>The ideation process is a crucial phase in the design process where creative thinking and brainstormingThe ideation process is a crucial phase in the design process where creative thinking and brainstorming</p>
            </div>
            <div className='flex flex-col gap-2'>
              <Image src='/images/showcase/showcase-2.png' alt=''/>
              <h1 className='text-2xl font-roboto-serif font-medium'>Nano Materials</h1>
              <p>The ideation process is a crucial phase in the design process where creative thinking and brainstormingThe ideation process is a crucial phase in the design process where creative thinking and brainstorming</p>
            </div>
            <div className='flex flex-col gap-2'>
              <Image src='/images/showcase/showcase-3.png' alt=''/>
              <h1 className='text-2xl font-roboto-serif font-medium'>Nano Materials</h1>
              <p>The ideation process is a crucial phase in the design process where creative thinking and brainstormingThe ideation process is a crucial phase in the design process where creative thinking and brainstorming</p>
            </div>
            <div className='flex flex-col gap-2'>
              <Image src='/images/showcase/showcase-4.png' alt=''/>
              <h1 className='text-2xl font-roboto-serif font-medium'>Nano Materials</h1>
              <p>The ideation process is a crucial phase in the design process where creative thinking and brainstormingThe ideation process is a crucial phase in the design process where creative thinking and brainstorming</p>
            </div>
         </div>
         <div className='flex flex-col gap-7'>
            <div className='flex flex-col gap-2'>
              <Image src='/images/showcase/showcase-3.png' alt=''/>
              <h1 className='text-2xl font-roboto-serif font-medium'>Nano Materials</h1>
              <p>The ideation process is a crucial phase in the design process where creative thinking and brainstormingThe ideation process is a crucial phase in the design process where creative thinking and brainstorming</p>
            </div>
            <div className='flex flex-col gap-2'>
              <Image src='/images/showcase/showcase-1.png' alt=''/>
              <h1 className='text-2xl font-roboto-serif font-medium'>Nano Materials</h1>
              <p>The ideation process is a crucial phase in the design process where creative thinking and brainstormingThe ideation process is a crucial phase in the design process where creative thinking and brainstorming</p>
            </div>
            <div className='flex flex-col gap-2'>
              <Image src='/images/showcase/showcase-4.png' alt=''/>
              <h1 className='text-2xl font-roboto-serif font-medium'>Nano Materials</h1>
              <p>The ideation process is a crucial phase in the design process where creative thinking and brainstormingThe ideation process is a crucial phase in the design process where creative thinking and brainstorming</p>
            </div>
            <div className='flex flex-col gap-2'>
              <Image src='/images/showcase/showcase-2.png' alt=''/>
              <h1 className='text-2xl font-roboto-serif font-medium'>Nano Materials</h1>
              <p>The ideation process is a crucial phase in the design process where creative thinking and brainstormingThe ideation process is a crucial phase in the design process where creative thinking and brainstorming</p>
            </div>
         </div>
      </div>
    </section>
  )
}

export default Showcase
