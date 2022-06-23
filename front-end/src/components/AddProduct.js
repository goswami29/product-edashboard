import React from 'react'
import {useNavigate} from 'react-router-dom';

const AddProduct = () => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState(false);
  const navigation = useNavigate();

  const addProduct = async () => {
    //console.log(!name);
    if(!name || !price || !category || !company)
    {
      setErrorMsg(true);
      return false;
    }

    const userId = JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        'Content-Type': "Application/json"
      }
    });

    result = await result.json();
    navigation("/");
  };

  return (
    <div className='product'>
      <h1>Add New Product</h1>
      <input type="text" className="inputBox" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" />
      { errorMsg && !name ? <span className="invalid-input">Enter valid name </span> : ''}
      
      <input type="text" className="inputBox" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" />
      { errorMsg && !price ? <span className='invalid-input'> Enter valid price</span> : ''}
      
      <input type="text" className="inputBox" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Product Category" />
      {errorMsg && !category ? <span className='invalid-input'>Enter valid category name</span> : ''}
      
      <input type="text" className="inputBox" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Company Name" />
      {errorMsg && !company ? <span className='invalid-input'>Enter valid company name</span> : ''}
      <button className="appButton" onClick={addProduct} type="button">Add Product</button>
    </div>
  )
}

export default AddProduct