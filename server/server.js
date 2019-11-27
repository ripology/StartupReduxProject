const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 2688
const app = express()

mongoose.connect('mongodb://localhost:27017/startup', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const Startup = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    employees:{
        required: false,
        type: Number
    },
    location:{
        required: false,
        type: String
    },
    image:{
        required: false,
        type: String
    }
})

const StartupModel = mongoose.model("Startups", Startup)

const postStartup = async (request, response) => {
    try{
        var StartupInstance = new StartupModel(request.body)
        const created = await StartupModel.create(StartupInstance)
        response.send(created)
    }catch(error){
        response.status(500).send(error)
    }
}

const getStartups = async (request, response) => {
    try{
        var StartupInstance = await StartupModel.find({})
        response.send({StartupInstance})
    }catch(error){
        response.status(500).send(error)
    }
}



app.route('/startup')
.post(postStartup)
.get(getStartups)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})