let bodyElement = document.getElementsByTagName("body");
console.log(bodyElement);

let divElement = document.createElement("div");
let divElement2 = document.createElement("div");

divElement.textContent = `Ola, eu sou uma div`;
divElement.style.width = "200px";
divElement.style.height = "200px";
divElement.style.backgroundColor = "lightblue";

divElement2.textContent = `Ola, eu sou uma div2`;
divElement2.style.width = "200px";
divElement2.style.height = "200px";
divElement2.style.backgroundColor = "orange";


bodyElement[0].appendChild(divElement);
// bodyElement[0].appendChild(divElement2);

// bodyElement[0].removeChild(divElement);
bodyElement[0].replaceChild(divElement2, divElement)