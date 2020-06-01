function copyArr(arr){
    var arr2 = [];
    for(var i=0; i<arr.length; i++){
        arr2.push(arr[i])
    }
    return arr2;
}
console.log(copyArr([1,2,3]))