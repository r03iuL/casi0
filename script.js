let string = "";
document.querySelector(".display").value = 0;
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.innerHTML == "=") {
      string = eval(string);
      console.log(string);
      document.querySelector(".display").value = string;
    } else if (e.target.innerHTML == "CE") {
      string = "";
      console.log(string);
      document.querySelector(".display").value = 0;
    } else if (e.target.innerHTML == "Del") {
      string = string.substring(0, string.length - 1);
      console.log(string);
      if (string.length == 0) {
        document.querySelector(".display").value = 0;
      } else {
        document.querySelector(".display").value = string;
      }
    } else {
      string = string + e.target.innerHTML;
      console.log(string);
      document.querySelector(".display").value = string;
    }
  });
});
