const form = document.forms["form"];
const btn = document.querySelector('.info-1 .week');
const info = document.querySelector('.info-1');
const weekReportMilk = document.querySelector('.week-report-milk ul');
const weekReportShed = document.querySelector('.week-report-shed ul');

let totalMilk = [];
let sellingPrice = 45;
var totalMilkProducedWeekly = 0;
var totalMilkProducedYearly = 0;
let time = 12;

// div for previous week
let milkProductionReport = {
    'Shed A': 510,
    'Shed B': 308,
    'Shed C': 486,
    'Shed D': 572,
    'Total': 1876
};

// Adding an event listener to the weekly report button
btn.addEventListener('click', function (e) {
    e.preventDefault;
    for (const property in milkProductionReport) {
        const previousWeekShed = document.createElement('li');
        previousWeekShed.textContent = property;
        weekReportShed.appendChild(previousWeekShed);

        const previousWeekMilk = document.createElement('li');
        previousWeekMilk.textContent = milkProductionReport[property];
        weekReportMilk.appendChild(previousWeekMilk);
    }
}, {
    once: true
});

// styles the total milk produced span
const milkProduced = document.createElement('span');
const totalperday = document.querySelector('.total');
totalperday.style.color = "white";
totalperday.style.fontWeight = "bold";
totalperday.style.textAlign = "center";
totalperday.style.width = "fit-content";
totalperday.style.borderRadius = "10px";
totalperday.style.backgroundColor = "#293190";
totalperday.style.margin = "auto";
totalperday.style.padding = "5px";



form.addEventListener('submit', function (e) {

    e.preventDefault();
    let value_1 = form.querySelector('input[type="text"]').value;
    let value_2 = form.querySelector('input[type="number"]').value;

    // find the total milk production per day
    let milkValue = Number(value_2);
    totalMilk.push(milkValue);
    console.log(totalMilk);
    let totalMilkProduced = 0;
    totalMilk.forEach(function (item) {
        totalMilkProduced += item;
    });
    totalMilkProducedWeekly = totalMilkProduced;
    totalMilkProducedYearly = totalMilkProduced ;
    console.log(totalMilkProducedWeekly);


    // cow object
    milkProductionReport[value_1] = milkValue;
    console.log(milkProductionReport);


    //create elements
    const cowShed = document.createElement('li');
    const milkAmount = document.createElement('li');



    //Add content to the element
    cowShed.textContent = value_1;
    milkAmount.textContent = value_2;
    milkProduced.textContent = totalMilkProduced;

    //append to dom
    const list = document.querySelector('.list ul');
    const list_2 = document.querySelector('.list-1 ul');


    list.appendChild(cowShed);
    list_2.appendChild(milkAmount);
    totalperday.appendChild(milkProduced);



    // Clear output from the input field 
    form.querySelector('input[type="text"]').value = '';
    form.querySelector('input[type="number"]').value = '';

});


const moneyGenerated = document.querySelector('.money-generated');
const moneyGeneratedWeekly = document.querySelector('.money-generated .weekly-Money-Generated');
const moneyGeneratedMonthly = document.querySelector('.money-generated .monthly-Money-Generated');
const moneyGeneratedYearly = document.querySelector('.money-generated .Yearly-Money-Generated');

moneyGeneratedWeekly.addEventListener('click', function (e) {
    e.preventDefault;
    let finalResult = incomeOverTimeWeekly(sellingPrice, totalMilkProducedWeekly);
    const weeklyIncome = document.createElement('span');
    weeklyIncome.textContent = "The weekly money generated is: " +finalResult;
    moneyGenerated.appendChild(weeklyIncome);
}, {once:true});

const incomeOverTimeWeekly = function (sellingPrice, totalMilkProducedWeekly) {
    let weeklyMoneyGenerated = totalMilkProducedWeekly * sellingPrice;
    return weeklyMoneyGenerated;
}

moneyGeneratedYearly.addEventListener('click', function (e) {
    e.preventDefault;
    let finalResult = incomeOverTimeYearly(sellingPrice, totalMilkProducedYearly, time);
    const yearlyIncome = document.createElement('span');
    yearlyIncome.textContent = "The yearly money generated is: " +finalResult;
    moneyGenerated.appendChild(yearlyIncome);
}, {once: true});

const incomeOverTimeYearly = function (sellingPrice, totalMilkProducedYearly, time) {
    let yearlyMoneyGenerated = totalMilkProducedYearly * sellingPrice * time;
    return yearlyMoneyGenerated;
}