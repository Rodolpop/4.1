
const express = require('express');

class Server {

    constructor (){

        this.app = express();
        this.port = process.env.PORT;
        this.route();


        this.listen();

    }

    route (){

        this.app.use('/user',require('../routes/user'))

        this.app.use('/upload',require('../routes/upload'))

        this.app.use('*',require('../routes/404'))
    }

    listen(){

        this.app.listen(this.port,()=>{

            console.log(`Server listener on port ${this.port}`)


        });
    }


}

module.exports = Server;