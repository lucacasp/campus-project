import React from 'react';
import gallery_1 from '../../Assets/gallery-1.png';
import gallery_2 from '../../Assets/gallery-2.png';
import gallery_3 from '../../Assets/gallery-3.png';
import gallery_4 from '../../Assets/gallery-4.png';
import './Gallery.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Gallery = () => {

  const navigate = () => useNavigate();

  const handleImageClick = (id) => {
    navigate
  }
  return (
    <div className="gallery-page">
      <h1>Our Campus Gallery</h1>
      <div className="gallery">
        <img src={gallery_1} alt="Gallery 1" />
        <img src={gallery_2} alt="Gallery 2" />
        <img src={gallery_3} alt="Gallery 3" />
        <img src={gallery_4} alt="Gallery 4" />
      </div>
      <div className="gallery">
        <img src={gallery_1} alt="Gallery 1" />
        <img src={gallery_2} alt="Gallery 2" />
        <img src={gallery_3} alt="Gallery 3" />
        <img src={gallery_4} alt="Gallery 4" />
      </div>
      <div className="gallery">
        <img src={gallery_1} alt="Gallery 1" />
        <img src={gallery_2} alt="Gallery 2" />
        <img src={gallery_3} alt="Gallery 3" />
        <img src={gallery_4} alt="Gallery 4" />
      </div>
      <Link to='/' className='btn dark-btn'>Home</Link>
    </div>
  );
}

export default Gallery;
