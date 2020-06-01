function sumOfArr(arr){
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum=sum+arr[i]
    }
    return sum;
}
console.log(sumOfArr([1,2,3,6]))