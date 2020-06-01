function ascendingOrder(arr){
    for (var i = 0; i<arr.length; i++){
      for (var j = 0; j<arr.length-1-i; j++){
        if (arr[j]>arr[j+1]){
          var temp=arr[j+1]
          arr[j+1]=arr[j]
          arr[j]=temp
          }
        }
    }
      return arr;
    }
console.log(ascendingOrder([2,4,1,0,5]))