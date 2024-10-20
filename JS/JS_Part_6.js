// Q1. Create a function that will create a dice.
function dice(){
    console.log(`Dice number is : ${Math.floor(Math.random()*6)+1}`);
}

dice();


//Q2. Create a function that will print the average of 3 numbers as arguments.
function averageNum(num1,num2,num3){
    console.log("Average number is : ");
    console.log((num1+num2+num3)/3);
}

averageNum(1,2,3);


// Q3. Create a function that prints the multiplication table of a number.
function multiplicationTable(n){
    for(let i=1;i<=10;i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }
}
console.log("Multiplication table is : ");
multiplicationTable(4);


// Q4. Create a function that will return the sum of numbers from 1 to n.
function sumN(n){
    let s=0;
    for(let i=1;i<=n;i++){
        s=s+i;
    }
    return s;
}
console.log(`The sum of the number is : ${sumN(3)}`);


// Q5. Create a function that will take an array as argument and return the concatenation of all strings.
function concatArr(arr){
    console.log(arr);
    let str='';
     for(let i=0;i<=arr.length;i++){
        str=str+arr[i];
     }
     return str;
}
console.log("Concatination String is : "+concatArr(["Manmay","Anwesha"]));


//Q6. Create a calculator object and perform basic operations.
const calculator={
   add(n1,n2){
      return n1+n2;
   },
   subs(n1,n2){
      return n1-n2;
   },
   multi(n1,n2){
      return n1*n2;
   },
   div(n1,n2){
      return n1/n2;
   }
};
console.log(calculator.add(1,2));
console.log(calculator.subs(1,2));
console.log(calculator.multi(1,2));
console.log(calculator.div(1,2));