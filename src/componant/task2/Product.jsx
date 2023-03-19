import { Link } from "react-router-dom";
import "./js/js";
function Product(props) {
  const { product, showBotton } = props;
  return (
    <>
      <div className="product-imge ">
        <img src={product.image} alt="" />
        <h5>{product.title}</h5>
        <div className="description">
          <p>{product.description}</p>
        </div>
        <div className="product_price">
          <h3 className="del_price">Price :{product.price + 10.1} $</h3>
          <h3>Offer:{product.price} $ </h3>
        </div>
        {showBotton && (
          <div className="showBotton">
            <div className="count_btn">
              <Link className="More_details" to={`/product/${product.id}`}>
                More details
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Product;
