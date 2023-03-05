const daysY = document.getElementById('days')
const hoursY = document.getElementById('hours')
const minsY = document.getElementById('mins')
const secondsY = document.getElementById('seconds')

const newYears = '1 Jan 2024'

function countDown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds  / 3600 % 24);
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysY.innerHTML = days
    hoursY.innerHTML = hours
    minsY.innerHTML = minutes
    secondsY.innerHTML = seconds   


}

countDown()

setInterval(countDown, 1000)

// output = -5463241193
// whe nedd convert this on hours, menets and seconds

