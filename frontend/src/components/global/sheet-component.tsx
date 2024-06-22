import React from 'react';
import { Plus } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@nextui-org/button';
import { Input } from '../ui/input';

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
  imageUrl: string,
  setImageUrl: React.Dispatch<React.SetStateAction<string>>,
  handleSubmit: (event: any) => Promise<void>
}

const SheetComponent = ({ year, setYear, publicationNumber, setPublicationNumber, topic, setTopic, title, setTitle, authors, setAuthors, imageUrl, setImageUrl, handleSubmit }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="rounded-md bg-neutral-900">
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
              <Input type='file' className="text-neutral-900 cursor-pointer" onChange={(e) => setImageUrl(e.target.value)} />
            </div>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild className='w-full mt-5'>
            <Button type='submit' onClick={handleSubmit} className="bg-neutral-900 text-neutral-100 rounded-md w-full">Save</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SheetComponent;
