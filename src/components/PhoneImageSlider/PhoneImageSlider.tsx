import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './PhoneImageSlider.scss';
import { BASE_URL } from 'shared/utils/constants';

type Props = {
  images: string[];
  alt: string;
};

export const PhoneImageSlider: React.FC<Props> = ({ images, alt }) => {
  const [selected, setSelected] = useState(images[0]);

  useEffect(() => {
    setSelected(images[0]);
  }, [images]);

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
            <img
              src={`${BASE_URL}${image}`}
              alt={alt}
              className="phone-slider__image"
            />
          </button>
        ))}
      </div>
      <div className="phone-slider__wrapper">
        <img
          src={`${BASE_URL}${selected}`}
          alt={alt}
          className="phone-slider__image--main"
        />
      </div>
    </div>
  );
};
