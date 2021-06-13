// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let a1 = [1, 2, 3, 4, 5];
console.log(a1);
let a2 = ['one', 'two', 'three', 'four', 'five'];
console.log(a2);
let a3 = [1, 2, 3, 4, 5, 'one', 'two', 'three', 'four', 'five', true, false, true, false, true];
console.log(a3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
const a4 = [];
a4[0]='test';
a4[1]='smth';
a4[2]=5;
console.log(a4);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++){
  document.write('<div>Hello there!</div>')
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++){
  document.write(i + '<div>Hello there!</div>')
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20){
  document.write('<h1>This is heading 1!</h1>');
  i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j = 0;
while (j < 20){
  document.write(j + '<h1>This is heading 1!</h1>');
  j++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let a5 = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < a5.length; i++) {
  console.log(a5[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let a6 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
for (let i = 0; i < a6.length; i++) {
  console.log(a6[i]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let a7 = ['q', 'w', 'e', 1, 4, 6, true, false, 'mama', 'papa']
for (let i = 0; i < a7.length; i++) {
  console.log(a7[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let a8 = ['q', 'w', 'e', 1, 4, 6, true, false, 'mama', 'papa']
for (let i = 0; i < a8.length; i++) {
  if (typeof(a8[i])=="boolean")
  console.log(a8[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let a9 = ['q', 'w', 'e', 1, 4, 6, true, false, 'mama', 'papa']
for (let i = 0; i < a9.length; i++) {
  if (typeof(a9[i])=="number")
  console.log(a9[i]);
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let a10 = ['q', 'w', 'e', 1, 4, 6, true, false, 'mama', 'papa']
for (let i = 0; i < a10.length; i++) {
  if (typeof(a10[i])=="string")
  console.log(a10[i]);
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let newArray = [];
newArray[0]=1;
newArray[1]='Romashka';
newArray[2]='cat';
newArray[3]=false,
newArray[4]=15;
newArray[5]=274;
newArray[6]=true;
newArray[7]='hello';
newArray[8]=4;
newArray[9]='iteration';
for (let i=0; i < newArray.length; i++){
  console.log(newArray[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
  console.log(i);
  document.write(i)
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
  console.log(i);
  document.write(i)
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i=i+2) {
  console.log(i);
  document.write(i)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 1; i < 100; i=i+2) {
  console.log(i);
  document.write(i)
} //тут індекси непарні, але крок же парний, по суті)

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i=i+2) {
  console.log(i);
  document.write(i)
}
