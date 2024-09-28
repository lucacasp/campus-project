import React from 'react'
import './Campus.css'
import gallery_1 from '../../Assets/gallery-1.png'
import gallery_2 from '../../Assets/gallery-2.png'
import gallery_3 from '../../Assets/gallery-3.png'
import gallery_4 from '../../Assets/gallery-4.png'
import white_arrow from '../../Assets/white-arrow.png'
import { Link } from 'react-router-dom'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <Link to='/gallery' className='btn dark-btn'>View More <img src={white_arrow} alt='icon' /> </Link>
    </div>
  )
}

export default Campus
