module.exports=function(app){
    
    let bodyParser = require('body-parser')
    app.use(bodyParser.json());

    let dao=require('./realmdaomongo');
    
    app.get('/api/realms',async function(req, resp){
        resp.json(await dao.getAll());
    });

    app.get('/api/realms/:id',async function(req, resp){
        let id=req.params.id;
        let realm=await dao.get(id);
        resp.json(realm);
    });
    
    app.post('/api/realms',async function(req, resp){
        let r=req.body;
        console.log(r);
        let err=dao.verify(r);
        if (err){
            resp.status(500).json({error:err});
        }
        else{
            let realm=await dao.create(r);
            resp.json(realm);
        }
    });
    
    app.delete('/api/realms/:id',async function(req, resp){
        let id=req.params.id;
        await dao.deleteRealm(id);
        resp.json({info:'Realm deleted'});
    });
    
    app.put('/api/realms/:id',async function(req,resp){
        let id=req.params.id;
        if (id!=req.body.id){
            resp.status(500).json({error:'ID Mismatch'});
        }
        else{
            let err=dao.verify(req.body);
            if (err){
                resp.status(500).json({error:err});
            }
            else{
                let realm = await dao.update(req.body);
                resp.json(realm);
            }
    
        }
    });

}