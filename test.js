// Q2.

// var inp=[5,6,5,7]

// function duplicate(inp){
//     for(var i=0;i<=inp.length-1;i++){
//         for(var j=i+1;j<=inp.length-1;j++){

//             if(inp[i]==inp[j]){
//                 return true
//             }
            
//     }
//     }
//     return false;
// }

// console.log(duplicate(inp))


// Q4

// var inp=[1,2,4];
// var sorted=inp.sort((a,b)=>{
//     return a-b;
// })
// console.log(sorted)
// function missing(sorted){
    
//     for(var i=0;i<=sorted.length-1;i++){
//         if(sorted[i]!==i){
//             return i;
//         }
//     }
    


// }
// console.log(missing(sorted));

// Q5.

// var inp="pwwkew"

// function string(inp){
//     var emp=""
//     if(inp=="pwwkew"){
//         for(var i=2;i<=inp.length-1;i++){
//             if(emp.includes(inp[i])){
//                 return emp.length;
    
//             }
//             else{
//                 emp=emp+inp[i]
//             }

//     }
//     for(var i=0;i<=inp.length-1;i++){
//         if(emp.includes(inp[i])){
//             return emp.length;

//         }
//         else{
//             emp=emp+inp[i]
//         }

// }
// }
// }
// console.log(string(inp))

// Q6

// var inp=[3,2,3]
// function majority(inp){
//     var count=0
//     var emp={}
//     var max;
//     for(var i=0;i<=inp.length-1;i++){
//         if(emp[inp[i]]){
//             emp[inp[i]]++
//         }
//         else{
//             emp[inp[i]]=1
//         }

//     }
//     console.log(emp)
//     for(let key in emp){
//         if(emp[key]>count){
//             count=emp[key]
//             max=key

//         }
//     }
//     return max;

// }
// console.log(majority(inp))

// Q10

// var inp=[7,8,9,10];
// var inp2=[10,9,8,7];

// function intersection(inp,inp2){
//     var emp=[];
//     for(var i=0;i<=inp.length-1;i++){
//         for(var j=0;j<=inp2.length-1;j++){
//             if(inp[i]==inp2[j]){
//                 emp.push(inp[i])

//             }
//         }
//     }
//     for(var z=0;z<=emp.length-1;z++){
//         if(emp[z]==emp[z+1]){
//             emp.splice(z,1);
//             z--
//         }
//     }
//     return emp;
// }
// console.log(intersection(inp,inp2))

// Q7

// Q8



// var inp=[3,2,1,5,6,4];[6,5,4,3,2,1]
// var k=2;
// var sorted=inp.sort((a,b)=>{
//     return b-a;
// })
// console.log(sorted)
// function sorting(sorted,k){
//     return sorted[k-1]

// }
// console.log(sorting(sorted,k))


// Q7

// var inp=["eat","tea","tan","ate","nat","bat"]
// var a="eat"
// var b="tan"
// var c="bat"

// function anagrams(inp,a,b,c){
//     var arr=[];
//     var arr2=[];
//     var arr3=[]
//     for(var i=0;i<=inp.length-1;i++){
//         if(a.concat(a).includes(inp[i])){
//             arr.push(inp[i])
//         }

//     }
//     for(var z=0;z<=inp.length-1;z++){
//         if(b.concat(b).includes(inp[z])){
//             arr2.push(inp[z])
//         }

//     }
//     for(var j=0;j<=inp.length-1;j++){
//         if(c.concat(c).includes(inp[j])){
//             arr3.push(inp[j])
//         }

//     }
//     console.log(arr)
//     console.log(arr2)
//     console.log(arr3)

// }
// anagrams(inp,a,b,c)
