import { createVendiaClient } from '@vendia/client/index'

export const client = createVendiaClient({
  apiUrl: 'https://f0rc0vbvbk.execute-api.us-west-1.amazonaws.com/graphql/',
  websocketUrl: 'wss://cbsgisaphc.execute-api.us-west-1.amazonaws.com/graphql',
  apiKey: '23u3szb9Hu5vtuwfTjxCBCnoSSKXyQNpeuryTzmCyeB4'
})
export const clientDMV = createVendiaClient({
  apiUrl: `https://gs65cnv4f8.execute-api.us-west-1.amazonaws.com/graphql/`,
  websocketUrl: `wss://097yamtgxc.execute-api.us-west-1.amazonaws.com/graphql`,
  apiKey: `6DKCZ8dLmag33zgPYkHVHopRCeJdA2WH2h3qpbFFQkMc`
})

export const clientSS = createVendiaClient({
  apiUrl: `https://f0rc0vbvbk.execute-api.us-west-1.amazonaws.com/graphql/`,
  websocketUrl: `wss://cbsgisaphc.execute-api.us-west-1.amazonaws.com/graphql`,
  apiKey: `4LAG8LcuuTF4Zw1ro85e5Z2vB6NkMkc6L1Vq7FgD3tED`
})

export const clientDOS = createVendiaClient({
  apiUrl: `https://vlwvzq88ce.execute-api.us-west-1.amazonaws.com/graphql/`,
  websocketUrl: `wss://765bybgp7i.execute-api.us-west-1.amazonaws.com/graphql`,
  apiKey: `3ZRpSMsxRZprzstjLTLaBJChKpAJorQ6JaQZmvaZVxxL`
})
const testNumber = 404404444
