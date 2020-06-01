function numberOfelement(arr){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        count = count+1
    }
    return count;
}
console.log(numberOfelement([1,2,3,4]))