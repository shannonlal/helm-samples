module.exports = (app, db) => {
    app.get( "/api/person", (req, res) => {
     db.models.person.findAll({}).then( (result) => res.json(result) )
    });
  
    app.get( "/api/person/:id", (req, res) =>
      db.models.person.findById(req.params.id).then( (result) => res.json(result))
    );
  
    app.post("/api/person", (req, res) => 
      db.models.person.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name
      }).then( (result) => res.json(result) )
    );
  
    app.put( "/api/person/:id", (req, res) =>
      db.models.person.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name
      },
      {
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  
    app.delete( "/api/person/:id", (req, res) =>
      db.models.person.destroy({
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  }