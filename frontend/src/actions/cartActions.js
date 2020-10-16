import Axios from "axios"
import cookie from "js-cookie";
import { CART_ADD_ITEM } from "../constants/cartConstants";

const addToCart = (productId, qty) => async (dispatch, getState) => {

    try {
        const { data } = await Axios.get("/api/products/" + productId);
        dispatch({
          type: CART_ADD_ITEM, payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            countInStock: data.countInStock,
            qty
        }
    });
    const { cart: { cartItems } } = getState();
    cookie.set("cartItems", JSOn.stringfy(cartItems));

    } catch (error) {

    }
}
export { addToCart }