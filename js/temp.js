const slider = document.getElementById('temperature');
const temperatureValue = document.getElementById('temperatureValue');

slider.addEventListener('input', () => {
    temperatureValue.textContent = `${slider.value}°C`;
});
