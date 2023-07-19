import React, { useState, useEffect } from "react";
import { add } from "../Store/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Store/productSlice";
import { STATUSES } from "../Store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   const json = await response.json();
    //   console.log(json);
    //   setProducts(json);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something Went Wrong...</h2>;
  }

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
          {products.map((product) => {
            return (
              <div className="col" key={product.id}>
                <div className="card h-100">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt="..."
                    style={{ width: "200px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price}</p>
                  </div>
                  <button
                    onClick={() => handleAdd(product)}
                    className="btn btn-sm btn-primary"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
