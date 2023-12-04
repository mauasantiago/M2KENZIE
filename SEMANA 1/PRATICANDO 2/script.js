// const div_1 = document.getElementById("box_1");
// console.log(div_1);
// div_1.style.backgroundColor = "black";

// const boxs = document.getElementsByTagName("div");
// console.log(boxs[0]);

// const boxs = document.getElementsByClassName("box");
// console.log(boxs[1]);

// const div_1 = document.querySelector("#box_1");
// console.log(div_1);

const todasDivsBox = document.querySelectorAll(".box");
for (let i = 0; i < todasDivsBox.length; i++) {
    todasDivsBox[i].style.backgroundColor = "red";
  }
// console.log(todasDivsBox)