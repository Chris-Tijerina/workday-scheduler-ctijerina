
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
        $("[data-hour =" + storageSlot + "]").children(".description").text(JSON.parse(localStorage.getItem(storageSlot)))
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

// save event when clicking buton
$(".saveBtn").on("click", function() {
    var hour = ($(this).parent().attr("data-hour"))
    var eventText = ($(this).parent().children(".event-entry").val())
    localStorage.setItem(hour, JSON.stringify(eventText))
})


// create function to check each hour and compare to current hour
// audit time to check if events have passed
var auditTime = function() {
    // console.log($("[data-hour = 09]").attr("data-hour"))
    // console.log(date.getHours())
    // console.log($(".time-block")[0])

    var blocks = $(".time-block")
    var currentTime = date.getHours()

    console.log(blocks.length)
    
    for(var i = 0; i < blocks.length; i++) {
        var hour = $(blocks[i]).attr("data-hour") 

        console.log(currentTime + " / " + hour)
        if (hour < currentTime) {
            setState($(blocks[i]).children(".description"), "past")
            console.log("success")
        } else if (hour == currentTime) {

            console.log("success 2")
        } else {

            console.log("success 3")
        }
    }
}
// assign classes based on whether hour has passed, is present, or in the future
// loop through each hour and apply function

function setState(element, hourClass) {
    $(element).removeClass(".past .present .future")
    $(element).addClass(hourClass)
}


loadEvents();
auditTime();







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