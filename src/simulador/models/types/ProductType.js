import PropTypes from "prop-types";

const ProductType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  slang: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string
})

export default ProductType;