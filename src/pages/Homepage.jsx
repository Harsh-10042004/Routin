import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import { Bell, Copy, Home, icons, LayoutDashboard, Play, Settings2 } from 'lucide-react'
const courses =[
  {
    image:"/image1.jpg",
    name:"React Course",
    price: 3000
  },
   {
    image:"/image2.jpg",
    name:"Node.js Course",
    price: 8000
  },
   {
    image:"/image8.jpg",
    name:"Fronted Course",
    price: 5000
  },
   {
    image:"/image4.jpg",
    name:"Backend Course",
    price: 6000
  },
   {
    image:"/image8.jpg",
    name:"Special combo Course",
    price: 10000
  },
   {
    image:"/image6.jpg",
    name:"React Course Certificate",
    price: 1000
  },
   {
    image:"/image7.jpg",
    name:"React With Combo Course",
    price: 30000
  },
   {
    image:"/image8.jpg",
    name:"React With AI Course ",
    price: 30000
  },
]

const faq = [
  {
    title:"how to purchase a course ?",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ratione odio cumque molestias quo cupiditate suscipit totam ut, obcaecati eligendi esse id quas dolore non adipisci, nisi fuga cum quod"
  },
  {
    title:"Can i get refund my money ?",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ratione odio cumque molestias quo cupiditate suscipit totam ut, obcaecati eligendi esse id quas dolore non adipisci, nisi fuga cum quod"
  },
  {
    title:"How to get query and doubt support ?",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ratione odio cumque molestias quo cupiditate suscipit totam ut, obcaecati eligendi esse id quas dolore non adipisci, nisi fuga cum quod"
  },
  {
    title:"Can i get some discount?",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ratione odio cumque molestias quo cupiditate suscipit totam ut, obcaecati eligendi esse id quas dolore non adipisci, nisi fuga cum quod"
  },
  {
    title:"How to renew my course my course?",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ratione odio cumque molestias quo cupiditate suscipit totam ut, obcaecati eligendi esse id quas dolore non adipisci, nisi fuga cum quod"
  },

]
const featured = [
  {
    bgColor:'#f43f5e',
    icon:<Home/>,
    title:"Homepage",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ratione odio cumque molestias quo cupiditate suscipit totam ut, obcaecati eligendi esse id quas dolore non adipisci, nisi fuga cum quod"
  },
  {
    bgColor:'#6366f1',
    icon:<Settings2/>,
    title:"Settings",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ratione odio cumque molestias quo cupiditate suscipit totam ut, obcaecati eligendi esse id quas dolore non adipisci, nisi fuga cum quod"
  },
  {
    bgColor:'#f59e0b',
    icon:<Copy/>,
    title:"Copied",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ratione odio cumque molestias quo cupiditate suscipit totam ut, obcaecati eligendi esse id quas dolore non adipisci, nisi fuga cum quod"
  },
  {
    bgColor:'#22c55e',
    icon:<LayoutDashboard/>,
    title:"Layout & Design",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ratione odio cumque molestias quo cupiditate suscipit totam ut, obcaecati eligendi esse id quas dolore non adipisci, nisi fuga cum quod"
  },
  {
    bgColor:'#a855f7',
    icon:<Bell/>,
    title:"Notifications",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ratione odio cumque molestias quo cupiditate suscipit totam ut, obcaecati eligendi esse id quas dolore non adipisci, nisi fuga cum quod"
  },
  {
    bgColor:'#3b82f6',
    icon:<Play/>,
    title:"Players",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ratione odio cumque molestias quo cupiditate suscipit totam ut, obcaecati eligendi esse id quas dolore non adipisci, nisi fuga cum quod"
  },

]

const Homepage = () => {
  const[activeIndex,setActiveIndex] = useState(null)
  return (
    <div>
      <div className="h-[500px] animate__animated animate__fadeIn">
        <Swiper
          modules={[Pagination, Mousewheel]}
          pagination={{ clickable: true }}
          mousewheel={true}
          simulateTouch={true}
          grabCursor={true}
          touchRatio={1}
          spaceBetween={0}
          slidesPerView={1}
          className="w-full h-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="h-full bg-gradient-to-r from-gray-100 to-orange-500">
              <div className="w-10/12 mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                  <h1 className="text-5xl lg:text-7xl font-bold">
                    React Course By Trisha
                  </h1>

                  <p className="text-2xl lg:text-4xl font-semibold mt-4">
                    Learn to design a website
                  </p>

                  <p className="mt-4 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam, corrupti incidunt, inventore illum id ex harum
                    tempora ad nihil tempore sequi? A deserunt itaque pariatur
                    aspernatur, dignissimos eius totam alias.
                  </p>

                  <div className="flex gap-5 mt-6">
                    <button className="bg-rose-700 text-white font-medium px-8 py-3 rounded-lg hover:scale-105 active:scale-95 transition shadow-lg">
                      Watch Video
                    </button>

                    <button className="bg-violet-600 text-white font-medium px-8 py-3 rounded-lg hover:scale-105 active:scale-95 transition shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img
                    src="/studyphoto.avif"
                    alt="Learning"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full bg-gradient-to-r from-gray-100 to-blue-500">
              <div className="w-10/12 mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                  <h1 className="text-5xl lg:text-7xl font-bold">
                    Master React Development
                  </h1>

                  <p className="text-2xl lg:text-4xl font-semibold mt-4">
                    Build Modern Web Apps
                  </p>

                  <p className="mt-4 text-gray-700">
                    Learn React, React Router, API integration, state
                    management, authentication, and deployment through
                    real-world projects.
                  </p>

                  <div className="flex gap-5 mt-6">
                    <button className="bg-rose-700 text-white font-medium px-8 py-3 rounded-lg hover:scale-105 active:scale-95 transition shadow-lg">
                      Watch Video
                    </button>

                    <button className="bg-violet-600 text-white font-medium px-8 py-3 rounded-lg hover:scale-105 active:scale-95 transition shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img
                    src="/studyphoto.avif"
                    alt="React Course"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
            <SwiperSlide>
            <div className="h-full bg-gradient-to-r from-gray-100 to-orange-500">
              <div className="w-10/12 mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                  <h1 className="text-5xl lg:text-7xl font-bold">
                    React Course complete
                  </h1>

                  <p className="text-2xl lg:text-4xl font-semibold mt-4">
                    Be a Certified Devloper 
                  </p>

                  <p className="mt-4 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam, corrupti incidunt, inventore illum id ex harum
                    tempora ad nihil tempore sequi? A deserunt itaque pariatur
                    aspernatur, dignissimos eius totam alias.
                  </p>

                  <div className="flex gap-5 mt-6">
                    <button className="bg-rose-700 text-white font-medium px-8 py-3 rounded-lg hover:scale-105 active:scale-95 transition shadow-lg">
                      Watch Video
                    </button>

                    <button className="bg-violet-600 text-white font-medium px-8 py-3 rounded-lg hover:scale-105 active:scale-95 transition shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img
                    src="/studyphoto.avif"
                    alt="Learning"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
            <SwiperSlide>
            <div className="h-full bg-gradient-to-r from-gray-100 to-blue-500">
              <div className="w-10/12 mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                  <h1 className="text-5xl lg:text-7xl font-bold">
                    Make your career in React
                  </h1>

                  <p className="text-2xl lg:text-4xl font-semibold mt-4">
                    Get Job Ready
                  </p>

                  <p className="mt-4 text-gray-700">
                    Learn React, React Router, API integration, state
                    management, authentication, and deployment through
                    real-world projects.
                  </p>

                  <div className="flex gap-5 mt-6">
                    <button className="bg-rose-700 text-white font-medium px-8 py-3 rounded-lg hover:scale-105 active:scale-95 transition shadow-lg">
                      Watch Video
                    </button>

                    <button className="bg-violet-600 text-white font-medium px-8 py-3 rounded-lg hover:scale-105 active:scale-95 transition shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img
                    src="/studyphoto.avif"
                    alt="React Course"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='px-24 py-16 bg-gray-100'>
        <div className='text-center w-10/12 mx-auto'>
          <h1 className='text-5xl font-bold'>New courses</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ratione odio cumque molestias quo cupiditate suscipit totam ut, obcaecati eligendi esse id quas dolore non adipisci, nisi fuga cum quod!</p>
        </div>
        <div className='grid grid-cols-4 gap-10 mt-12'>
          {
          courses.map((item,index)=>(
            <div key={index}className='bg-white  rounded-lg shadow-lg'>
              <img src={item.image} className='w-full h-[180px] object-cover rounded-t-lg'  />
              <div className='px-6 py-3'>
                <h1 className='text-lg font-medium'>{item.name}</h1>
                <p className='text-black/80'> ₹ {item.price.toLocaleString()}</p>
                <button className='bg-pink-600 text-white w-full py-2.5 rounded font-medium hover:scale-110 duration-300 transition '>Enroll Now</button>
              </div>
            </div>

          ))

          }
           </div>
      </div>

      <div className='px-24 py-20 bg-white'>
        <div className='text-center w-10/12 mx-auto'>
          <h1 className='text-5xl font-bold'>FAQ</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ratione odio cumque molestias quo cupiditate suscipit totam ut, obcaecati eligendi esse id quas dolore non adipisci, nisi fuga cum quod!</p>
        </div>
        <div className='w-10/12 mt-16 mx-auto space-y-8'>
          {
          faq.map((item,index)=>(
              <div key={index} className='bg-white border-gray-300 rounded-lg flex flex-col shadow-lg'>
            <button onClick={()=>setActiveIndex(activeIndex === index ? null : index)} className=' rounded-t-lg bg-gradient-to-t from-sky-500 to-indigo-500 text-left p-5 font-medium text-white text-lg'>{item.title}</button>
            <div className='p-5 text-gray-600  rounded-b-lg' style={{
              height:activeIndex === index ? 'auto': 0,
              padding: activeIndex === index ? 20 :0,
              overflow:'hidden',
              transition:'300ms'
            }}>
              <p>{item.description}</p>
            </div>
          </div>
            ))
          }
        </div>
      </div>
       <div className='px-24 py-16 bg-gray-100'>
        <div className='text-center w-10/12 mx-auto'>
          <h1 className='text-5xl font-bold'>Featured Section</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ratione odio cumque molestias quo cupiditate suscipit totam ut, obcaecati eligendi esse id quas dolore non adipisci, nisi fuga cum quod!</p>
        </div>
        <div className='grid grid-cols-3 gap-10 mt-12'>
          {
          featured.map((item,index)=>(
            <div key={index}  style={{backgroundColor:item.bgColor}} className='  rounded-lg shadow-lg hover:scale-110 transition duration-300}'>
        
              <div className='px-6 py-8 flex flex-col items-center'>
                <div className='w-16 h-16 rounded-full flex items-center justify-center bg-white'>
                {item.icon}
                </div>
                <h1 className='text-xl font-semibold mt-3 mb-2 text-black'>{item.title}</h1>
                <p className='text-black/80 text-center '>  {item.description.slice(0,80)}</p>
              
              </div>
            </div>

          ))

          }
           </div>
      </div>

    </div>
  )
}

export default Homepage