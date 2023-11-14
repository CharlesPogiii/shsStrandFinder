const multer = require("multer");

class StorageMiddleware {
  storage(folderName) {
    const diskStorage = multer.diskStorage({
      destination: (req, file, cb) => {
        // Define the destination where the image will be saved
        cb(null, "uploads/" + folderName + "/"); // Save images in the 'uploads' directory
      },
      filename: (req, file, cb) => {
        // Generate a unique filename for the uploaded image
        cb(null, Date.now() + "-" + file.originalname);
      },
    });

    return multer({ storage: diskStorage });
  }
}

module.exports = StorageMiddleware;
