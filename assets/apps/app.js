const form = document.forms["form"]
let totalMilk = [];


const milkProduced = document.createElement('span');
const totalperday = document.querySelector('.report');

form.addEventListener('submit', function (e) {

    e.preventDefault();
    const value_1 = form.querySelector('input[type="text"]').value;
    let value_2 = form.querySelector('input[type="number"]').value;

    // find the total milk production per day
    let milkValue = Number(value_2);
    totalMilk.push(milkValue);
    console.log(totalMilk);
    let totalMilkProduced = 0;
    totalMilk.forEach(function (item) {
        totalMilkProduced += item;

    });
    console.log(totalMilkProduced)

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

// let totalMilkProduced = 0;