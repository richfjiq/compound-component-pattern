import ProductCard from '../components/ProductCard';

const ShoppingPage = () => {
  const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png',
  };

  return (
    <div>
      <h1>Shopping Store</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <ProductCard product={product} />
      </div>
    </div>
  );
};

export default ShoppingPage;
