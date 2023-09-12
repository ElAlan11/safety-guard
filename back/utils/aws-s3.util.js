if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const AWS = require('aws-sdk');

// Configura las credenciales de AWS
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
});

// Crea una instancia del servicio S3
const s3 = new AWS.S3();

const bucketName = 'panicapp-evidences';

const uploadFile = (filename, prefix, data) => {
    return new Promise((resolve, reject) => {

        const params = {
            Bucket: bucketName,
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


const getFiles = (incidentId, folderName) => {
    return new Promise((resolve, reject) => {
        var signedUrls = [];
    
        // Obtén una lista de objetos en la carpeta
        const params = {
            Bucket: bucketName,
            Prefix: folderName,
        };
    
        s3.listObjectsV2(params, (err, data) => {
            if (err) {
                console.error('Error al listar objetos:', err);
                reject(err);
            }
    
            // Itera sobre los objetos en la carpeta y genera URLs firmadas
            data.Contents.forEach((obj) => {
                var signedUrl = getSignedUrl(obj.Key);
                signedUrls.push(signedUrl);
            });
    
            return resolve({incidentId: incidentId, urls: signedUrls});
        });
    });
}

const getFile = (fileKey) => {
    var signedUrl = getSignedUrl(fileKey);
    return signedUrl;
}


function getSignedUrl(key){
    const params = {
        Bucket: bucketName,
        Key: key,
        Expires: 3600, // La URL expira en un hora
    };

    return s3.getSignedUrl('getObject', params);
}

module.exports = {uploadFile, getFiles, getFile};