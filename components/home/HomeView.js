import React from 'react'
import ring from '@/public/assets/ring.png'
import { homeData } from './homeData'
import HomeCard from './HomeCard'
import HomeHeader from './HomeHeader'




const HomeView = () => {
  return (
    <>
    <HomeHeader/>
    <div className='p-10 md:flex flex-wrap justify-center mt-32'>
      {homeData?.map((item)=>(
        <HomeCard
      heading={item.heading}
      subHeading={item.subHeading}
      description={item.description}
      img={item.img}
      lowerText={item.lowerText}
      lowerSubText={item.lowerSubText}
      color={item.color}
      bg={item.bg}
      />
      ))}
    </div>
    </>
  )
}

export default HomeView