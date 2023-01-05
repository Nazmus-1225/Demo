const db = require("../models");
const Object = db.Object;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.name || !req.body.PID ) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      // Create a Tutorial
      const tutorial = {
        name: req.body.name,
        pid: req.body.PID,
        published: req.body.published ? req.body.published : false
      };
    
      Object.create(Object)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });
};


exports.count = (req, res) => {
    if (!req.body.name || !req.body.PID ) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      pid: req.body.PID;
      name: req.body.name;
      let query = "SELECT COUNT(salary) AS salary_count FROM objects WHERE PID=pid and name=name";
  
    db_con.query(query, (err, rows) => {
        if(err) throw err;
        res.send(rows);
    });
};

exports.delete = (req, res) => {
    if (!req.body.name || !req.body.PID ) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      pid: req.body.PID;
      name: req.body.name;
  
    Object.destroy({
      where: { PID: pid,name:name }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Object was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Object with pid=${pid}. Maybe Object was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Object with pid=" + pid
        });
      });
  };