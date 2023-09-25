import './style.css';
import sushi from './sushi.jpg'
import { createHomeTab } from './home.js';
import { loadPage } from './page-load.js';
import { createMenu } from './menu';
import { createContacts } from './contact';

loadPage();
createHomeTab();
const buttons = document.querySelectorAll("#content");
buttons.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.innerHTML === "home" || e.target.innerHTML === "menu" || e.target.innerHTML === "contact") {
            document.getElementById("content").replaceChildren();
            loadPage();
            if (e.target.innerHTML === "home") {
                createHomeTab();
            }
            if (e.target.innerHTML === "menu") {
                createMenu();
            }
            if (e.target.innerHTML === "contact") {
                createContacts();
            }
        }
    });
});