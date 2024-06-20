import { Image } from '@nextui-org/image'
import { FC } from 'react'

const Mission: FC = () => {
  return (
    <section className='bg-neutral-950 p-20'>
      <div className='grid grid-cols-2 gap-20'>
         <div className='flex flex-col gap-5'>
            <h1 className='text-teal-500 font-relative-medium'>Our Mission</h1>
            <h1 className='text-white text-5xl font-relative-medium tracking-tight'>Our vision and Plannings</h1>
            <p className='text-neutral-300 tracking-tight'>We are an experimental research group interested in developing bio-inspired and neuromorphic devices for sensing, compute, storage, and security applications using novel nanomaterials such as two-dimensional (2D) materials. Our research is interdisciplinary and we look for motivated and hard-working students and postdoctoral scholars from diverse engineering and science backgrounds. You can learn more about our vision in thisOur research is interdisciplinary and we look for motivated and hard-working students and postdoctoral scholars from diverse engineering and science backgroundsWe are an experimental research group interested in developing bio-inspired and neuromorphic devices for sensing, compute, storage, and security applications using novel nanomaterials suchstorage, and security applications using novel nanomaterials suchWe are an experimental research group interested in developing bio-inspired and neuromorphic devices for sensing, compute, storage, and security applications using novel nanomaterials such as two-dimensional (2D) materials. Our research is interdisciplinary and we look for motivated and hard-working students and postdoctoral novel nanomaterials suchstorage, and security applications using novel nanomaterials such  </p>
            <div className='grid grid-cols-2 gap-3 text-neutral-300 tracking-tight mt-10'>
              <div className='grid'>
                <div className='flex gap-2'>
                  <img src='/icons/tick.svg' className='size-4 my-auto'/>
                  <h1>Lorem ipsum dolor sit amet.</h1>
                </div>
                <div className='flex gap-2'>
                  <img src='/icons/tick.svg' className='size-4 my-auto'/>
                  <h1>Lorem ipsum dolor sit amet.</h1>
                </div>
                <div className='flex gap-2'>
                  <img src='/icons/tick.svg' className='size-4 my-auto'/>
                  <h1>Lorem ipsum dolor sit amet.</h1>
                </div>
              </div>
              <div className='grid'>
                <div className='flex gap-2'>
                  <img src='/icons/tick.svg' className='size-4 my-auto'/>
                  <h1>Lorem ipsum dolor sit amet.</h1>
                </div>
                <div className='flex gap-2'>
                  <img src='/icons/tick.svg' className='size-4 my-auto'/>
                  <h1>Lorem ipsum dolor sit amet.</h1>
                </div>
                <div className='flex gap-2'>
                  <img src='/icons/tick.svg' className='size-4 my-auto'/>
                  <h1>Lorem ipsum dolor sit amet.</h1>
                </div>
              </div>
            </div>
         </div>
         {/* WIP: images in mission */}
         <div className='flex h-full'>
            <Image src='/images/vision.jpg' alt='' className='h-full w-[65%] mx-auto object-cover'/>
         </div>
      </div>
    </section>
  )
}

export default Mission

