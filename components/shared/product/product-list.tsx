const ProductList = ({ data, title, limit }: { data: { id: string | number; name: string; limit?:number }[]; title?: string }) => {
const limitedData = limit ? data.slice(0, limit) : data;

    return (
      <div className="my-10">
        {title && <h2 className="h2-bold mb-4">{title}</h2>}
        {data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {limitedData.map((product) => (
              <div>{product.name}</div>
            ))}
          </div>
        ) : (
          <div>
            <p>No products found</p>
          </div>
        )}
      </div>
    );
  };
  
  export default ProductList;
  