function receivesAFunction(callback){
    console.log(callback());

}
receivesAFunction(function() {return "hey"})

function returnsANamedFunction(){
   return function receivesAFunction(){}
}

function returnsAnAnonymousFunction(){
    return function() {  // The function returns when you call it
        return "something"
    };
}