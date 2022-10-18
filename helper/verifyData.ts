export const verifyData = (SSdata: any, DMVdata:any, DOSdata:any) => {
    if (SSdata.first_name === DMVdata.first_name && SSdata.first_name === DOSdata.first_name &&
        SSdata.last_name === DMVdata.last_name && SSdata.last_name === DOSdata.last_name &&
        SSdata.dob === DMVdata.dob && SSdata.dob === DOSdata.dob) {
        return true;
    }
    return false;
    }

export default verifyData;