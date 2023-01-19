import React from "react";

export const Contact = () => {
    return (
        <div className="container d-flex justify-content-center mt-5">
            <form className="d-grid border border-secondary p-5 rounded">
                <div class="form-group mt-5">
                    <label for="exampleFormControlInput1">Write youre Email address</label>
                    <input
                        type="email"
                        class="form-control mt-2"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                    />
                </div>
            
                <div class="form-group mt-5">
                    <label for="exampleFormControlTextarea1">
                        Write youre Message For Us Here:
                    </label>
                    <textarea
                        class="form-control mt-2"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>

                <button className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
};
