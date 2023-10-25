import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import './ModelImages.scss';
import { BASE_URL } from 'shared/utils/constants';

type Props = {
  images: string[];
  alt: string;
};

export const ModelImages: React.FC<Props> = ({ images, alt }) => {
  const [selected, setSelected] = useState(images[0]);

  useEffect(() => {
    setSelected(images[0]);
  }, [images]);

  return (
    <div className="model-images">
      <div className="model-images__col">
        {images.map((image) => (
          <button
            key={image}
            aria-label="image"
            type="button"
            className={cn('model-images__button', {
              'model-images__button--active': selected === image,
            })}
            onClick={() => setSelected(image)}
          >
            <img
              src={`${BASE_URL}${image}`}
              alt={alt}
              className="model-images__image"
            />
          </button>
        ))}
      </div>
      <div className="model-images__wrapper">
        <img
          src={`${BASE_URL}${selected}`}
          alt={alt}
          className="model-images__image--main"
        />
      </div>
    </div>
  );
};
