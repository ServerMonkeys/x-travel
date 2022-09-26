import { createVendiaClient } from '@vendia/client'

export const Node1 = createVendiaClient({
  apiUrl: `https://0iytwmjscf.execute-api.us-west-2.amazonaws.com/graphql/`,
  websocketUrl: `wss://5b2ey4r86l.execute-api.us-west-2.amazonaws.com/graphql`,
  apiKey: `65BLKihm1EnXJL2FFTc4Niqy8nTjAvPT5xhw29gPFo1n`
})

export const client2 = createVendiaClient({
  apiUrl: `https://54svg2qrni.execute-api.us-west-1.amazonaws.com/graphql/`,
  websocketUrl: `wss://3bshgf3vk1.execute-api.us-west-1.amazonaws.com/graphql`,
  apiKey: `FVyUutp155LPGf2X592KJ7ukCMBhLKeYTJ3ENNdSWMoD`
})

export default Node1
