let initialBackgroundColor;

function convertTemperature() {
    let temperatureInput = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    let resultElement = document.getElementById("result");
    let convertedTemperature;
    let backgroundColor;

    if (!temperatureInput.trim()) {
        resultElement.textContent = "Please enter a temperature.";
        return;
    }

    if (isNaN(temperatureInput)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    temperatureInput = parseFloat(temperatureInput);

    if (unit === "celsius") {
        convertedTemperature = {
            fahrenheit: (temperatureInput * 9) / 5 + 32,
            kelvin: temperatureInput + 273.15,
        };
        backgroundColor = getBackgroundColor(convertedTemperature.kelvin);
        resultElement.innerHTML = `<p>Converted temperature: <span style="color: #ff6f61;">${convertedTemperature.fahrenheit.toFixed(
            2
        )} °F</span>, <span style="color: #3da4ab;">${convertedTemperature.kelvin.toFixed(
            2
        )} K</span></p>`;
    } else if (unit === "fahrenheit") {
        convertedTemperature = {
            celsius: ((temperatureInput - 32) * 5) / 9,
            kelvin: ((temperatureInput - 32) * 5) / 9 + 273.15,
        };
        backgroundColor = getBackgroundColor(convertedTemperature.kelvin);
        resultElement.innerHTML = `<p>Converted temperature: <span style="color: #3da4ab;">${convertedTemperature.celsius.toFixed(
            2
        )} °C</span>, <span style="color: #ff6f61;">${convertedTemperature.kelvin.toFixed(
            2
        )} K</span></p>`;
    } else if (unit === "kelvin") {
        convertedTemperature = {
            celsius: temperatureInput - 273.15,
            fahrenheit: ((temperatureInput - 273.15) * 9) / 5 + 32,
        };
        backgroundColor = getBackgroundColor(temperatureInput);
        resultElement.innerHTML = `<p>Converted temperature: <span style="color: #3da4ab;">${convertedTemperature.celsius.toFixed(
            2
        )} °C</span>, <span style="color: #ff6f61;">${convertedTemperature.fahrenheit.toFixed(
            2
        )} °F</span></p>`;
    }

    updateBackground(backgroundColor);
}

function getBackgroundColor(temperature) {
    if (temperature < 240) {
        return "#3366cc"; // Very Cold
    } else if (temperature >= 240 && temperature < 250) {
        return "#1a75ff"; // Cold
    } else if (temperature >= 250 && temperature < 260) {
        return "#0099ff"; // Cool
    } else if (temperature >= 260 && temperature < 270) {
        return "#66ccff"; // Moderately Cool
    } else if (temperature >= 270 && temperature < 280) {
        return "#99ccff"; // Slightly Cool
    } else if (temperature >= 280 && temperature < 285) {
        return "#ccffff"; // Mild
    } else if (temperature >= 285 && temperature < 290) {
        return "#ffffcc"; // Warm
    } else if (temperature >= 290 && temperature < 295) {
        return "#ffff99"; // Moderately Warm
    } else if (temperature >= 295 && temperature < 300) {
        return "#ffff66"; // Slightly Warm
    } else if (temperature >= 300 && temperature < 305) {
        return "#ffff33"; // Mildly Hot
    } else if (temperature >= 305 && temperature < 310) {
        return "#ffcc00"; // Warm Hot
    } else if (temperature >= 310 && temperature < 315) {
        return "#ff9933"; // Hot Warm
    } else if (temperature >= 315 && temperature < 320) {
        return "#ff6600"; // Hot
    } else if (temperature >= 320 && temperature < 325) {
        return "#ff3333"; // Very Hot
    } else if (temperature >= 325 && temperature < 330) {
        return "#cc3300"; // Extremely Hot
    } else if (temperature >= 330 && temperature < 335) {
        return "#990000"; // Intensely Hot
    } else if (temperature >= 335 && temperature < 340) {
        return "#660000"; // Super Hot
    } else if (temperature >= 340 && temperature < 345) {
        return "#ff0000"; // Ultra Hot
    } else if (temperature >= 345 && temperature < 350) {
        return "#ff6666"; // Mega Hot
    } else {
        return "#ffcccc"; // Hyper Hot
    }
}

function updateBackground(color) {
    if (!document.getElementById("temperature").value.trim()) {
        document.body.style.transition = "background-color 0.5s";
        document.body.style.background = initialBackgroundColor;
    } else {
        document.body.style.transition = "background-color 0.5s";
        document.body.style.background = color;
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        convertTemperature();
    }
}

document
    .getElementById("temperature")
    .addEventListener("keypress", handleKeyPress);

window.addEventListener("load", () => {
    initialBackgroundColor = document.body.style.background;
});
