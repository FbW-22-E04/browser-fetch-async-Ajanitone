// import "../styles/main.scss";
// import "babel-polyfill";

const modal = document.getElementById("myModal");
let promiseOfModal = new Promise(function (resolve) {
  window.setTimeout(function () {
    resolve(modal);
  }, 1000 * 60);
});

// promiseOfModal.then(function (val) {
//   console.log("User has been on the page for 60 seconds");
//   val.style.display = "block";
// });

async function promiseOfModal2() {
  let val = await promiseOfModal;
  console.log("User has been on the page for 60 seconds");
  val.style.display = "block";
  console.log(val);
}

promiseOfModal2();

modal.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "close":
    case "modal":
      modal.style.display = "none";
      break;
  }
});

let btn = document.querySelector("#continue");

// async function promiseBtn() {
//   await btn.getAnimations()[0].finished;
//   btn.style.backgroundColor = "#eee";
//   alert("Continue to subscribe");
// }

btn.addEventListener("animationend", () => {
  btn.style.backgroundColor = "#EACDE9";
  btn.style.color = "#E3907F";
  alert("Continue to subscribe");
});

// const modal = document.getElementById("myModal");
// let promiseOfModal = new Promise(function (resolve) {
//   window.setTimeout(function () {
//     resolve(modal);
//   }, 1000);
// });

// promiseOfModal.then(function (val) {
//   console.log("User has been on the page for 60 seconds");
//   val.style.display = "block";
// });

// modal.addEventListener("click", (e) => {
//   switch (e.target.className) {
//     case "close":
//     case "modal":
//       modal.style.display = "none";
//       break;
//   }
// });
