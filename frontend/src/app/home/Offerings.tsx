import { Image } from '@nextui-org/image'
import { FC } from 'react'

const Offerings: FC = () => {
  return (
    <section className='bg-neutral-200 py-10 px-[10vw] mx-auto'>
      <h1 className='font-relative-medium font-medium text-4xl mb-10 tracking-tighter'>Explore our academic offerings, Chart your path to sucess</h1>
      <div className='grid grid-cols-2 gap-10 justify-center items-center'>
         <div className='w-full mx-auto flex justify-end'>
            <Image src='/images/offerings.png' className=' object-cover mr-10'/>
         </div>
         <h1 className='tracking-tight text-neutral-800 text-justify mb-auto mt-5'>We are an experimental research group interested in developing bio-inspired and neuromorphic devices for sensing, compute, storage, and security applications using novel nanomaterials such as two-dimensional (2D) materials. Our research is interdisciplinary and we look for motivated and hard-working students and postdoctoral scholars from diverse engineering and science backgrounds. You can learn more about our vision in thisOur research is interdisciplinary and we look for motivated and hard-working students and postdoctoral scholars from diverse engineering and science backgroundsWe are an experimental research group interested in developing bio-inspired and neuromorphic devices for sensing, compute, storage, and security applications using novel nanomaterials suchstorage, and security applications using novel nanomaterials such devices for sensing, compute, storage, and security applications using novel nanomaterials suchstorage, and security applications using novel nanomaterials such devices for sensing, compute, storage, and security applications using novel nanomaterials suchstorage, and security applications using novel nanomaterials suchnovel nanomaterials suchstorage, and security applications using novel nanomaterials such </h1>
      </div>
    </section>
  )
}

export default Offerings
