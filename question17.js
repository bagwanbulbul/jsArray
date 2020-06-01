function checkEvenOddNumber(arr){
    var even_number=[];
    var odd_number=[];
    for(var i=0; i<arr.length; i++){
            if(arr[i]%2==0){
                even_number.push(arr[i]);
            }
            else{
                odd_number.push(arr[i]);
            }
        }
        console.log("even number: "+even_number);
        console.log("odd number: "+odd_number)
}
checkEvenOddNumber([1,2,3,4,5,6]);