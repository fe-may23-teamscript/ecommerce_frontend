import './ProductCard.scss';
import imgSrc from '../../assets/images/product-card/product-1.png';

export const ProductCard = () => {
  return (
    <div className="card">
      <div className="card__img-container">
        <img
          className="card__img"
          src={imgSrc}
          alt="iPhone"
          width="208px"
          height="196px"
        />
      </div>

      <h2 className="card__title">Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</h2>

      <p className="card__price">
        <span className="card__price-current">$799</span>

        <span className="card__price-full">$899</span>
      </p>

      <div className="card__features">
        <p className="card__feature">
          <span className="card__feature-name">Screen</span>

          <span className="card__feature-value">5.8” OLED</span>
        </p>

        <p className="card__feature">
          <span className="card__feature-name">Capacity</span>

          <span className="card__feature-value">64 GB</span>
        </p>

        <p className="card__feature">
          <span className="card__feature-name">RAM</span>

          <span className="card__feature-value">4 GB</span>
        </p>
      </div>

      <div className="card__buy">
        <button className="card__add-to-cart">Add to cart</button>

        <button className="card__favorites-icon"></button>
      </div>
    </div>
  );
};
