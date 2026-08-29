function calculateBMI() {
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const result = document.getElementById("result");

  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  // Validate empty or invalid values
  if (
    heightInput.value.trim() === "" ||
    weightInput.value.trim() === ""
  ) {
    result.innerHTML = "⚠️ Please enter both height and weight.";
    return;
  }

  // Reject zero and negative values
  if (height <= 0 || weight <= 0) {
    result.innerHTML = "⚠️ Height and weight must be greater than zero.";
    return;
  }

  // Basic realistic input validation
  if (height < 50 || height > 300) {
    result.innerHTML = "⚠️ Please enter a valid height between 50 and 300 cm.";
    return;
  }

  if (weight < 2 || weight > 500) {
    result.innerHTML = "⚠️ Please enter a valid weight between 2 and 500 kg.";
    return;
  }

  // Convert height from cm to meters
  const heightInMeters = height / 100;

  // BMI formula
  const bmi = weight / (heightInMeters * heightInMeters);

  let category;

  // BMI category
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  result.innerHTML = `
    <div>
      <div>Your BMI</div>
      <div class="bmi-value">${bmi.toFixed(2)}</div>
      <div class="category">${category}</div>
    </div>
  `;
}

function clearBMI() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";

  document.getElementById("result").innerHTML =
    "<span>Your BMI result will appear here</span>";
}