import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.scss"
const home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
<Navbar/>
      </div>
    </div>
  )
}

export default home