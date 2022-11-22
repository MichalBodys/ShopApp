import styles from './ProductForm.module.scss'
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColors from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = ({handleSubmit, sizes, setCurrentSize, currentSize, colors, setCurrentColor, prepareColorClassName,currentColor}) => {
    return(
       <form onSubmit={handleSubmit}>
        <OptionSize sizes={sizes} setCurrentSize={setCurrentSize} currentSize={currentSize}/>
        <OptionColors colors={colors} setCurrentColor={setCurrentColor} prepareColorClassName={prepareColorClassName} currentColor={currentColor}/>
          <Button  className={styles.button}>
            <span className="fa fa-shopping-cart"  />
          </Button>
        </form>
    )
}
ProductForm.propTypes = {
    colors: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }


export default ProductForm