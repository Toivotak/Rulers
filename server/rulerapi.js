module.exports=function(app){

    let bodyParser = require('body-parser')
    app.use(bodyParser.json());

    let dao=require('./rulerdaomongo');

    app.get('/api/rulers',async function(resp){
        resp.json(await dao.getAll());
    });
    
    app.get('/api/rulers/:id', async function(req, resp){
        let id = Number(req.params.id);
        let ruler = await dao.get(id);
        resp.json(ruler);
    });
    
    app.post('/api/rulers', async function(req, resp){
        let r = req.body;
        let ruler = await dao.create(r);
        resp.json(ruler);
    });
    
    app.delete('/api/rulers/:id', async function(req, resp){
        let id = Number(req.params.id);
        await dao.deleteRuler(id);
        resp.json({info:'Author deleted'});
    });
    
    app.put('/api/rulers/:id', async function(req, resp){
        let id = Number(req.params.id);
        if (id != req.body.id){
            resp.status(500).json({error:'ID Mismatch'});
        }
        else if (!req.body.fullName){
            resp.status(500).json({error:'Missing lastName'});
        }
        else{
            let ruler = await dao.update(req.body);
            resp.json(ruler);
        }
    });

}