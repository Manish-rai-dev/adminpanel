import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.scss"
import Widget from "../../components/widget/Widget";
const home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
<Navbar/>
<div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
      </div>
    </div>
  )
}

export default home