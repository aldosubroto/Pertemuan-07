// membuat variabel 
var http = require('http');

// membuat server object 
http.createServer( (req, res)=>{
   if(req.url =='/home')
        res.write('<p>Konten Home</p>')
    else if(req.url =='/product')
        res.write('<p>Konten Product</p>')
     else if(req.url =='/order')
        res.write('<p>Konten Order</p>')
     else if(req.url =='/')
        res.write('<p>Pengembangan Aplikasi Web dengan Nodejs</p>')
    else 
        res.write('<h1>404</h1>')
    // menuliskan respon kepada client 

// memberhentikan respon 
    res.end();
}).listen(8000, ()=>{
    console.log('Server is running on port 8000')
});