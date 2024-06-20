import { FC } from 'react'
import Navbar from '../home/Navbar'
import Footer from '../home/Footer'
import { Image } from '@nextui-org/image'
import { Button } from '@nextui-org/button'
import PublicationCard from './publication-card'

const Publications: FC = () => {
  return (
    <section>
      <Navbar />
      <div className="relative min-h-screen tracking-tighter">
         <Image
            src="/images/hero.webp"
            radius="none"
            className="w-screen max-h-[100vh] object-cover"
         />
         <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center z-20 w-[30%] mx-[10vw]">
         <h1 className="text-5xl font-roboto-serif font-semibold text-white text-shadow-md">
            Have a look on our talented team from all over the world
         </h1>
         <h1 className="text-neutral-200 text-lg tracking-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel impedit
            quis eaque earum blanditiis magni error saepe, delectus in atque!
         </h1>
         <Button className="rounded-full bg-white tracking-tight text-base mr-auto">
            <img src="/icons/arrow.svg" className="size-5 my-auto"/>
            <h1>Get Started</h1>
         </Button>
         </div>
      </div>
      <div className='py-10 flex flex-col gap-7'>
         <PublicationCard
            journal="01. ACS Applied Materials & Interfaces, 15 (22), 26946–26959, (2023)"
            title="Radiation Resilient Two-Dimensional Electronics."
            authors="Ravichandran, H., Knobloch, T., Pannone, A., Karl, A., Stampfer, B., Waldhoer, D., Zheng, Y., Sakib, N., Sadaf, M., Pendurthi, M., Torsi, R., Robinson, J. A., Grasser, T., Das, S."
            imageUrl="/images/publications/publication1.jpg"
         />
         <PublicationCard
            journal="01. ACS Applied Materials & Interfaces, 15 (22), 26946–26959, (2023)"
            title="Radiation Resilient Two-Dimensional Electronics."
            authors="Ravichandran, H., Knobloch, T., Pannone, A., Karl, A., Stampfer, B., Waldhoer, D., Zheng, Y., Sakib, N., Sadaf, M., Pendurthi, M., Torsi, R., Robinson, J. A., Grasser, T., Das, S."
            imageUrl="/images/publications/publication2.jpg"
         />
         <PublicationCard
            journal="01. ACS Applied Materials & Interfaces, 15 (22), 26946–26959, (2023)"
            title="Radiation Resilient Two-Dimensional Electronics."
            authors="Ravichandran, H., Knobloch, T., Pannone, A., Karl, A., Stampfer, B., Waldhoer, D., Zheng, Y., Sakib, N., Sadaf, M., Pendurthi, M., Torsi, R., Robinson, J. A., Grasser, T., Das, S."
            imageUrl="/images/publications/publication3.jpg"
         />
         <PublicationCard
            journal="01. ACS Applied Materials & Interfaces, 15 (22), 26946–26959, (2023)"
            title="Radiation Resilient Two-Dimensional Electronics."
            authors="Ravichandran, H., Knobloch, T., Pannone, A., Karl, A., Stampfer, B., Waldhoer, D., Zheng, Y., Sakib, N., Sadaf, M., Pendurthi, M., Torsi, R., Robinson, J. A., Grasser, T., Das, S."
            imageUrl="/images/publications/publication4.jpg"
         />
         <PublicationCard
            journal="01. ACS Applied Materials & Interfaces, 15 (22), 26946–26959, (2023)"
            title="Radiation Resilient Two-Dimensional Electronics."
            authors="Ravichandran, H., Knobloch, T., Pannone, A., Karl, A., Stampfer, B., Waldhoer, D., Zheng, Y., Sakib, N., Sadaf, M., Pendurthi, M., Torsi, R., Robinson, J. A., Grasser, T., Das, S."
            imageUrl="/images/publications/publication2.jpg"
         />
         <PublicationCard
            journal="01. ACS Applied Materials & Interfaces, 15 (22), 26946–26959, (2023)"
            title="Radiation Resilient Two-Dimensional Electronics."
            authors="Ravichandran, H., Knobloch, T., Pannone, A., Karl, A., Stampfer, B., Waldhoer, D., Zheng, Y., Sakib, N., Sadaf, M., Pendurthi, M., Torsi, R., Robinson, J. A., Grasser, T., Das, S."
         />
         <PublicationCard
            journal="01. ACS Applied Materials & Interfaces, 15 (22), 26946–26959, (2023)"
            title="Radiation Resilient Two-Dimensional Electronics."
            authors="Ravichandran, H., Knobloch, T., Pannone, A., Karl, A., Stampfer, B., Waldhoer, D., Zheng, Y., Sakib, N., Sadaf, M., Pendurthi, M., Torsi, R., Robinson, J. A., Grasser, T., Das, S."
         />
         <PublicationCard
            journal="01. ACS Applied Materials & Interfaces, 15 (22), 26946–26959, (2023)"
            title="Radiation Resilient Two-Dimensional Electronics."
            authors="Ravichandran, H., Knobloch, T., Pannone, A., Karl, A., Stampfer, B., Waldhoer, D., Zheng, Y., Sakib, N., Sadaf, M., Pendurthi, M., Torsi, R., Robinson, J. A., Grasser, T., Das, S."
            imageUrl="/images/publications/publication3.jpg"
         />
         <PublicationCard
            journal="01. ACS Applied Materials & Interfaces, 15 (22), 26946–26959, (2023)"
            title="Radiation Resilient Two-Dimensional Electronics."
            authors="Ravichandran, H., Knobloch, T., Pannone, A., Karl, A., Stampfer, B., Waldhoer, D., Zheng, Y., Sakib, N., Sadaf, M., Pendurthi, M., Torsi, R., Robinson, J. A., Grasser, T., Das, S."
            imageUrl="/images/publications/publication1.jpg"
         />
         <PublicationCard
            journal="01. ACS Applied Materials & Interfaces, 15 (22), 26946–26959, (2023)"
            title="Radiation Resilient Two-Dimensional Electronics."
            authors="Ravichandran, H., Knobloch, T., Pannone, A., Karl, A., Stampfer, B., Waldhoer, D., Zheng, Y., Sakib, N., Sadaf, M., Pendurthi, M., Torsi, R., Robinson, J. A., Grasser, T., Das, S."
            imageUrl="/images/publications/publication4.jpg"
         />
         <PublicationCard
            journal="01. ACS Applied Materials & Interfaces, 15 (22), 26946–26959, (2023)"
            title="Radiation Resilient Two-Dimensional Electronics."
            authors="Ravichandran, H., Knobloch, T., Pannone, A., Karl, A., Stampfer, B., Waldhoer, D., Zheng, Y., Sakib, N., Sadaf, M., Pendurthi, M., Torsi, R., Robinson, J. A., Grasser, T., Das, S."
         />
         <PublicationCard
            journal="01. ACS Applied Materials & Interfaces, 15 (22), 26946–26959, (2023)"
            title="Radiation Resilient Two-Dimensional Electronics."
            authors="Ravichandran, H., Knobloch, T., Pannone, A., Karl, A., Stampfer, B., Waldhoer, D., Zheng, Y., Sakib, N., Sadaf, M., Pendurthi, M., Torsi, R., Robinson, J. A., Grasser, T., Das, S."
         />
      </div>
      <Footer />
    </section>
  )
}

export default Publications
