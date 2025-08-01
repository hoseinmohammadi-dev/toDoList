const btn = document.querySelector('.inp-box>button')
const inp = document.querySelector('.inp-box>input')
const ul = document.querySelector('ul')
const li = document.querySelectorAll('ul>li')
const deleteList = document.querySelector('.delete-list')

let temp
btn.addEventListener('click', () => {
    temp = inp.value

    if (temp === '') {
        alert('write your task')
    } else {
       myAdd(temp)
    }
})

function myAdd(temp){
        let myLi = document.createElement('li')
        myLi.innerHTML = `<div>
                                <span><input type="checkbox" onchange='checkBox(this)'></span>
                                <h3>${temp}</h3>
                                <input id='edit' class="hide"></input>
                            </div>
                            <div class="span">
                                <span onclick='MyEdit(this)'>✏️</span>
                                <span onclick='myDel(this)'>🗑️</span>
                            </div>`

        ul.appendChild(myLi)

        inp.value = null
        inp.focus()
}

function checkBox(s) {
    const h3 = s.parentElement.nextElementSibling
    const originalText = h3.textContent

    if (s.checked) {
        h3.innerHTML = `<del>${originalText}</del>`
    } else {
        h3.innerHTML = originalText
    }
}


// let num = 1
function MyEdit(s) {
    const editBox = s.parentElement.previousElementSibling.children[2]
    const temp = s.parentElement.previousElementSibling.children[1]

    if (editBox.classList.contains('hide')) {
        editBox.classList.remove('hide')
        s.innerHTML = '✅'
        editBox.value = temp.textContent
        temp.classList.add('hide');
    }
    else {
        let textEdit = editBox.value
        editBox.classList.add('hide')
        s.innerHTML = '✏️'
        temp.innerText = textEdit
        temp.classList.remove('hide');
    }
    // num++
}

function myDel(s) {
    const li = s.parentElement.parentElement;
    const oldText = s.parentElement.previousElementSibling.children[1].innerText
    li.classList.add('delete')

    setTimeout(() => {
        li.remove()
    }, 300);

    const delLi = document.createElement('li');
    delLi.innerHTML = ` 
        <h3>${oldText}</h3>
        <span onclick='addAgain(this)'>🔃</span> `;

    deleteList.appendChild(delLi)
    console.log(oldText);
    
}

function addAgain(s){
    let deleteText = s.previousElementSibling.innerText
    s.parentElement.remove()
    myAdd(deleteText)

}