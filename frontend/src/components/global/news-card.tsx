import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import React from 'react';

interface NewsCardProps {
  imageSrc: string;
  date: string;
  title: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  imageSrc,
  date,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
      <Image src={imageSrc} alt="News" className="w-screen h-64 object-cover rounded-none" />
      <div className="p-4">
        <Button className="bg-neutral-900 text-neutral-100 py-1 px-5 rounded-md text-sm mb-2">
          Read more
        </Button>
        <p className="text-gray-600 text-sm mb-2">{date}</p>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
