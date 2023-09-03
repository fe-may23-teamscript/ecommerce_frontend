import React from 'react';
import './TechSpecs.scss';
import { IProductModel } from 'models/IPhoneModel';

type Props = {
  productInfo: IProductModel;
};

export const TechSpecs: React.FC<Props> = ({ productInfo }) => {
  const { screen, resolution, processor, ram, capacity, camera, zoom, cell } =
    productInfo;

  return (
    <div className="tech-specs">
      <h3 className="tech-specs__title">Tech specs</h3>

      <div className="tech-specs__item">
        <p className="tech-specs__name">Screen</p>
        <p className="tech-specs__value">
          {/* eslint-disable */}
          {screen.split("'").join('” ')}
          {/* eslint-enable */}
        </p>
      </div>

      <div className="tech-specs__item">
        <p className="tech-specs__name">Resolution</p>
        <p className="tech-specs__value">{resolution}</p>
      </div>

      <div className="tech-specs__item">
        <p className="tech-specs__name">Processor</p>
        <p className="tech-specs__value">{processor}</p>
      </div>

      <div className="tech-specs__item">
        <p className="tech-specs__name">RAM</p>
        <p className="tech-specs__value">{`${parseInt(ram)} GB`}</p>
      </div>

      <div className="tech-specs__item">
        <p className="tech-specs__name">Built in memory</p>
        <p className="tech-specs__value">{`${parseInt(capacity)} GB`}</p>
      </div>

      <div className="tech-specs__item">
        <p className="tech-specs__name">Camera</p>
        <p className="tech-specs__value">{camera}</p>
      </div>

      <div className="tech-specs__item">
        <p className="tech-specs__name">Zoom</p>
        <p className="tech-specs__value">{zoom}</p>
      </div>

      <div className="tech-specs__item">
        <p className="tech-specs__name">Cell</p>
        <p className="tech-specs__value">{cell.join(', ')}</p>
      </div>
    </div>
  );
};
