import { FC } from 'react';
import { Image } from '@nextui-org/image';
import { Button } from '@nextui-org/button';
import { useGetPublications } from '../(admin)/publications/api/use-get-publications';
import PublicationCard from '@/components/global/publication-card';

const Publications: FC = () => {
    const publicationsQuery = useGetPublications();
    const publications = publicationsQuery.data || [];

    return (
        <section>
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel impedit quis
                        eaque earum blanditiis magni error saepe, delectus in atque!
                    </h1>
                    <Button className="rounded-full bg-white tracking-tight text-base mr-auto">
                        <img src="/icons/arrow.svg" className="size-5 my-auto" />
                        <h1>Get Started</h1>
                    </Button>
                </div>
            </div>
            <h1 className='w-[80%] mx-auto pt-12 pb-3 font-roboto-serif font-medium text-4xl text-[#1E407C] tracking-tight'>Our Papers</h1>
            <div className='w-[84%] mx-auto'>
               {publications.map((publication, index) => (
                  <PublicationCard
                     key={index}
                     title={publication.title}
                     authors={publication.authors}
                     imageUrl={publication.imageUrl}
                     id={publication.id}
                     year={publication.year}
                     publicationNumber={publication.publicationNumber}
                     topic={publication.topic}
                  />
               ))}
            </div>
        </section>
    );
};

export default Publications;
