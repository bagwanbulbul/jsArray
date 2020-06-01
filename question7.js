function evenIndex(arr){
    for(var i=0; i<arr.length; i++){
        if(i%2==0){
            console.log(arr[i])
        }
    }
}
evenIndex([1,2,3,4,5])