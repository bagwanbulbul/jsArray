function reverseOrder(arr){
    var reverse=[]
    for(var i=0; i<arr.length; i++){
        reverse.unshift(arr[i])
    }
    return reverse;
}
console.log(reverseOrder([1,2,3,4]))