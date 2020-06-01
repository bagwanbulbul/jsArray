function duplicateElement(arr){
    var dplElmt=[];
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){
                dplElmt.push(arr[i])

            }
        }
    }
    return (dplElmt);
}
console.log(duplicateElement(["abcd","ab","abcd"]))
console.log(duplicateElement([1,2,3,1,3,5]))