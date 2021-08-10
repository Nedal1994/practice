'use strict';

let img1=document.getElementById('image1')
let img2=document.getElementById('image2')
let img3=document.getElementById('image3')
let buttonElement=document.getElementById('button')
let resultList = document.getElementById('result')

let maxAttempts=10;
let attempt=0;

let imgIndex1;
let imgIndex2;
let imgIndex3;

let products=[];
// let namesArr=[];
// let votesArr=[];
// let shownArr=[];

function Items(name,src)
{
    this.name=name;
    this.path=src;
    this.vote=0;
    this.shown=0;
    products.push(this)
    // namesArr.push(this)
}

new Items('Bags','img/bag.jpg')
new Items('Banana','img/banana.jpg')
new Items('Bathroom','img/bathroom.jpg')
new Items('Boots','img/boots.jpg')
new Items('Breakfast','img/breakfast.jpg')
new Items('Bubblegum','img/bubblegum.jpg')
new Items('Chair','img/chair.jpg')
new Items('cthulhu','img/cthulhu.jpg')
new Items('Dog duck','img/dog-duck.jpg')
new Items('Dragon','img/dragon.jpg')
new Items('Pen','img/pen.jpg')
new Items('Pet sweep','img/pet-sweep.jpg')
new Items('Scissors','img/scissors.jpg')
new Items('Shark','img/shark.jpg')
new Items('Sweep','img/sweep.png')
new Items('Tauntaun','img/tauntaun.jpg')
new Items('Unicorn','img/unicorn.jpg')
new Items('Water can','img/water-can.jpg')
new Items('Wine glass','img/wine-glass.jpg')

function getnumbers()
{
    return Math.floor(Math.random()*products.length)
}

let shownPic=[];

function render()
{
    imgIndex1=getnumbers()
    imgIndex2=getnumbers()
    imgIndex3=getnumbers()

    while(imgIndex1 === imgIndex3 || imgIndex1 === imgIndex2 || imgIndex3 === imgIndex2 || shownPic.includes(imgIndex1) || shownPic.includes(imgIndex2) || shownPic.includes(imgIndex3))
    {
        imgIndex1=getnumbers()
        imgIndex2=getnumbers()
        imgIndex3=getnumbers()
    }
    img1.src=products[imgIndex1].path
    img2.src=products[imgIndex2].path
    img3.src=products[imgIndex3].path

    products[imgIndex1].shown++;
    products[imgIndex2].shown++;
    products[imgIndex3].shown++;

    shownPic=[imgIndex1,imgIndex2,imgIndex3]
}

img1.addEventListener('click' ,userClick)
img2.addEventListener('click' ,userClick)
img3.addEventListener('click' ,userClick)

function userClick(event)
{

    attempt++;

    if(attempt<maxAttempts)
    {
        if(event.target.id==='image1')
        {
            products[imgIndex1].vote++
        }
        else if(event.target.id==='image2')
        {
            products[imgIndex2].vote++
        }
        else if(event.target.id==='image3')
        {
            products[imgIndex3].vote++
        }
        render()
    }
    else
    {
        saveStorage()
        buttonElement.hidden=false;
        buttonElement.addEventListener('click',showList)

        function showList()
        {
            let list = document.getElementById('result')
            for(let i=0;i<products.length;i++)
            {
                let listItem=document.createElement('li')
                list.appendChild(listItem)

                listItem.textContent=`${products[i].name} has been voted ${products[i].vote} and has been shown ${products[i].shown} times`
            }
            buttonElement.removeEventListener('click' ,showList)
        }
        img1.removeEventListener('click',userClick)
        img2.removeEventListener('click',userClick)
        img3.removeEventListener('click',userClick)

    }
}
render()

function saveStorage()
{
    let stringArr=JSON.stringify(products)
    localStorage.setItem('Products',stringArr)
}

function loadStorage()
{
    let data=localStorage.getItem('Products')
    let parsedArr=JSON.parse(data)
    if(parsedArr !== null)
    {
        products=parsedArr
    }
}
loadStorage()