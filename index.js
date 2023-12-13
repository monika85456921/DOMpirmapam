const divas = document.querySelector("div");
console.log(divas);
// kaip paselektinti elementus
const divas1 = document.querySelector(".divas1");
const divas2 = document.querySelector("#divas1");
console.log(divas1, divas2);

// gauti elementa is ID
const byID = document.getElementById("divas1");
console.log(byID);

//gauti elementa is class    //grazina masyva, collention (negalima iteruoti)
const byClass = document.getElementsByClassName("divas1");
console.log(byClass);
//
const arr = document.querySelectorAll("div");
console.log(arr);

// by tag name
const byTag = document.getElementsByTagName("div");
console.log(byTag);

///select child is elementus

const child = divas.querySelector("p");
console.log(child);

const child1 = document.querySelector("div").childNodes;
console.log(child1);

const child2 = document.querySelectorAll("div>p");
console.log(child2);

//prideti class, id ir t.t

const pirmasVaikas = document.querySelector("div").firstChild;
console.log(pirmasVaikas);

const antrasVaikas = document.querySelectorAll("div > p");
console.log(antrasVaikas);

const vaikas1 = document.querySelector("div > p");
// console.log(vaikas1, antrasVaikas[0]);

// pakeisiti atributa
vaikas1.setAttribute("class", "pirmasP");
antrasVaikas[1].className = "antrasP";
console.log(vaikas1, antrasVaikas[1]);

//pasalinti class, id ir tt
// vaikas1.removeAttribute("class");

/// kaip surasti tam tikra atributa

const attr = vaikas1.getAttribute("class");
console.log(attr);

//klasiu modifikacija TIK CLASS
antrasVaikas[1].classList.add("myClassInCss");
//remove class
antrasVaikas[1].classList.remove("myClassInCss");
//replace class
antrasVaikas[1].classList.replace("antrasP", "myInCss");

//
antrasVaikas[1].style.color = "red";
antrasVaikas[1].style.backgroundColor = "#b3d69f";

//sukurti nauja elementa 1. sukurti kintamaji 2.tarp sklaistu ka norie sukurti 3.kur ydeti

const myButton = document.createElement("button");
const myButton2 = document.createElement("button");
const myButton3 = document.createElement("button");
const myButton4 = document.createElement("button");
const img = document.createElement("img");

divas2.appendChild(myButton);
// divas2.appendChild(myButton2);
// divas2.appendChild(myButton3);
// divas2.appendChild(myButton4);
divas.append(myButton2,myButton3,myButton4)
//jei daugiau nei 1 child
divas2.append(myButton, img);

//ideti i tam tikra vieta

// divas2.insertAdjacentElement("beforebegin", myButton);

// divas2.insertAdjacentElement("afterbegin", myButton);

// divas.insertAdjacentElement("beforeend", myButton);

divas.insertAdjacentElement("afterend", myButton);

// elemento pridejimo budas 2, retai naudojamas nes nera saugus
// divas2.innerHTML += "<span>cia yra SPAN</span>";

//prideti tekstas 3 var
//1 //2 //3
myButton.innerText = "Click!1";
myButton2.innerText = "Click!2";
myButton3.innerText = "Click!3";
myButton4.innerText = "Click!4";
// myButton.textContent="Clickas";
// myButton.innerHTML ="Cia clickinti";
//
// antrasVaikas[0].innerText += " cia pirmas paragrafas";
// antrasVaikas[1].textContent += " cia antras paragrafas";

//isimti
const span = document.querySelector("span");
span.remove();

////eventai prideti
myButton.addEventListener("click", () => {
  if (myButton.style.backgroundColor === "blue") {
    myButton.style.backgroundColor = "green";
  } else {
    myButton.style.backgroundColor = "blue";
  }
});

//// eventas-  isimti ji (retai naudojamas)
myButton.removeEventListener("click", () => {
  console.log("event listener removed");
});

///kai reikia daugiau pvz:mygtuku paselektinti

const buttonsGroup = document.querySelectorAll('button')
console.log(buttonsGroup)

buttonsGroup.forEach((el,ind) => el.addEventListener("click",()=>{
    
}));