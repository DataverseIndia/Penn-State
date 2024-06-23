import { FC } from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '@/hooks/use-document-title';
import { Button } from '@nextui-org/button';

const NotFound: FC = () => {
  useDocumentTitle(`404 | investor Pysche Evaluation`)
  return (
    <section className='flex flex-col justify-between'>
      <div className='flex flex-col justify-center items-center phone:my-[15vh] lg:my-[10vw] z-20'>
         <h1 className='font-bold text-5xl'>
          <span className="bg-gradient-to-r from-indigo-400/95 to-yellow-300/60 bg-clip-text text-transparent">
              404
            </span>
          </h1>
         <p className='font-medium text-lg mt-5'>Oops you are on the wrong turf!</p>
         <Button className='bg-black text-white rounded-md mt-5 text-medium'>
            <Link to="/">Go to Homepage</Link>
         </Button>
      </div>
    </section>
  );
};

export default NotFound;
