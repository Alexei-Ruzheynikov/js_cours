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
        seconds: seconds
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
      // popUpClose = document.querySelector(".popup-close"),
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
    // popUpClose.addEventListener("click", () => {
    //   popup.style.display = "none";
    // });
    popup.addEventListener("click", (event) => {
      let target = event.target;
      if (target.classList.contains("popup-close")) {
        popup.style.display = "none";
      } else {
        target = target.closest(".popup-content");
        if (!target) {
          popup.style.display = "none";
        }
      }
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

  // Tabs Start
  const tabs = () => {
    const tabHeader = document.querySelector(".service-header"),
      tab = tabHeader.querySelectorAll(".service-header-tab"),
      tabContent = document.querySelectorAll(".service-tab");

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add("active");
          tabContent[i].classList.remove("d-none");
        } else {
          tab[i].classList.remove("active");
          tabContent[i].classList.add("d-none");
        }
      }
    };

    tabHeader.addEventListener("click", (event) => {
      let target = event.target;
      target = target.closest(".service-header-tab");
      // while (target !== tabHeader) {
      if (target.classList.contains("service-header-tab")) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
        // return;
      }
      // target = target.parentNode;
      // }
    });
  };
  tabs();
  // Tabs End

  //Slider Start

  const slider = () => {
    const slide = document.querySelectorAll(".portfolio-item"),
      btn = document.querySelectorAll(".portfolio-btn"),
      dot = document.querySelectorAll(".dot"),
      slider = document.querySelector(".portfolio-content");

    let currentSlide = 0,
      interval;

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, "portfolio-item-active");
      prevSlide(dot, currentSlide, "dot-active");
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, "portfolio-item-active");
      nextSlide(dot, currentSlide, "dot-active");
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener("click", (event) => {
      event.preventDefault();
      let target = event.target;

      if (!target.matches(".portfolio-btn, .dot")) {
        return;
      }
      prevSlide(slide, currentSlide, "portfolio-item-active");
      prevSlide(dot, currentSlide, "dot-active");

      if (target.matches("#arrow-right")) {
        currentSlide++;
      } else if (target.matches("#arrow-left")) {
        currentSlide--;
      } else if (target.matches(".dot")) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }

      nextSlide(slide, currentSlide, "portfolio-item-active");
      nextSlide(dot, currentSlide, "dot-active");
    });

    slider.addEventListener("mouseover", (event) => {
      if (
        event.target.matches(".portfolio-btn") ||
        event.target.matches(".dot")
      ) {
        stopSlide();
      }
    });

    slider.addEventListener("mouseout", (event) => {
      if (
        event.target.matches(".portfolio-btn") ||
        event.target.matches(".dot")
      ) {
        startSlide();
      }
    });

    startSlide();
  };

  slider(1000);

  //Slider End

  //Calculator Start

  const calc = (price = 100) => {
    const calcBlock = document.querySelector(".calc-block"),
      calcType = document.querySelector(".calc-type"),
      calcSquare = document.querySelector(".calc-square"),
      calcDay = document.querySelector(".calc-day"),
      calcCount = document.querySelector(".calc-count"),
      totalValue = document.getElementById("total");

    const countSum = () => {
      let total = 0,
        countValue = 1,
        dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value,
        squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      }

      totalValue.textContent = total;
    };

    calcBlock.addEventListener("change", (event) => {
      const target = event.target;
      // if (
      //   target.matches(".calc-type") ||
      //   target.matches(".calc-square") ||
      //   target.matches(".calc-day") ||
      //   target.matches(".calc-count")
      // ) {
      //   console.log(1);
      // }

      // if (
      //   target === calcType ||
      //   target === calcSquare ||
      //   target === calcDay ||
      //   target === calcCount
      // ) {
      //   console.log(1);
      // }

      if (target.matches("select") || target.matches("input")) {
        countSum();
      }
    });
  };

  calc(100);

  //Calculator End

  //send-ajax-form-Start

  //send-ajax-form-END
});
