import { FC } from 'react';
import { Image } from '@nextui-org/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@nextui-org/button';
import { Link } from 'react-router-dom';

interface DiscoveryCardProps {
  journal: string;
  title: string;
  authors: string;
  imageUrl?: string;
  publicationLink: string;
}

const DiscoveryCard: FC<DiscoveryCardProps> = ({
  journal,
  title,
  authors,
  imageUrl,
  publicationLink
}) => {
  return (
    <div className="mx-auto tracking-tight bg-white shadow-md rounded-lg p-4 grid grid-cols-2 gap-5">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Publication Image"
          className="object-cover rounded mr-4"
        />
      )}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className='font-roboto-serif font-medium text-lg'>
            {journal}
          </h1>
          <h2 className="text-balance text-md font-roboto-sans text-[#1E407C]">
            {title}
          </h2>
          <p className="text-sm text-gray-600 mt-2 font-roboto-serif">
            {authors}
          </p>
        </div>
        <Link to={publicationLink} className="mt-4">
          <Button className="w-full bg-neutral-100 rounded-md flex justify-between">
            <h1>Read More</h1>
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DiscoveryCard;
