function updateHoursSaved() {
    // Update the displayed value as the slider is moved
    const hoursSaved = document.getElementById('hoursSavedSlider').value;
    document.getElementById('hoursSavedValue').textContent = hoursSaved;
}

function calculateROI() {
    // Get the input values
    const hoursSpent = document.getElementById('hoursSpent').value;
    const hourlyRate = document.getElementById('hourlyRate').value;
    const hoursSaved = document.getElementById('hoursSavedSlider').value;

    // Calculate the ROI
    const timeValueSaved = hoursSaved * hourlyRate;
    const totalMonthlyROI = timeValueSaved;

    // Display the results
    document.getElementById('resultHoursSaved').textContent = hoursSaved;
    document.getElementById('resultTimeValueSaved').textContent = timeValueSaved.toFixed(2);
    document.getElementById('resultTotalMonthlyROI').textContent = totalMonthlyROI.toFixed(2);

    // Show the result section
    document.getElementById('result').classList.remove('hidden');
}
