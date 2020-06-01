function oddIndex(arr){
    for(var i=0; i<arr.length; i++){
        if(i%2==1){
            console.log(arr[i])
        }
    }
}
oddIndex([1,2,3,4,5])