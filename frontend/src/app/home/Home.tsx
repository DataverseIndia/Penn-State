import { FC } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Offerings from './Offerings'
import Mission from './Mission'
import Showcase from './Showcase'
// import Publications from './Publications'
// import Blog from './Blog'
import Footer from './Footer'

const Home: FC = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Offerings />
      <Mission />
      <Showcase />
      {/* <Publications /> */}
      {/* <Blog /> */}
      <Footer />
    </div>
  )
}

export default Home
