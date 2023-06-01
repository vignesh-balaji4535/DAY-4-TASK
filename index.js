//1.Do the below programs in anonymous function & IIFE
// A.Print odd numbers in an array
// anonymous function
let array=[1,2,3,4,5,6,7,8,9,10];

let odd_num=function (){
  for(let i=0;i<array.length;i++){
    if((array[i]%2)==0){
      console.log(i)
    }
  }
}   
odd_num();

//IIEF
(function (){
  for(let i=0;i<array.length;i++){
    if((array[i]%2)==0){
      console.log(i)
    }
  }
}   )

();

//B.Convert all the strings to title caps in a string array
// anonymous function
let array1=["hi","how","are","you"];
let new_array=[];

let title_caps=function (){
  for(let i=0;i<array1.length;i++){
    let word=array1[i];
    word=word[0].toUpperCase()+word.slice(1);
    new_array.push(word)
}
console.log(new_array)

}
title_caps();
//IIEF
new_array=[];
(function (){
  for(let i=0;i<array1.length;i++){
    let word=array1[i];
    word=word[0].toUpperCase()+word.slice(1);
    new_array.push(word)
}
console.log(new_array)

})();

//C.Sum of all numbers in an array
//anonymous function
let sum=0;
let sum_of_array=function (){
  for(let i=0;i<array.length;i++){
   sum+=array[i]  //sum=sum+array[i]
  }
  console.log(sum)
}
sum_of_array();
//IIEF
sum=0;
(
  function (){
    for(let i=0;i<array.length;i++){
     sum+=array[i]  //sum=sum+array[i]
    }
    console.log(sum)
  })();


//D.Return all the prime numbers in an array  
//anonymous function

let arr=[1,2,4,3,5,7,8,9,6,10,15,12,14,13];
arr.sort((a,b)=>{return a - b});

for(let i=0;i<arr.length;i++){
  if(arr[i]<=1){ arr.splice(i,1);break;}}  

let prime_num=function (){
let is_prime;
for(let i=0;i<arr.length;i++){
is_prime=1;
for(let j=2;j<arr[i];j++){
  if(arr[i]%j===0){  is_prime=0;  break; }}
  if(is_prime!==1){arr.splice(i,1);}}
console.log(arr);}
prime_num();

//IIEF

let arr1=[1,2,4,3,5,7,8,9,6,10,15,12,14,13];
arr1.sort((a,b)=>{return a - b});

for(let i=0;i<arr1.length;i++){
  if(arr1[i]<=1){ arr1.splice(i,1);break;}}  

(function (){
  let is_prime;
  for(let i=0;i<arr1.length;i++){
  is_prime=1;
  for(let j=2;j<arr1[i];j++){
    if(arr1[i]%j===0){  is_prime=0;  break; }}
    if(is_prime!==1){arr1.splice(i,1);}}
  console.log(arr1);}
 )();

 //E. Return all the palindromes in an array
//anonymous function
let word_arr=["radar","madam","scale","pop","level","array","return","rotor","refer"];
let new_word_arr=[];
let arr0=[];
let palindromes=function (){

for(let i=0 ;i<word_arr.length;i++){
  arr0=word_arr[i].split("").reverse().join("");
if(word_arr[i]==arr0){
  new_word_arr.push(word_arr[i])
}
}
console.log(new_word_arr)
}
palindromes();

//IIEF
(function (){

  for(let i=0 ;i<word_arr.length;i++){
    arr0=word_arr[i].split("").reverse().join("");
  if(word_arr[i]==arr0){
    new_word_arr.push(word_arr[i])
  }
  }
  console.log(new_word_arr)
  })();

  // F. Return median of two sorted arrays of the same size
//anonymous function
let inp1=[10,12,14,16,18,20];
let inp2=[11,13,15,17,19,21];
let new_inp=[];
let a,b,middle_num=0;
new_inp=inp1.concat(inp2);
new_inp.sort((a,b)=>{return a-b});

let middle_num_in_arr=function(){
for(let i=0;i<new_inp.length;i++){
    if((i+1)==(new_inp.length/2)){
        a=parseInt( new_inp[i]);
    }
    else if((i+1)==(1+new_inp.length/2)){
        b=parseInt( new_inp[i]);
        break;
    }
}
middle_num=(a+b)/2;

console.log(middle_num)};

middle_num_in_arr();

//IIEF
(function(){
    for(let i=0;i<new_inp.length;i++){
        if((i+1)==(new_inp.length/2)){
            a=parseInt( new_inp[i]);
        }
        else if((i+1)==(1+new_inp.length/2)){
            b=parseInt( new_inp[i]);
            break;
        }
    }
    middle_num=(a+b)/2;
    
    console.log(middle_num)})
    ();

// G .Remove duplicates from an array
//anonymous function

let fruits = ["apple", "mango","apple", "orange", "mango", "mango"];
let duplicates_in_arr=function(){
for(let i=0;i<fruits.length;i++){
    for(let j=1;j<=fruits.length;j++){
     if(fruits[i]==fruits[j]){
        fruits.splice(j,1);
     }
    }
}
console.log(fruits)}

duplicates_in_arr();

//IIEF

(function(){
  for(let i=0;i<fruits.length;i++){
      for(let j=1;j<=fruits.length;j++){
       if(fruits[i]==fruits[j]){
          fruits.splice(j,1);
       }
      }
  }
  console.log(fruits)})
  ();


  // H .Rotate an array by k times

  let k=4;
  let arr_rotate=[1,2,3,4,5,6,7,8,9,10];
  let value;
  
  let arrya_rotate=function(){
  
    for(let i=0;i<4;i++){
      value=arr_rotate.shift();
      arr_rotate.push(value);
  
    }
    console.log(arr_rotate)
  
  }
    arrya_rotate();

    //IIEF

    (function(){
  
      for(let i=0;i<4;i++){
        value=arr_rotate.shift();
        arr_rotate.push(value);
    
      }
      console.log(arr_rotate)
    
    })
    ();

    