function frequency(arr){
    for(var i=0; i<arr.length; i++){
        var count=0
        for(var j=0; j<arr.length; j++){
            if(arr[i]==arr[j]){
                count = count+1
            }
        }
        console.log("("+arr[i],count+")")
    }
}
frequency([2,3,2,3])