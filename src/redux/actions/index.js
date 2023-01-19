//add item to cart
export const addCart = (product)=>{
    return{
        type: "ADDITEM",
        payload:product
    }
}

//removing item from Cart
export const remCart = (product)=>{
    return{
        type: "REMITEM",
        payload:product
    }
}