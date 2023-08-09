let myLeads = [];
const inputEl = document.getElementById('input-el');
const button = document.getElementById('input-btn');
const ulEl = document.getElementById('list');

button.addEventListener('click', () => {
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value = '';
});

function renderLeads () {
    let listItems = '';

    for (const element of myLeads) {
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


