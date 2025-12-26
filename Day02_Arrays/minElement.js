let arr = [12,34,5,67,8];
let min = arr[0];

for (let i=1; i<arr.length; i++){
    if(arr[i] < min){
        min = arr[i];
    }
}

console.log("The minimum element in the array is: " + min);