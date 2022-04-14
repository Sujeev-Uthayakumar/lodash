function findMiddle(array, even=false){
    if(Array.isArray(array) === false){
        throw new Error("The array parameter must be of type array");
    }

    if(array.length < 1){
        throw new Error("The array has to have a length greater than one");
    }

    if(even === false){
        return array[Math.floor(array.length / 2)];
    }else if(even === true && array.length % 2 === 1){
        return array[Math.floor(array.length / 2)];
    }else{
        return [array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]];
    }
}

export default findMiddle;