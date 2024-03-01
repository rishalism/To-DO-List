
let inputField = document.getElementById('search-field')
let AddButton = document.querySelector('.cssbuttons-io-button')
let listcontainer = document.getElementById('task-container');

showData()

inputField.addEventListener('keydown',(event)=>{
    if(event.key=='Enter'){
        event.preventDefault()
        AddButton.click()
    }
})


AddButton.addEventListener('click', () => {
    if (inputField.value == '') {
        alert('please write something to add')
    } else {
        let li = document.createElement('li')
        li.textContent = inputField.value
        listcontainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        saveData()
        inputField.value = ''
    }
})

function saveData() {
    localStorage.setItem('data', listcontainer.innerHTML)
}

function showData() {
    listcontainer.innerHTML = localStorage.getItem('data')
}

listcontainer.addEventListener('click', (e) => {

    if (e.target.tagName == 'LI') {

        e.target.classList.toggle('checked')
        saveData()
    }
    else if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    }
})

