import { FC } from "react";
import { Image } from "@nextui-org/image";
import { Edit2 } from "lucide-react";
import { Button } from "@nextui-org/button";
import SheetComponent from "./sheet-component";

type Props = {
  title: string;
  authors: string;
  imageUrl: string;
  id: number;
  year: string;
  publicationNumber: string;
  topic: string;
};

const PublicationCard = ({ title, authors, imageUrl, year, publicationNumber, topic, id }: Props) => {
  return (
    <div className="mr-auto tracking-tight px-7 py-5">
      <div className="flex justify-between">
        <h1 className="font-relative-medium font-medium text-2xl">
          {id}. {title}, {publicationNumber}, ({year})
        </h1>
      </div>
      <h1 className="text-balance text-lg font-roboto-serif font-medium text-[#1E407C]">
        {topic}
      </h1>
      <p className="text-sm text-gray-600 mt-2 font-relative-book">{authors}</p>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Publication Image"
          className="mt-6 object-cover h-96 rounded"
        />
      )}
      <hr className="w-full mx-auto mt-5 border-t-[1px] border-neutral-500" />
    </div>
  );
};

export default PublicationCard;
