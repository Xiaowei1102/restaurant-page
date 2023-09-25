import './style.css';
import sushi from './sushi.jpg'
import { createHomeTab } from './home.js';
import { loadPage } from './page-load.js';
import { createMenu } from './menu';

loadPage();
createHomeTab();
const buttons = document.querySelectorAll(".buttoncontainer > button");
buttons.forEach(element => {
    element.addEventListener("click", (e) => {
        document.getElementById("content").replaceChildren();
        loadPage();
        if (e.target.innerHTML === "home") {
            createHomeTab();
        }
        if (e.target.innerHTML === "menu") {
            createMenu();
        }
    });
});