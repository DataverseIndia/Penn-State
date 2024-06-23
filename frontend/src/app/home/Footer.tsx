import { Input } from '@/components/ui/input';
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <section className="bg-black text-neutral-300 py-10 mt-auto z-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Image src='/logo.png' radius='none' alt='' className='h-16'/>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-16">
            <div className="mb-8 md:mb-0">
              <h3 className="font-bold">Utility Pages</h3>
              <ul className='text-sm grid'>
                <Link to="/">About Us</Link>
                <Link to="/">License</Link>
                <Link to="/">Contact</Link>
                <Link to="/">404</Link>
              </ul>
            </div>
            <div>
              <h3 className="font-relative-bold mb-2">Subscribe</h3>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email here"
                  className="p-2 rounded-l-lg bg-neutral-900 text-neutral-50 border-none placeholder:text-neutral-500 focus:border-2 focus:border-neutral-800"
                />
                <Button
                  type="submit"
                  className="bg-black text-white p-2 rounded-md ml-3 border border-neutral-700"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 justify-between mt-8 text-gray-400">
          <div>
            <p className='my-auto font-relative-medium text-neutral-100'>Copyright by</p>
            <p>Dr. Das Research Lab</p>
          </div>
          <div className="mx-auto">
            <p className='my-auto font-relative-medium text-neutral-100'>Contact Us</p>
            <p className='my-auto'>+0174569423759</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className='my-auto font-relative-medium text-neutral-100 text-right'>Address</p>
            <p className='text-right'>119 Tanglewood Lane Gulfport, MS 39503</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
