
var date = new Date()
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var today = days[date.getDay()]
var dateToday = date.toLocaleDateString(
    'en-US', {
    year: "numeric",
    month: "long",
    day: "numeric"
})

//page load function
var loadEvents = function() {
    for ( i = 0; i < localStorage.length; i++) {
        var storageSlot = localStorage.key([i])
        $("[data-hour =" + storageSlot + "]").siblings(".description").text(JSON.parse(localStorage.getItem(storageSlot)))
    }
}

// Display date at top of page
$("#currentDay").text(today + " " + dateToday)

// clicking on time block 
$(".description").on("click", function(){
    var text = $(this)
        .text()
        .trim();

//create text input area
    var textInput = $("<textarea>")
        .addClass("event-entry col-10")
        .val(text);
    $(this).replaceWith(textInput);

// auto focus new element
    textInput.trigger("focus");
});


$(".saveBtn").on("click", function() {
    // var hour = ($(this).parent().children(".hour").text().trim())
    var hour = ($(this).parent().children(".hour").attr("data-hour"))
    var eventText = ($(this).parent().children(".event-entry").val())
    localStorage.setItem(hour, JSON.stringify(eventText))
})

loadEvents();

// // editable field was un-focused
// $(".event-entry").on("blur", "textarea", function () {
//     // get current value of textarea
//     var text = $(this).val();
//     console.log
// })




// function saveEvent() {
//     $(this).closest("div", "description")
//     localStorage.setItem(time, JSON.stringify(text))
// }