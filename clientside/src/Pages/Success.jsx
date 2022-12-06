import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const [orderId, setOrderId] = useState(null);
  const user = useSelector((state) => state.user.currentUser);
  //const dispatch = useDispatch();

  useEffect(() => {
    const createOrder = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        await axios
          .post(
            "/orders",
            {
              userId: user._id,
              products: cart.products.map((item) => ({
                productId: item._id,
                productname: item.title,
                quantity: item._quantity,
              })),
              amount: cart.total,
              address: data.billing_details.address,
            },
            config
          )
          .then((res) => {
            setOrderId(res.data._id);
            //dispatch(DeleteCart(dispatch));
          });
      } catch {}
    };
    data && createOrder();
  }, [cart, data, user]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Link to="/shop" style={{ padding: 10, marginTop: 20 }}>
        Return to Shop
      </Link>
    </div>
  );
};

export default Success;
