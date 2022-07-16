const form = document.forms["form"]

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const value_1 = form.querySelector('input[type="text"]').value;
    let value_2 = form.querySelector('input[type="number"]').value;

    
    //create elements
    const cowShed = document.createElement('li');
    const milkAmount = document.createElement('li')
    cowShed.textContent = value_1;
    milkAmount.textContent = value_2;

    //append to dom
    const list = document.querySelector('.list ul');
    const list_2 = document.querySelector('.list-1 ul');
    list.appendChild(cowShed);
    list_2.appendChild(milkAmount);

    form.querySelector('input[type="text"]').value='';
    form.querySelector('input[type="number"]').value='';




});