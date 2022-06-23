import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [company, setCompany] = React.useState('');
  const params = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, [])

  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  }

  const updateProduct = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    result = await result.json();
    navigation("/");
  };

  return (
    <div className='product'>
      <h1>Update Product</h1>
      <input type="text" className="inputBox" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" />
      <input type="text" className="inputBox" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" />
      <input type="text" className="inputBox" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Product Category" />
      <input type="text" className="inputBox" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Company Name" />
      <button className="appButton" onClick={updateProduct} type="button">Update Product</button>
    </div>
  )
}
export default UpdateProduct;
