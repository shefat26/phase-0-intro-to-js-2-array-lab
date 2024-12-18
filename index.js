// Write your solution here!


const cats = ["Milo","Otis", "Garfield"];

function destructivelyAppendCat(name){

    
   cats.push(name)

}
destructivelyAppendCat("Ralph")

//

function destructivelyPrependCat(name){

    
   cats.unshift(name)

}
destructivelyPrependCat()



//

function destructivelyRemoveLastCat(name){


    cats.pop()

}
destructivelyRemoveLastCat()


//

function destructivelyRemoveFirstCat(name){


    cats.shift()

}
destructivelyRemoveFirstCat()



//

function appendCat(name){


    return [...cats, name];

}
appendCat()



//

function prependCat(name){


    return [name, ...cats];

}
prependCat()


//

function  removeLastCat(name){


   return cats.slice(0,-1)

}
removeLastCat()


function  removeFirstCat(name){


    return cats.slice(1)

}
removeFirstCat()




