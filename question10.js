function smallestNum(arr){
    var i=0;
    var smlNum = arr[i];
    for(var i; i<arr.length; i++){
        if(arr[i]<smlNum){
            smlNum = arr[i];
        } 
    }
    return smlNum
}
console.log(smallestNum([2,4,9,5,20,6,1,11,7,16]))