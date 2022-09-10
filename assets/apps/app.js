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

// Adding an event listener to the weekly report button
// btn.addEventListener('click', function (e) {
//     e.preventDefault;
//     for (const property in milkProductionReport) {
//         const previousWeekShed = document.createElement('li');
//         previousWeekShed.textContent = property;
//         weekReportShed.appendChild(previousWeekShed);

//         const previousWeekMilk = document.createElement('li');
//         previousWeekMilk.textContent = milkProductionReport[property];
//         weekReportMilk.appendChild(previousWeekMilk);
//     }
// }, {
//     once: true
// });

// styles the total milk produced span
// const milkProduced = document.createElement('span');
// const totalperday = document.querySelector('.total');
// totalperday.style.color = "white";
// totalperday.style.fontWeight = "bold";
// totalperday.style.textAlign = "center";
// totalperday.style.width = "fit-content";
// totalperday.style.borderRadius = "10px";
// totalperday.style.backgroundColor = "#293190";
// totalperday.style.margin = "auto";
// totalperday.style.padding = "5px";



// form.addEventListener('submit', function (e) {

//     e.preventDefault();
//     let value_1 = form.querySelector('input[type="text"]').value;
//     let value_2 = form.querySelector('input[type="number"]').value;

//     // find the total milk production per day
//     let milkValue = Number(value_2);
//     totalMilk.push(milkValue);
//     console.log(totalMilk);
//     let totalMilkProduced = 0;
//     totalMilk.forEach(function (item) {
//         totalMilkProduced += item;
//     });
//     totalMilkProducedWeekly = totalMilkProduced;
//     totalMilkProducedYearly = totalMilkProduced;
//     totalMilkProducedMonthly = totalMilkProduced


//     // cow object
//     milkProductionReport[value_1] = milkValue;
//     console.log(milkProductionReport);


//     //create elements
//     const cowShed = document.createElement('li');
//     const milkAmount = document.createElement('li');



//     //Add content to the element
//     cowShed.textContent = value_1;
//     milkAmount.textContent = value_2;
//     milkProduced.textContent = totalMilkProduced;

//     //append to dom
//     const list = document.querySelector('.list ul');
//     const list_2 = document.querySelector('.list-1 ul');


//     list.appendChild(cowShed);
//     list_2.appendChild(milkAmount);
//     totalperday.appendChild(milkProduced);



//     // Clear output from the input field 
//     form.querySelector('input[type="text"]').value = '';
//     form.querySelector('input[type="number"]').value = '';

// });


// const moneyGenerated = document.querySelector('.money-generated');
// const monthly_Time = document.querySelector('.monthly-income .month ul');
// const monthly_amount = document.querySelector('.monthly-income .amount ul');
// const moneyGeneratedWeekly = document.querySelector('.money-generated .weekly-Money-Generated');
// const moneyGeneratedMonthly = document.querySelector('.money-generated .Monthly-Money-Generated');
// const moneyGeneratedYearly = document.querySelector('.money-generated .Yearly-Money-Generated');
// // Money gerenarated weekly
// moneyGeneratedWeekly.addEventListener('click', function (e) {
//     e.preventDefault;
//     let finalResult = incomeOverTimeWeekly(sellingPrice, totalMilkProducedWeekly);
//     const weeklyIncome = document.createElement('span');
//     weeklyIncome.textContent = "The weekly money generated is: " + finalResult;
//     moneyGenerated.appendChild(weeklyIncome);
// }, {
//     once: true
// });
// // function to calculate money generated weekly
// const incomeOverTimeWeekly = function (sellingPrice, totalMilkProducedWeekly) {
//     let weeklyMoneyGenerated = totalMilkProducedWeekly * sellingPrice;
//     return weeklyMoneyGenerated;
// }
// // Money generated yearly
// moneyGeneratedYearly.addEventListener('click', function (e) {
//     e.preventDefault;
//     let finalResult = incomeOverTimeYearly(sellingPrice, totalMilkProducedYearly, time);
//     const yearlyIncome = document.createElement('span');
//     yearlyIncome.textContent = "The yearly money generated is: " + finalResult;
//     moneyGenerated.appendChild(yearlyIncome);
// }, {
//     once: true
// });
// // function to calculate money generated yearly
// const incomeOverTimeYearly = function (sellingPrice, totalMilkProducedYearly, time) {
//     let yearlyMoneyGenerated = totalMilkProducedYearly * sellingPrice * time;
//     return yearlyMoneyGenerated;
// }


// moneyGeneratedMonthly.addEventListener('click', function (e) {
//     e.preventDefault;
//     let monthly = incomeOverTimeMonthly(sellingPrice, totalMilkProducedMonthly);
//     for (const property in monthly) {

//         const monthlyTime = document.createElement('li');
//         monthlyTime.textContent = property;
//         monthly_Time.appendChild(monthlyTime);

//         const monthlyIncome = document.createElement('li');
//         monthlyIncome.textContent = monthly[property];
//         monthly_amount.appendChild(monthlyIncome);
//     }

// }, {
//     once: true
// });

// const incomeOverTimeMonthly = function (sellingPrice, totalMilkProducedMonthly) {
//     monthly = {
//         'January': sellingPrice * totalMilkProducedMonthly * 31,
//         'February': sellingPrice * totalMilkProducedMonthly * 29,
//         'March': sellingPrice * totalMilkProducedMonthly * 31,
//         'April': sellingPrice * totalMilkProducedMonthly * 30,
//         'May': sellingPrice * totalMilkProducedMonthly * 31,
//         'June': sellingPrice * totalMilkProducedMonthly * 30,
//         'July': sellingPrice * totalMilkProducedMonthly * 31,
//         'August': sellingPrice * totalMilkProducedMonthly * 31,
//         'September': sellingPrice * totalMilkProducedMonthly * 30,
//         'October': sellingPrice * totalMilkProducedMonthly * 31,
//         'November': sellingPrice * totalMilkProducedMonthly * 30,
//         'December': sellingPrice * totalMilkProducedMonthly * 31,

//     }
//     return monthly
// }