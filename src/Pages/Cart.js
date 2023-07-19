import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/CartSlice";
// imoprt {useSelector}
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Cart</h3>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
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
                    <button
                      onClick={() => handleRemove(product.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Remove Item
                    </button>
                    {/* <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
