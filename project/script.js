let heightInput = document.getElementById('height');
let weightInput = document.getElementById('weight');
let calculateBtn = document.getElementById('calculateBtn');
let resetBtn = document.getElementById('resetBtn');
let displayResult = document.getElementById('result');

calculateBtn.addEventListener('click', function(){

    let heightValue = heightInput.value;
    let weightValue = weightInput.value;



    let height = Number(heightValue);
    let weight = Number(weightValue);

    if(!heightValue || !weightValue){
        displayResult.textContent = "Please enter height and weight";
        return;
    }

    if(Number.isNaN(height) || Number.isNaN(weight) || height <= 0 || weight <=0 ){
        displayResult.textContent = "Please enter a valid positive numbers"
        return;
    }

    const heightInMeter = height /100;
    const bmi = weight /(heightInMeter ** 2);
    const roundedBmi = bmi.toFixed(1)


    let category = "";
    if(bmi < 18.5){
        category = "Underweight";
    }else if(bmi <25){
        category = "Normal weight";
    }else if(bmi < 30){
        category = "Overweight"
    }else{
        category = "Obese"
    }


    displayResult.textContent = `Your BMI is ${roundedBmi} ${category}`
})