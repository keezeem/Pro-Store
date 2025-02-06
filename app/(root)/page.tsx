import ProductList from '@/components/shared/product/product-list';
import sampleData from '@/db/sample-data';

const Homepage = () => {
  if (!sampleData || !sampleData.products) {
    return <p className="text-red-500">Error: Product data not found.</p>;
  }

  return (
    <div className="space-y-8">
      <h2 className="h2-bold">Latest Products</h2>
      <ProductList title="Newest Arrivals" data={sampleData.products} limi={4} />
    </div>
  );
};

export default Homepage;
