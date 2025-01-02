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




// function findLargestThree(arr) {
//     if (arr.length < 3) {
//       return "Array must have at least 3 elements";
//     }
  
//     let first = -Infinity;
//     let second = -Infinity;
//     let third = -Infinity;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > first) {
//         third = second;
//         second = first;
//         first = arr[i];
//       } else if (arr[i] > second  && arr[i]!==first) {
//         third = second;
//         second = arr[i];
//       } else if (arr[i] > third) {
//         third = arr[i];
//       }
//     }
  
//     return { largest: first, secondLargest: second, thirdLargest: third };
//   }
  
//   // Example usage:
//   let numbers = [10,70,40,120,30];
//   let result = findLargestThree(numbers);
//   console.log(result);
  


// var arr=[10,70,40,120,30]


// function xyz(arr){
//     var largest=-Infinity;
//     var secondlargest=-Infinity;
//     var thirdlargest=-Infinity;
    
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             thirdlargest=secondlargest;
//             secondlargest=largest;
//             largest=arr[i]
//         }
//         else if(arr[i]>secondlargest && arr[i]!==largest){
//             thirdlargest=secondlargest;
//             secondlargest=arr[i];
            
            
//         }
//         if(arr[i]> thirdlargest && arr[i]!==secondlargest && arr[i]!== largest){
//             thirdlargest=arr[i]
            
//         }
//     }
    
//     console.log(arr)
//     console.log(largest,secondlargest,thirdlargest)
    
    
// }


// xyz(arr)


// palindrome

// var word="madamsa"

// function palindrome(word){
//     for(var i=0;i<=Math.floor(word.length/2);i++){
//         if(word[i] !== word[word.length-i-1]){
//             return "Not a palindrome"
//         }
//     }
//     return "palindrome"
    
// }

// console.log(palindrome(word))


// function alphabetpattern(){
//     var str=""
//     var count=65
    
    
//     for(var i=1;i<=5;i++){
//         for(var j=1;j<=5;j++){
//             str=str+String.fromCharCode(count)+" "
//             count ++;
//         }
        

//         str=str + "\n"
        
        
//     }
//     console.log(str)
    
    
    
// }

// alphabetpattern()





// function alphabetpattern(){
//     var str=""
//     var count=65
    
    
//     for(var i=1;i<=5;i++){
//         for(var j=1;j<=5;j++){
//             str=str+String.fromCharCode(count)+" "
//             count ++;
//         }
//         count=65;
        

//         str=str + "\n"
        
        
//     }
//     console.log(str)
    
    
    
// }

// alphabetpattern()



// function alphabetpattern(){
//     var str=""
//     var count=65
    
    
//     for(var i=1;i<=5;i++){
//         for(var j=1;j<=i;j++){
//             str=str+String.fromCharCode(count)+" "
//             count ++;
//         }
        

//         str=str + "\n"
        
        
//     }
//     console.log(str)
    
    
    
// }

// alphabetpattern()



// function numbers(){
//     str=""
//     var count=1
//     for(var i=5; i>=1;i--){
//         for(var j=1;j<=i;j++){
//             str=str + count + "";



//         }
//         count++;
//         str=str +"\n"
//     }

//     console.log(str)
// }

// numbers();


// function numbers(){
//     str=""
//     var count=1
//     for(var i=5; i>=1;i--){
//         for(var j=1;j<=i;j++){
//             str=str + count + "";
//             count++



//         }
        
//         str=str +"\n"
//     }

//     console.log(str)
// }

// numbers();




// function numbers(){
//     str=""
//     var count=5
//     for(var i=5; i>=1;i--){
//         for(var j=1;j<=i;j++){
//             str=str + count + "";
//             count--



//         }
//         count=5;
        
//         str=str +"\n"
//     }

//     console.log(str)
// }

// numbers();




// let n = 5; 
// for (let i = 1; i <= n; i++) { 
// 	let str = "* "; 
// 	let space = ' '; 
// 	console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
// }


// let n = 5; 
// for (let i = n; i >= 1; i--) { 
// 	let str = "* "; 
// 	let space = ' '; 
// 	console.log(space.repeat((n - i)) + str.repeat(i*2-1)); 
// }


// swapping with using 3 variable


// var a=10;
// var b =20
// var temp;

// temp=a;
// a=b;

// b=temp

// console.log(a,b)
// 1
// *
// 12
// **

// function pattern(){
    
//     for(var i=1;i<=5;i++){
//         str=""
//         for(var j=1;j<=i;j++){
//             str=str + j



//         }
//         console.log(j)
//         console.log("*".repeat(j))




//     }
// }
// pattern()




// function pattern(){
//     str="*"
//     var i=1;
//     while(i<=5){
//         console.log(str.repeat(i))
//         i++
//     }
// }
// pattern()


// function pattern() {
//     let result = "";

//     // Append numbers 1 to 5
//     for (let i = 1; i <= 5; i++) {
//         result += i + ",";
//     }

//     // Append stars (5 times)
//     result += ", "; // Comma and space before stars
//     for (let j = 1; j <= 5; j++) {
//         result += "* ";
//     }

//     // Append numbers 11 to 15
//     for (let k = 11; k <= 15; k++) {
//         result += k + ",";
//     }

//     // Append stars (4 times)
//     for (let l = 1; l <= 4; l++) {
//         result += "* ";
//     }

//     // Print the final result
//     console.log(result.trim());
// }

// pattern();


let a={};
let b={key:"b"}
let c={key:"c"}
a[b]=123
a[c]=456
console.log(a[b])