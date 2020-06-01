function rightRotate(arr){
    var i=0;
    var n=2;
    while(i<n){
        arr.unshift(arr.pop())
        i++
    }
    return arr;
}
console.log(rightRotate([1,2,3,4,5]))