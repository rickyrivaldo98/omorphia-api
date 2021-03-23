module.exports = (app) => {
  const contact = require("../controllers/contact.controller");
  const category = require("../controllers/category.controller");
  const gallery = require("../controllers/gallery.controller");
  const images = require("../controllers/images.controller");
  const user = require("../controllers/users.controller");
  const uploadImg = require("../config/upload.config,");

  app.post("/contact", contact.create);
  app.get("/contact", contact.getAll);
  app.post("/category", category.create);
  app.get("/category", category.getAll);
  app.post("/gallery", gallery.create);
  app.get("/gallery", gallery.getAll);
  app.get("/gallery/category/:categoryNama", gallery.getByCategory);
  app.post("/images", uploadImg.uploadImg, images.create);
  app.get("/images/gallery/:galleryNama", images.getByGallery);
  app.post("/register", user.create);
  app.get("/user/:userNama", user.getByUser);
  app.post("/signin", user.signin);
};