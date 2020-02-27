const http = require('http')
const port = 3001

const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('<h1>Hello Node.js Server!</h1>')
}
const server = http.createServer(requestHandler)
server.listen(port, (blah) => {
    if (blah) {
        return console.log('something bad happened', blah)
    }
    console.log(`server is listening on port: ${port}`)
})