/* eslint-disable no-unused-vars */

import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
export default function PaymentSuccess() {
  const seachQuery = useSearchParams()[0];

  const referenceNum = seachQuery.get("reference");
  return (
    <Box>
      <VStack h="100vh" justifyContent={"center"}>
        <Heading textTransform={"uppercase"}> Order Successfull</Heading>

        <Text>Reference No.{referenceNum}</Text>
      </VStack>
    </Box>
  );
}
