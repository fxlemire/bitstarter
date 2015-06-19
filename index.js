var express = require('express')
var fs = require('fs')
var logger = require('morgan')

var app = express()
app.use(logger('common', {}))

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  var indexFile = "index.html"
  var html= fs.readFileSync(indexFile).toString()
  response.send(html)
})

var port = process.env.PORT || 8080
app.listen(port, function() {
  console.log("Listening on " + port)
})
