import React from 'react';

import { useScrollToTop } from "hooks/scroll";
import ProductDetailPage from "simulador/components/pages/ProductDetail";

const ProductDetail = () => {
  useScrollToTop();

  return (
    <ProductDetailPage></ProductDetailPage>
  )
}

export default ProductDetail;