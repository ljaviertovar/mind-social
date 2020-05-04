const nanoid = require('nanoid');
const user = require('./index.js');

const TABLA ='user';

module.exports = function(injectedStore){

    let store = injectedStore;
    if(!store){
        store = require('../../../store/dummy.js');
    }

    function list(){
        return store.list(TABLA);
    }

    function get(id){
        return store.get(TABLA, id);
    }

    function upsert(body){
        const { name } = body;

        if(body.id){
            user.id = body.id;
        } else {
            user.id = nanoid();
        }

        return store.upsert(TABLA, user);
    }

    return {
        list,
        get,
        upsert,
    };
};

