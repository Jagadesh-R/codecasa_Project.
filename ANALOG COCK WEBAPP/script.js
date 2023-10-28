let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}



setInterval(displayTime, 1000);
function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    // ... (existing code)

    // Update digital clock display
    document.getElementById('hour').textContent = String(hour).padStart(2, '0');
    document.getElementById('minute').textContent = String(minute).padStart(2, '0');
    document.getElementById('second').textContent = String(second).padStart(2, '0');
}
function updateDigitalClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const time = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = time;
}

setInterval(updateDigitalClock, 1000); // Update the clock every second
updateDigitalClock(); // Call the function to set the initial time
