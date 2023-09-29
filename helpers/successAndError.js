const successResponse = (status, message, data) => {
    return {status,success:true, message, data}
}

const errorResponse= (status, message)=>{
    return {status,success:false, message}
}

module.exports={errorResponse,successResponse}