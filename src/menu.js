import { createElement } from "./home";

export function createMenu() {
    //create menu: appetizer, sashimi, sushi, specialty roll and dessert
    const content = document.getElementById("content");
    createElement("menucontainer", content);
    const menuContainer = document.querySelector(".menucontainer");
    createElement("appetizer", menuContainer);
    createElement("sashimi", menuContainer);
    createElement("sushi", menuContainer);
    createElement("specialtyroll", menuContainer);
    createElement("dessert", menuContainer);
    
    //create price function to look up for price
    function price(item) {
        const itemName = item.trim().toLowerCase();
        switch(itemName) {
            case "edamame":
                return "$3";
            case "chickenwing":
                return "$6";
            case "misosoup":
                return "$1";    
            case "salmon":
                return "$2"
            case "redtuna":
                return "$1";
            case "squid":
                return "$3";
            case "yellowtail":
                return "$3";
            case "unagi":
                return "$3";
            case "dragonroll":
                return "$8";
            case "spiderroll":
                return "$8";
            case "dynamiteroll":
                return "$8";
            case "greenteaicecream":
                return "$2";
            case "strawberryicecream":
                return "$2";
            default:
                return "not found";
        }
    }
    
    //use below function to fill in each item
    function fillInMenu (element, parent) {
        const newElement = element.split(" ").join("").toLowerCase();
        createElement(`${newElement}container`, parent);
        const container = document.querySelector(`.${newElement}container`);
        createElement(newElement, container);
        document.querySelector(`.${newElement}`).innerHTML = element;
        createElement(`${newElement}price`, container);
        document.querySelector(`.${newElement}price`).innerHTML = price(newElement);
        
    }
    
    //use this function to create items for each categary:
    function createCategaryMenu (parent, items) {
        const element = document.querySelector(`.${parent}`);
        createElement(`${parent}title`, element);
        document.querySelector(`.${parent}title`).innerHTML = parent.toUpperCase();
        createElement(`${parent}items`, element);
        const itemContainer = document.querySelector(`.${parent}items`);
        for (let item of items) {
            fillInMenu(item, itemContainer);
        }
    }
    
    //appetizer
    const appetizerItems = ["Edamame", "Chicken Wing", "Miso Soup"];
    createCategaryMenu("appetizer", appetizerItems);
    
    
    //sashimi
    const sashimiItems = ["Salmon", "Red Tuna"];
    createCategaryMenu("sashimi", sashimiItems);
    
    //sushi
    const sushiItems = ["Squid", "Yellowtail", "Unagi"];
    createCategaryMenu("sushi", sushiItems);
    
    //specialty roll
    const specialtyRoll = ["Dragon Roll", "Spider Roll", "Dynamite Roll"];
    createCategaryMenu("specialtyroll", specialtyRoll);
    
    //dissert
    const dessertItems = ["Green Tea Icecream", "Strawberry Icecream"];
    createCategaryMenu("dessert", dessertItems);
}





