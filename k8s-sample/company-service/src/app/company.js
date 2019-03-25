module.exports = (app, db) => {
    app.get( "/api/company", (req, res) => {
     db.models.company.findAll({}).then( (result) => res.json(result) )
    });
  
    app.get( "/api/company/:id", (req, res) =>
      db.models.company.findById(req.params.id).then( (result) => res.json(result))
    );
  
    app.post("/api/company", (req, res) => 
      db.models.company.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name
      }).then( (result) => res.json(result) )
    );
  
    app.put( "/api/company/:id", (req, res) =>
      db.models.company.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name
      },
      {
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  
    app.delete( "/api/company/:id", (req, res) =>
      db.models.company.destroy({
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  }