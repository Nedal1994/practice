// let source = document.getElementById('source')

// let table = document.createElement('table')
// source.appendChild(table)

// let details = ["Name", "Age", "Weight"]

// let studentArr = [];

// function Student(name, age, weight) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;

//     studentArr.push(this)
// }
// let s1 = new Student("Nedal", 26, 72)
// let s2 = new Student("Aseel", 23, 56)
// let s3 = new Student("Ahmed", 29, 75)
// let s4 = new Student("Omar", 32, 85)

// function header() {
//     let tr = document.createElement('tr')
//     table.appendChild(tr)


//     for (let i = 0; i < details.length; i++) {
//         let th = document.createElement('th')
//         tr.appendChild(th)
//         th.textContent = details[i]
//     }
// }

// Student.prototype.render = function () 
// {
//     for (let i = 0; i < 1; i++) {
//         for (let i = 0; i < studentArr.length; i++) {
//             let tr1 = document.createElement('tr')
//             table.appendChild(tr1)

//             let td1 = document.createElement('td')
//             tr1.appendChild(td1)

//             td1.textContent = studentArr[i].name

//             let td2 = document.createElement('td')
//             tr1.appendChild(td2)
//             td2.textContent = studentArr[i].age

//             let td3 = document.createElement('td')
//             tr1.appendChild(td3)
//             td3.textContent = studentArr[i].weight
//         }

//     }
// }

// header()
// for(let i=0;i<1;i++)
// {
//     studentArr[i].render()
// }