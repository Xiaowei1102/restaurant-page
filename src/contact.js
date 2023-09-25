import { createElement } from "./home";

export function createContacts() {
    const content = document.getElementById("content");
    createElement("contactcontainer", content);
    const contactContainer = document.querySelector(".contactcontainer")
    function addContact (contatctNmaes, titles, phones, emails) {
        for (let i = 0; i < 3; i++) {
            let lowerCaseTitle = titles[i].toLowerCase();
            createElement(`${lowerCaseTitle}container`, contactContainer);
            const container = document.querySelector(`.${lowerCaseTitle}container`);
            createElement(`name${i}`, container);
            document.querySelector(`.name${i}`).innerHTML = contactNames[i];
            createElement(`title${i}`, container);
            document.querySelector(`.title${i}`).innerHTML = titles[i];
            createElement(`phone${i}`, container);
            document.querySelector(`.phone${i}`).innerHTML = phones[i];
            createElement(`email${i}`, container);
            document.querySelector(`.email${i}`).innerHTML = emails[i];
        }
        
    }
    
    const contactNames = ["John Smith", "Alex Brown", "Neil Newman"];
    const titles = ["Chef", "Manager", "Waiter"];
    const phones = ["333-333-3331", "333-333-3332", "333-333-3333"];
    const emails = ["john@itssuperreal.com", "alex@itssuperreal.com", "neil@itssuperreal.com"];
    
    addContact(contactNames, titles, phones, emails);
}