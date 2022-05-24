

const uploadPost = (req, res)=>{


    res.status(200).json({

        msg:'Archivo subido con exito',
        file: req.file


    })

}

module.exports = {uploadPost};