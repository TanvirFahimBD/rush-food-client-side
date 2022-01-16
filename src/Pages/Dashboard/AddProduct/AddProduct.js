import React, { useRef } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const nameRef = useRef();
  const priceRef = useRef();
  const imgRef = useRef();
  const infoRef = useRef();
  const descRef = useRef();

  const handleAddProduct = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const img = imgRef.current.value;
    const price = priceRef.current.value;
    const info = infoRef.current.value;
    const description = descRef.current.value;

    const newProduct = { name, img, price, info, description };
    fetch("https://lit-inlet-63211.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Product added Successfully");
          e.target.reset();
        }
      });
  };
  return (
    <div className="text-center mt-5">
      <h1>Add a Product</h1>
      <form onSubmit={handleAddProduct}>
        <input
          className="input-field"
          type="text"
          placeholder=" Name"
          ref={nameRef}
        />
        <br />
        <input
          className="input-field"
          type="text"
          placeholder=" Image URL"
          ref={imgRef}
        />
        <br />
        <input
          className="input-field"
          type="text"
          placeholder=" Price"
          ref={priceRef}
        />
        <br />
        <input
          className="input-field"
          type="text"
          placeholder="Information"
          ref={infoRef}
        />
        <br />
        <input
          className="input-field"
          type="text"
          placeholder=" Description"
          ref={descRef}
        />
        <br />
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddProduct;
