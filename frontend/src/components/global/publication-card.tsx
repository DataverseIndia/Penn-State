import { useDeletePublication } from "@/app/(admin)/publications/api/use-delete-publication";
import { isAdminRoute } from "@/utils";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

type Props = {
  title: string;
  authors: string;
  imageUrl: string | null;
  id: number;
  year: string;
  publicationNumber: string | null;
  topic: string;
};

const PublicationCard = ({ title, authors, imageUrl, year, publicationNumber, topic, id }: Props) => {
  const deleteMutation = useDeletePublication(id.toString());
  const deletePublication = () => {
    deleteMutation.mutate()
  }
  return (
    <div className="mr-auto tracking-tight px-7 py-5">
      <div className="flex justify-between gap-10">
        <h1 className="font-relative-medium font-medium text-2xl">
          {publicationNumber}. {title}, {publicationNumber}, ({year})
        </h1>
        {isAdminRoute && (
          <div className="flex gap-2">
            <Button size="sm" className="text-neutral-800 hover:text-neutral-950 bg-white hover:bg-neutral-100 animation rounded-md shadow-[inset_-12px_-8px_40px_#46464620]" onClick={() => deletePublication()}>Delete</Button>
            <Button size="sm" className="text-neutral-800 hover:text-neutral-950 bg-white hover:bg-neutral-100 animation rounded-md shadow-[inset_-12px_-8px_40px_#46464620]">Edit</Button>
          </div>
        )}
      </div>
      <h1 className="text-balance text-lg font-roboto-serif font-medium text-[#1E407C] pt-3 pb-1.5">
        {topic}
      </h1>
      <p className="text-sm text-gray-600 font-relative-book">{authors}</p>
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
