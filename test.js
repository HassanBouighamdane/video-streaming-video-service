const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Hello world !");
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('Error 404 page not found')
    }
});
const port=3000;
server.listen(port,()=>{
    console.log(`Server listening on : http://localhost:${port}`)
});