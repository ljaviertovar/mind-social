const { nanoid } = require('nanoid');
const auth = require('../auth');

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

    async function upsert(body){
        const user = {
            name: body.name,
            username: body.username,
            password: body.password,
        }

        if(body.id){
            user.id = body.id;
        } else {
            user.id = nanoid();
        }

        if(body.password || body.username){
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: user.password,
            });
        }
  
        return store.upsert(TABLA, user);
    }

    return {
        list,
        get,
        upsert,
    };
};

