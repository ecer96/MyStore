import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start bg-white text-muted">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span className="fw-bold">Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a
                            href="https://www.facebook.com/ecer96/"
                            className="me-4 link-secondary"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a
                            href="https://twitter.com/Ecer96"
                            className="me-4 link-secondary"
                        >
                           <i className="fa-brands fa-twitter"></i>
                        </a>

                        <a
                            href="https://www.instagram.com/ecer7/"
                            className="me-4 link-secondary"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/edwin--cervantes/"
                            className="me-4 link-secondary"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/ecer96"
                            className="me-4 link-secondary"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3 text-secondary"></i>
                                    MyStore
                                </h6>
                                <p>
                                    the best products, at the best market
                                    prices, direct to the door of your house,
                                    for any clarification please visit the
                                    contact section
                                </p>
                            </div>

                        

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <NavLink to="/contact" className="text-reset">
                                        Contact
                                    </NavLink>
                                </p>
                                <p>
                                    <NavLink to="/register" className="text-reset">
                                        Register
                                    </NavLink>
                                </p>
                                <p>
                                    <NavLink to="/products" className="text-reset">
                                        Products
                                    </NavLink>
                                </p>
                                
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p>
                                    <i className="fas fa-home me-3 text-secondary"></i>{" "}
                                 Hermosillo,Sonora MX
                                </p>
                                <p>
                                    <i className="fas fa-envelope me-3 text-secondary"></i>
                                    ecer1996@gmail.com
                                </p>
                                <p>
                                    <i className="fas fa-phone me-3 text-secondary"></i>{" "}
                                    +52 622 115 40 33
                                </p>
                               
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4">
                    © 2021 Copyright:
                    <a
                        className="text-reset fw-bold"
                        href="https://mdbootstrap.com/"
                    >
                      Edwin Cervantes
                    </a>
                </div>
            </footer>
        </div>
    );
};
