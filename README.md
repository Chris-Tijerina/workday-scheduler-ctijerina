# Work Day Scheduler Starter Code

### Github Link:https://github.com/Chris-Tijerina/workday-scheduler-ctijerina

### Deployed Page Link:https://chris-tijerina.github.io/workday-scheduler-ctijerina/

### Description 
Create a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

### User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

### Acceptance Criteria
> Given I am using a daily planner to create a schedule:
> When I open the planner, then the current day is displayed at the top of the calendar.

I researched the current state of Moment.js and whether or not I should use it for this portion and through their own page I found that the tools to display the current date already existed. So I decided to use a combination of the standard ``` new Date()``` combined with a ```.toLocaleDateString``` and various options to display the current date. Because it didn't include the actual day of the week, I used an array of the days of the week and ```.getDay()``` to show the day of the week. Then I created variables for the day of the week and date and combined them in a third variable to display at the top of the page. 

> When I scroll down, then I am presented with time blocks for standard business hours.

I created the time blocks in the HTML file, as they wouldn't necessarily need to change. They were given the classes that corresponded to their CSS styling, as that was provided with the initial files. 

> When I view the time blocks for that day, then each time block is color-coded to indicate whether it is in the past, present, or future.

The CSS styling for each time period were provided with the initial files. I just needed to create a function to correlate the current time with the time blocks (named auditTime). after assigning each time block a data attribute corresponding to the hour of the day, I was able to use ```date.getHours()```to pull the current hour, and if the data-attribute hour was less than, equal to, or greaten than the current hour. It would remove the current classes assigned to it and replace it with the corresponding past, present, or future class. 

I also included a ```setInterval()``` function in order to rerun the auditTime function every minute to be sure to keep the color coding as accurate as possible. I had previously experimented with creating a ```if``` statement that would check if the current time had any minutes. If minutes were equal to zero, it would know it was at the top of an hour and then run the auditTime, but it didn't seemed to be any more efficient or accurate than just running the auditTime function as is. 

> When I click into a time block, then I can enter an event.
 
This actually gave me more trouble than I expected. I used a JQuery selector to listen for a click on any of the event boxes to create a ```<textarea>``` and replace the time block event box, but removing the event box meant that the color coding wouldn't work as the ```<textarea>``` would not have the CSS . So I had to add a ```<p>``` element to each box so that it would be replaced by the transparent ```<textarea>``` and the event box would keep it's color coding intact underneath. 

> When I click the save button for that time block, then the text for that event is saved in local storage.

The save button had some CSS styling already in the document, so I went ahead and used the same classes and added an icon to show it was meant to save the event. Another JQuery selector would listen for a click on the button and turn the information the text area into a string with ```JSON.stringify``` before saving it to the local storage. 

An issue developed after creating the save function, where if the save button was clicked twice in a row, or clicked after the page was reloaded without clicking a time block first, it would save an undefined value and break the page completely. I believe it was because the save function was pulling directly from the ```<textarea>``` by selecting it's class, so when you replace the ```<textarea>``` or there isn't one to begin with, it has a problem. So I changed the function to save whatever text was in the child of the timeblock. So whether it was a ```<textarea>``` or a ```<p>``` element, it wouldn't matter. I also created an unfocus function that would automatically swap the ```<textarea>``` back into a ```<p>``` element, just to be sure there was always an element there to pull from for the save function. 

> When I refresh the page, then the saved events persist.

This functionality was achieved by creating a function that would be called every time the page loads. It would loop through all of the objects stored in the local storage and populate them in their proper place by matching the data attribute hour to the saved key, which was originally pulled from that data attribute. 

### Images
> This first image showcases the functionality and refreshing of the page: 

![workday-scheduler-functionality](https://user-images.githubusercontent.com/90019024/144767366-5fbe913e-1ff1-4f5c-97ae-47c4af9db9dd.gif)

> This second image shows how the color coding changes an hour later: 

![workday-scheduler-1-hour-later](https://user-images.githubusercontent.com/90019024/144767376-c7a5ea49-feec-44e4-8ac8-35f703dcdac6.JPG)
