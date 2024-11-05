import { Box, Grid, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const OrderCard = ({ item, order }) => {
  const navigate = useNavigate();
  console.log("items ", item,order,order.orderStatus);

    // Helper function to calculate and format estimated delivery date
    const getEstimatedDeliveryDate = (orderDate, deliveryDays = 7) => {
      const order = new Date(orderDate);
      const estimatedDelivery = new Date(order);
      estimatedDelivery.setDate(order.getDate() + deliveryDays);
      return estimatedDelivery.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }); // e.g., "Mar 03"
    };

    // Calculate the estimated delivery date or display the actual delivery date if available
    const deliveryDate = order?.orderStatus === "DELIVERED" 
    ? new Date(order.orderDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })
    : getEstimatedDeliveryDate(order.orderDate);


  return (
    <Box className="p-5 shadow-lg hover:shadow-2xl border ">
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div
            onClick={() => navigate(`/account/order/${order?.id}`)}
            className="flex cursor-pointer"
          >
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src={item?.product.imageUrl}
              alt=""
            />
            <div className="ml-5">
              <p className="mb-2">{item?.product.title}</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Size: {item?.size}</span>
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹{item?.discountedPrice}</p>
        </Grid>
        <Grid item xs={4}>
          <p className="space-y-2 font-semibold">
            {order?.orderStatus === "DELIVERED"? (
             <>
             <FiberManualRecordIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 p-0 mr-2 text-sm"
                />
                <span>Delivered On {deliveryDate}</span>

            </>
            ):  <>
               
                <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 p-0 mr-2 text-sm"
              />
              <span>Expected Delivery On {deliveryDate}</span>
              </>}
            
          </p>
          {/* <p className="text-xs">Your Item Has Been Delivered</p> */}
       
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderCard;
