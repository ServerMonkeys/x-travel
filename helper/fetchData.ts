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
      _id
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
      _id
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
      _id
    }
  }
}
`
}

//Update person mutation (works for all databases)
export const updatePerson_mutation = (id:string, entity_type:any, value:any): string => {
  return `mutation updatePerson {
    update_Person(
      id: "${id}"
      syncMode: NODE_COMMITTED
      input: {${entity_type}: ${value}}
    ) {
      result {
        ssn
      }
    }
  }
`
}

export const addSS_mutation = (ssn:number, fname:string, lname:string, dob:string, street:string, city:string,
                               state:string, zip:string, country:string, job:string) => {
    return `mutation addPerson {
    add_Person(
      input: {ssn:${ssn},
      first_name:"${fname}", 
      last_name:"${lname}", 
      dob:"${dob}",
      street_address: "${street}",
      city: "${city}",
      state: "${state}",
      zip_code: "${zip}",
      country: "${country}",
      job: "${job}"
      }
      syncMode: NODE_COMMITTED
    ) {
      result {
        ssn
        first_name
        last_name
        dob
        street_address
        city
        state
        zip_code
        country
        job
        _id
      }
    }
  }`
}

export const addDMV_mutation = (ssn:number, fname:string, lname:string, dob:string, dl:string, phone:string, street:string,
                                city:string, state:string, zip:string, country:string, photo:string) => {
    return `mutation addPerson {
    add_Person(
      input: {ssn:${ssn},
      first_name:"${fname}", 
      last_name:"${lname}", 
      dob:"${dob}",
      dl:"${dl}",
      phone_num:"${phone}",
      street_address: "${street}",
      city: "${city}",
      state: "${state}",
      zip_code: "${zip}",
      country: "${country}",
      photo: "${photo}"
      }
      syncMode: NODE_COMMITTED
    ) {
      result {
        ssn
        first_name
        last_name
        dob
        dl
        phone_num
        street_address
        city
        state
        zip_code
        country
        photo
        _id
      }
    }
  }`
}

export const addDOS_mutation = (ssn:number, fname:string, lname:string, dob:string, pass_num:string, pass_exp:string, phone:string,
                                street:string, city:string, state:string, zip:string, country:string, photo:string) => {
    return `mutation addPerson {
    add_Person(
      input: {ssn:${ssn},
      first_name:"${fname}", 
      last_name:"${lname}", 
      dob:"${dob}",
      passport_num: "${pass_num}"
      passport_exp: "${pass_exp}"
      street_address: "${street}",
      city: "${city}",
      state: "${state}",
      zip_code: "${zip}",
      country: "${country}",
      photo: "${photo}"
      }
      syncMode: NODE_COMMITTED
    ) {
      result {
        ssn
        first_name
        last_name
        dob
        passport_num
        passport_exp
        street_address
        city
        state
        zip_code
        country
        photo
        _id
      }
    }
  }`
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

//Input:
//  id: must be taken from database query (_id)
//  entity_type: first_name, last_name, dob, etc.
//  value: "bob", "12-10-10", etc.
export const updatePerson = async (client:any, id:string, entity_type:any, value:any) => {
    client.request(updatePerson_mutation(id, entity_type, value))
}

export default fetchData;

