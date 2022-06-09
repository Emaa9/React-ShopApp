import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { selectedProduct } from "../../redux/actions/productActions";
import {useSelector} from "react-redux";
import "./ProductDetails.css";

const ProductDetails = () =>{
    const product = useSelector((state) => state.product);
    const {image, title, price, category, description}= product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product);

    useEffect(()=>{
        const fetchProductDetail= async() =>{
            const response= await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err)=>{
                console.log("Err", err);
            });
            dispatch(selectedProduct(response.data));
        };
        if(productId && productId !== "") fetchProductDetail();
    },[productId]);

    return(
    <div className="all2">
        {Object.keys(product).length === 0 ? (
            <div>Loading...</div>
            ) : (
                <div className="segment">
                    <img className="img2" src={image}/>
                   
                    <div className="column">
                        <h1 className="title2">{title}</h1>
                            <a className="price2">${price}</a>
                        <h3 className="category2">{category}</h3>
                        <p className="description">{description}</p>
                        
                    </div>
                 </div>
            )}
                 </div>
)};
export default ProductDetails;