import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="relative min-h-screen tracking-tighter">
      <Image
        src="/images/hero.webp"
        radius="none"
        className="w-screen max-h-[100vh] object-cover"
      />
      <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center z-20 w-[30%] mx-[10vw]">
        <h1 className="text-5xl font-relative-bold text-white text-shadow-md">
          Shaping the Future Through Education and Innovation
        </h1>
        <h1 className="text-neutral-200 text-lg tracking-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel impedit
          quis eaque earum blanditiis magni error saepe, delectus in atque!
        </h1>
        <Button className="rounded-full bg-white tracking-tight text-base mr-auto">
          <img src="/icons/arrow.svg" className="size-5 my-auto"/>
          <h1>Get Started</h1>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
