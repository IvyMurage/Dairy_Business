const form = document.forms["form"];
const btn = document.querySelector('.info-1 .week');
const info = document.querySelector('.info-1');
const weekReportMilk = document.querySelector('.week-report-milk ul');
const weekReportShed = document.querySelector('.week-report-shed ul');

let totalMilk = [];
let sellingPrice = 45;
var totalMilkProducedWeekly = 0;
var totalMilkProducedYearly = 0;
var totalMilkProducedMonthly = 0;
let time = 12;


const getCowProduction = function () {
    const inputForm = document.querySelector('#form');
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // get the input values 
        const inputs = document.querySelectorAll('.cow-shed');
        const labels = document.querySelectorAll('label[for="cow-shed"]');
        const tableBody = document.querySelector('#rows');


        Array.from(labels).forEach(label => {
            var newRow = document.createElement('tr');
            const labelText = label.innerHTML.split(' ').slice(1).join(' ');
            const newCell1 = document.createElement('td');
            newCell1.textContent = labelText;
            newRow.appendChild(newCell1);
            tableBody.appendChild(newRow);
            console.log(newRow)
        })

        const inputArray = Array.from(inputs)
        inputArray.forEach((input, newRow) => {
            const value = input.value
            const newCell2 = document.createElement('td');
            newCell2.textContent = value
        })

        const displayDiv = document.querySelector('.display-div');
        
        displayDiv.style.display = 'block'

        e.target.reset();
    }, {once:true})
}


getCowProduction()

