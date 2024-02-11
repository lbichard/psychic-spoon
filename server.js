const express = require("express");
const fs = require("fs");


// Set up express app
var app = express();
var PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public/assets", express.static(__dirname + "/public/assets"));


require("./routes/hRoutes")(app);
require("./routes/aRoutes")(app);

// Starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});