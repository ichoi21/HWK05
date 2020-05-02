$(document).ready(function () {
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

  dynamicTime();

  function init() {
    storeDate();
    updateTime();
    displaySchedule();
    scheduleFocus();
    saveEvent();
    clearSchedule();
  }

  function storeDate() {
    savedSchedule = JSON.parse(localStorage.getItem(date));

    if (savedSchedule === null) {
      console.log("creating");
      dateObj["date"] = date;
      dateArr.push(dateObj);
      localStorage.setItem(date, JSON.stringify(dateArr));
    }
  }

  function dynamicTime() {
    var currentTime = moment().format("HH:mm:ss");
    $("#dynamic-time").text(currentTime);
    setInterval(dynamicTime, 1000);

    var currentDate = moment().format("dddd, MMMM Do");
    var currentYear = moment().format("YYYY");
    $("#title-date").html(currentDate);
    $("#title-year").html(currentYear);
  }

  function scheduleFocus() {}

  function clearSchedule() {
    $("#clearBtn").on("click", function () {});
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
      var trId = $(this).closest("tr").attr("id");
      var textAreaVal = $(this).closest("tr").find("textarea").val().trim();

      storedSchedule = JSON.parse(localStorage.getItem(date));
      scheduleObj = {};

      scheduleObj[trId] = textAreaVal;
      scheduleArr.push(scheduleObj);
      localStorage.setItem(date, JSON.stringify(scheduleArr));

      for (var i = 0; i < storedSchedule.length; i++) {
        if (storedSchedule[i].hasOwnProperty(trId)) {
          storedSchedule[i][trId] = textAreaVal;
          scheduleArr = storedSchedule;
          localStorage.setItem(date, JSON.stringify(scheduleArr));
          return;
        }
      }
    });
  }
});
