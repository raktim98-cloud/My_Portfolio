import React from 'react'
import Banner from '../components/Banner'
import Name from '../components/Name'
import Image_Banner from '../components/Image_Banner'
import SocialContact from '../components/SocialContact'
import CoppyRight from '../components/CoppyRight'


function Home() {
  return (
    <>
    <Banner/>
    {/* <Name/> */}
    <SocialContact/>
    <Image_Banner/>
    <CoppyRight/>
    </>
  )
}

export default Home