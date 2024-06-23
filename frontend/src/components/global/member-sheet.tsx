import React from 'react';
import { Plus } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '../ui/input';
import { Button } from '@nextui-org/button';

type Props = {
  designation: string,
  setDesignation: React.Dispatch<React.SetStateAction<string>>,
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>,
  email: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  description: string,
  setDescription: React.Dispatch<React.SetStateAction<string>>,
  imageUrl: string,
  setImageUrl: React.Dispatch<React.SetStateAction<string>>,
  isLoading: boolean,
  handleSubmit: (event: any) => Promise<void>
}

const MemberSheet = ({ designation, setDesignation, name, setName, email, setEmail, description, setDescription, imageUrl, setImageUrl, isLoading, handleSubmit }: Props) => {
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
              <h1 className="text-neutral-900 text-base">Designation</h1>
              <Input value={designation} required className="text-neutral-900" onChange={(e) => setDesignation(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-neutral-900 text-base">Name</h1>
              <Input value={name} required className="text-neutral-900" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-neutral-900 text-base">Email</h1>
              <Input value={email} required className="text-neutral-900" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-neutral-900 text-base">Description</h1>
              <Input value={description} required className="text-neutral-900" onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-neutral-900 text-base">Image</h1>
              <Input value={imageUrl} required className="text-neutral-900" onChange={(e) => setImageUrl(e.target.value)} />
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

export default MemberSheet;
