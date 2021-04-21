const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const url = 'mongodb://localhost:27017';
const dbName = 'rulers';

function connect(){
    let client = new MongoClient(url, {useUnifiedTopology: true});
    return new Promise((resolve, reject) => {
        client.connect(function(err) {
            if (err){
                reject(err);  
            } 
            else {
                let db=client.db(dbName);
                resolve({client,db:client.db,rulers:db.collection('rulers')});
            }
        });
    })
}

module.exports = {
    verify(ruler){
        if (!ruler.fullName) return "Full name is required";
        ruler._id = ruler.id;
        delete ruler.id;
        // What else?
        return null; // null indicates ok
    },

    toClient(ruler){
        ruler.id = ruler._id;
        delete ruler._id;
        return ruler;
    },

    getAll(){
        console.log("Get all")
        return new Promise((resolve, reject) => {
            connect().then(({client,rulers}) => {
                rulers.find({}).toArray((err, data) => {
                    data.forEach(ruler => this.toClient(ruler));
                    client.close();
                    resolve(data);
                })
            });
            
        });
    },

    get(id){
        console.log("GET", id);
        return new Promise((resolve, reject) => {
            const client = new MongoClient(url, {useUnifiedTopology: true});
            client.connect((err) => {
                if (err) console.log(err);
                else {
                    const db=client.db('rulers')
                    db.collection('rulers').aggregate([
                        {$match:{_id:id}},
                        {$lookup: {from: "rulers",localField: "rulerId",foreignField: "_id",as: "rulerObject"}},
                        ]).toArray((err,data) => {
                            if (err) console.log("ERROR",err);
                            data.forEach(ruler => this.toClient(ruler));
                            client.close();
                            resolve(data[0]);
                    })
                }
            })
        });
    },

    create(ruler){
        console.log("CREATE",ruler);
        return new Promise((resolve,reject) => {
            const client = new MongoClient(url,{useUnifiedTopology: true});
            client.connect((err) => {
                if (err) console.log(err);
                else {
                    const db=client.db('rulers');
                    ruler._id=new ObjectID().toHexString();
                    db.collection('rulers').insertOne(ruler,(err,info) =>{
                        console.log(err,info);
                        client.close();
                        resolve(this.toClient(ruler));
                    });
                }
            })
        });
   },

    update(ruler){
        console.log("CREATE",ruler);
        return new Promise((resolve,reject) => {
            const client = new MongoClient(url,{useUnifiedTopology: true});
            client.connect((err) => {
                if (err) console.log(err);
                else {
                    const db=client.db('rulers');
                    let id=ruler._id;
                    db.collection('rulers').updateOne({_id:id},{$set:ruler},(err,info) => {
                        console.log(err,info);
                        client.close();
                        resolve(this.toClient(ruler));
                    })
                }
            })
        });
    },

    deleteRuler(id){
        return new Promise((resolve,reject) => {
            const client = new MongoClient(url,{useUnifiedTopology: true});
            client.connect((err) => {
                if (err) console.log(err);
                else {
                    const db=client.db('rulers');
                    db.collection('rulers').deleteOne({_id:id},function(err,info){
                        console.log(err,info);
                        client.close();
                        resolve({ok:'Deleted'});
                    })
                }
            })
        });
    }
}