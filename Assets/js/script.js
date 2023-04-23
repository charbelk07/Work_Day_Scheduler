// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var buttons = $('.saveBtn');

  displayCurrentDateInTheHeader();
  applyPastPresentFutureClassToEachTimeBlock();

  // Attach a click event listener to each button

  // Write your code here that should execute when the button is clicked

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  buttons.click(function() {
    alert("Button Clicked!");
  }); 

  // TODO: Add code fds to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function applyPastPresentFutureClassToEachTimeBlock() 
  {
    var currentHour = dayjs().hour();
    console.log(currentHour);
    
    $(".time-block").each(function(){
      var timeBlocks = $(this).attr("id");

      if (currentHour == timeBlocks)
      {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      }
      else if (currentHour < timeBlocks)
      {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
      else if (currentHour > timeBlocks)
      {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      }
    });
  }
  
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // TODO: Add code to display the current date in the header of the page.
  function displayCurrentDateInTheHeader() {
    var today =dayjs();
    $("#currentDay").text(today.format('hh:mm A ddd MMM DD YYYY'));
  }

});
 




