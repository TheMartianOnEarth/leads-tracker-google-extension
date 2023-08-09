let myLeads = [];

let oldLeads = [];

const inputEl = document.getElementById('input-el');
const button = document.getElementById('input-btn');
const ulEl = document.getElementById('list');
const deleteButton = document.getElementById('delete-btn');
const tabButton = document.getElementById('tab-btn');

//fetch the set items from local storage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

tabButton.addEventListener('click', () => {
     chrome.tabs.query({ active: true, currentWindow: true}, (tabs) => {
        myLeads.push(tabs[0].url);
        localStorage.setItem('myLeads', JSON.stringify(myLeads));
        render(myLeads);
     });
});

function render(leads) {
    let listItems = '';

    for (const element of leads) {
        listItems += `
            <li> 
                <a href="${element}" target=”_blank”> 
                    ${element} 
                </a>
            </li>
        `;
    }

    ulEl.innerHTML = listItems;
}

deleteButton.addEventListener("click", () => {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

button.addEventListener('click', () => {
    myLeads.push(inputEl.value);
    inputEl.value = '';

    localStorage.setItem('myLeads', JSON.stringify(myLeads));

    render(myLeads);
});




