import React from 'react';

import './SpecialMenu.css';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

const SpecialMenu = () => {
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className='app__specialMenu-title'>
        <SubHeading title="Menu That Fits Your Palate" />
        <h2 className='headtext__cormorant'>Today's Special</h2>
      </div>

      <div className='app__specialMenu-menu'>

        <div className='app__specialMenu-menu_wine flex__center'>
          <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
          <div className='app__specialMenu-menu_items'>
            {data.wines.map((wine, i) => (
              <MenuItem key={wine.title + i} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt="Cocktail Accessories" />
        </div>

        <div className='app__specialMenu-menu_cocktails flex__center'>
          <p className='app__specialMenu-menu_heading'>Cocktails</p>
          <div className='app__specialMenu-menu_items'>
            {data.cocktails.map((cocktail, i) => (
              <MenuItem key={cocktail.title + i} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>

      </div>

      <div style={{marginTop: '15px'}}>
        <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
  )
}

export default SpecialMenu;
