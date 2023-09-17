$(document).ready(function () {
  // Get the current date & time.
  const currentDate = dayjs();
  const formattedDate = currentDate.format("YYYY-MM-DD HH:mm:ss");
  const currentHour = currentDate.format("HH");
  const showDate = document.getElementById("currentDay");
  showDate.innerHTML = currentDate;
  console.log(formattedDate);
  console.log(currentHour);

  // Create functionality for the clear values button.
  $("#clearPlanner").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

  //grabs hour from each time slot and compares it to actual time
  $(".time-block").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];

    if (currentHour === timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  // Pulls values

  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
    console.log(value);
    console.log(time);
  });

  //retrieves items from local storage and sets them in proper places
  $("#hour-09 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));
});

//
//
//
//
