import HttpHolder from './HttpHolder';

export function GetAll(){
    return HttpHolder().get('api/negozio/fetch');
}

export function GetSingle(id){
    var request ={
        id
    };
    return HttpHolder().post('api/negozio/get', request);
}