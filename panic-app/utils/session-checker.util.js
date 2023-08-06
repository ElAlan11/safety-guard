const validateSession = async(req, res, next) => {    
    const storedSession = await req.sessionStore.get(req.sessionID);

    if (storedSession) {
        next();
    } else {
        res.statusCode = 401;
        res.json({
            error: {
              code: 401,
              message: 'Invalid or expired session'
            }
        });
    }
}

exports.validateSession = validateSession;