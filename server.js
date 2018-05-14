var express = require("express")
var bodyParser = require("body-parser")

var friendsArr = require("./app/data/friends.js")

var app = express()

var PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

require("./app/routing/apiRoutes")(app, friendsArr)
require("./app/routing/htmlRoutes")(app)


app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT)
})