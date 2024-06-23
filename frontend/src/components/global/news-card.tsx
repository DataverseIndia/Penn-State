import { useDeleteNews } from "@/app/(admin)/news/api/use-delete-news";
import Blocks from 'editorjs-blocks-react-renderer';
import { OutputData } from "@editorjs/editorjs";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { isAdminRoute } from "@/utils";

type Props = {
  id: number;
  content: any;
  imageUrl: string[] | null;
};

const NewsCard = ({ id, content, imageUrl }: Props) => {
  const deleteMutation = useDeleteNews(id.toString());
  const deletePublication = () => {
    deleteMutation.mutate()
  }
  const validImageUrls = imageUrl?.filter((img) => img.trim() !== '') || [];
  return (
    <div className="mr-auto tracking-tight py-5 w-full">
      <div className="flex justify-between gap-10">
        <Blocks data={content} config={{
          paragraph: {
            className: "text-base my-auto",
          },
          link: {
            className: "underline"
          }
        }}/>
        {isAdminRoute && (
          <div className="flex gap-2">
            <Button size="sm" className="text-neutral-800 hover:text-neutral-950 bg-white hover:bg-neutral-100 animation rounded-md shadow-[inset_-12px_-8px_40px_#46464620]" onClick={() => deletePublication()}>Delete</Button>
            <Button size="sm" className="text-neutral-800 hover:text-neutral-950 bg-white hover:bg-neutral-100 animation rounded-md shadow-[inset_-12px_-8px_40px_#46464620]">Edit</Button>
          </div>
        )}
      </div>
      {validImageUrls.length > 0 ? (
        validImageUrls.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="Publication Image"
            className="mt-3 object-cover h-96 rounded"
          />
        ))
      ) : (
        <></>
      )}
      <hr className="w-full mx-auto mt-5 border-t-[1px] border-neutral-400" />
    </div>
  );
};

export default NewsCard;
