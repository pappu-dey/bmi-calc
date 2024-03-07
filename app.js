window.onload = () => {
  const button = document.querySelector("#btn");
  button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");
  const genderSelect = document.querySelector("#gender");
  const ageInput = document.querySelector("#age");
  const resultDiv = document.querySelector("#result");
  const containerDiv = document.querySelector(".container");
  const imageDiv = document.querySelector(".image");

  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);
  const gender = genderSelect.value;
  const age = parseInt(ageInput.value);

  if (!isNaN(height) && !isNaN(weight) && !isNaN(age)) {
    const bmi = calculateBMIValue(height, weight, age, gender);

    if (gender === "male") {
      if (bmi < 18.5) {
        resultDiv.style.color = "blue";

        resultDiv.textContent = `Your BMI is: ${bmi.toFixed(2)} (Underweight)`;
        containerDiv.style.boxShadow = "0px 0px 20px 10px #0000AA";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        resultDiv.style.color = "green";

        resultDiv.textContent = `Your BMI is: ${bmi.toFixed(
          2
        )} (Healthy Range)`;
        containerDiv.style.boxShadow = "0px 0px 20px 10px #006600";
      } else if (bmi >= 25 && bmi < 29.9) {
        resultDiv.style.color = "yellow";

        resultDiv.textContent = `Your BMI is: ${bmi.toFixed(2)} (Overweight)`;
        containerDiv.style.boxShadow = "0px 0px 20px 10px #CCCC00";
      } else if (bmi >= 30 && bmi < 39.9) {
        resultDiv.style.color = "red";
        resultDiv.textContent = `Your BMI is: ${bmi.toFixed(2)} (Obesity)`;
        containerDiv.style.boxShadow = "0px 0px 20px 10px #AA0000";
      } else {
        resultDiv.style.color = "red";

        resultDiv.textContent = `Your BMI is: ${bmi.toFixed(
          2
        )} (Severe Obesity)`;
        containerDiv.style.boxShadow = "0px 0px 20px 10px #AA0000";
      }
    } else if (gender === "female") {
      if (bmi < 18.5) {
        resultDiv.style.color = "blue";
        resultDiv.textContent = `Your BMI is: ${bmi.toFixed(2)} (Underweight)`;
        containerDiv.style.boxShadow = "0px 0px 20px 10px #0000AA";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        resultDiv.style.color = "green";

        resultDiv.textContent = `Your BMI is: ${bmi.toFixed(
          2
        )} (Healthy Range)`;
        containerDiv.style.boxShadow = "0px 0px 20px 10px #006600";
      } else if (bmi >= 25 && bmi < 29.9) {
        resultDiv.style.color = "yellow";

        resultDiv.textContent = `Your BMI is: ${bmi.toFixed(2)} (Overweight)`;
        containerDiv.style.boxShadow = "0px 0px 20px 10px #CCCC00";
      } else if (bmi >= 30 && bmi < 39.9) {
        resultDiv.style.color = "red";

        resultDiv.textContent = `Your BMI is: ${bmi.toFixed(2)} (Obesity)`;
        containerDiv.style.boxShadow = "0px 0px 20px 10px #AA0000";
      } else {
        resultDiv.style.color = "red";
        resultDiv.textContent = `Your BMI is: ${bmi.toFixed(
          2
        )} (Severe Obesity)`;
        containerDiv.style.boxShadow = "0px 0px 20px 10px #AA0000";
      }
    }
  } else {
    resultDiv.textContent =
      "Invalid input. Please enter valid height, weight, and age.";
    resultDiv.style.color = "black";
    resultDiv.style.backgroundColor = "white";
    containerDiv.style.boxShadow = "0px 0px 20px 10px #0044ff";
  }
}

function calculateBMIValue(height, weight, age, gender) {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
}
