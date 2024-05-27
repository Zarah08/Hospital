let mongoose = require('mongoose')

mongoose.connect('mongodb+srv://zarah:zarahkari4321@cluster0.ydtqrl2.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('connected to the database successfully')
}).catch((err)=>{
    console.log(err)
})
