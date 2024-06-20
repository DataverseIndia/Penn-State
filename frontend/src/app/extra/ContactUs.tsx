import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@nextui-org/button";
import { LocateIcon, MailIcon, PhoneIcon } from "lucide-react";
import { FC } from "react";
import Navbar from "../home/Navbar";

const ContactUs: FC = () => {
  return (
    <>
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Dr. Das Research Lab
            </h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Pioneering cutting-edge research in fields like nanotechnology,
              AI, and renewable energy. Our team of world-class scientists is
              dedicated to pushing the boundaries of human knowledge.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h1>Name</h1>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <h1>Email</h1>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <h1>Subject</h1>
                <Input id="subject" placeholder="Enter the subject" />
              </div>
              <div className="space-y-2">
                <h1>Message</h1>
                <Textarea
                  className="min-h-[150px]"
                  id="message"
                  placeholder="Enter your message"
                />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <LocateIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 mt-1" />
                <div>
                  <p className="font-medium">Dr. Das Research Lab</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    123 Main St, Anytown USA 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    (123) 456-7890
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    info@email.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
