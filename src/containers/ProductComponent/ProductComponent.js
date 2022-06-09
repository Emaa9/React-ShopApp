import React from "react";
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import "./Product.css";


const ProductComponent = () =>{
    const products = useSelector((state)=> state.allProducts.products);
     const renderList = products.map((product)=>{
         const {id, title, image, price, category}= product;
         return (
            <div className="all" key={id}>
                <Link to={`/product/${id}`}>
                <div className="card">
                        <img className="img1" src= {image} alt={title}></img>
                     <div className="content">
                       <div className="title">{title}</div>
                       <div className="price">${price}</div>
                       <div className="meta">{category}</div>
                     </div>
            </div>
            </Link>
        </div>  
         );
     })
    return(
     <>{renderList}</>
    )  
};
export default ProductComponent;