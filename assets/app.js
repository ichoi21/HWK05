$(document).ready(function () {
  var displayDate = "";
  var displayTime = "";
  var calLength = 19;
  var clock = 0;
  var ampm = "";

  try {
    var storeData = JSON.parse(window.localStorage.getItem("storeData"));
  } catch {
    var storeData = [];
    for (var i = 0; i < calendarLength; i++) {
      storeData.push("");
    }
  }

  var updateTime = function () {
    var time = moment().format("LTS");
    var currentDate = moment().format("dddd, MMMM Do, YYYY");
    $("#title-date").html(currentDate);
    $("#title-time").html(time);
  };
  updateTime();
  setInterval(updateTime, 1000);

  for (var i = 5; i < calLength; i++) {
    if (i < 19) {
      clock = i;
    }

    if (!storeData) {
      var storeData = [];
      for (var j = 0; j < calendarLength; j++) {
        storeData.push("");
      }
    }
    $("article").append(`<div class="row tblk">
    <h6 class="text-center col-1 p-0 pt-4 border-top">${clock}</h6>
    <textarea class="col-10 textInput" name="${i}" id="t${i}" cols="100" rows="2">${storeData[i]}</textarea>
    <button class="btnSubmit col-1 fas fa-play btn-warning" id="${i}"></button>
  </div>
    `);
  }

  $(document).on("click", ".btnSubmit", function () {
    var id = $(this).attr("id");
    var userInput = $(`#t${id}`).val();
    storeData.splice(id, 1, userInput);

    window.localStorage.setItem("storeData", JSON.stringify(storeData));
    console.log(storeData);
  });
});
