import './Catalog.scss';
import { IPhone } from 'models/IPhone';
import { ProductCard } from 'components/ProductCard';

interface Props {
  visibleData: IPhone[]; // maybe later add another interfaces for tablets and accessories
}

export const Catalog: React.FC<Props> = ({ visibleData }: Props) => {
  return (
    <section className="catalog-container">
      {visibleData.map((item) => (
        <ProductCard key={item.id} phoneCard={item} />
      ))}
    </section>
  );
};
