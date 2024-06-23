import { FC, useState } from 'react';
import Sidebar from '../../_components/sidebar';
import { useCreatePublication } from '../api/use-create-publication';
import { useGetPublications } from '../api/use-get-publications';
import PublicationCard from '@/components/global/publication-card';
import PublicationSheet from '@/components/global/publication-sheet';

type Props = {};

const Publications: FC<Props> = () => {
  const createPublicationMutation = useCreatePublication();

  const [year, setYear] = useState<string>('');
  const [publicationNumber, setPublicationNumber] = useState<string>('');
  const [topic, setTopic] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [authors, setAuthors] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<File | null>(null)

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (year && topic && title && authors) {
      const requestData = { year, publicationNumber, topic, title, authors, imageUrl };
      createPublicationMutation.mutate(requestData);
    }
  };

  const publicationsQuery = useGetPublications();
  const publications = publicationsQuery.data || [];
  const isLoading = createPublicationMutation.isPending;

  return (
    <section className="flex min-h-[90vh] w-full overflow-hidden pt-20">
      <Sidebar />
      <div className="ml-[200px] w-full">
        <header className="flex lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6 font-relative-medium text-3xl justify-between">
          <h1 className="tracking-tight font-relative-medium">Publications</h1>
          <PublicationSheet
            year={year}
            setYear={setYear}
            publicationNumber={publicationNumber}
            setPublicationNumber={setPublicationNumber}
            topic={topic}
            setTopic={setTopic}
            title={title}
            setTitle={setTitle}
            authors={authors}
            setAuthors={setAuthors}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
          />
        </header>
        {publications.map((publication, index) => (
            <PublicationCard
              key={index}
              title={publication.title}
              authors={publication.authors}
              imageUrl={publication.imageUrl}
              id={publication.id}
              year={publication.year}
              publicationNumber={publication.publicationNumber}
              topic={publication.topic}
            />
        ))}
      </div>
    </section>
  );
};

export default Publications;
