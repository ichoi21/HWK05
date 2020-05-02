$(document).ready(function () {
  var time = moment().format("HH");
  var displayTime = "";
  var calLength = 19;
  var clock = 0;
  var mili = 0;
  var ampm = "";

  try {
    var storeData = JSON.parse(window.localStorage.getItem("storeData"));
  } catch {
    var storeData = [];
    for (var i = 0; i < calLength; i++) {
      storeData.push("");
    }
  }

  //grab time for the display real time
  var updateTime = function () {
    var currentTime = moment().format("LTS");
    var currentDate = moment().format("dddd, MMMM Do, YYYY");
    $("#title-date").html(currentDate);
    $("#title-time").html(currentTime);
  };
  updateTime();
  setInterval(updateTime, 1000);

  //function to display schedule in a table with counter
  for (var i = 5; i < calLength; i++) {
    if (i < 13) {
      clock = i;
      ampm = "AM";
    } else {
      clock = i - 12;
      ampm = "PM";
    }
    if (!storeData) {
      var storeData = [];
      for (var j = 0; j < calLength; j++) {
        storeData.push("");
      }
    }

    //place a new hour row with the counter above
    $("article").append(`<div class="row tblk">
    <div class="text-center col-1 p-0 pt-4 border-top">${clock} ${ampm} </br>(${i}00) </div>
    <textarea class="col-10 textInput" name="${i}" id="tr${i}" cols="100" rows="2">${storeData[i]}</textarea>
    <button class="btnSubmit btn col-1 fas fa-sign-in-alt btn-secondary" id="${i}"></button>
    </div>
    `);

    //coloring blocks for time past, future, and present
    if (i < time) {
      $(`#tr${i}`).attr("style", "background-color: #9c78788f; color: grey;");
    }
    if (i - 1 > time) {
      $(`#tr${i}`).attr("style", "background-color: #83a6938f; color: white;");
    }
    $(`#t${time}`).attr("style", "background-color: ; color: black;");
  }

  //store user plans to localStorage
  $(document).on("click", ".btnSubmit", function () {
    var id = $(this).attr("id");
    var userInput = $(`#tr${id}`).val();
    storeData.splice(id, 1, userInput);

    window.localStorage.setItem("storeData", JSON.stringify(storeData));
    console.log(storeData);
  });

  //reset to clear out schedule - localstorage AND html
  $("#reset").on("click", function () {
    window.localStorage.removeItem("storeData");
    storeData = null;
    window.setTimeout(function () {
      window.location.href = "index.html";
    }, 1000);
  });
});
