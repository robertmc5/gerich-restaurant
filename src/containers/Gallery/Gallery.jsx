import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';
import { SubHeading } from '../../components';
import { images } from  '../../constants';

const Gallery = () => {

  const scrollRef = React.useRef(null);

  const scroll = direction => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 333;
    } else {
      current.scrollLeft += 333;
    }
  }

  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
        <h2 className='headtext__cormorant'>Photo Gallery</h2>
        <p className='p__opensans' style={{color: '#AAAAAA', marginBlock: '2rem 1.5rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((galImage, i) => (
            <div className='app__gallery-images_card flex__center' key={'galImg' + i}>
              <img src={galImage} alt="Meal Option"/>
              <BsInstagram className='gallery__image-icon' />
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default Gallery;
