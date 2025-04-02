function calculateAge() {
    let dobInput = document.getElementById("dob").value;
    let resultElement = document.getElementById("result");

    // Check if user entered a date
    if (!dobInput) {
        resultElement.innerText = "Please enter your Date of Birth!";
        resultElement.style.color = "red";
        return;
    }

    let birthDate = new Date(dobInput);
    let today = new Date();

    // Calculate years
    let years = today.getFullYear() - birthDate.getFullYear();
    
    // Calculate months and days
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust if the birth date hasn't occurred yet in the current month
    if (days < 0) {
        months--; // Borrow a month
        let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate(); // Add the number of days in the previous month
    }

    // Adjust if the birth month hasn't occurred yet in the current year
    if (months < 0) {
        years--;
        months += 12;
    }

    // Display the result
    resultElement.innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
    resultElement.style.color = "black";
}
