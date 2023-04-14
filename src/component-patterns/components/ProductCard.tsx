import { ReactElement, createContext } from 'react';

import styles from '../styles/styles.module.css';
import { useProducts } from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces/interfaces';

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className }: Props) => {
  const { counter, increaseBy } = useProducts();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
};
