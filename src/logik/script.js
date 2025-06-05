function getData(ev) {
  ev.preventDefault();
  console.log("EV", ev);
}

function goAheadLessons() {
  return (window.location.href = "./lessons.html");
}

// for (let key in newObject) {
//   newObject["city"] = "Poltava";
//   delete newObject["name"];
// }

// const { city } = newObject;
// city;

// newObject.work();

// newObject;

// •	3. Проверка, является ли массив палиндромом
// Напиши функцию `isArrayPalindrome(arr)`, которая проверяет, является ли массив палиндромом.
// Пример: `isArrayPalindrome([1,2,3,2,1]); // → true`

// function isArrayPalindrome(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[arr.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isArrayPalindrome([1, 2, 3, 2, 1]));

// •	1. Проверка на наличие значения
// Напиши функцию `hasValue(obj, value)`, которая проверяет, есть ли в объекте хотя бы один ключ с таким значением.

// function hasValue(obj, value) {
//   // return obj.hasOwnProperty(value);

//   for (let key in obj) {
//     if (obj[key] === value) {
//       return true;
//     }
//   }
//   return false;
// }

// // hasValue(newObject, "city");

// const newObject = {
//   name: "andrii",
//   age: 27,
//   city: "poltava",
//   pass: "141242141241",
//   work: function () {
//     alert("hi");
//   },
//   change: true,
// };

// const newObject1 = {};

// function getObject(obj1, obj2) {
//   let res = [];
//   obj1 = obj2;

//   obj1.hasOwnProperty("change")
//     ? (obj1["change"] = false)
//     : (obj1["change"] = true);

//   //   for (let key in obj1) {
//   //     if (obj1[key] === "change") {
//   //       obj1["change"] = false;
//   //     }
//   //   }

//   console.log(obj1);

//   obj2.hasOwnProperty("change")
//     ? res.push(JSON.parse(JSON.stringify(obj2)))
//     : res.push("not copied");

//   return res;
// }

// getObject(newObject, newObject1);

// // •	2. Ротация массива
// // Напиши функцию `rotateArray(arr, k)`, которая сдвигает массив вправо на `k` элементов.
// // Пример: `rotateArray([1,2,3,4,5], 2); // → [4,5,1,2,3]`

// function rotateArray(arr, k) {
//   //   for (let i = 0; i < arr.length; i++) {
//   //     console.log(arr.splice(arr.pop()));
//   //   }

//   let reversed = arr.reverse().splice(0, k);
//   let res = [];
//   console.log(reversed);
//   let i = k;
//   while (i >= 0) {
//     res.push(arr.pop());
//     i--;
//   }

//   let arr1 = [...reversed, ...res];

//   console.log(arr1);
// }

// rotateArray([1, 2, 3, 4, 5], 2);

// •	3. Фильтрация по условной функции
// Напиши функцию `filterByCondition(arr, conditionFn)`, которая фильтрует массив согласно условию в `conditionFn`.
// Пример: `filterByCondition([1,2,3,4,5], x => x > 3); // → [4,5]`

function filterByCondition(arr, conditionFn) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (conditionFn(arr[i])) {
      res.push(arr[i]);
    }
  }

  return res;
}

filterByCondition([1, 2, 3, 4, 5], (x) => x > 3);

// •	1. Общие элементы двух массивов
// Напиши функцию `commonElements(arr1, arr2)`, которая возвращает массив элементов, присутствующих в обоих массивах.
// Пример: `commonElements([1, 2, 3], [2, 3, 4]); // → [2, 3]`

function commonElements(arr1, arr2) {
  let res = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        res.push(arr1[i]);
      }
    }
  }
  return res;
}

commonElements([1, 2, 3], [2, 3, 4]);

// •	2. Функция, возвращающая другую функцию (замыкание)
// Создай функцию `createMultiplier(multiplier)`, которая возвращает новую функцию. Новая функция умножает любое переданное число на `multiplier`.
// Пример: `const double = createMultiplier(2); double(5); // → 10`

function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

const double = createMultiplier(2);
double(5);

// Объединение массива объектов в один
// Напиши функцию `mergeObjects(arr)`, которая объединяет массив объектов в один объект.
// Пример: `mergeObjects([{a: 1}, {b: 2}, {c: 3}]); // → {a:1, b:2, c:3}`

function mergeObjects(arr) {
  let res = {};

  for (let i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
      if (arr[i].hasOwnProperty(key)) {
        res[key] = arr[i][key];
      }
    }
  }

  return res;
}

mergeObjects([{ a: 1 }, { b: 2 }, { c: 3 }]);

// •	3. Преобразование объекта в массив пар ключ-значение
// Без использования `Object.entries`, вручную.
// Пример: `toEntries({a:1, b:2}); // → [['a',1], ['b',2]]`

function toEntries(obj) {
  let res = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      res.push([key, obj[key]]);
    }
  }
}

toEntries({ a: 1, b: 2 });

// •	2. Подсчёт количества символов в строке
// Напиши функцию `countLetters(str)`, которая возвращает объект с количеством вхождений каждого символа.
// Пример: `countLetters("hello") // → {h:1, e:1, l:2, o:1}`

function countLetters(str) {
  let res = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (res[char]) {
      res[char]++;
    } else {
      res[char] = 1;
    }
  }
  return res;
}

countLetters("hello");
