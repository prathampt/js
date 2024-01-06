let myLeads = [1,2,3,4,5,6,7,8,9]
const inputElement = document.getElementById("inputElement")
const inputButton = document.getElementById("inputButton")
const ulElement = document.getElementById("ulElement")

inputButton.addEventListener("click", function () {
    console.log("Button clicked and message loged through eventlistener...")
    myLeads.push(inputElement.value)

    for (let i of myLeads){
        ulElement.innerHTML += "<li>" + i + "</li>"
    }
})
