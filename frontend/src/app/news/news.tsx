import { FC } from "react";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import NormalCard from "./components/normal-card";
import NewsCard from "./components/news-card";
import DiscoveryCard from "./components/discovery-card";

const News: FC = () => {
  return (
    <section>
      <div>
        <div className="relative min-h-screen tracking-tighter">
          <Image
            src="/images/hero.webp"
            radius="none"
            className="w-screen max-h-[100vh] object-cover"
          />
          <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center z-20 w-[30%] mx-[10vw]">
            <h1 className="text-5xl font-roboto-serif font-semibold text-white text-shadow-md">
              Shaping the Future Through Education and Innovation
            </h1>
            <h1 className="text-neutral-200 text-lg tracking-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              impedit quis eaque earum blanditiis magni error saepe, delectus in
              atque!
            </h1>
            <Button className="rounded-full bg-white tracking-tight text-base mr-auto">
              <img src="/icons/arrow.svg" className="size-5 my-auto" />
              <h1>Get Started</h1>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto py-10">
        <div className="my-5 flex justify-between">
          <h1 className="font-roboto-serif my-auto font-medium text-3xl tracking-tight">Latest Publications & News</h1>
          <Button className="rounded-full bg-white tracking-tight text-base ml-auto">
            <img src="/icons/arrow.svg" className="size-5 my-auto"/>
            <h1>See More</h1>
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-10">
          <NormalCard
            imageSrc={"/images/publications/publication3.jpg"}
            altText={"New"}
            footerHeader={"Advanced Functional Materials"}
            footerDescription="Lorem ipsum dolor sit amet consectetur."
            buttonText={"See"}
          />
          <NormalCard
            imageSrc={"/images/publications/publication1.jpg"}
            altText={"New"}
            footerHeader={"Advanced Functional Materials"}
            footerDescription="Lorem ipsum dolor sit amet consectetur."
            buttonText={"See"}
          />
          <NormalCard
            imageSrc={"/images/publications/publication4.jpg"}
            altText={"New"}
            footerHeader={"Advanced Functional Materials"}
            footerDescription="Lorem ipsum dolor sit amet consectetur."
            buttonText={"See"}
          />
          <NormalCard
            imageSrc={"/images/publications/publication2.jpg"}
            altText={"New"}
            footerHeader={"Advanced Functional Materials"}
            footerDescription="Lorem ipsum dolor sit amet consectetur."
            buttonText={"See"}
          />
        </div>
      </div>

      <div className="px-20 mx-auto bg-[#F5F5F5]">
        <div className="my-5 flex justify-between w-full pt-10">
          <h1 className="font-roboto-serif my-auto font-medium text-3xl tracking-tight">Recent News</h1>
          <Button className="rounded-full bg-white tracking-tight text-base ml-auto">
            <img src="/icons/arrow.svg" className="size-5 my-auto"/>
            <h1>See More</h1>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-5 pb-10 tracking-tight">
          <DiscoveryCard
            journal="Advanced Functional Materials (2023)"
            title="Two-Dimensional Memtransistors For Non-Von Neumann Computing"
            authors="Wali, A., & Das, S."
            imageUrl="/images/publications/publication4.jpg"
            publicationLink="#"
          />
          <DiscoveryCard
            journal="Advanced Functional Materials (2023)"
            title="Two-Dimensional Memtransistors For Non-Von Neumann Computing"
            authors="Wali, A., & Das, S."
            imageUrl="/images/publications/publication2.jpg"
            publicationLink="#"
          />
          <DiscoveryCard
            journal="Advanced Functional Materials (2023)"
            title="Two-Dimensional Memtransistors For Non-Von Neumann Computing"
            authors="Wali, A., & Das, S."
            imageUrl="/images/publications/publication3.jpg"
            publicationLink="#"
          />
          <DiscoveryCard
            journal="Advanced Functional Materials (2023)"
            title="Two-Dimensional Memtransistors For Non-Von Neumann Computing"
            authors="Wali, A., & Das, S."
            imageUrl="/images/publications/publication2.jpg"
            publicationLink="#"
          />
          <DiscoveryCard
            journal="Advanced Functional Materials (2023)"
            title="Two-Dimensional Memtransistors For Non-Von Neumann Computing"
            authors="Wali, A., & Das, S."
            imageUrl="/images/publications/publication4.jpg"
            publicationLink="#"
          />
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <div className="my-5 flex justify-between w-full pt-5">
          <h1 className="font-roboto-serif my-auto font-medium text-3xl tracking-tight">Recent Discoveries</h1>
          <Button className="rounded-full bg-white tracking-tight text-base ml-auto">
            <img src="/icons/arrow.svg" className="size-5 my-auto"/>
            <h1>Read More</h1>
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-5 pb-10 tracking-tight">
          <NewsCard
            journal="Advanced Functional Materials (2023)"
            title="Two-Dimensional Memtransistors For Non-Von Neumann Computing"
            authors="Wali, A., & Das, S."
            imageUrl="/images/publications/publication1.jpg"
            publicationLink="#"
          />
          <NewsCard
            journal="Advanced Functional Materials (2023)"
            title="Two-Dimensional Memtransistors For Non-Von Neumann Computing"
            authors="Wali, A., & Das, S."
            imageUrl="/images/publications/publication4.jpg"
            publicationLink="#"
          />
          <NewsCard
            journal="Advanced Functional Materials (2023)"
            title="Two-Dimensional Memtransistors For Non-Von Neumann Computing"
            authors="Wali, A., & Das, S."
            imageUrl="/images/publications/publication3.jpg"
            publicationLink="#"
          />
          <NewsCard
            journal="Advanced Functional Materials (2023)"
            title="Two-Dimensional Memtransistors For Non-Von Neumann Computing"
            authors="Wali, A., & Das, S."
            imageUrl="/images/publications/publication2.jpg"
            publicationLink="#"
          />
          <NewsCard
            journal="Advanced Functional Materials (2023)"
            title="Two-Dimensional Memtransistors For Non-Von Neumann Computing"
            authors="Wali, A., & Das, S."
            imageUrl="/images/publications/publication3.jpg"
            publicationLink="#"
          />
          <NewsCard
            journal="Advanced Functional Materials (2023)"
            title="Two-Dimensional Memtransistors For Non-Von Neumann Computing"
            authors="Wali, A., & Das, S."
            imageUrl="/images/publications/publication1.jpg"
            publicationLink="#"
          />
        </div>
      </div>
    </section>
  );
};

export default News;
