import { API_BASE_URL } from "../../../config/api";
import {
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_FAILURE,
} from "./ActionType";
import api from "../../../config/api";
import axios from "axios";

// // Action to create a payment
// export const createPayment = (reqData) => async (dispatch) => {
//   console.log("create payment reqData: ", reqData);

//   try {
//     dispatch({ type: CREATE_PAYMENT_REQUEST });

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${reqData.jwt}`,
//       },
//     };

//     // API call to create payment
//     const { data } = await api.post(
//       `/api/payments/${reqData.orderId}`,
//       reqData,
//       config
//     );
//     console.log("Payment data received: ", data);

//     if (data.payment_link_url) {
//       // Redirect user to payment link if available
//       window.location.href = data.payment_link_url;
//     } else {
//       // If payment link is not available, throw an error
//       throw new Error("Payment link not generated");
//     }

//     // Dispatch success action
//     dispatch({
//       type: CREATE_PAYMENT_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     console.error("Payment creation error: ", error);

//     // Dispatch failure action with appropriate error message
//     dispatch({
//       type: CREATE_PAYMENT_FAILURE,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message // API-specific error message
//           : error.message, // Generic error message
//     });
//   }
// };

// Action to create a payment
export const createPayment = (orderId) => async (dispatch) => {
    console.log("create payment reqData: ", orderId);
    dispatch({ type: CREATE_PAYMENT_REQUEST });
    try {
    

    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${reqData.jwt}`,
    //     },
    //   };
  
      // API call to create payment
      const { data } = await api.post(
        `/api/payments/${orderId}`,
       {}
      );
      console.log("Payment data received: ", data);
  
      if (data.payment_link_url) {
        // Redirect user to payment link if available
        window.location.href = data.payment_link_url;
      } else {
        // If payment link is not available, throw an error
        throw new Error("Payment link not generated");
      }
  
      // Dispatch success action
      dispatch({
        type: CREATE_PAYMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.error("Payment creation error: ", error);
  
      // Dispatch failure action with appropriate error message
      dispatch({
        type: CREATE_PAYMENT_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message // API-specific error message
            : error.message, // Generic error message
      });
    }
  };
  

// Action to update a payment
export const updatePayment = (reqData) => async (dispatch) => {
  console.log("update payment reqData: ", reqData);

  dispatch(updatePaymentRequest());

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${reqData.jwt}`,
      },
    };

    // API call to update payment status
    const { data } = await axios.get(
      `${API_BASE_URL}/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`,
      config
    );
    console.log("Updated payment data: ", data);

    // Dispatch success action
    dispatch(updatePaymentSuccess(data));
  } catch (error) {
    console.error("Payment update error: ", error);

    // Dispatch failure action with the error message
    dispatch(updatePaymentFailure(error.message));
  }
};

// Action creators for update payment request, success, and failure
export const updatePaymentRequest = () => {
  return {
    type: UPDATE_PAYMENT_REQUEST,
  };
};

export const updatePaymentSuccess = (payment) => {
  return {
    type: UPDATE_PAYMENT_SUCCESS,
    payload: payment,
  };
};

export const updatePaymentFailure = (error) => {
  return {
    type: UPDATE_PAYMENT_FAILURE,
    payload: error,
  };
};
