import React from 'react';
import './TechSpecs.scss';
import { IProductModel } from 'models/IProductModel';
import { useTranslation } from 'react-i18next';

type Props = {
  productInfo: IProductModel;
};

export const TechSpecs: React.FC<Props> = ({ productInfo }) => {
  const { screen, resolution, processor, ram, capacity, camera, zoom, cell } =
    productInfo;
  const { t } = useTranslation();

  return (
    <div className="tech-specs">
      <h3 className="tech-specs__title">{t('techSpecs')}</h3>

      <div className="tech-specs__item">
        <p className="tech-specs__name">{t('screen')}</p>
        <p className="tech-specs__value">
          {/* eslint-disable */}
          {screen.split("'").join('” ')}
          {/* eslint-enable */}
        </p>
      </div>

      <div className="tech-specs__item">
        <p className="tech-specs__name">{t('resolution')}</p>
        <p className="tech-specs__value">{resolution}</p>
      </div>

      <div className="tech-specs__item">
        <p className="tech-specs__name">{t('processor')}</p>
        <p className="tech-specs__value">{processor}</p>
      </div>

      <div className="tech-specs__item">
        <p className="tech-specs__name">{t('ram')}</p>
        <p className="tech-specs__value">{`${parseInt(ram)} GB`}</p>
      </div>

      <div className="tech-specs__item">
        <p className="tech-specs__name">{t('capacity')}</p>
        <p className="tech-specs__value">{`${parseInt(capacity)} GB`}</p>
      </div>

      <div className="tech-specs__item">
        <p className="tech-specs__name">{t('camera')}</p>
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
