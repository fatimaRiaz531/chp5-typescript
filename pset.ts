//  3 methods of arrays


let arr = [23,34,66];

// 1)                      array map method

let a = arr.map((value, index, array)=>{
    console.log(value,index,array);
    return value +index                                 // array return krta hai
    
})
console.log(a);

// //  2)                        array filter method

let arr2 =[23,34,66,2,5,8];
let a2= arr2.filter((a)=>{                                  // array return krta hai
    return a<10
});
console.log(a2 , arr2);


// //  3)                                           array reduce method:

let arr3 =[1,3,7,1,6];
let newarr3=arr3.reduce((fatima, riaz)=>{
    return fatima + riaz
});
console.log(newarr3);                                  // value return krta hai


// Q1 :  create an array of numbers and take input from the user to add numbers to this array 

let arr4 = [1,2,3,4,5,6];
let a = prompt("Enter a number");
a = Number.parseInt(a);                     //   a as string
arr.push(a);
console.log(arr4);



// Q2:   keep adding numbers to the array in 1 until 0 is added to the array 


let arr5 = [1,2,3,4,5,6];
let a;
do{
    a = prompt("Enter a number");
    a = Number.parseInt("a");                     //   a as string
    arr.push(a);
}while(a !=0){
    console.log(arr);
}


// Q3:  filter for numbers  divisible by 10 from a given array



let arr6 = [1,2,3,4,5,6,40,50,850]
let n= arr.filter((x)=>{
    return x % 10 == 0
})

console.log(n);


// Q4: create an array of squar of given number


let arr7 = [1,2,3,4,5,6,40,50,850];
let p= arr.map((x)=>{
        return x * x
})
    
console.log(p);


// Q5:  use reduce to calculate factorial of a given  number from an array of first n natural number
// (n bring the number whose factorial needs to be calculated)


let arr8 = [1,2,3,4,5,6];
let f= arr.reduce((x1 , x2)=>{            // reduce 2 function ko multiply krta h
        return x1 * x2
})
    
console.log(f);








