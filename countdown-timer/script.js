const newYears = '1 Jan 2023'

function countDown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    console.log(newYearsDate - currentDate);
}

countDown()

// output = -5463241193
// whe nedd convert this on hours, menets and seconds