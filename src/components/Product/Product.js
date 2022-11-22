import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = ({ title, basePrice, name, colors, sizes}) => {

  const [currentColor , setCurrentColor] = useState(colors[0])
  const [currentSize , setCurrentSize] = useState(sizes[0].name);

  const getPrice = () => {

   return(
    basePrice + sizes.find((size) => currentSize === size.name).additionalPrice);

  }
const handleSubmit = (e) => {

  e.preventDefault();

  console.log('summary');
  console.log('title', title);
  console.log('=======');
  console.log('name', name);
  console.log('size', currentSize);
  console.log('color', currentColor);
  console.log('price', getPrice());

}

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor= {currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm handleSubmit={handleSubmit} colors={colors} sizes={sizes} currentColor={currentColor} currentSize={currentSize} setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize} />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
}

export default Product;