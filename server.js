const express = require('express')
const app = express()
const PORT = 8000

let name;

const rappers = {
    '21_savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England' 
    },
    'drake':{
        'age': 31,
        'birthName': 'Aubrey Marcus',
        'birthLocation': 'Toronto, Canada' 
    },
    'dylan':{
        'age': 'Dylan',
        'birthName': 'Dylan',
        'birthLocation': 'Dylan' 
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
    const rapper = request.params.rapperName
    if (rappers[rapper]) {
        response.json(rappers[rapper])
    } else {
        response.json(rappers['dylan'])
    }
})

app.listen(PORT, () => {
    console.log(`Your server is running on ${PORT}`)
})