const cart = [];

const HandleCart = (state = cart, action) => {
    const product = action.payload;

    switch (action.type) {
        case "ADDITEM":
            //Ver si Existe Nuestro Producto
            const exist = state.find((x) => x.id === product.id);
            //Incrementando la Cantidad
            if (exist) {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    },
                ];
            }

        case "REMITEM":
            //buscando si existe actualmente
            const exist1 = state.find((x) => x.id === product.id);
            //si existe solo uno lo eliminamos
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1);
                //si existen mas entonces reducimos a 1 la cantidad
            } else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }

        default:
            return state;
    }
};

export default HandleCart;
