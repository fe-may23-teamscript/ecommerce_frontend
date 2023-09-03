import React, { useState } from 'react';
import classNames from 'classnames';
import './PhoneImageSlider.scss';
import img1 from 'assets/images/phones-info/apple-iphone-11-progold00.jpg.png';
import img2 from 'assets/images/phones-info/apple-iphone-11-progold01.jpg.png';
import img3 from 'assets/images/phones-info/apple-iphone-11-progold02.jpg.png';

const images = [img1, img2, img3];

export const PhoneImageSlider: React.FC = () => {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="phone-slider">
      <div className="phone-slider__col">
        {images.map((image) => (
          <button
            key={image}
            aria-label="image"
            type="button"
            className={classNames('phone-slider__button', {
              'phone-slider__button--active': selected === image,
            })}
            onClick={() => setSelected(image)}
          >
            <img src={image} alt={image} className="phone-slider__image" />
          </button>
        ))}
      </div>
      <div className="phone-slider__wrapper">
        <img
          src={selected}
          alt={selected}
          className="phone-slider__image--main"
        />
      </div>
    </div>
  );
};
