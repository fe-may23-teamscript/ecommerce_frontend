import React from 'react';
import './About.scss';
import { Description } from 'models/IProductModel';
import { useTranslation } from 'react-i18next';

type Prop = {
  productDescription: Description[];
};

export const About: React.FC<Prop> = ({ productDescription }) => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <h3 className="about__title">{t('about')}</h3>
      {productDescription.map((article) => {
        return (
          <div className="about__description" key={article.title}>
            <h4 className="about__subtitle">{article.title}</h4>

            <p className="about__text">{article.text}</p>
          </div>
        );
      })}
    </div>
  );
};
