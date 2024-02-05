function calculate() {
    // Getting input from user into height variable.
    // Input is string so typecasting is necessary.
    let height = parseInt(document.querySelector("#height").value);

    // Getting input from user into weight variable.
    // Input is string so typecasting is necessary.
    let weight = parseInt(document.querySelector("#weight").value);

    let result = document.querySelector("#result");

    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height))
        alert("Provide a valid Height!");
    else if (weight === "" || isNaN(weight))
        alert("Provide a valid Weight!");
    else {
        // If both input is valid, calculate the bmi

        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // Dividing as per the bmi conditions
        if (bmi < 18.6) {
            result.textContent = `Under Weight : ${bmi}`; // Update the content here
            result.style.backgroundColor = "yellow"; // Update the styling here
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.textContent = `Normal : ${bmi}`; // Update the content here
            result.style.backgroundColor = "green"; // Update the styling here
        } else {
            result.textContent = `Over Weight : ${bmi}`; // Update the content here
            result.style.backgroundColor = "red"; // Update the styling here
        }

        // Append the span element to the result container
       
    }
}