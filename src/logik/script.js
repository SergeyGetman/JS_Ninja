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
