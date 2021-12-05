// Global Variables for Date
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

//page load function
var loadEvents = function () {
    for (i = 0; i < localStorage.length; i++) {
        var storageSlot = localStorage.key([i])
        $("[data-hour =" + storageSlot + "]").children(".description").children("p").text(JSON.parse(localStorage.getItem(storageSlot)))
    }
}

// clicking on time block 
$(".description").on("click", function () {
    var text = $(this)
        .text()
        .trim();

    //create text input area
    var textInput = $("<textarea>")
        .addClass("event-entry col-12")
        .val(text);
    $(this).children("p").replaceWith(textInput);

    // auto focus new element
    textInput.trigger("focus");
});

// unfocus element
$(".description").on("blur", "textarea", function () {
    var textAreaEl = $(this).parent().children(".description").children()
    var eventText = textAreaEl.val()
    var textPEl = $("<p>")
        .text(eventText);
    textAreaEl.replaceWith(textPEl)
});

// save event when clicking buton
$(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("data-hour")
    var textAreaEl = $(this).parent().children(".description").children()
    var eventText = textAreaEl.val()
    localStorage.setItem(hour, JSON.stringify(eventText))
})

// create function to remove and add classes based on time
var setState = function (element, hourClass) {
    $(element).removeClass(".past .present .future")
    $(element).addClass(hourClass)
}

// create function to check each hour and compare to current hour
var auditTime = function () {

    var blocks = $(".time-block")
    var currentTime = date.getHours()

    for (var i = 0; i < blocks.length; i++) {
        var hour = $(blocks[i]).attr("data-hour")

        // assign classes based on whether hour has passed, is present, or in the future
        if (hour < currentTime) {
            setState($(blocks[i]).children(".description"), "past")
        } else if (hour == currentTime) {
            setState($(blocks[i]).children(".description"), "present")
        } else {
            setState($(blocks[i]).children(".description"), "future")
        }
    }
}

// automated refresh of state checks
setInterval(function () {
    auditTime();
}, (1000 * 60));

loadEvents();
auditTime();