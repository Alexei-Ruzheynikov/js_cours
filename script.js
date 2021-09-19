document.addEventListener("DOMContentLoded", () => {
  ("use strict");

  // Аякс - технология обращения к серверу без перезагрузки страницы
  // JSON -текстовый набор данных имеющий ключ значение
  // {
  //   const smartphone = {
  //     brand: "samsung",
  //     screen: 5.5,
  //     rom: 128,
  //     ram: 4,
  //     gps: true,
  //     sensor: ["Accelerometer", "E-compass", "Fingerprint Sensor", "Gyroscope"],
  //     camera: {
  //       back: [32, 5, 8],
  //       front: 16
  //     }
  //   };
  //   // Преобразовали в JSON формат
  //   const jsonSmart = JSON.stringify(smartphone);

  //   // JSON.parse(jsonSmart) - json формат преобразует в обычный объект
  //   // console.log(JSON.parse(jsonSmart));
  // }

  // пример не отработал, не известно почему
  const select = document.getElementById("cars"),
    output = document.getElementById("output");

  select.addEventListener("change", () => {
    const request = new XMLHttpRequest();
    //GET - получать данные
    request.open("GET", "/cars.json");

    request.setRequestHeader("Content-type", "application/json");

    request.send();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        data.cars.forEach((item) => {
          if (item.brand === select.value) {
            const { brand, model, price } = item;
            output.innerHTML = `Тачка ${brand} ${model} <br>
            Цена ${price}$`;
          }
        });
      } else {
        output.innerHTML = " Произошла ошибка";
      }
    });
  });

  // request.addEventListener('loadstart', (event) => {
  //   console.log(event);
  // })

  // request.addEventListener("progress", (event) => {
  //   console.log(event);
  // });

  // request.addEventListener("abort", (event) => {
  //   console.log(event);
  // });

  // request.addEventListener("load", (event) => {
  //   console.log(event);
  // });

  // request.addEventListener("loadend", (event) => {
  //   console.log(event);
  // });
});
