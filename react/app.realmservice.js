import {HTTP} from './http';

export const RealmService = {
    realms:[],
    
    verify(realm) {
        let existing = this.realms.find(r => r.id==realm.id);
        if (existing) {
            Object.assign(existing,realm);
        }
        else {
            this.realms.push(realm);
        }
    },

    getAll(){
        let self = this;
        return new Promise(function(resolve,reject) {
            HTTP.get('/api/realms').then(realms => {
                realms.forEach(b => self.verify(b));
                resolve(self.realms);
            })
        });
    },

    get(id){
        return new Promise((resolve,reject) => {
            HTTP.get('/api/realms/'+id).then(realm => {
                this.verify(realm);
                resolve(realm);
            })
        });
    },

    save(realm){
        return new Promise((resolve,reject) => {
            HTTP.put('/api/realms/'+realm.id, realm)
                .then(realm => {
                    this.verify(realm);
                    resolve(realm);
                })
                .catch(err => reject(err));
        });
    },

    create(realm){
        return new Promise((resolve,reject) => {
            HTTP.post('/api/realms', realm)
                .then(realm => {
                    this.verify(realm);
                    resolve(realm);
                })
                .catch(err => reject(err));
        });
    },

    deleteRealm(id){
        return new Promise(resolve => {
            HTTP.delete('/api/realms/'+id).then(() => {
                let index=this.realms.findIndex(b => b.id==id);
                if (index>=0) this.realms.splice(index,1);
                resolve();
            });
        })
    }
};