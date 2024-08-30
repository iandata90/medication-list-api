const express = require("express")
const app = express()
const PORT = 8000

const medications = {
    "lisinopril": {"use": "bloodPressure",
        "sideEffects": "cough"
    },
    "metformin": {"use": "diabetes",
        "sideEffects": "diarrhea"
    },
    "unknown": "It doesn't exist"
}

app.get("/", (request,response) => {
    response.sendFile(__dirname + "/index.html")    
})

app.get("/api/:name", (request,response) => {
    const medicationName = request.params.name.toLowerCase()
    if (medications[medicationName]) {
        response.json(medications[medicationName])
    }
    else {
        response.json(medications["unknown"])
    }
    
}) 

app.listen(PORT, () => {
    console.log("Sever is working")
})

//I know how to serve html file but 
// how to serve api?
//i want to build api that anyone can consume without html or lcient side java script
// be able to respond with json
// client side code makign request to server
// set up server not only send json 
// setup to make request to our own api
