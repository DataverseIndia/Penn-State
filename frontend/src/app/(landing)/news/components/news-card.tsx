import { FC } from 'react';
import { Image } from '@nextui-org/image';
import { Button } from '@nextui-org/button';
import { Link } from 'react-router-dom';
import { Bookmark } from 'lucide-react';

interface NewsCardProps {
  journal: string;
  title: string;
  authors: string;
  imageUrl?: string;
  publicationLink: string;
}

const NewsCard: FC<NewsCardProps> = ({
  journal,
  title,
  authors,
  imageUrl,
  publicationLink
}) => {
  return (
    <div className="mx-auto tracking-tight bg-white shadow-md rounded-lg p-4">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Publication Image"
          className="object-cover rounded h-80 mb-4 w-screen"
        />
      )}
      <h1 className='font-roboto-serif font-medium text-lg'>
        {journal}
      </h1>
      <h2 className="text-balance text-md font-roboto-sans text-[#1E407C]">
        {title}
      </h2>
      <p className="text-sm text-gray-600 mt-2 font-roboto-serif">
        {authors}
      </p>
      <Link to={publicationLink}>
         <Button className="mt-4 w-full flex justify-between rounded-md bg-neutral-100">
            <p className="text-neutral-800 font-normal text-left">
               Read Publication
            </p>
            <Bookmark />
         </Button>
      </Link>
    </div>
  );
};

export default NewsCard;
