function getData(ev) {
  ev.preventDefault();
  console.log("EV", ev);
}

function goAheadLessons() {
  return (window.location.href = "./lessons.html");

  // Перед выполением данныех заданий помни: что когда условие звучит пугающее, знай - оно таким не является!
}

// 🔧 Функции
// Функция повтора
// Напиши функцию repeat, которая принимает другую функцию и число n, и вызывает переданную функцию n раз.

function repeat(n, func) {
  for (let i = 0; i < n; i++) {
    func();
  }
}

// function hello() {
//   console.log('hello');
// }

// repeat(5, hello);

// 🧠 Каррирование
// Суммирование с каррированием
// Напиши каррированную функцию sum(a)(b)(c) которая возвращает сумму трех чисел.
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// ♻️ Чистые функции
// Изменение массива без мутации
// Напиши чистую функцию, которая принимает массив и возвращает новый массив, где каждый элемент умножен на 2, не изменяя исходный массив.

function clearFunc(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] * 2);
  }

  return res;

  // return arr.map(item => item * 2) Это мое первое решение, но сверху то которое ты наверное ожидал)
}

clearFunc([1, 4, 6, 7, 8]);

// 🔁 Рекурсия
// Сумма чисел от 1 до N (рекурсивно)
// Реализуй функцию, которая принимает число n и возвращает сумму всех чисел от 1 до n, используя рекурсию.

function recurse(n) {
  if (n <= 1) {
    return n;
  }

  return n + recurse(n - 1);
}

const res = recurse(5);
// console.log(res);

// 🔄 Функции высшего порядка
// Фильтрация по предикату
// Напиши функцию filterWith, которая принимает массив и функцию-предикат, и возвращает новый массив с элементами, для которых предикат возвращает true.
//https://code-basics.com/ru/languages/javascript/lessons/predicates

const trueElements = (item) => item === true;

function filterWith(arr, fn) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

filterWith([1, true, 3, false, 0], trueElements);

// Композиция функций
// Напиши функцию compose(f, g), которая возвращает новую функцию, результатом которой будет f(g(x)).
// это мы не затрагивали, но это входит в тему функции высшего порядка и на уровне junior - достаточно примерно понимать что это
// на собесах уровня trainee-junior - это не спрашивают
// https://frontend-stuff.com/blog/composition/

function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}
const double = (x) => x * 2;
const addOne = (x) => x + 1;

const doubleAfterAddOne = compose(double, addOne);

// 💡 Дополнительные задачи от меня
// Функция логирования
// Напиши функцию withLogging(fn), которая принимает функцию и возвращает новую, логирующую входные аргументы и результат выполнения.

// Универсальная задержка
// Создай функцию delay(fn, ms), которая возвращает обертку над fn, вызывающую её через ms миллисекунд (используй setTimeout).

// Рекурсивный обход вложенного объекта
// Напиши функцию, которая принимает вложенный объект и возвращает массив всех ключей (в любом порядке), используя рекурсию.

// const regExp = new RegExp(/q/g);

// const str_1 = "this is javascript"; // found "this"  ( exec and test)? если находит слово this - вернуть все кроме этого слова
// const str_2 = "this is empty"; // match найти слово empty, вернуть все кроме этого слова
// const str_3 = "no_empty_this is number: 484845848"; // search and replace - search ищещь цифры и возвращаешь все без цифр
// repalce убиваешь эти цифры и меняшь их на 0....
// let strNew = regExp.test(str_1)
// if(strNew !== false) {
//   let str = str_1.substring(4, str_1.length)
//   console.log(str);
// }
// const strNew = str_2.match(regExp).join('')
// if(strNew !== null) {
//   let str = str_2.substring(0,str_2.length - strNew.length)
//   console.log(str)
// }
// console.log(strNew)

// const strNew = str_3.search(regExp)

// if(strNew !== -1) {
//   let str = str_3.substring(0, strNew)

//   console.log(str)
// }

// console.log(strNew)

// const emailStr= document.querySelector('.email-input');
// emailStr.addEventListener('change', checkEmail);

// function checkEmail() {
// const emailValue = emailStr.value;
// console.log(emailValue)
// const regExp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/g);
// let strNew = regExp.test(emailValue)

// if(strNew !== true) {
//   console.log("Email:", false)
//   document.querySelector('label').style.backgroundColor = 'red'
// }else {
//   console.log("Email:", true)
//   document.querySelector('label').style.backgroundColor = 'green'
// }

// }

// const date = "today:18:06:2025";
// const regExp = new RegExp(/\d{2}/g);
// const strNew = regExp.exec(date)

// console.log(strNew)

// const str = '#js #code #100daysOfCode'

// const regExp = new RegExp(/[#]/g);

// const strNew = str.match(regExp)

// console.log(strNew)

// task 4

// const str = 'wdsfadas asdf error'

// const regExp = new RegExp(/error/g);

// const strIndex = str.search(regExp)

// console.log(strIndex)

// Task 5
// const str = 'Javascript is awesome'

// const regExp = new RegExp(/[ ]/g);

// const strNew = str.replace(regExp, '-');

// console.log(strNew)

// Task 6

// const str = 'яблоко,груша.апельсин,банан'
// const newArr = str.split(/[.,]/);
// console.log(newArr)

// Тут не понял, почему через new RegExp нельзя, типа потому что это класс? Ответ получился случайно

// Homework Regular expressions

//Task 1

function checkEmail(email) {
  const regExp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/g);
  const checkStr = regExp.test(email);

  console.log("Task 1 result:", checkStr);
}

checkEmail("iladiy21@gmail.com");
checkEmail("iladiy21gmail.com");
checkEmail("iladiy@gmailcom");

// Task 2

function findDuplicates(str) {
  const regExp = new RegExp(/\b(\w+)\s+\1\b/gi);

  const newArr = str.match(regExp);

  console.log("Task 2 result:", newArr);
}

findDuplicates("Hello hello hi man");
findDuplicates("how are you You");

// Task 3

function changeFormat(str) {
  const regExp = new RegExp(/(\d{4})-(\d{2})-(\d{2})/g);

  const newStr = str.replace(regExp, "$3.$2.$1");
  console.log("Task 3 result:", newStr);
}

changeFormat("2024-06-19");
changeFormat("2025-06-24");

function getTags(str) {
  const regExp = new RegExp(/<.+?>/g);

  const newArr = str.match(regExp);

  console.log("Task 4 result:", newArr);
}

getTags("<div><p>Hello</p></div>");
getTags("<h1>Hello</h1>");
getTags("<article><div><h1>Hello</h1></div></article>");

// Homework Regular expressions

// 💡 Дополнительные задачи от меня
// Функция логирования
// Напиши функцию withLogging(fn), которая принимает функцию и возвращает новую, логирующую входные аргументы и результат выполнения.

function sum(a, b) {
  return a + b;
}

function withLogging(fn) {
  return function (...args) {
    console.log("Income args:", args);
    const result = fn(...args);
    console.log("Result:", result);

    return result;
  };
}

const loggedSum = withLogging(sum);
console.log(loggedSum(3, 4));

// Универсальная задержка
// Создай функцию delay(fn, ms), которая возвращает обертку над fn, вызывающую её через ms миллисекунд (используй setTimeout).

function delay(fn, ms) {
  return function (...args) {
    setTimeout(() => {
      const result = fn(...args);
      console.log("Result:", result);
    }, ms);
  };
}

const delayedAdd = delay(sum, 3000);

delayedAdd(2, 3);
