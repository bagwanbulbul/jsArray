var arr = [2,4,9,5,20,6,11,7,16,21]
var i=0;
var largelement = arr[i];
for(var i; i<arr.length; i++){
    if(arr[i]>largelement){
        largelement = arr[i];
    } 
}
console.log(largelement)