import { createVendiaClient } from '@vendia/client/index'

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




export const fetchDMV_Query = (ssn_number: number): string => {
    return `
        query getPersonByName {
  list_PersonItems(filter: {ssn: {eq : ${ssn_number}}}) {
    _PersonItems {
      ssn
      first_name
      last_name
      city
      country
      dl
      dob
      phone_num
      photo
      state
      street_address
      zip_code
    }
  }
}`
}

export const fetchDOS_Query = (ssn_number:number):string => {
    return ` query getPersonBySSN {
  list_PersonItems(filter: {ssn: {eq: ${ssn_number}}}) {
    _PersonItems {
      ssn
      photo
      passport_num
      passport_exp
      last_name
      first_name
      dob
      country
      city
      state
      street_address
      zip_code
    }
  }
}`
}

export const fetchSS_Query = (ssn_number:string) => {
    return `query get_Person {
  list_PersonItems(filter: {ssn: {eq: ${ssn_number}}}) {
    _PersonItems {
      city
      country
      dob
      first_name
      job
      last_name
      ssn
      state
      street_address
      zip_code
    }
  }
}
`
}

export const fetchData = async (client: { request: (arg0: any) => any }, func: (arg0: number) => any, ssn_number: number) => {
    if (ssn_number) {
        try {
            return await Promise.resolve(client.request(func(Number(ssn_number))))
                .then(obj => {
                    return obj.list_PersonItems._PersonItems[0];
                })
        } catch (e) {
            console.log(e)
        }
    } else {
        return null;
    }
};

export default fetchData;

