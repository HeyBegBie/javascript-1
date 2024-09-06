// Базовые арифметические операторы
const width = 10;
const height = 5;
const space = width * height;
const newWidth = width - 4;
const newWidth2 = width + 4;
const division = newWidth / newWidth2;
const volume = 2 ** 3; // 2 * 2 * 2
console.log(volume);

// Строки
const city = 'Москва';
const street = 'Новослободская';
console.log(city + ', ' + street + ' ' + 5);


// Операторы присваивания 
let age = 18 + 5;
age += 2; // age = age + 2
age -= 3; // age = age - 2
age *= 2; // age = age * 2
age /= 2; // age = age / 2

age++; // age = age + 1
age--; // age = age - 1

console.log(age);


// Операторы сравнения 

const vasia = 20;
console.log(age > vasia);
console.log(age >= vasia);
console.log(age < vasia);
console.log(age <= vasia);
console.log(age == vasia);

// Порядок операторов
// const isSuited = 100 - 10 > 90 - 5; // 100 - (12 приоритет) 10 > (10) 90 - (12) 5
// console.log(isSuited);

// const a = (6 + 10) / 2
// console.log(a);

// // let b;
// // let c;
// // c = b = 100 + 50 ;
// // console.log(c);
// // console.log(b);


//Типы данных 

let a = 5;
let b = 5.6;
console.log(typeof a);
console.log(typeof b);
a = 'строка';
console.log(typeof a);


let isAdmin = a > 10;
console.log(typeof isAdmin);

let c;
console.log(typeof c);
c = 5;
console.log(typeof c);

let d = null;
console.log(d == null);

//Шаблонные строки
const projectName = 'Сайт магазина';
const price = 2000;
const author = 'Василий Пупкин';
const template = author + ' заказал ' + projectName + ' по цене ' + price;
console.log(template);

const template2 = `${author} заказал ${projectName} по цене ${price}$`; //намного короче
console.log(template2);

const template3 = 'Проект \n' + 'Цена:' + price + '$';
console.log(template3);


// Конвертация типов
const age2 = '18';
console.log(Number(age2) + 5);
console.log(age2 - 5);
console.log(Number(age2) - 5);
console.log(String(4) + 7);
console.log(Boolean(123));
console.log(true + 2);

//False из других типов
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
