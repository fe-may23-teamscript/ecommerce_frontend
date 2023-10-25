import { IProductModel } from 'models/IProductModel';
import './Catalog.scss';
import { ProductCard } from 'components/ProductCard';

interface Props {
  visibleData: IProductModel[];
}

export const Catalog: React.FC<Props> = ({ visibleData }: Props) => {
  if (visibleData.length === 0) {
    return <p>No items found</p>;
  }

  return (
    <section className="catalog-container">
      {visibleData.map((item) => (
        <ProductCard key={item.id} productCard={item} />
      ))}
    </section>
  );
};
