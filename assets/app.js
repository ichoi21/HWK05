$(document).ready(function () {
  init();

  var scheduleArr = [];
  var scheduleObj = {};
  var dateArr = [];
  var dateObj = {};
  var storedSchedule;
  var savedSchedule;
  var date = moment().format("LL");
  previous = 0;
  next = 0;
  day = 0;


  function init() {
    storeTodaysDate();
    changeDay();
    updateTime();
    displaySchedule();
    scheduleFocus();
    saveEvent();
    clearSchedule();
  }

  function storeTodaysDate() {
    savedSchedule = JSON.parse(localStorage.getItem(date));

    if (savedSchedule === null) {

    }
  }

    if (day < 0) {
      $("#title-date").html(differentDate);
      $("#title-time").html(
        "Here is what your schedule looked like for this day."
      );
      $("#dynamic-time").hide();

      var dayOfYear = moment().dayOfYear();
      if (dayOfYear + day === 0) {
        currentYear = previousDate.format("YYYY");
        $("#title-year").html(currentYear);
      }
    } else if (day > 0) {
      currentYear = nextDate.format("YYYY");
      $("#title-date").html(differentDate);
      $("#title-time").html(
        "Here is what your schedule looks like for this day so far."
      );
      $("#title-year").html(currentYear);
      $("#dynamic-time").hide();
    } else {
      currentYear = moment().format("YYYY");
      $("#title-time").html(
        "Here is your schedule for today. The current time is: "
      );
      $("#title-year").html(currentYear);
      $("#dynamic-time").show();
      dynamicTime();
    }
  }

  function dynamicTime() {
    var currentTime = moment().format("HH:mm:ss");
    $("#dynamic-time").text(currentTime);
    setInterval(dynamicTime, 1000);
  }

  function scheduleFocus() {
    var currentHourInt = parseInt(moment().format("HH"));

    var timeIDs = $("#schedule-table tr[id]")
      .map(function () {
        return this.id;
      })
      .get();

    if (day < 0) {
      $(".input-area").css("background-color", "grey");
    } else if (day > 0) {
      $(".input-area").css("background-color", "lightblue");
    } else {
      for (var i = 0; i < timeIDs.length; i++) {
        var timeIDsInt = parseInt(timeIDs[i]);
        if (timeIDsInt < currentHourInt) {
          $("#" + timeIDs[i])
            .find("textarea")
            .css("background-color", "grey");
        } else if (timeIDsInt === currentHourInt) {
          $("#" + timeIDs[i])
            .find("textarea")
            .css("background-color", "#ccffff");
        } else {
          $("#" + timeIDs[i])
            .find("textarea")
            .css("background-color", "lightblue");
        }
      }
    }
    // setInterval(scheduleFocus, 1000);
  }

  function clearSchedule() {
    $("#clear-button").on("click", function () {
      scheduleObj = {};
      scheduleArr.length = 0;
      scheduleObj["date"] = date;
      scheduleArr.push(scheduleObj);

      localStorage.removeItem(date);
      $(".input-area").val("");

      localStorage.setItem(date, JSON.stringify(scheduleArr));
    });
  }

  function displaySchedule() {
    savedSchedule = JSON.parse(localStorage.getItem(date));
    $(".input-area").val("");
    for (var i = 0; i < savedSchedule.length; i++) {
      var getKey = Object.keys(savedSchedule[i]);
      var getValue = Object.values(savedSchedule[i]);
      $("#area-" + getKey).val(getValue[0]);
    }
  }

  //

  function saveEvent() {
    $(".save-button").on("click", function () {

        }
      }
    });
  }

});
