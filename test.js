'use strict';

let fruitForm = document.getElementById('fruit')
let orderList = document.getElementById('orders')

function Fruit(nameField,fruitType,size)
{
    this.nameField=nameField;
    this.fruitType=fruitType;
    this.size=size;

    Fruit.all.push(this)

    saveStorage()
    
}

Fruit.all=[]

function saveStorage()
{
    let stringArr = JSON.stringify(Fruit.all)
    localStorage.setItem('fruits',stringArr)
}


function loadStorage()
{
    let data=localStorage.getItem('fruits')
    let parsedArr=JSON.parse(data)

    // Re-instantiation

    if(parsedArr !== null)
    {
        for(let i=0;i<parsedArr.length;i++)
        {
            new Fruit(parsedArr[i].nameField, parsedArr[i].fruitType, parsedArr[i].size)
        }
        render()
    }
    else
    {
        new Fruit('Nedal','Apple','4KG')
        render()
    }
}


loadStorage()


function handleSubmit(event)
{
    event.preventDefault()
    let nameField=event.target.nameField.value
    let fruitType=event.target.fruitType.value
    let size=event.target.size.value

    new Fruit(nameField,fruitType,size)

    render()
}

let removeButton = document.getElementById('remove')
removeButton.addEventListener('click',clearStorage)

function clearStorage()
{
    localStorage.clear()
}

function render()
{
    orderList.textContent=''

    for(let i=0;i<Fruit.all.length;i++)
    {
        let list = document.createElement('li')
        orderList.appendChild(list)

        list.textContent=`${Fruit.all[i].nameField} has ordered ${Fruit.all[i].fruitType} weighed ${Fruit.all[i].size}`
    }
}


fruitForm.addEventListener('submit',handleSubmit)