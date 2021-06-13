console.log('Hello world!');
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
let word1='hello ';
let word2='owu ';
let word3='com ';
let word4='ua ';
let num1=1;
let num2=10;
let num3=-999;
let num4=123;
let num5=3.14;
let num6=2.7;
let num7=16;
let option1=true;
let option2=false;

console.log(word1);
console.log(word2);
console.log(word3);
console.log(word4);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(option1);
console.log(option2);

alert(word1);
alert(word2);
alert(word3);
alert(word4);
alert(num1);
alert(num2);
alert(num3);
alert(num4);
alert(num5);
alert(num6);
alert(num7);
alert(option1);
alert(option2);

document.write('word1');
document.write('<div>word2</div>');
document.write('word3');
document.write('word4');
document.write('num1');
document.write('num2');
document.write('num3');
document.write('num4');
document.write('num5');
document.write('num6');
document.write('num7');
document.write('option1');
document.write('option2');

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
alert("I am going to skip re-assigning values to variables because it is clear for me :)")

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
let firstName = prompt("Привіт! Як тебе звати?");
let fathersName = prompt("Як твоє по-батькові?");
let userAge = +prompt("Скільки тобі років?");

//   Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
document.write('<div>' + 'Вітаю, ' + firstName + ' ' + fathersName + '. Тобі ' + userAge + ' років' + '</div>');

// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
let str1 = firstName + ' ' + fathersName + ' ' + userAge
console.log(str1);

// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
let n1 = +prompt("Please enter figure #1:");
console.log(n1);
let n2 =+prompt("Please enter figure #2:");
console.log(n2);
let n3 = +prompt("Please enter figure #3:");
console.log(n3);

// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою parseInt. Додати їх всі мож собою і результат вивести в консоль.
let a = parseInt(prompt("Please enter variable a:"));
let b = parseInt(prompt("Please enter variable b:"));
let c = parseInt(prompt("Please enter variable c:"));
let d = parseInt(prompt("Please enter variable d:"));
let sum=a+b+c+d;
console.log(sum);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
let e = parseFloat(prompt("Please enter variable e:"));
let f = parseFloat(prompt("Please enter variable f:"));
let g = parseFloat(prompt("Please enter variable g:"));

//   Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
let result=e+f+g;
console.log(result);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
let h = Math.round(parseFloat(prompt("Please enter variable h:")));
let j = Math.round(parseFloat(prompt("Please enter variable j:")));
let k = Math.round(parseFloat(prompt("Please enter variable k:")));
let total=h+j+k;
console.log(total);

// - За допомогою prompt() отримати 2 цілих числа.
//   Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//   Example. Число 1 = 5. Число 2 = 2. Результат = 25
let l = Math.round(+prompt("Please enter variable l:"));
let m = Math.round(+prompt("Please enter variable m:"));
console.log(Math.pow(l,m));

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a2 = 100;
let b2 = '100';
let c2 = true;
console.log(typeof(a2));
console.log(typeof(b2));
console.log(typeof(c2));

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразаї не використовувати однакові оператори!!!
  console.log(5 < 6); // 5 ? 6 -> true
  console.log(5 > 6); // 5 ? 6 -> false
  console.log(5 >= 6); // 5 ? 6 -> false
  console.log(5 == 6); // 5 ? 6 -> false
  console.log(10 == 10);  // 10 ? 10 // -> true
  console.log(10 === 10);  // 10 ? 10 // -> true
  console.log(10 < 10);  // 10 ? 10 // -> false
  console.log(10 > 10);  // 10 ? 10 // -> false
  console.log(10 != 10);  // 10 ? 10 // -> false
  console.log(123 === '123');  // 123 ? '123' // -> false
  console.log(123 == '123');  // 123 ? '123' // -> true

// Додатково:
// - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
  console.log(132 > 100 && 45 < 12 );

  console.log(34 > 33 && 23 < 90 );
  console.log(99 > 100 && 45 > 12 );
  console.log(132 > 100 || 45 < 12 );
  console.log(111 > 11 || 45 < 111 );
  console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
  console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
  console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
  console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
  console.log(!!'-1');
  console.log(!!-1);
  console.log(!!'0');
  console.log(!!'null');
  console.log(!!'undefined');
  console.log(!!(3/'owu'));
  console.log((111 > 11 || 45 < 111) ||  !!'0');
  console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));
