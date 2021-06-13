console.log('Hello world!');
function arrayOutputFunction(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
let array1=[1,2,3,4,5];
arrayOutputFunction(array1);

// // 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
function randomInputForArrays (array){
  for (let i = 0; i < 10; i++) {
    let m = Math.floor(Math.random() * 100);
    array[i]=m
  }
}
let array2=[];
randomInputForArrays(array2);
arrayOutputFunction(array2);

// // 3) створити фуy7нкцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNumber(a, b, c) {
let min = 0;
   if (a > b) {
      min = b;
   }
   else min = a;
   if (min > c) {
     min = c;
   }
   console.log(min);
}
minNumber(25, 10, -60);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNumber(a, b, c) {
let max = 0;
   if (a > b) {
      max = a;
   }
   else max = b;
   if (max < c) {
     max = c;
   }
   console.log(max);
}
let a=+prompt('Please input the first figure');
let b=+prompt('Please input the second figure');
let c=+prompt('Please input the third figure');
maxNumber(a, b, c);

// 5) створити функцію яка повертає найбільше число з масиву
function maxArrayNumber(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
   console.log(max);
}
let array3=[1,2,3,4,5,6,7,8,9];
maxArrayNumber(array3);

// 6) створити функцію яка повертає найменше число з масиву
function minArrayNumber(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
   console.log(min);
}

minArrayNumber(array3);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
function arraySum(array) {
  let s = 0;
  for (let i = 0; i < array.length; i++) {
    s = s + array[i];
  }
  return s
}

let array4=[1,2,3,4,5,6,7,8,9];
let result1 = arraySum(array4);
console.log(result1);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arrayAverage(array) {
  let s = 0;
  let q = 0;
  for (let i = 0; i < array.length; i++) {
    s = s + array[i];
    q++
  }
  let average = s / q;
  return average
}

let result2 = arrayAverage(array4);
console.log(result2);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
function objectKeys (){
  let finalParameters = [];
  for (const arg of arguments){
    let objectParameters = Object.keys(arg);
    for (i = 0; i < objectParameters.length; i++) {
      finalParameters.push(objectParameters[i]);
    }
  }
  return finalParameters
}

let obj1 = {
  name: 'Khry',
  surname: 'Velychko',
  age: 24,
  car: false
}

let obj2 = {
  make: 'Toyota',
  model: 'Camry'
}

let obj3 = {
  task: 'Toyota',
  parser: 'Camry'
}

let outputKeys = objectKeys(obj1, obj2, obj3);
  console.log(outputKeys);


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function objectValues (){
  let finalParameters = [];
  for (const arg of arguments){
    let objectParameters = Object.values(arg);
    for (i = 0; i < objectParameters.length; i++) {
      finalParameters.push(objectParameters[i]);
    }
  }
  return finalParameters
}

let outputKeys2 = objectValues(obj1, obj2, obj3);
  console.log(outputKeys2);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
  // EXAMPLE:
  // [1,2,3,4]
  // [2,3,4,5]
  // результат
  // [3,5,7,9]
function addElements(array1, array2) {
  let finalArray=[];
  for ( i = 0; i < array1.length; i++) {
    finalArray[i]=array1[i]+array2[i]
  }
  return finalArray
}
let inputArray1=[1,2,3,4,5,6];
let inputArray2=[1,2,3,4,5,6]

let sumResult = addElements(inputArray1, inputArray2);
console.log(sumResult);


// ============================================================================================
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minOrMaxNumber() {
  let minArgument = arguments[0];
  let maxArgument = arguments[0];
  for (i = 1; i < arguments.length; i++) {
    if (arguments[i] < minArgument) {
      minArgument = arguments[i];
    }
    if (arguments[i] > maxArgument){
      maxArgument = arguments[i]
    }
  }
  console.log(maxArgument);
  return minArgument;
}
let functionResult = minOrMaxNumber(25, 10, -60, 20, 1, 7, 89);
console.log(functionResult);

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
function arrayKeysOrValues () {
  let outputs = [];
  let outputType = prompt('What kind of output do you want to get?');
  if (outputType === 'Keys') {
    for (const arg of arguments){
      let objectParameters = Object.keys(arg);
      for (i = 0; i < objectParameters.length; i++) {
        outputs.push(objectParameters[i]);
      }
    }
  }
  if (outputType === 'Values'){
      for (const arg of arguments){
        let objectParameters = Object.values(arg);
        for (i = 0; i < objectParameters.length; i++) {
          outputs.push(objectParameters[i]);
        }
      }
    }
    return outputs
  }
let testOutput = arrayKeysOrValues(obj1, obj2);
console.log(testOutput);

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
  // EXAMPLE:
  // foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
  // foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
  // foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
function replaceElement (array = [], index = 0) {
  let temp = 0;
  for (i = 0; i < array.length; i++) {
    if (i === index) {
      temp = array[i];
      array[i] = array[++i];
      array[i] = temp;
    }
  }
  return array
}

let testArray = [1, 2, 3, 4, 5];
console.log(replaceElement(testArray, 3));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
function moveZeros (inputArray = []) {
  let zeros = [];
  let outputArray = [];
  for (i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 0) {
      zeros.push(inputArray[i]);
      inputArray.splice(i, 1)
    }
  }
  outputArray = [...inputArray, ...zeros];
  return outputArray
}

let testArray2 = [1,0,6,0,3];
console.log(moveZeros(testArray2));
// ===================================
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступний вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
function nameNormalizer (string) {
  let str = string.trim();
  let wordsArray = str.split(' ');
  let finalArray = [];
  console.log(wordsArray);

for (const word in wordsArray) {
  if (wordsArray[word]) {
    finalArray.push(wordsArray[word])
  }
}
let resultName = finalArray.join(' ');
  console.log(resultName);
}

nameNormalizer('        Ron           Whisley      ');
