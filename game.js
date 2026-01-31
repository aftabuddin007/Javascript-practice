// function guseGame(n){
//     let randomNum = Math.floor(Math.random()*10)+1;
//     if(n===randomNum){
//         console.log("congratulation you won the game")
//     }else{
//         console.log("sorry goodluck in next time")

//     }
// }
// guseGame(7)
// function findIndex(arr,element){
//     return arr.indexOf(element)
// }
// var n = [45,6,7,8,9,123,3]
// console.log(findIndex(n,3))
// function reverseArray(arr){
//     return arr.reverse()
// }
// var arr = [1,2,3,4,5,67,8,9]
// console.log(reverseArray(arr))
function reverseArray(arr){
    var reverseArray = []
    for(var i = arr.length - 1; i>=0;i--){
        reverseArray.push(arr[i])
    }
    return reverseArray;
}
var arr = [1,2,3,4,56,7,8]

console.log(reverseArray(arr))