import React from "react";
import { Products } from "./Products";     


export const Home = () => {
    return (
        <div className="container-fluid">
            <div className="card text-bg-dark border-0 w-100">
                <img
                    src={require("../assets/banner.jpg")}
                    className="card-image"
                    alt="..."
                    height="550px"
                />
                <div className="card-img-overlay">
                    <div className="container"></div>
                </div>
            </div>
            <Products />
        </div>
    );
};
