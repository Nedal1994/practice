function saveStorage()
{
    let stringArr=JSON.stringify(locationArr)
    localStorage.setItem('cookies',stringArr)    
}

function loadStorage()
{
    let data=localStorage.getItem('cookies')
    let parsedArr=JSON.parse(data)

    if(parsedArr !== null)
    {
        for(let i=0;i<parsedArr.length;i++)
        {
            new Location(parsedArr[i].name,parsedArr[i].min,parsedArr[i].max,parsedArr[i].avg)
        }
    }
    else
    {
        let x1=new Location("Amman",21,40,3.2)
        let x2=new Location("California",44,70,2.1)
        let x3=new Location("Abu Dhabi",4,20,1.8)
        let x4=new Location("London",60,100,5.5)
        let x5=new Location("Moscow",100,140,7.5)
    }
}

'use strict';

let nedal=document.getElementById('sales')

let table=document.createElement('table')
nedal.appendChild(table)

function random(min,max)
{
    return Math.floor(Math.random()*(max-min+1))+min;    
}

let hour=["Name","6AM","7AM","8AM","9AM","10AM",
"11AM","12PM","1PM","2PM","3PM","4PM"
,"5PM","6PM","7PM","Overall total"];

let locationArr=[]

function Location(name,min,max,avg)
{
    this.name=name;
    this.min=min;
    this.max=max;
    this.avg=avg;

    this.totalCookies=0;
    this.randomArray=[];
    this.avgCookiesperHour=[];

    locationArr.push(this)

    
}

Location.prototype.randomCustomers=function()
{
    for(let i=0;i<hour.length;i++)
    {
        this.randomArray.push(random(this.min,this.max))
    }
}

Location.prototype.avgCookies=function()
{
    for(let i=0;i<hour.length;i++)
    {
        // Calculating the average number of cookies
        this.avgCookiesperHour.push(Math.floor(this.randomArray[i]*this.avg));

        // Calculating the total sum
        this.totalCookies += this.avgCookiesperHour[i];
    }
}




//DONT FORGET TO CALL THE FUNCTIONS

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

Location.prototype.render=function()
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

let form=document.getElementById('form')
form.addEventListener('submit',submitFunction)

function submitFunction(event)
{
    event.preventDefault();

    let nameField=event.target.nameField.value;
    let minField=parseInt(event.target.minField.value)
    let maxField=parseInt(event.target.maxField.value)
    let avgField=parseFloat(event.target.avgField.value)
    let newShop=new Location(nameField,minField,maxField,avgField)

    saveStorage()

    table.textContent=''
    header()
    for(let i=0;i<locationArr.length;i++)
    {
        locationArr[i].randomArray=[]
        locationArr[i].avgCookiesperHour=[]
        locationArr[i].totalCookies=0
        locationArr[i].randomCustomers()
        locationArr[i].avgCookies()
        locationArr[i].render()
        
    }

    footer()

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
        for(let j=0;j<locationArr.length;j++)
        {
            result+=locationArr[j].avgCookiesperHour[i]
            total+=locationArr[j].avgCookiesperHour[i]
        }
        let footTh=document.createElement('th')
        tr2.appendChild(footTh)
        footTh.textContent=result
    }
    let totalTh=document.createElement('th')
    tr2.appendChild(totalTh)
    totalTh.textContent=total
}

header()

// Calling the random numbers function

loadStorage()
for(let i=0;i<locationArr.length;i++)
{
    locationArr[i].randomCustomers()
    locationArr[i].avgCookies()
    locationArr[i].render()

}
footer()    