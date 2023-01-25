const btnAdd = document.querySelector(".btn__add");
const btnRemove = document.querySelector(".btn__delete");
const btnComp = document.querySelector(".btn__comp");
const btnSave = document.querySelector(".btn__save");

const input1 = document.querySelector(".body__inputone");
const input2 = document.querySelector(".body__inputtwo");
const input3 = document.querySelector(".body__inputthree");
const input4 = document.querySelector(".body__inputfour");
const input5 = document.querySelector(".body__inputfive");
const input6 = document.querySelector(".body__inputsix");

const inputform =  document.querySelector('.body__inputform');
const input1form = input1.querySelector(".input__one");
const input2form = input2.querySelector(".input__two");
const input3form = input3.querySelector(".input__three");
const input4form = input4.querySelector(".input__four");
const input5form = input5.querySelector(".input__five");
const input6form = input6.querySelector(".input__six");

const check = document.querySelectorAll(".body__check");
const check1 = document.querySelector(".body__checkone");
const check2 = document.querySelector(".body__checktwo");
const check3 = document.querySelector(".body__checkthree");
const check4 = document.querySelector(".body__checkfour");
const check5 = document.querySelector(".body__checkfive");
const check6 = document.querySelector(".body__checksix");

btnAdd.addEventListener("click", () => {
  if (input1.style.display === "" || input1.style.display === "none") {
    input1.style.display = "flex";
    check1.checked = false;
    input1form.value = "";
    input1form.style.backgroundColor = "#d9d9d9";
  } else if (input2.style.display === "" || input2.style.display === "none") {
    input2.style.display = "flex";
    check2.checked = false;
    input2form.value = "";
    input2form.style.backgroundColor = "#d9d9d9";
  } else if (input3.style.display === "" || input3.style.display === "none") {
    input3.style.display = "flex";
    check3.checked = false;
    input3form.value = "";
    input3form.style.backgroundColor = "#d9d9d9";
  } else if (input4.style.display === "" || input4.style.display === "none") {
    input4.style.display = "flex";
    check4.checked = false;
    input4form.value = "";
    input4form.style.backgroundColor = "#d9d9d9";
  } else if (input5.style.display === "" || input5.style.display === "none") {
    input5.style.display = "flex";
    check5.checked = false;
    input5form.value = "";
    input5form.style.backgroundColor = "#d9d9d9";
  } else if (input6.style.display === "" || input6.style.display === "none") {
    input6.style.display = "flex";
    check6.checked = false;
    input6form.value = "";
    input6form.style.backgroundColor = "#d9d9d9";
  } else {
    alert("Нельзя добавить больше задач!");
  }
});

btnRemove.addEventListener("click", () => {
  check.forEach((e) => {
    if (e.checked) {
      if (e.classList.contains("body__checkone")) {
        input1.style.display = "none";
      } else if (e.classList.contains("body__checktwo")) {
        input2.style.display = "none";
      } else if (e.classList.contains("body__checkthree")) {
        input3.style.display = "none";
      } else if (e.classList.contains("body__checkfour")) {
        input4.style.display = "none";
      } else if (e.classList.contains("body__checkfive")) {
        input5.style.display = "none";
      } else if (e.classList.contains("body__checksix")) {
        input6.style.display = "none";
      }
    }
  });
});

btnComp.addEventListener("click", () => {
  check.forEach((e) => {
    if (e.checked) {
      if (e.classList.contains("body__checkone")) {
        input1form.style.backgroundColor = "#17E812";
      } else if (e.classList.contains("body__checktwo")) {
        input2form.style.backgroundColor = "#17E812";
      } else if (e.classList.contains("body__checkthree")) {
        input3form.style.backgroundColor = "#17E812";
      } else if (e.classList.contains("body__checkfour")) {
        input4form.style.backgroundColor = "#17E812";
      } else if (e.classList.contains("body__checkfive")) {
        input5form.style.backgroundColor = "#17E812";
      } else if (e.classList.contains("body__checksix")) {
        input6form.style.backgroundColor = "#17E812";
      }
    }
  });
});

btnSave.addEventListener("click", () => {
  check.forEach((e) => {
    if (e.checked) {
      if (e.classList.contains("body__checkone")) {
        input1form.disabled = true;
      } else if (e.classList.contains("body__checktwo")) {
        input2form.disabled = true;
      } else if (e.classList.contains("body__checkthree")) {
        input3form.disabled = true;
      } else if (e.classList.contains("body__checkfour")) {
        input4form.disabled = true;
      } else if (e.classList.contains("body__checkfive")) {
        input5form.disabled = true;
      } else if (e.classList.contains("body__checksix")) {
        input6form.disabled = true;
      }
    }
  });
});
