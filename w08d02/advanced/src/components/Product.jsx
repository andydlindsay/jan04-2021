import {useParams} from 'react-router-dom';

const Product = () => {
  const {product_id} = useParams();
  

  return (
    <div>
      <h2>This is the product page for #{product_id}</h2>
    </div>
  );
};

export default Product;
