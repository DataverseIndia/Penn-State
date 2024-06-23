import React from 'react';
import { Plus } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Input } from '../ui/input';
import { Button } from '@nextui-org/button';

type Props = {
  year: string,
  setYear: React.Dispatch<React.SetStateAction<string>>,
  publicationNumber: string,
  setPublicationNumber: React.Dispatch<React.SetStateAction<string>>,
  topic: string,
  setTopic: React.Dispatch<React.SetStateAction<string>>,
  title: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  authors: string,
  setAuthors: React.Dispatch<React.SetStateAction<string>>,
  imageUrl: File | null,
  setImageUrl: React.Dispatch<React.SetStateAction<File | null>>,
  isLoading: boolean,
  handleSubmit: (event: any) => Promise<void>
}

const PublicationSheet = ({ year, setYear, publicationNumber, setPublicationNumber, topic, setTopic, title, setTitle, authors, setAuthors, imageUrl, setImageUrl, isLoading, handleSubmit }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="rounded-md bg-neutral-900 z-20">
          <Plus className="size-6 text-neutral-100" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add a publication</SheetTitle>
          <SheetDescription className="grid gap-5 pt-5">
            <div className="flex flex-col gap-1">
              <h1 className="text-neutral-900 text-base">Publication year</h1>
              <Input value={year} required className="text-neutral-900" onChange={(e) => setYear(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-neutral-900 text-base">Publication Number</h1>
              <Input value={publicationNumber} required className="text-neutral-900" onChange={(e) => setPublicationNumber(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-neutral-900 text-base">Topic</h1>
              <Input value={topic} required className="text-neutral-900" onChange={(e) => setTopic(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-neutral-900 text-base">Title</h1>
              <Input value={title} required className="text-neutral-900" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-neutral-900 text-base">Authors</h1>
              <Input value={authors} required className="text-neutral-900" onChange={(e) => setAuthors(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-neutral-900 text-base">Cover image</h1>
              <Input type='file' className="text-neutral-900 cursor-pointer" onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setImageUrl(e.target.files[0]);
                } else {
                  setImageUrl(null);
                }
              }} />
            </div>
          </SheetDescription>
        </SheetHeader>
        <SheetClose asChild className='w-full mt-5'>
          <Button
            type='submit'
            onClick={handleSubmit}
            className={`flex bg-neutral-950 text-neutral-100 px-10 py-3 rounded-md mt-7 mx-auto justify-center ${
            isLoading === true ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}>Save</Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default PublicationSheet;
