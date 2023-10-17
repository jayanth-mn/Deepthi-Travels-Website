function redirectToTaxis(event) {
    event.preventDefault();
    const city = document.getElementById('cityInput').value;
    const travelers = document.getElementById('travelersInput').value;
    const date = document.getElementById('dateInput').value;
    const time = document.getElementById('timeInput').value;

    const url = `https://example.com/taxi-availability?city=${city}&travelers=${travelers}`;
    window.location.href = url;
}