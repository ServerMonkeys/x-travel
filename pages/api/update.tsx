export default function updateDMV(req,res){

    if(req.method === "POST") {
        const reqPayload = req?.body;
        console.log("payload", reqPayload);
        res.json({reqPayload});
    }
    return res.status(500).json({
        msg:"this needs to be a post request"
    })

}