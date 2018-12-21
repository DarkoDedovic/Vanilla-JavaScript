const secondsArrow = document.querySelector(".second-hand");
const minutesArrow = document.querySelector(".min-hand");
const hoursArrow = document.querySelector(".hour-hand");

function setDate() {
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    const secondsDegree = seconds / 60 * 360 + 90 + "deg";
    secondsArrow.style.transform = `rotate(${secondsDegree})`;

    
    const minutes = currentTime.getMinutes();  
    const minutesDegree = minutes / 60 * 360 + 90 + "deg";
    minutesArrow.style.transform = `rotate(${minutesDegree})`;

    const hours = currentTime.getHours();
    const hoursDegree = hours / 12 * 360 + 90 + "deg";
    hoursArrow.style.transform =   `rotate(${hoursDegree})`;

    console.log(hours);
    console.log(minutes);
    console.log(seconds);
}

setInterval(setDate, 1000);