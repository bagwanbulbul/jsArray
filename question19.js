var arr = [2,4,9,5,20,6,11,7,16]
var i=0;
var largNum = arr[i];
for(var i; i<arr.length; i++){
    if(arr[i]>largNum){
        largNum = arr[i];
    } 
}
console.log(largNum)