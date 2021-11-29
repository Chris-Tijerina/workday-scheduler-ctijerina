# Work Day Scheduler Starter Code

## Description 
Create a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

### User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

### Acceptance Criteria
GIVEN I am using a daily planner to create a schedule


>WHEN I open the planner THEN the current day is displayed at the top of the calendar
I researched the current state of Moment.js and whether or not I should use it for this portion and through their own page I found that the tools to display the current date already existed. So I decided to use a combination of the standard ``` new Date()``` combined with a ```.toLocaleDateString``` and various options to display the current date. Because it didn't include the actual day of the week, I used an array of the days of the week and ```.getDay()``` to show the day of the week. Then I created variables for the day of the week and date and combined them in a third variable to display at the top of the page. 

WHEN I scroll down
THEN I am presented with time blocks for standard business hours


WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist