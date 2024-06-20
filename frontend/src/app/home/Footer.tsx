import { Input } from '@/components/ui/input';
import { Button } from '@nextui-org/button';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <section className="bg-black text-neutral-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-xl font-bold">Penn State University</h2>
            <p className="text-lg">Dr.Das Research Lab</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-16">
            <div className="mb-8 md:mb-0">
              <h3 className="font-bold">Pages</h3>
              <ul>
                <li>Home</li>
                <li>Home 2</li>
                <li>About</li>
                <li>Conatct Us</li>
                <li>Portfolio</li>
                <li>Portfolio Single</li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <h3 className="font-bold">Utility Pages</h3>
              <ul>
                <li>Style Guide</li>
                <li>Instruction</li>
                <li>License</li>
                <li>Changelog</li>
                <li>Error 404</li>
                <li>Password Protected</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Subscribe</h3>
              <form className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email here"
                  className="p-2 rounded-l-lg bg-neutral-800 text-neutral-50 border-none placeholder:text-neutral-500"
                />
                <Button
                  type="submit"
                  className="bg-black text-white p-2 rounded-md ml-3 border border-neutral-700"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 justify-between mt-8 text-gray-400">
          <div>
            <p className='font-medium'>Copyright by</p>
            <p>Designed by Iconstica.com</p>
          </div>
          <div className="mx-auto">
            <p className='my-auto font-medium'>Contact Us</p>
            <p className='my-auto'>+0174569423759</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className='font-medium text-right'>Address</p>
            <p className='text-right'>119 Tanglewood Lane Gulfport, MS 39503</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
