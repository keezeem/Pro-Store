import ProductList from '@/components/shared/product/product-list';
import sampleData from '@/db/sample-data';

const Homepage = () => {
  if (!sampleData || !sampleData.products) {
    return <p className="text-red-500">Error: Product data not found.</p>;
  }

  return (
    <>
      <ProductList
        data={sampleData.products}
        title='Newest Arrivals'
        limit={4}
      />
    </>
  );
};

export default Homepage;
