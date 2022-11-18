import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {products.map(products => <Product {...products[0]} key={products.id}/>)}
    </section>
  );
};

export default Products;