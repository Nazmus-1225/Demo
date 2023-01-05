module.exports = app => {
    const Object = require("../controllers/object.controller.js");
  
    var router = require("express").Router();
  
   
    router.post("/", Object.create);
  
    router.delete("/", Object.delete);
  
    router.get("/", Object.count);
  
    app.use('', router);
  };