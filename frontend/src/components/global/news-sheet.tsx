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
import EditorInstance from '@/app/(editor)/editor-instance';
import { OutputData } from '@editorjs/editorjs';

type Props = {
  content: OutputData | null,
  setContent: React.Dispatch<React.SetStateAction<OutputData | null>>,
  imageUrl: string,
  setImageUrl: React.Dispatch<React.SetStateAction<string>>,
  isLoading: boolean,
  handleSubmit: (event: any) => Promise<void>
}

const NewsSheet = ({ content, setContent, imageUrl, setImageUrl, isLoading, handleSubmit }: Props) => {
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
              <h1 className="text-neutral-900 text-base">Description</h1>
              <EditorInstance editorData={content} setEditorData={setContent} />
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

export default NewsSheet;
