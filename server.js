const http = require('http');
const fs = require('fs');

const mappings = {
    "/": "html/index.html",
    "/index.html": "html/index.html",
    "/img": "html/images.html",
    "/images.html": "html/images.html"
}

function handleURL(url) {
    if(url == null) {
        throw Error("URL Empty");
    }
    //console.log(mappings[url]);
    url = url.split("?")[0];
    if(mappings[url] != undefined) {
        return mappings[url];
    } else {
        if(fs.existsSync(url.replace("/", ""))) {
            //console.log(url.replace("/", ""))
            return url.replace("/", "");
            
        } else {
            //console.log('shid');
        }
    }
}

const server = http.createServer((req, resp) => {
    if(req.url == null) {
        console.log('Non');
        resp.statusCode = 404;
        resp.setHeader('Content-Type', 'text/plain');
        resp.end();
        return;
    }
    var getFile = handleURL(req.url);
    if(getFile == null) {
        resp.statusCode = 404;
        resp.setHeader('Content-Type', 'text/plain');
        resp.end();
        return;
    }
    if(fs.existsSync(getFile) == false) {
        resp.statusCode = 404;
        resp.setHeader('Content-Type', 'text/plain');
        resp.end();
        return;
    }
    resp.statusCode = 200;
    if(getFile.split("?")[0].endsWith('.html')) {
        resp.setHeader('Content-Type', 'text/html');
    } else if(getFile.split("?")[0].endsWith('.css')) {
        resp.setHeader('Content-Type', 'text/css');
    } else if(getFile.split("?")[0].endsWith('.js')) {
        resp.setHeader('Content-Type', 'text/javascript');
    }
    resp.end(fs.readFileSync(getFile));
})

server.listen(3000, '192.168.5.2', () => {
    console.log('Server running @ 192.168.5.2:3000 <3');
})