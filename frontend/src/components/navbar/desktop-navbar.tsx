import { Button } from '@nextui-org/button';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const DesktopNavbar: FC = () => {
    return (
        <section className="px-16 grid grid-cols-3 py-3 fixed backdrop-blur-md z-30 w-full items-center tracking-tight bg-stone-950">
            <Link to="/" className="mr-auto gap-3 flex justify-center items-center my-auto">
                <img src="/icon.png" alt="logo" className="w-12 h-auto my-auto" />
                <div className='text-stone-50 roboto-medium'>
                    <h1 className='font-medium'>Penn State University</h1>
                    <p>Dr.Das Research Lab</p>
                </div>
            </Link>
            <div className="text-stone-50 flex my-auto justify-between font-roboto-sans font-normal">
                <Link to="/" className="hover:bg-white/10 animation px-5 py-2 rounded-full no-underline">
                    Home
                </Link>
                <Link to="/research" className="hover:bg-white/10 animation px-5 py-2 rounded-full no-underline">
                    Research
                </Link>
                <Link to="/publications" className="hover:bg-white/10 animation px-5 py-2 rounded-full no-underline">
                    Publications
                </Link>
                <Link to="/news" className="hover:bg-white/10 animation px-5 py-2 rounded-full text-nowrap no-underline">
                    News
                </Link>
            </div>
            <Button className='max-w-max ml-auto rounded-md bg-neutral-100'>
                Contact Us
            </Button>
        </section>
    );
};

export default DesktopNavbar;
