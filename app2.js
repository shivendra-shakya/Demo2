const exp = require('express')

const app= exp()

app.listen(8080 , function(req , res){
    console.log("Running....")
    
})

app.get('/' , function(req , res ){
    res.send('Hello...')
})

// app.get('/rajat' , function(req , res ){
//     res.send('Hello...Rajat...')
// })


//for dynamic input 

app.get('/rajat/:id' , function(req , res ){
    const id = req.params.id 
    res.send("Hiii rajat "+ id)
})

//for query string from URL

app.get('/rajat' , function(req , res ){
    const id = req.query.id
    res.send(' hi rajat '+id)
})