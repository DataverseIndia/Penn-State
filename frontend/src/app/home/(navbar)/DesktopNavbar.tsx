import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const DesktopNavbar: FC = () => {
    return (
        <section className="px-[10vw] grid grid-cols-3 py-3 fixed backdrop-blur-md z-30 w-full items-center tracking-tight bg-stone-950">
            <Link to="/" className="mr-auto gap-3 flex justify-center items-center my-auto">
                <img src="/icon.png" alt="logo" className="w-12 h-auto my-auto" />
                <div className='text-stone-50 roboto-medium'>
                    <h1 className='font-medium'>Penn State University</h1>
                    <p>Dr.Das Research Lab</p>
                </div>
            </Link>
            <div className="text-stone-50 flex my-auto justify-between font-roboto-sans font-normal">
                <Link to="/" className="hover:bg-white/10 animation px-5 py-2 rounded-full">
                    Home
                </Link>
                <Link to="/research" className="hover:bg-white/10 animation px-5 py-2 rounded-full">
                    Research
                </Link>
                <Link to="/publications" className="hover:bg-white/10 animation px-5 py-2 rounded-full">
                    Publications
                </Link>
                <Link
                    to="/news"
                    className="hover:bg-white/10 animation px-5 py-2 rounded-full text-nowrap"
                >
                    News
                </Link>
                <Link
                    to="/contact-us"
                    className="hover:bg-white/10 animation px-5 py-2 rounded-full text-nowrap"
                >
                    Contact Us
                </Link>
            </div>
            <Dialog>
                <DialogTrigger>
                    <div className='flex justify-end items-center'>
                        <Input type="text" placeholder="Search" className='bg-stone-800 border-none w-[15vw] ml-auto my-auto'/>
                        <Search className='-ml-7 size-5 text-stone-50 '/>
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader className='grid gap-10'>
                        <h1 className='text-center'>What do you want to search?</h1>
                        <DialogDescription>
                            <Input type="text" placeholder="Search" className=' w-[15vw] m-auto'/>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default DesktopNavbar;
