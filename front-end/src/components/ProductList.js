import React, { useEffect } from "react";
import {Link} from "react-router-dom";

const ProductList = () => {
    const [productList, setProductList] = React.useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/products");
        result = await result.json();
        setProductList(result);
    }

    const deleteProduct = async (id) =>{
        //console.log('Delete Product', id);
        let result = await fetch(`http://localhost:5000/product/${id}`, {
                method:"Delete"
        });
        result = await result.json();
        if(result) {
            alert("Record is deleted");
            getProducts();
        }
    }

    const searchHandle = async (event) => {
        let key = event.target.value;
        if(key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            setProductList(result);
        } else {
            getProducts();
        }
    }

    return (
        <div className="product-list">
            <h3>Product List</h3>
            <input type="text" className="search-product-box" onChange={searchHandle} placeholder="Search Product" />
            <ul>
                <li>Sr.No</li>
                <li>Product Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Action</li>
            </ul>
            {
                productList.length > 0 ? productList.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li>
                            <Link to={`update/${item._id}`}>Update</Link> &nbsp;
                            <button onClick={() => deleteProduct(item._id)}> Delete </button>
                        </li>
                    </ul>
                )
                : <h2>No Result Found</h2>
            }
        </div>
    )
}
export default ProductList;