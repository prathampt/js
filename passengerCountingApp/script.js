let count = 0
let previousCounts = []
let text = "Previous Enteries: "

function incrementCount() {
    count++
    document.getElementById("count").innerText = count
}

function saveCount() {
    previousCounts.push(count)
    document.getElementById("countList").innerText = text + getPreviousEnteries(previousCounts)
    count = -1
    incrementCount()
}

function getPreviousEnteries(counts) {
    let text = ""
    for (item of counts) {
        text += item + " - "
    }
    return text.slice(0, -3)
}

function resetCount(){
    count = 0
    document.getElementById("count").innerText = count
    previousCounts = []
    document.getElementById("countList").innerText = text + "None"
}