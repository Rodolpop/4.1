const multer = require('multer');
const path = require('path');

// Definiendo el almacenamiento de archivos
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../img'),
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname)
    }
});

// Filtrando por tipo de archivo
const fileFilter = (req, file, callback) => {
    const fileTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];

    if (fileTypes.some(fileType => fileType === file.mimetype)) return callback(null, true);

    return callback(new Error('Solo estos formatos pueden ser subidos .jpeg/.jpg, .png and .gif'), false);
}

const maxSize = 1 * 1000 * 1000;

 const upload = (req, res, next) => {
    return multer({
        storage,
        limits: { fileSize: maxSize },
        fileFilter
    }).single('img')(req, res, (err) => {

        // error de tamaño
        if (err instanceof multer.MulterError) return res.status(500).json(' 2MB es el máximo tamaño permitido');

        // error de tipo de archivo
        if (err) return res.status(500).json(err.message);

        // archivo no seleccionado
        if (!req.file) return res.status(500).json({
            msg: 'Archivo requerido'
        });

    
        next();
    });
};

module.exports = {upload};

