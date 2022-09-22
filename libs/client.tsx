import React from "react";
import { createVendiaClient } from "@vendia/client";

export const client = createVendiaClient({
  apiUrl: `https://0iytwmjscf.execute-api.us-west-2.amazonaws.com/graphql/`,
  websocketUrl: `wss://5b2ey4r86l.execute-api.us-west-2.amazonaws.com/graphql`,
  apiKey: `65BLKihm1EnXJL2FFTc4Niqy8nTjAvPT5xhw29gPFo1n`,
})

export default client;