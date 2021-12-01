// install dulu npm install express --save Latihan 7.3 dan 7.4-7.5
var http = require('http')
var express = require('express')
var app =express()
// harus menginstall npm install body-parser --save
var bodyParser = require('body-parser');
//const { read } = require('fs');
app.use(bodyParser.urlencoded({extended: false})); // mengetahui kode awal bodyParser itu false 
app.use(bodyParser.json());

var persons =[]
app.post('/person', (req, res)=>{
    persons.push(req.body)
    res.json(req.body)
})

app.get('/person', (req, res)=>{
    res.json(persons)
})

http.createServer(app)
.listen(8000, ()=>{
    console.log('Server is running on port 8000')
})
// var data =[];
// app.get('/data', (req, res)=>{
//     res.json(data)
// })
// app.post('/data', (req, res)=>{
//     data.push(Date.now())
//     res.json(data)
// })
//===================================================================================================
// app.get('/users/:userId/books/:bookId', (req,res)=>{
//     res.end(req.params)
// })
// app.post('/about', (req,res)=>{
//     res.end('About')
// })
app.listen(8000, ()=>{console.log('Server is runing on port 8000')})



//========================================================================================
// // membuat variabel 
// var http = require('http');

// // membuat server object 
// http.createServer( (req, res)=>{
//    if(req.url =='/home')
//         res.write('<p>Konten Home</p>')
//     else if(req.url =='/product')
//         res.write('<p>Konten Product</p>')
//      else if(req.url =='/order')
//         res.write('<p>Konten Order</p>')
//      else if(req.url =='/')
//         res.write('<p>Pengembangan Aplikasi Web dengan Nodejs</p>')
//     else 
//         res.write('<h1>404</h1>')
//     // menuliskan respon kepada client 

// // memberhentikan respon 
//     res.end();
// }).listen(8000, ()=>{
//     console.log('Server is running on port 8000')
// });