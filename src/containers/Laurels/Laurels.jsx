import React from 'react';

import './Laurels.css';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';

const Laurels = () => {

  const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
    <div className='app__laurels_awards-card'>
      <img src={imgUrl} alt="Laurel" />
      <div className='app__laurels_awards-card_content'>
        <p className='p__cormorant' style={{color: '#DCCA87', marginBottom: '0.25rem'}}>{title}</p>
        <p className='p__opensans' style={{color: '#AAAAAA'}}>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div id='awards_wrap'>
      <img src={images.logo} alt="Delight in every Bite" id='circleLogo'/>
      <div className='app__bg app__wrapper section__padding' id='awards'>
        <div className='app__wrapper_info'>
          <SubHeading title="Awards & Recognition" />
          <h2 className='headtext__cormorant'>Our Laurels</h2>
          <div className='app__laurels_awards'>
            {data.awards.map((award, i) => <AwardCard award={award} key={award.title + i} /> )}
          </div>
        </div>
        <div className='app__wrapper_img'>
          <img src={images.laurels} alt="Gourmet chicken entree" />
        </div>
      </div>
    </div>
  )
}

export default Laurels;
