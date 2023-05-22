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

// The colon lets us now this is a query parameter, it's not part of the path, it's the query parameter that being passed in with the path
app.get('/api/:rapperName', (request, response) => {
    // Now we can handle case sensitivity with .toLowerCase()
    const rapper = request.params.rapperName.toLowerCase()
    if (rappers[rapper]) {
        response.json(rappers[rapper])
    } else {
        response.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Your server is running on ${PORT}`)
})