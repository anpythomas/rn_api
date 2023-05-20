const express = require('express')
const app = express()
const PORT = 8000

let name;

const rapperName = {
    '21 Savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England' 
    },
    'Drake':{
        'age': 31,
        'birthName': 'Aubrey Marcus',
        'birthLocation': 'Toronto, Canada' 
    },
    'Dylan':{
        'age': 'Dylan',
        'birthName': 'Dylan',
        'birthLocation': 'Dylan' 
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get(`/api`, (request, response) => {
    response.json(rapperName)
})

app.listen(PORT, () => {
    console.log(`Your server is running on ${PORT}`)
})