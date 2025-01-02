// 1.
// swapping of 2 number with temp

// var a=25;
// var b=30;
// var temp;

// temp=a;
// a=b
// b=temp;
// console.log(a,b)

// without using third variable

// var a=89
// var b=25

// a=a+b;
// b=a-b;
// a=a-b

// console.log(a,b)



// 2.finding pairs whose sum=100

// var array=[10,25,55,45,90,100]

// function pair(array){
//     var emp=[];
//     for(var i=0;i<=array.length-1;i++){
//         for(var j=i+1;j<=array.length-1;j++){
//             if(array[i]+array[j]==100){
//                 emp.push([array[i],array[j]])
//             }
//         }
//     }
//     console.log(emp)
// }
// pair(array)


// var array=[10,25,55,45,90,100]
// function pair(array){
// var emp=[]
// var i=0;
// while(i<=array.length-1){
    
//     var j=i+1
//     while(j<=array.length-1){
//         if(array[i]+ array[j]==100){
//             emp.push([array[i],array[j]])

//         }
//         j++

//     }


//     i++



// }
// console.log(emp)

// }

// pair(array)

// 3.finding the count of char in the string

// var char="moh!ammed";

// function count(char){
// var ob={}

// for(var i=0;i<=char.length-1;i++){
//     if(ob[char[i]]){
//         ob[char[i]]++;
//     }

//     else if(char[i]=="!"){
//         continue
//     }



//     else{
//         ob[char[i]]=1;
//     }
// }
// console.log(ob)

// }
// count(char)



// var char="moh!ammed";

// function count(char){
// var ob={}
// var i=0;
// while(i<=char.length-1){
//     if(ob[char[i]]){
//                 ob[char[i]]++;
//             }
        
//             else if(char[i]=="!"){
//                 i++
//                 continue;
//             }
        
        
        
//             else{
//                 ob[char[i]]=1;
//             }

//             i++


// }
// console.log(ob)


// }
// count(char)


// var nos=[1,2,3,4,6,7,8]
// function missing(nos){
//     for(var i=0;i<=nos.length-1;i++){
//         if(nos[i]!==i+1){
//             return i+1;
//         }
//     }
//     console.log("no missing")
// }
// console.log(missing(nos))


// var nos=[1,2,3,5,6,8,9]

// nos[0]=1    en=1
// nos[1]=2    en=2
// nos[2]=3    en=3
// nos[3]=5    en=4
// nos[4]=6    en=5
// function missing(nos){
//     var expectednumber=1
//     var array=[]

//     for(var i=0;i<=nos.length-1;i++){
//         while(nos[i]!==expectednumber){
//             array.push(expectednumber)
//             expectednumber++

//         } 
//         expectednumber++


//     }
//     console.log(array)

// }
// missing(nos)

// var nos=[1,2,3,5,6,8,9]

// function missing(nos){
//     var expectednumber=1
//     var array=[]

//     var i=0;
//     while(i<=nos.length-1){
//         while(nos[i]!==expectednumber){
//             array.push(expectednumber);
//             expectednumber++


//         }
//         expectednumber++
//         i++

        


//     }
//     console.log(array)

    
// function generatePattern(n) {
//     let result = "";
//     let num = 1;
//     let starCount = 5;
//     let totalLength = 0;

//     while (num <= n) {
//         // Print the next 5 numbers or up to n
//         for (let i = 0; i < 5 && num <= n; i++) {
//             result += num++;
//             totalLength++;
//         }

//         // Add stars after the numbers, if total length doesn't exceed n
//         if (totalLength < n) {
//             let remainingSpace = n - totalLength;
//             let starsToAdd = Math.min(starCount, remainingSpace);
//             result += "*".repeat(starsToAdd);
//             totalLength += starsToAdd;
//         }

//         // Increase the star count for the next block
//         starCount++;
//     }

//     console.log(result);
// }

// // Test the function with different values of n
// generatePattern(10); // For n = 10
// generatePattern(15); // For n = 15
// generatePattern(20); // For n = 20

// var number=131


// function palindromechecker(num){
//     var str=num.toString()
//     return str===str.split("").reverse().join("")

// }


// function palindromechecker2(number){
//     number++;
//     while(!palindromechecker(number)){
//         number++
//     }
//     return number

// }

// console.log(palindromechecker2(number))





// var number=185


// function palindromechecker(num){
//     var str=num.toString()
//     return str===str.split("").reverse().join("");

// }

// function palindromechecker2(number){
//     number++
//     while(!palindromechecker(number)){
//         number++;
//     }
//     return number;
// }
// console.log(palindromechecker2(number))




// function pyramid(){
//     var space=" "
//     var star="*"
//     for(var i=1;i<=5;i++){
        
//             console.log(space.repeat(5-i),star.repeat(i*2-1))
//         }







//     }
    






// pyramid()


// function pattern(){
//     var code=65
//     var str=""
//     var i=1;
//     while(i<=5){
//         var j=1;
//         while(j<=i){
//             str=str+String.fromCharCode(code)
//             j++
//         }
//         str=str+"\n"
//         i++


//     }

//     console.log(str)
// }
// pattern()


function pattern(){
    var code=65
    var space=" "
    for(var i=1;i<=5;i++){
        console.log(space.repeat(5-i),String.fromCharCode(65).repeat(i))
    }
}
pattern()




function generatePattern(n) {
    if (n < 1 || !Number.isInteger(n)) {
        return "Please enter a positive integer.";
    }

    let pattern = "";
    let count = 0;

    // First segment: First 5 numbers
    for (let i = 1; i <= 5 && count < n; i++) {
        pattern += i;
        count++;
    }

    // Second segment: 5 stars
    for (let i = 1; i <= 5 && count < n; i++) {
        pattern += "*";
        count++;
    }

    // Third segment: Next 5 numbers
    for (let i = 11; i <= 15 && count < n; i++) {
        pattern += i;
        count++;
    }

    // Fourth segment: Remaining stars
    for (let i = 0; count < n; i++) {
        pattern += "*";
        count++;
    }
    
    

    return pattern;
}

// Example usage
const n = 18; // Change this value to test other inputs
console.log(generatePattern(n));
