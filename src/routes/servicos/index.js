import React from 'react';
import { useParams } from "react-router-dom";

import { useScrollToTop } from "hooks/scroll";
import { useProduct } from "hooks/products";

import ProductDetailPage from "simulador/components/pages/ProductDetail";
import Error from "simulador/components/pages/Error";
import ImageTaken from "draws/Taken";

const ProductDetail = () => {
  useScrollToTop();

  const { slang } = useParams();

  const product = useProduct({ slang })

  if (!product) {
    return (<Error image={<ImageTaken />} titulo={"Serviço não encontrada"} description={"Ops! Serviço não encontrado ou indisponível"}></Error>)
  }

  return (
    <ProductDetailPage product={product} ></ProductDetailPage>
  )
}

export default ProductDetail;