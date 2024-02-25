/* eslint-disable no-unused-vars */
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

export default function Home() {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("/api/getkey");
    const {
      data: { order },
    } = await axios.post("/api/checkout", { amount });
    // console.log(window);
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Sawan Kumar",
      description: "Payment Integration",
      image:
        "https://avatars.githubusercontent.com/u/102221865?s=400&u=6dab302bb18a0371c82f8479622b4d5dd5caa582&v=4",
      order_id: order.id,
      callback_url: "/api/paymentverification",
      prefill: {
        name: "Sawan Kumar",
        email: "sawankushwaha222@gmail.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div>
      <Box>
        <Stack
          h={"100vh"}
          alignItems="center"
          justifyContent="center"
          direction={["column", "row"]}
        >
          <Card
            amount={5000}
            img={
              "https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png"
            }
            checkoutHandler={checkoutHandler}
          />
          <Card
            amount={3000}
            img={
              "http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
            }
            checkoutHandler={checkoutHandler}
          />
        </Stack>
      </Box>
    </div>
  );
}
