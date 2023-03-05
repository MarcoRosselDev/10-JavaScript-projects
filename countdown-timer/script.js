const daysYear = document.getElementById('days')
const hoursYear = document.getElementById('hours')
const minsYear = document.getElementById('mins')
const secondsYear = document.getElementById('seconds')

const newYears = '1 Jan 2024'

function countDown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds  / 3600 % 24);
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysYear.innerHTML = formatTime(days)
    hoursYear.innerHTML = formatTime(hours)
    minsYear.innerHTML = formatTime(minutes)
    secondsYear.innerHTML = formatTime(seconds)   
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(countDown, 1000)

// output = -5463241193
// whe nedd convert this on hours, menets and seconds

