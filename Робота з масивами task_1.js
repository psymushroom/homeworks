const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function myBlend(arr) {
let length = arr.length;

for (let i = 0; i < length; i++){
const j = Math.floor(Math.random() * (length - i)) + i;
let temp = arr[i]
arr[i] = arr[j];
arr[j] = temp;

}

return arr
}
myBlend(arr);
console.log(arr);