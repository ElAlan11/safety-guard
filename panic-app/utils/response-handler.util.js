const sendResponse = (req, res, next, resCode, resMsg) => {    
    res.statusCode = resCode;
    
    if(resCode === 200){
        if (typeof resMsg === 'string' || resMsg instanceof String){
            res.json({
                data: {
                    message: resMsg
                }
            });
        }
        else{
            res.json({
                data: resMsg
            });
        }   
    }
    else{
        res.json({
            error: {
                code: resCode,
                message: resMsg
            }
        });
    }
}

exports.sendResponse = sendResponse;