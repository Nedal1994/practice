'use strict';

let nedal1 = document.getElementById('nedal1')

let form = document.createElement('form')
nedal1.appendChild(form)

let fieldset = document.createElement('fieldset')
form.appendChild(fieldset)

let table = document.createElement('table')
nedal1.appendChild(table)

function random(min,max)
{
    return Math.floor(Math.random()*(max-min+1))+min;
}
let shopArr=[]

let hour =["Name","6AM","7AM","8AM","9AM","10AM","11AM",
"12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","Overall total"]

function Shop(name,min,max,avg)
{
    this.name=name;
    this.min=min;
    this.max=max;
    this.avg=avg;

    this.totalCookies=0;
    this.randomArray=[];
    this.avgCookiesperHour=[];

    shopArr.push(this)
}
Shop.prototype.randomCustomers=function()
{
    for(let i=0;i<hour.length;i++)
    {
        this.randomArray.push(random(this.min,this.max))
    }
}
Shop.prototype.avgCookies=function()
{
    for(let i=0;i<hour.length;i++)
    {
        this.avgCookiesperHour.push(Math.floor(this.randomArray[i]*this.avg))
        this.totalCookies += this.avgCookiesperHour[i];
    }
}

let s1=new Shop("USA",15,37,2.2)
let s2=new Shop("UK",24,57,2.8)
let s3=new Shop("Russia",30,59,4.4)
let s4=new Shop("Jordan",35,77,5.5)
let s5=new Shop("Germany",44,91,3.3)

function formFunction() 
{
    let h1=document.createElement('h1')
    fieldset.appendChild(h1)
    h1.textContent='Form'

    let label1 = document.createElement('label')
    fieldset.appendChild(label1)

    let br=document.createElement('br')
    fieldset.appendChild(br)

        
    for (let i = 0; i < 4; i++) 
    {
        let textbox = document.createElement('input')
        textbox.setAttribute('id','name')
        console.log(textbox);

        fieldset.appendChild(textbox)
       
        let br1=document.createElement('br')
        let br2=document.createElement('br')

        fieldset.appendChild(br1)
        fieldset.appendChild(br2)
    }


    let submit = document.createElement('button')
    fieldset.appendChild(submit)
    submit.textContent='Insert'

    submit.addEventListener('submit', submitFunction)
}

function submitFunction(event)
{
    event.preventDefault()
    this.name=event.target.name.value
}



function header()
{
    let tr=document.createElement('tr')
    table.appendChild(tr)

    
    for(let i=0;i<hour.length;i++)
    {
        let th=document.createElement('th')
        tr.appendChild(th)
        th.textContent=hour[i]
    }
}

Shop.prototype.render=function()
{
    let tr1=document.createElement('tr')
    table.appendChild(tr1)

    let th1=document.createElement('th')
    tr1.appendChild(th1)
    th1.textContent=`${this.name}`

    for(let i=0;i<14;i++)
    {
         let td=document.createElement('td')
         tr1.appendChild(td)
         td.textContent=this.avgCookiesperHour[i]        
    }
    let sum=document.createElement('th')
    tr1.appendChild(sum)
    sum.textContent=this.totalCookies
}

function footer()
{
    let tr2=document.createElement('tr')
    table.appendChild(tr2)
    
    let th2=document.createElement('th')
    tr2.appendChild(th2)
    let total=0;

    th2.textContent='Total'
    for(let i=0;i<14;i++)
    {
        let result=0;
        for(let j=0;j<shopArr.length;j++)
        {
            result+=shopArr[j].avgCookiesperHour[i]
            total+=shopArr[j].avgCookiesperHour[i]
        }
        let footTh=document.createElement('th')
        tr2.appendChild(footTh)
        footTh.textContent=result
    }
    let totalTh=document.createElement('th')
    tr2.appendChild(totalTh)
    totalTh.textContent=total
}



formFunction()
header()
for(let i=0;i<shopArr.length;i++)
{
    shopArr[i].randomCustomers()
    shopArr[i].avgCookies()
    shopArr[i].render()
}
footer()