
const userGet =(req, res)=>{

    res.status(200).json({

        name:'Matusalem',
        age: 1243,
        url:`http://localhost:${process.env.PORT}`

    });


}

module.exports = {userGet}