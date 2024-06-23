import { FC, useState } from "react";
import Sidebar from "../../_components/sidebar";
import { useCreateNews } from "../api/use-create-news";
import { useGetNews } from "../api/use-get-news";
import { OutputData } from "@editorjs/editorjs";
import NewsSheet from "@/components/global/news-sheet";
import NewsCard from "@/components/global/news-card";

type Props = {};

const News: FC = (props: Props) => {
  const createNewsMutation = useCreateNews();

  const [content, setContent] = useState<OutputData | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (content) {
      const requestData = { content, imageUrl };
      createNewsMutation.mutate(requestData);
    }
  };

  const NewsQuery = useGetNews();
  const allNews = NewsQuery.data || [];
  const isLoading = createNewsMutation.isPending;
  return (
    <div className="flex min-h-[90vh] w-full overflow-hidden pt-20">
      <Sidebar />
      <div className="ml-[200px] w-full">
        <header className="flex lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6 font-relative-medium text-3xl justify-between">
        <h1 className="tracking-tight font-relative-medium">News</h1>
          <NewsSheet
            content={content}
            setContent={setContent}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
          />
        </header>
        <div className="flex flex-col">
          {allNews.map((news, index) => (
            <NewsCard
              key={index}
              id={news.id}
              content={news.content}
              imageUrl={news.imageUrl}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default News;
