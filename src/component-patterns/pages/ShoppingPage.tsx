import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';

const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.values(shoppingCart).map((item) => {
          return (
            <ProductCard
              key={item.id}
              product={item}
              className="bg-dark"
              style={{ width: '100px' }}
              value={item.count}
              onChange={onProductCountChange}
            >
              <ProductImage className="custom-image" />

              <ProductButtons
                className="custom-buttons"
                style={{ display: 'flex', justifyContent: 'center' }}
              />
            </ProductCard>
          );
        })}
      </div>
    </div>
  );
};

export default ShoppingPage;
