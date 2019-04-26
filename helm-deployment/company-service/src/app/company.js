module.exports = (app, db) => {
    app.get( "/api/company", (req, res) => {
     db.models.company.findAll({}).then( (result) => res.json(result) )
    });
  
    app.get( "/api/company/:id", (req, res) =>
      db.models.company.findById(req.params.id).then( (result) => res.json(result))
    );
  
    app.post("/api/company", (req, res) => 
      db.models.company.create({
        name: req.body.name,
        description: req.body.description
      }).then( (result) => res.json(result) )
    );
  
    app.put( "/api/company/:id", (req, res) =>
      db.models.company.update({
        name: req.body.name,
        description: req.body.description
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