const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const url = 'mongodb://localhost:27017';
const dbName = 'realms';

function connect() {
    let client = new MongoClient(url, {useUnifiedTopology: true});
    return new Promise((resolve, reject) => {
        client.connect(function(err) {
            if (err) {
                reject(err);
            }
            else {
                let db = client.db(dbName);
                resolve({client, db:client.db, realms:db.collection('realms')});
            }
        });
    })
}

module.exports = {
    verify(realm) {
        if (!realm.name) {
            return "Name is required";
        }
        realm._id = realm.id;
        delete realm.id;
        realm.created = new Date();
        delete realm.ruler;
        return null; // null indicates ok
    },

    toClient(realm) {
        realm.id = realm._id;
        delete realm._id;
        realm.ruler = '';
        return realm;
    },

    getAll() {
        console.log("Get all")
        return new Promise((resolve, reject) => {
            const client = new MongoClient(url, {useUnifiedTopology: true});
            client.connect((err) => {
                if (err) console.log(err);
                else {
                    const db = client.db('realms')
                    db.collection('realms').aggregate([
                        {$lookup: {from: "rulers",localField: "rulerId", foreignField: "_id" ,as: "rulerObject"}},
                        ]).toArray((err, data) => {
                            if (err) {
                                console.log("ERROR", err);
                            }
                            data.forEach(realm => this.toClient(realm));
                            client.close();
                            resolve(data);
                    })
                }
            })
            
            connect().then(({client, realms}) => {
                realms.aggregate([
                    {$lookup: {from: "rulers",localField: "rulerId",foreignField: "_id",as: "rulerObject"}},
                    ]).toArray((err,data) => {
                        if (err) {
                            console.log("ERROR",err);
                        }
                        data.forEach(realm => this.toClient(realm));
                        resolve(data);
                        client.close();
                })
            });
        });
    },

    get(id) {
        console.log("GET", id);
        return new Promise((resolve, reject) => {
            const client = new MongoClient(url,{useUnifiedTopology: true});
            client.connect((err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const db=client.db('realms')
                    db.collection('realms').aggregate([
                        {$match:{_id:id}},
                        {$lookup: {from: "rulers", localField: "rulerId", foreignField: "_id", as: "rulerObject"}},
                        ]).toArray((err,data) => {
                            if (err) console.log("ERROR", err);
                            data.forEach(realm => this.toClient(realm));
                            client.close();
                            resolve(data[0]);
                    })
                }
            })
        });
    },

    create(realm) {
        console.log("CREATE",realm);
        return new Promise((resolve, reject) => {
            const client = new MongoClient(url, {useUnifiedTopology: true});
            client.connect((err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const db = client.db('realms');
                    realm._id = new ObjectID().toHexString();
                    db.collection('realms').insertOne(realm, (err, info) =>{
                        console.log(err, info);
                        client.close();
                        resolve(this.toClient(realm));
                    });
                }
            })
        });
   },

    update(realm) {
        console.log("CREATE", realm);
        return new Promise((resolve, reject) => {
            const client = new MongoClient(url,{useUnifiedTopology: true});
            client.connect((err) => {
                if (err) console.log(err);
                else {
                    const db = client.db('realms');
                    let id = realm._id;
                    db.collection('realms').updateOne({_id: id}, {$set: realm}, (err, info) => {
                        console.log(err, info);
                        client.close();
                        resolve(this.toClient(realm));
                    })
                }
            })
        });
    },

    deleteRealm(id){
        return new Promise((resolve, reject) => {
            const client = new MongoClient(url, {useUnifiedTopology: true});
            client.connect((err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const db = client.db('realms');
                    db.collection('realms').deleteOne({_id:id}, function(err, info) {
                        console.log(err, info);
                        client.close();
                        resolve({ok: 'Deleted'});
                    })
                }
            })
        });
    }
}