var express = require('express'),
    app = express();
    PORT = process.env.PORT || 3000;




app.listen(PORT);

app.get('/', function(req, res){ res.sendFile(__dirname + '/app.html'); });
app.use('/static', express.static(__dirname + '/dist'));

console.log("Web application listening on localhost:" + PORT);
