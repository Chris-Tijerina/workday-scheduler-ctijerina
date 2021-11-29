
var date = new Date()
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var today = days[date.getDay()]
var dateToday = date.toLocaleDateString(
    'en-US', {
    year: "numeric",
    month: "long",
    day: "numeric"
})


// Display date at top of page
$("#currentDay").text(today + " " + dateToday)

