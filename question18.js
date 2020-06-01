var arr = [1,2,3,3,4,5,4,6,7]
for(var i=0; i<arr.length; i++){
    for(var j=0; j<arr.length; j++){
        if(arr[i]==arr[j]){
            arr.slice(j)
        }
    }
}
console.log(arr)
