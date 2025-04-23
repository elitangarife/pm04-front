import React from "react";

import { fetchProductDetail } from "@/utils/products.helper";
import ProductDetail from "@/components/UI/ProductDetail";


const ProductPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

    const  product = await fetchProductDetail(slug);
  
  return (
    <>
      <ProductDetail {...product}/>
    </>
  );
};

export default ProductPage