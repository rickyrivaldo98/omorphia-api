const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");
const https = require("https");
const helmet = require("helmet");
const fs = require("fs");

const hostname = "api.sarafdesign.com";
const httpPort = 80;
const httpsPort = 443;
const localPort = 3001;

// const cert = fs.readFileSync("./ssl/cert.crt");
// const ca = fs.readFileSync("./ssl/ca.crt");
// const key = fs.readFileSync("./ssl/private.key");

const httpsOptions = {
  cert: fs.readFileSync("./ssl/cert.crt"),
  ca: fs.readFileSync("./ssl/ca.crt"),
  key: fs.readFileSync("./ssl/private.key"),
};

const app = express();
const httpServer = http.createServer(app);
const httpsServer = https.createServer(httpsOptions, app);

const corsOptions = {
  origin: "*",
  allowedHeaders: "*",
  optionsSuccessStatus: 200,
  method: "GET ,HEAD ,PUT ,PATCH, POST, DELETE, OPTIONS",
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());

app.use("/uploads", express.static("./app/uploads"));

app.get("/", (req, res) => {
  res.json({ message: "Selamat datang di omorphia API." });
});

require("./app/routes/all.routes")(app);

// app.listen(localPort, () => console.log(`Server ini berjalan dalam port ` + [port]));
httpServer.listen(httpPort, hostname);
httpsServer.listen(httpsPort, hostname);
