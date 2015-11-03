"use strict";

// automatically fill month drop down with correct day count
document.getElementById("month").onchange = function() {
  document.getElementById("day").innerHTML = '';

  var daysInMonth = null;
  var chosenMonth = document.getElementById("month").selectedIndex;

  if (chosenMonth === 1) {
    daysInMonth = 28;

  } else if (chosenMonth === 3 || chosenMonth === 5 || chosenMonth === 8 || chosenMonth === 10){
    daysInMonth = 30;
  }
  else {
    daysInMonth = 31;
  }

  for(var i = 1; i <= daysInMonth; i++){
    document.getElementById("day").innerHTML  += '<option value="'+i+'">'+i+'</option>';
  }

}

var calculateDate = function (userInputDay, userInputMonth, userInputYear) {

 //Set the two dates
  var fInputDay     = userInputDay,
      fInputMonth   = userInputMonth,
      fInputYear    = userInputYear,
      inputDate     = new Date(fInputYear, fInputMonth -1, fInputDay), //Month is 0-11 in JavaScript
      today         = new Date(),
      diff          = new Date(today - inputDate),
      days          = diff / 1000 / 60 / 60 / 24, //Get 1 day in milliseconds
      hours         = days * 24,
      mins          = hours * 60,
      seconds       = mins * 60,
      weeks         = days / 7,
      daysRweeks    = days % 7,
      years         = days / 365,
      months        = years * 12,
      monthsRyear   = months % 12,
      timeInfo      = '';

  timeInfo += parseInt(days) + " days has gone by since birth! </br>";
  timeInfo += parseInt(hours) + " hours has gone by since birth! </br>";
  timeInfo += parseInt(mins) + " minutes has gone by since birth! </br>";
  timeInfo += parseInt(seconds) + " seconds has gone by since birth! </br>";
  timeInfo += parseInt(weeks) + " weeks and " + parseInt(daysRweeks) + " days has gone by since birth! </br>";
  timeInfo += parseInt(months) + " months has gone by since birth! </br>";
  timeInfo += parseInt(years) + " years and " + parseInt(monthsRyear) + " months has gone by since birth! </br>";

  //Calculate difference btw the two dates, and convert to days
  document.getElementById("theResult").innerHTML = timeInfo;

};
