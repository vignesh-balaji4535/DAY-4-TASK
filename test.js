// 2. Do the below programs in arrow functions.

// A . Print odd numbers in an array
let array=[1,2,3,4,5,6,7,8,9,10];

let odd_num= ()=>{
  for(let i=0;i<array.length;i++){
    if((array[i]%2)==0){
      console.log(i)
    }
  }
}   
odd_num();

// B . Convert all the strings to title caps in a string array
let array1=["hi","how","are","you"];
let new_array=[];

let title_caps= ()=>{
  for(let i=0;i<array1.length;i++){
    let word=array1[i];
    word=word[0].toUpperCase()+word.slice(1);
    new_array.push(word)
}
console.log(new_array)

}
title_caps();
// C . Sum of all numbers in an array
let sum=0;
let sum_of_array=()=>{
  for(let i=0;i<array.length;i++){
   sum+=array[i]  //sum=sum+array[i]
  }
  console.log(sum)
}
sum_of_array();
// D . Return all the prime numbers in an array
let arr=[1,2,4,3,5,7,8,9,6,10,15,12,14,13];
arr.sort((a,b)=>{return a - b});

for(let i=0;i<arr.length;i++){
  if(arr[i]<=1){ arr.splice(i,1);break;}}  

let prime_num=()=>{
let is_prime;
for(let i=0;i<arr.length;i++){
is_prime=1;
for(let j=2;j<arr[i];j++){
  if(arr[i]%j===0){  is_prime=0;  break; }}
  if(is_prime!==1){arr.splice(i,1);}}
console.log(arr);}
prime_num();
// E . Return all the palindromes in an array

let word_arr=["radar","madam","scale","pop","level","array","return","rotor","refer"];
let new_word_arr=[];
let arr0=[];
let palindromes=()=>{

for(let i=0 ;i<word_arr.length;i++){
  arr0=word_arr[i].split("").reverse().join("");
if(word_arr[i]==arr0){
  new_word_arr.push(word_arr[i])
}
}
console.log(new_word_arr)
}
palindromes();