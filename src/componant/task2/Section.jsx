import "./style/section_style.css";
import "./js/js";
import Product from "./Product";
import { useEffect, useState } from "react";
/************************************************** */
function Section() {
  const Api_url = "https://fakestoreapi.com/products";
  const [products, setproducts] = useState([]);
  const [categories, setcategories] = useState([]);

  const get_product = () => {
    fetch(Api_url)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  };
  const get_categories = () => {
    fetch(`${Api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setcategories(data));
  };

  const categoriesing = (catName) => {
    fetch(`${Api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  };

  useEffect(() => {
    get_product();
    get_categories();
  }, []);

  return (
    <section className="window-tow">
      <div className="header">
        <h1> Our Product </h1>
      </div>
      <div className="container">
        <div className="filter">
          <button
            className="categor_btn"
            onClick={() => {
              get_product();
            }}
          >
            All Product
          </button>
          {categories.map((cat) => {
            return (
              <>
                <button
                  key={cat}
                  className="categor_btn"
                  onClick={() => {
                    categoriesing(cat);
                  }}
                >
                  {cat}
                </button>
                ;
              </>
            );
          })}
        </div>
        <div className="row gx-3 gy-5">
          {products.map((product) => {
            return (
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-4"
                key={product.id}
              >
                <Product product={product} showBotton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Section;
