import {createVendiaClient} from "@vendia/client";


export const SS_Client = createVendiaClient({
    apiUrl  :'https://f0rc0vbvbk.execute-api.us-west-1.amazonaws.com/graphql/',
    websocketUrl : 'wss://cbsgisaphc.execute-api.us-west-1.amazonaws.com/graphql',
    apiKey: 'ECLbVm13igjXftpWY24X4FkBBjhLj5vNujUHgXnU2asz',
})

export default SS_Client;