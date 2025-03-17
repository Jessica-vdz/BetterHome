document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("temp-slider");
    const tempDisplay = document.getElementById("temp-display");

    // Update the temperature value and the slider's gradient
    slider.addEventListener("input", function() {
        const value = slider.value;

        // Display the value in °C
        tempDisplay.textContent = `${value}°C`;

        // Change the background gradient based on temperature
        const red = Math.min(255, value * 2);   // Red increases with the value
        const blue = Math.min(255, (100 - value) * 2);  // Blue decreases with the value
        const gradient = `conic-gradient(rgb(${red}, 0, 0) ${value}%, rgb(0, 0, ${blue}) 100%)`;

        // Apply the gradient
        document.querySelector(".circle-slider").style.background = gradient;
    });
});