import React from "react";
import { useParams } from "react-router-dom";

const ProductDeatils = () => {
  const params = useParams();
  console.log(params.productId);

  return (
    <section>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDeatils;
