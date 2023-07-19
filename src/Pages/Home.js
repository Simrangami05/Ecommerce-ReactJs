import React from "react";
import Products from "../Components/Products";

const Home = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Welcome to the online store</h2>

      <section>
        <h3 style={{ textAlign: "center" }}>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
