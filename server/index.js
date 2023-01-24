const express = require("express");
const cors = require("cors");
const app = express();
const multer = require("multer");

app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage });
app.post("/upload", upload.single("photo"), async (req, res) => {
  console.log(req.file.filename);
  res.sendFile(
    `Users/Asim/Desktop/multer/server/uploads/1673681641384-Screenshot (8).png`
  );
});
app.listen("5000", () => {
  console.log("listening on the port 5000");
});
