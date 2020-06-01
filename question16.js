function leftRotate(arr){
    // first largest nuber
    var i = 0;
    var first_max = arr[i];
    for (var i; i<arr.length; i++){
      if(arr[i]>first_max){
        first_max = arr[i]
        }
    }
    // second largest number
    var j=0;
    var second_max=arr[j];
    for(var j; j<arr.length; j++){
      if(second_max<first_max-1 && second_max<arr[j]){
        second_max = arr[j]
        }
    }
    // thired largest number
    var k=0;
    var third_max=arr[k];
    for(var k; k<arr.length; k++){
        if(third_max<first_max && third_max<second_max-1 && third_max<arr[k]){
            third_max=arr[k]
        }
    }
    console.log("first largest number is: "+first_max);
    console.log("second largest nuber is: "+second_max);
    console.log("third largest number is: "+third_max)    
}
(leftRotate([1,2,3,4,0,5]))