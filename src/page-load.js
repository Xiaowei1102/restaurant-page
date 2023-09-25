import './style.css';
import sushi from './sushi.jpg'
import { createHomeTab } from './home.js';

export function loadPage() {
    const content = document.getElementById("content");
    content.style.backgroundImage = `url(${sushi})`;
    //add a restaurant title
    const restaurantName = document.createElement("div");
    restaurantName.classList.add("title");
    restaurantName.innerHTML = "Let's Sushi";
    //add style to title
    content.appendChild(restaurantName);
    
    //add button to home, menu and contact
    const buttons = document.createElement("div");
    buttons.classList.add("buttoncontainer");
    function creatButtons (button) {
        const newButton = document.createElement("button");
        newButton.innerHTML = button;
        newButton.classList.add(button);
        buttons.appendChild(newButton);
    }
    creatButtons("home");
    creatButtons("menu");
    creatButtons("contact");
    content.appendChild(buttons);      
}

 