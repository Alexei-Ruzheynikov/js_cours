// ("use strict");

// js однопоточный язык - 1 действие за единицу времени
// const mult = (x, y) => {
//   return x * y;
// };
// const square = (num) => {
//   return mult(num, num);
// };
// const showSquare = (n) => {
//   const res = square(n);
//   console.log(res);
// };
// showSquare(2);

//
//
//
//

// const foo1 = () => {
//   console.log("Загрузил белье в стиральную машину");
//   foo2(foo3);
//   foo4();
// };
// const foo2 = (callback) => {
//   setTimeout(() => {
//     console.log("заакончилась стирка");
//     callback();
//   }, 5000);
// };

// const foo3 = () => {
//   console.log("развешать белье на балконе");
// };

// const foo4 = () => {
//   setTimeout(() => console.log("Помыли пол"), 3000);
// };
// foo1();

//
//
//

// setTimeout(() => {
//   console.log(1);
// }, 1000);

// setTimeout(() => {
//   console.log(2);
// }, 1000);

// setTimeout(() => {
//   console.log(3);
// }, 1000);

// setTimeout(() => {
//   console.log(4);
// }, 1000);

//
//
//

// console.log(11);
// setTimeout(() => {
//   console.log(1);
// }, 0);

// console.log(12);
// setTimeout(() => {
//   console.log(2);
// }, 0);

// console.log(13);
// setTimeout(() => {
//   console.log(3);
// }, 0);

//
//
//

// Промисы === Обещания

// const doUniversity = (docs, resolve, reject) => {
//   if (docs) {
//     console.log("Рассмотрение документов...");
//     setTimeout(() => {
//       if (Math.random() > 0.3) {
//         let result = "Принят";
//         resolve(result);
//       } else {
//         reject("Отказано");
//       }
//     }, 3000);
//   } else {
//     reject("Отказано, не хватает документов");
//   }
// };

// const doArmy = (docs, resolve, reject) => {
//   if (docs) {
//     console.log("Военком думает...");
//     setTimeout(() => {
//       if (docs === "Принят") {
//         resolve("Отсрочка");
//       } else {
//         reject("Повестка");
//       }
//     }, 2000);
//   } else {
//     reject("Повестка");
//   }
// };

// const doWork = (docs, resolve, reject) => {
//   console.log("Директор google думает...");
//   setTimeout(() => {
//     if (Math.random() > 0.3) {
//       let result = "Приглашен на собеседование в google в Понедельник";
//       resolve(result);
//     } else {
//       reject("Отказано, иди в Яндекс");
//     }
//   }, 3000);
// };
// const documents = ["Паспорт", "Аттестат"];
// doUniversity(
//   documents,
//   (result) => {
//     console.log(result);
//     doArmy(
//       result,
//       (militaryDocs) => {
//         console.log(militaryDocs);
//         doWork(
//           militaryDocs,
//           (data) => {
//             console.log(data);
//           },
//           (reason) => {
//             console.error(reason);
//           }
//         );
//       },
//       (reason) => {
//         console.error(reason);
//       }
//     );
//   },
//   (reason) => {
//     console.error(reason);
//   }
// );

//
//
//

const doUniversity = (docs) => {
  return new Promise((resolve, reject) => {
    if (docs) {
      console.log("Рассмотрение документов...");
      setTimeout(() => {
        if (Math.random() > 0.3) {
          let result = "Принят";
          resolve(result);
        } else {
          reject("Отказано");
        }
      }, 3000);
    } else {
      reject("Отказано, не хватает документов");
    }
  });
};

const doArmy = (docs) => {
  return new Promise((resolve, reject) => {
    if (docs) {
      console.log("Военком думает...");
      setTimeout(() => {
        if (docs === "Принят") {
          resolve("Отсрочка"); //.then(*,X)
          console.log("Отсрочка");
        } else {
          reject("Повестка"); //.then(x,*)
        }
      }, 2000);
    } else {
      reject("Повестка");
    }
  });
};

const doWork = (docs) => {
  return new Promise((resolve, reject) => {
    console.log("Директор google думает...");
    console.log("Документы от военкомата: " + docs);
    setTimeout(() => {
      if (Math.random() > 0.3) {
        let result = "Приглашен на собеседование в google в Понедельник";
        console.log(result);
        resolve(result);
      } else {
        reject("Отказано, иди в Яндекс");
      }
    }, 3000);
  });
};

const dance = (docs) => {
  console.log("Потанцевали");
  return docs;
};

const documents = ["Паспорт", "Аттестат"];

// doUniversity(documents)
//   .then((result) => {
//     console.log(result);
//     return result;
//   })
//   .then(doArmy)
//   .then(dance)
//   .then(doWork)
//   .catch((reason) => console.error(reason))
//   .finally(() => console.warn("Выполнится в любом случае"));

const doWorking = (company) => {
  return new Promise((resolve, reject) => {
    const time = Math.ceil(Math.random() * 3000);
    setTimeout(() => {
      if (time % 5) {
        resolve(company);
      } else {
        reject(company);
      }
    }, time);
  });
};

const hh = doWorking("HH"),
  yandex = doWorking("Yandex"),
  google = doWorking("Google");

// еще есть метод Promise.race - какой первый выполнится тот и отработает
Promise.all([hh, yandex, google])
  .then((result) =>
    console.log(`Тебя пригласили на собеседование в: ${result}`)
  )
  .catch((result) => console.error(`Компания ${result} отказала`));
