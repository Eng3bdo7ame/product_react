import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style/details_style.css";
import Product from "./Product";
function Product_details() {
  const Api_url = "https://fakestoreapi.com/products";
  const params = useParams();
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch(`${Api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setproduct(product));
  }, [params.productId]);
  return (
    <>
      <div className="Product_details">
        <Product product={product} showBotton={false} />
      </div>
    </>
  );
}

export default Product_details;
