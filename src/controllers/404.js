

const err404 = (req, res)=>{

res.status(200).json({

msg:'Error 404 - Página no encontrada'

})

}

module.exports = {err404};