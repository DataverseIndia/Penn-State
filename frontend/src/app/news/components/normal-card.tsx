import { FC } from 'react';
import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

interface DynamicCardProps {
  imageSrc: string;
  altText: string;
  footerHeader: string;
  footerDescription: string;
  buttonText: string;
}

const NormalCard: FC<DynamicCardProps> = ({ imageSrc, altText, footerHeader, footerDescription, buttonText }) => {
  return (
    <Card
      isFooterBlurred
      radius="sm"
      className="border-none w-full"
    >
      <Image
        alt={altText}
        className="object-cover w-screen rounded-none"
        src={imageSrc}
      />
      <CardFooter className="overflow-hidden py-1.5 absolute rounded-lg bottom-1 flex gap-5 shadow-small z-10 ml-1 justify-center w-[calc(100%_-_8px)]">
        <div>
          <p className="text-sm text-white font-normal">{footerHeader}</p>
          <p className="text-xs text-white/70 font-normal">{footerDescription}</p>
        </div>
        <Button className="text-tiny text-white bg-neutral-800 rounded-md" variant="flat" color="default" size="sm">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default NormalCard;
