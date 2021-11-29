// membuat variabel 
var http = require('http');

// membuat server object 
http.createServer( (req, res)=>{
    res.write('<p>Pengembangan Aplikasi Web dengan menggunakan Nodejs</p>');
    // menuliskan respon kepada client 

// memberhentikan respon 
    res.end();
}).listen(8000, ()=>{
    console.log('Server is running on port 8000')
});