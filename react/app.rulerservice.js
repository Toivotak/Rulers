import {HTTP} from './http';

export const RulerService = {

    getAll(){
        return HTTP.get('/api/rulers');
    }

}