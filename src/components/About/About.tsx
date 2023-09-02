import React from 'react';
import './About.scss';

interface Article {
  title: string;
  text: string[];
}

type Prop = {
  productDescription: Article[];
};

export const About: React.FC<Prop> = ({ productDescription }) => {
  return (
    <div className="about">
      <h3 className="about__title">About</h3>
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
