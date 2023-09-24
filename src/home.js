const content = document.getElementById("content");
//create home tab content
function createElement(element, parent) {
    const newElement = document.createElement("div");
    newElement.classList.add(element);
    parent.appendChild(newElement);
}
createElement("introduction", content);
createElement("hours", content);
createElement("location", content);
//add content in intro
document.querySelector(".introduction").innerHTML = "Our goal is to make you feel like eating like you are in Japan. Enjoy the best sushi in town. We provide a huge selection of sushi, sashimi, hand-make rolls and our house specialty rolls. Come for the food. Stay for the experience!"
//add content in hours
const hours = document.querySelector(".hours");
createElement("hourstitle", hours);
document.querySelector(".hourstitle").innerHTML = "Hours";
createElement("container1", hours);
const dayAndTimeContainer = document.querySelector(".container1");
createElement("montofri", dayAndTimeContainer);
document.querySelector(".montofri").innerHTML = "Monday to Friday: 9am - 9pm";
createElement("sattosun", dayAndTimeContainer);
document.querySelector(".sattosun").innerHTML = "Saturday to Sunday: 10am - 11pm";

//

