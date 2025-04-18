import multer from "multer";
import path from "path"; // Optional, in case you want to use path functions

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads/"); // <- Make sure this folder exists
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-" + file.originalname); // optional: unique filename
  }
});

const upload = multer({ storage });

export default upload;
