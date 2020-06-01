function leftRotate(arr){
    // var n = prompt("enter the number of times an array should we roated")
    var n=3;
    for(var i =0; i<=n; i++){
        var num1 = arr[0]
        for(var j=0; j<arr.length-1; j++){
            arr[j]=arr[j+1];
            arr[arr.length-1]=num1
        }

    }
    return (arr);
}
console.log(leftRotate([1,2,3,4,5]))