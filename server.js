const express = require('express')
const app = express()
const PORT = 8000

const disciples = {
    'peter': {
        'death': 'Crucified upside-down.',
        'booksWritten': 2,
        'oneoftheThree': 'Yes.'
    },
    'john': {
        'death': 'Died of old age.',
        'booksWritten': 5,
        'oneoftheThree': 'Yes.'
    },
    'unknown': {
        'death': 'unknown.',
        'booksWritten': 0,
        'oneoftheThree': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request, response)=>{
    const discipleName = request.params.name.toLowerCase()
    if(disciples[discipleName]){
        response.json(disciples[discipleName])
    }else{
        response.json(disciples['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}.`)
})