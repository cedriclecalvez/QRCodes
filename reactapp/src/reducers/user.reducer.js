export default function ( user = {}, action) {

    if (action.type === 'user'){
        return action.user;
        
    }else{
        return user;
    }
}