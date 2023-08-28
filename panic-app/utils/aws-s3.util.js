if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
});
  
const s3 = new AWS.S3();

const uploadFile = (filename, prefix, data) => {    
    return new Promise((resolve, reject) => {

        const params = {
            Bucket: 'panicapp-evidences',
            Key: prefix + filename,
            Body: data,
        };
    
        // Sube los archivos a un S3 bucket
        s3.upload(params, (err, data) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            return resolve(data);

        });
    });
}

exports.uploadFile = uploadFile;