import { FC } from 'react';
import { Image } from '@nextui-org/image';

interface PublicationCardProps {
  journal: string;
  title: string;
  authors: string;
  imageUrl?: string; // Make imageUrl optional
}

const PublicationCard: FC<PublicationCardProps> = ({ journal, title, authors, imageUrl }) => {
  return (
    <div className="max-w-4xl mx-auto tracking-tight">
      <h1 className='font-roboto-serif font-medium text-2xl'>
        {journal}
      </h1>
      <h1 className="text-balance text-lg font-roboto-sans text-[#1E407C]">
        {title}
      </h1>
      <p className="text-sm text-gray-600 mt-2 font-roboto-serif">
        {authors}
      </p>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Publication Image"
          className="mt-6 object-cover h-96 rounded"
        />
      )}
      <hr className='w-full mx-auto mt-5 border-t-[1px] border-neutral-500'/>
    </div>
  );
};

export default PublicationCard;
