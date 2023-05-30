const fs=require("fs");
const http=require("http");

const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.setHeader("Content-Type","text/html");
    let path="./views/";
    switch(req.url){
        case "/":
            path+="index.html";
            res.statusCode=200;
            break;
        case "/about":
            path+="about.html";
            res.statusCode=200;
            break;
        case "/about-me":
            res.statusCode=301;
            res.setHeader("Location","/about")
            res.end();
            break;
        default:
            path+="/error.html"
            res.statusCode=404;
            break;    
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    });
})
server.listen(1234,"localhost",()=>{
    console.log("Server is running at port 1234");
})