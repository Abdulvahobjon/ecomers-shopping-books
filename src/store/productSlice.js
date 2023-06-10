import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";
import Data from "../utils/data"
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.jpg";
import img8 from "../assets/images/32.jpg";
import img9 from "../assets/images/9.jpg";
import img10 from "../assets/images/10.jpg";
import img11 from "../assets/images/11.jpg";
import img12 from "../assets/images/12.jpg";
import img13 from "../assets/images/13.jpg";
import img14 from "../assets/images/14.jpg";
import img15 from "../assets/images/15.jpg";
import img16 from "../assets/images/16.jpg";
import img17 from "../assets/images/17.jpg";
import img18 from "../assets/images/18.jpg";
import img19 from "../assets/images/19.jpg";
import img20 from "../assets/images/20.jpg";
import img21 from "../assets/images/21.jpg";
import img22 from "../assets/images/22.jpg";
import img23 from "../assets/images/23.jpg";
import img24 from "../assets/images/24.jpg";
import img25 from "../assets/images/25.jpg";
import img26 from "../assets/images/26.jpg";
import img27 from "../assets/images/27.jpg";
import img28 from "../assets/images/28.jpg";
import img29 from "../assets/images/29.jpg";
import img30 from "../assets/images/30.jpg";
import img31 from "../assets/images/31.jpg";
import img32 from "../assets/images/32.jpg";
import img33 from "../assets/images/33.jpg";



const arr = Data
const productSlice = createSlice({
  name: "product",

  initialState: {
    data: [],
    status: STATUS.IDLE,
  },

  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = () => {
  return async function fetchProductThunk(dispatch) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await fetch(`${BASE_URL}products`);
      const data = await response.json();
      dispatch(setProducts(arr));
      dispatch(setStatus(STATUS.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};
