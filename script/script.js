//Дожидается загрузки dom дерева
window.addEventListener("DOMContentLoaded", function () {
  ("use strict");
  //Timer Start
  function countTimer(deadline) {
    let timerHours = document.querySelector("#timer-hours"),
      timerMinutes = document.querySelector("#timer-minutes"),
      timerSeconds = document.querySelector("#timer-seconds");
    function addZerro(num) {
      if (num < 10) {
        num = "0" + num;
      }
      return num;
    }
    function getTimeRemaining() {
      //сколько милисекунд до назначенной даты
      let dateStop = new Date(deadline).getTime(),
        // сколько милисекунд до текущего момента
        dateNow = new Date().getTime(),
        // вычисляем разницу между назначенной датой и текущим моментом и переводим ее в секунды
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = addZerro(Math.floor(timeRemaining % 60)),
        minutes = addZerro(Math.floor((timeRemaining / 60) % 60)),
        hours = addZerro(Math.floor(timeRemaining / 60 / 60));
      //   hours = Math.floor(timeRemaining / 60 / 60) % 24,
      //   day = Math.floor(timeRemaining / 60 / 60 / 24);
      return {
        timeRemaining: timeRemaining,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
    }

    function updateClock() {
      let timer = getTimeRemaining();
      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;
      if (timer.timeRemaining > 0) {
        setTimeout(updateClock, 1000);
      }
      if (timer.timeRemaining <= 0) {
        timerHours.textContent = "00";
        timerMinutes.textContent = "00";
        timerSeconds.textContent = "00";
      }
    }
    updateClock();
  }
  countTimer("01 oct 2021");
  //Timer End

  // Menu Start
  //   const toggleMenu = () => {
  //     const btnMenu = document.querySelector(".menu"),
  //       menu = document.querySelector("menu"),
  //       closeBtn = document.querySelector(".close-btn"),
  //       menuItems = menu.querySelectorAll("ul>li");

  //     const handlerMenu = () => {
  //       if (
  //         !menu.style.transform ||
  //         menu.style.transform === `translate(-100%)`
  //       ) {
  //         menu.style.transform = `translate(0)`;
  //       } else {
  //         menu.style.transform = `translate(-100%)`;
  //       }
  //     };

  //     btnMenu.addEventListener("click", handlerMenu);
  //     closeBtn.addEventListener("click", handlerMenu);
  //     // for (let i = 0; i < menuItems.length; i++) {
  //     //   menuItems[i].addEventListener("click", handlerMenu);
  //     // }
  //     menuItems.forEach((elem) => {
  //       elem.addEventListener("click", handlerMenu);
  //     });
  //   };
  //   toggleMenu();
  // Menu End

  // Menu Start 2 variant
  const toggleMenu = () => {
    const btnMenu = document.querySelector(".menu"),
      menu = document.querySelector("menu"),
      closeBtn = document.querySelector(".close-btn"),
      menuItems = menu.querySelectorAll("ul>li");

    const handlerMenu = () => {
      menu.classList.toggle("active-menu");
    };

    btnMenu.addEventListener("click", handlerMenu);
    closeBtn.addEventListener("click", handlerMenu);
    // for (let i = 0; i < menuItems.length; i++) {
    //   menuItems[i].addEventListener("click", handlerMenu);
    // }
    menuItems.forEach((elem) => {
      elem.addEventListener("click", handlerMenu);
    });
  };
  toggleMenu();
  // Menu End 2 variant

  // Popup window Start
  const togglePopUp = () => {
    const popup = document.querySelector(".popup"),
      popupBtn = document.querySelectorAll(".popup-btn"),
      popUpClose = document.querySelector(".popup-close"),
      popupContent = document.querySelector(".popup-content");

    const animatePopup = () => {
      let count = 0;
      let animateElem = false;
      const animate = () => {
        let animateInterval = requestAnimationFrame(animate);
        count++;
        if (count >= document.documentElement.clientHeight / 20) {
          cancelAnimationFrame(animateInterval);
        } else if (screen.width < 768) {
          cancelAnimationFrame(animateInterval);
          popup.style.display = `block`;
        } else {
          popup.style.display = `block`;
          popupContent.style.top = `${count * 2}px`;
        }
      };
      animate();
    };

    // popupBtn.forEach((elem) => {
    //   elem.addEventListener("click", () => {
    //     popup.style.display = "block";
    //   });
    // });

    //Вариант с анимацией
    popupBtn.forEach((elem) => {
      elem.addEventListener("click", animatePopup);
    });
    popUpClose.addEventListener("click", () => {
      popup.style.display = "none";
    });
  };
  togglePopUp();
  // Popup window End

  // Button Scroll First Screen START

  //   const firstScreenButton = () => {
  //     const buttonFirst = document.querySelector("main>a");
  //     console.log(buttonFirst);
  //     const animateFirstButton = () => {
  //       //
  //     };
  //     buttonFirst.addEventListener("click", animateFirstButton);
  //   };
  //   firstScreenButton();

  //Пока оставлю создание плавной прокрутки на будущее

  // Button Scroll First Screen END
});
