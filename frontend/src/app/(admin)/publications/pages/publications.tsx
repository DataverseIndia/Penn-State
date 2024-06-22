import { FC, useState, useEffect } from 'react';
import Sidebar from '../../sidebar';
import { useCreatePublication } from '../api/use-create-publication';
import { useGetPublications } from '../api/use-get-publications';
import PublicationCard from '@/components/global/publication-card';
import SheetComponent from '@/components/global/sheet-component';

type Props = {};

const Publications: FC<Props> = () => {
  const createPublicationMutation = useCreatePublication();

  const [year, setYear] = useState<string>('');
  const [publicationNumber, setPublicationNumber] = useState<string>('');
  const [topic, setTopic] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [authors, setAuthors] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('')

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (year && publicationNumber && topic && title && authors) {
      const requestData = { year, publicationNumber, topic, title, authors, imageUrl };
      createPublicationMutation.mutate(requestData);
    }
  };

  const publicationsQuery = useGetPublications();
  const publications = publicationsQuery.data || [];

  return (
    <section className="grid min-h-[90vh] w-full overflow-hidden lg:grid-cols-[280px_1fr] pt-20">
      <Sidebar />
      <div>
        <header className="flex lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6 font-relative-medium text-3xl justify-between">
          <h1 className="tracking-tight font-relative-medium">Publications</h1>
          <SheetComponent
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
