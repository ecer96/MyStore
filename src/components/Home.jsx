import React from "react";
import { Products } from "./Products";     


export const Home = () => {
    return (
        <div className="container-fluid">
            <div className="card text-bg-dark border-0 ">
                <img
                    src={require("../assets/banner.jpg")}
                    className="card-image object-cover "
                    alt="..."

                />
                <div className="card-img-overlay">
                    <div className="container"></div>
                </div>
            </div>
            <Products />
        </div>
    );
};
