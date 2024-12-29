// const numbers = [80, 60, 10, 50, 30, 100, 0, 50];
// const targetSum = 100;

// function findPairs(arr, target) {
//     const pairs = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 pairs.push([arr[i], arr[j]]);
//             }
//         }
//     }
//     return pairs;
// }

// const result = findPairs(numbers, targetSum);
// console.log("Pairs with sum 100:", result);


//   var input= "hello world!"
//   var mark="!"

//   function count(input,mark){
//     var ob={}
//     for(var i=0;i<=input.length-1;i++){
//         if(ob[input[i]]){
//             ob[input[i]]++;
//         }
//         else if(input[i]==mark){
//             continue;

//             }
        
//         else{
//             ob[input[i]]=1;
//         }

//     }
//     console.log(ob)

//   }
// count(input,mark)


// var array=[1,2,3,4,6,7]

// function missing(array){
//     var i=0;
//     while(i<array.length){
//         if(array[i] != i+1){
//             return i+1;y

//         }
//         i++


//     }
  

// }

// console.log(missing(array))


// var array = [1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 14, 15, 16];

// function findMissingNumbers(array) {
//     let missingNumbers = [];  // Array to store missing numbers
//     let expectedNumber = 1;  // Start from 1

//     // Loop through the array
//     for (let i = 0; i < array.length; i++) {
//         // Check if the current element matches the expected number
//         while (array[i] !== expectedNumber) {
//             missingNumbers.push(expectedNumber);  // Add missing number
//             expectedNumber++;  // Increment expected number
//         }
//         expectedNumber++;  // Move to the next expected number
//     }

    

//     return missingNumbers;
// }

// console.log(findMissingNumbers(array));  // Output: [5, 9, 13]


// var array=[1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 14, 15, 16]


// function missing(array){
//     missing=[]
//     var expectednumber=1

//     for(var i=0;i<=array.length-1;i++){
//         while(array[i] !== expectednumber){
//             missing.push(expectednumber);
//             expectednumber++

//         }
//         expectednumber++
//     }
//     return missing;

// }

// console.log(missing(array))




// function star(){
//     for(var i=1;i<=5;i++){
//         var star="*";
//         console.log(star.repeat(i))
        
//     }
    
//     console.log("solution")
    
// }

// star()
// function star(){
//     for(var i=1;i<=5;i++){
//         var space=" "
//         var star="*"
//         console.log(space.repeat(5-i),star.repeat(i))
//     }
    
// }

// star()
// function star(){
//     for(var i=5;i>=1;i--){
//         var space=" "
//         var star="*"
//         console.log(space.repeat(5-i),star.repeat(i))
//     }
    
// }

// star();

// function star(){
//     for(var i=5;i>=1;i--){
//         var space=" "
//         var star="* "
//         console.log(star.repeat(i),space.repeat(5-i))
//     }
    
// }
// star();


// function star(){
//     for(var i=1;i<=5;i++){
//         var star="* "
//         var space=" "
//         console.log(space.repeat(5-i),star.repeat(i))
        
//     }
    
// }

// star()


// var a=20;
// var b=40;
// var temp;

// temp=a;
// a=b;
// b=temp;

// console.log("a is",a,"b is",b)



// without isng third variable


// a=29
// b=21;

// a=a+b--a=50
// b=a-b--b=29
// a=50-29


