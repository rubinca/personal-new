const express = require("express");
const app = express();
app.use(express.static("dist"));

const port = normalizePort(process.env.PORT || '3000');

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}


app.listen(port, () => {
  console.log(`Our app is running on port ${ port }`);
})
