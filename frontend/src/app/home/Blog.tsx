import NewsCard from '@/components/global/news-card'
import { Button } from '@nextui-org/button'
import { FC } from 'react'

const Blog: FC = () => {
  return (
    <div className='mt-20 w-[85%] mx-auto'>
      <div className='flex justify-between'>
         <h1 className='text-6xl font-roboto-serif font-semibold w-[70%] tracking-tighter'>Check out our latest news and happenings</h1>
         <Button className="rounded-full bg-white tracking-tight text-base ml-auto mt-auto">
          <img src="/icons/arrow.svg" className="size-5 my-auto"/>
          <h1>Get Started</h1>
        </Button>
      </div>
      <div className='grid grid-cols-3 gap-10 justify-between mt-16'>
            <NewsCard
               imageSrc="/images/blogs/blog1.png"
               date="12 Aug 2023"
               title="Really important Blog, you should read"
               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <NewsCard
               imageSrc="/images/blogs/blog2.jpeg"
               date="12 Aug 2023"
               title="Really important Blog, you should read"
               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <NewsCard
               imageSrc="/images/blogs/blog3.webp"
               date="12 Aug 2023"
               title="Really important Blog, you should read"
               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <NewsCard
               imageSrc="/images/blogs/blog4.jpg"
               date="12 Aug 2023"
               title="Really important Blog, you should read"
               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <NewsCard
               imageSrc="/images/blogs/blog5.jpg"
               date="12 Aug 2023"
               title="Really important Blog, you should read"
               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <NewsCard
               imageSrc="/images/blogs/blog6.webp"
               date="12 Aug 2023"
               title="Really important Blog, you should read"
               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
      </div>
    </div>
  )
}

export default Blog
