import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
 
    let componetMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componetMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
                componetMounted = false;
            }
            
            return () => {
            };
        };
        getProducts();
    }, []);

    const Loading=()=>{
        <h1>Loading ...</h1>
    }
       

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-block text-center mb-1 pb-5">
                    <button
                        className="btn btn-secondary text-secondary btn-light py-2"
                        onClick={() => {
                            setFilter(data);
                        }}
                    >
                        All
                    </button>
                    <button
                        className="btn btn-secondary text-secondary btn-light py-2 fs-5"
                        onClick={() => {
                            filterProduct("men's clothing");
                        }}
                    >
                        Men's Clothing
                    </button>
                    <button
                        className="btn btn-secondary text-secondary btn-light py-2 fs-5"
                        onClick={() => {
                            filterProduct("women's clothing");
                        }}
                    >
                        Women's Clothing
                    </button>
                    <button
                        className="btn btn-secondary text-secondary btn-light py-2 fs-5"
                        onClick={() => {
                            filterProduct("jewelery");
                        }}
                    >
                        Jewelry
                    </button>
                    <button
                        className="btn btn-secondary text-secondary btn-light py-2 fs-5"
                        onClick={() => {
                            filterProduct("electronics");
                        }}
                    >
                        Electronic
                    </button>
                </div>

                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div
                                    className="card h-100 text-center shadow-lg  rounded-md ml-10 mt-4"
                                    key={product.id}
                                >
                                <div className="border  border-slate-500">

                                    <img
                                        src={product.image}
                                        class="card-img-top h-10 object-contain "
                                        alt={product.id +"img"}
                                        style={{height:'200px',
                                          'object-fit':'contain',
                                          'max-height':'400px'}}
                                    />
                                </div>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0 text-md fw-bold capitalize text-slate-400 fs-4 " 
                                    >
                                            {product.title.substring(0, 12)}
                                        </h5>
                                        <p className="card-text lead text-sm  mt-2 text-lime-400" style={{fontFamily:"fantasy"}}>
                                        ${product.price}
                                        </p>
                                        <NavLink
                                            to={`/products/${product.id}`}
                                            className="btn btn-outline-dark px-4 py-2"
                                        >
                                            Buy Now
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </>
        );
    };

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-semibold text-gray-600 text-center mb-4">
                            Latest Products
                        </h1>
                        <div className="row justify-content-center">
                            {loading ? <Loading /> : <ShowProducts />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
