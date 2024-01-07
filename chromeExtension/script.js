let myLeads = []
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

const inputElement = document.getElementById("inputElement")
const inputButton = document.getElementById("inputButton")
const ulElement = document.getElementById("ulElement")
const deleteButton = document.getElementById("deleteButton")
const tabButton = document.getElementById("tabButton")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

function renderLeads(myLeads){

    let listItems = ""
    for (let i of myLeads){
        // listItems += "<li><a href='" + i + "' target='_blank'>" + i + "</a></li>"

        listItems += `
            <li>
                <a href="${i}" target="_blank">
                    ${i}
                </a>
            </li>
        `
        // Above string is called as template string...

        // const li = document.createElement("li")
        // li.textContent = i
        // listItems += String(li)
    }

    ulElement.innerHTML = listItems
}

inputButton.addEventListener("click", function () {
    myLeads.push(inputElement.value)
    inputElement.value = ""
    renderLeads(myLeads)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
})

deleteButton.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})

tabButton.addEventListener("click", function () {
    
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLeads.push(tabs[0].url)
        renderLeads(myLeads)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
    })
    
})