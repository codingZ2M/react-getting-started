import React from 'react'
import HeroBanner from '../components/HeroBanner'
import Showcase from '../components/Showcase'

import bikes from '../bikes'

const Home = () => {
  return (
    <div>
        <HeroBanner/>
        <Showcase bikes={bikes}/>
    </div>
  )
}

export default Home