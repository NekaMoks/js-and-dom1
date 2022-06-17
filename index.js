//1.) Design a for loop that returns an array of even numbers from 1-100
function getEvenNumbers() {
        var line=[];

for (var i = 2; i <= 100; i += 2) {
  if (line.length == 5) {
    console.log(line);
    line=[];
  }
  line.push(i);
}
console.log(line);
}

getEvenNumbers();




// 2.) Create a function that returns even numbers between two numbers A and B
let a = 5
let b = 50

function evenNum(a, b) {
    for (let i = a; i < b; i++) {
        if (i%2===0){
            console.log(i)
        }
    }
}
evenNum(a,b);



/* 3.) When would you use a conditional statement? (a)when you want to reuse a set of statements multiple times (b)when you want your code to choose between multiple numbers © when you want to group data together (d) when you want to loop through a group of statements.

Answer = (b)when you want your code to choose between multiple numbers */



//4.) Create a function with a function name firstFunction() and return the sum of two integers(numbers)
function firstFunction(int1, int2) {
    let sum = int1 + int2;
    return sum;

}
console.log(firstFunction(35, 2));
firstFunction();



//5.) Create a function with a function name printSum() and print the sum of an array.
function printSum(arrays) {
    var printSum = 0;
        for (let i = 0; i < arrays.length; i++) {
            var elements = arrays [i];
            printSum = printSum + elements;
        }
    return printSum;
 
}
const arrays = [2,3,4,5,6,4,6,7,8,9];
console.log(printSum(arrays));




//6.) Create a function that returns an array of the names of 10 of your course mates
  let mate1 = "Abidemi Aderinto"
  let mate2 = "Omolola Akande"
  let mate3 = "Udo Ijibike"
  let mate4 = "Damilola Idris"
  let mate5 = "Sam Yinks"
  let mate6 = "Adaobi Ezelioha"
  let mate7 = "Olayinka Bakare"
  let mate8 = "Victoria Abodunrin"
  let mate9 = "Victor Olorunsola"
  let mate10 = "Unyime Usen"
  let courseMatesNames = [mate1, mate2, mate3, mate4, mate5, mate6, mate7, mate8, mate9, mate10];

function courseMates() {
    console.log(courseMatesNames)
}
courseMates();




//7.) Answer the following:
//Add an element to the end of this array [1,2,4]
const array1 = new Array(1,2,4);
array1.push (10);
console.log (array1);

// Remove the last element in this array [1,2,3,8]
const array2 = new Array(1,2,3,8);
array2.pop ();
console.log (array2);

//Remove the first element in this array [23,77,80,45]
const array3 = new Array(23,77,80,45);
array3.shift ();
console.log (array3);

//Add an element to the beginning of the array [[20,30,80],[10,50,55]]
const array4 = [[20,30,80],[10,50,55]]
array4.unshift(5)
console.log(array4)
