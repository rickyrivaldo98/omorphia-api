const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./app/uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      (Date.now() + path.extname(file.originalname))
    );
  },
}); 

const uploadImg = multer({ storage: storage }).single("file");

module.exports = { uploadImg };
