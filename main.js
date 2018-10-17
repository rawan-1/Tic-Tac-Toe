$(document).ready(function() {
  var step;
  var gameOver = false;
  $(".square").css("font-family", "'Frijole', cursive");
  $(".square").css("color", "#5f5f5f");
  $(".square").css("font-size", "60px");
  // When the page loads:
  //   If there is no xWin key in sessionStorage, set it to 0
  //   If there is no oWin key in sessionStorage, set it to 0
  console.log(sessionStorage);
  if (sessionStorage.getItem("xWin") === null) {
    sessionStorage.setItem("xWin", 0);
    sessionStorage.setItem("oWin", 0);
  }

  $("#x-win").text(sessionStorage.getItem("xWin"));
  $("#o-win").text(sessionStorage.getItem("oWin"));
  // Get the current value of sessionStorage xWin and set it as the text of #x-win
  // Get the current value of sessionStorage oWin and set it as the text of #o-win

  $(".btn").click(function() {
    step = checkLetters();
    // When a square is clicked
    $(".square").on("click", function() {
      if (gameOver === false) {
        //   Does this square have text in it already?
        // If it does have text === "", tell the user to play somewhere else
        // Otherwise, continue on with this function
        // Do all of this stuff here

        // If the element that was clicked's text is an empty string
        if ($(this).text() === "") {
          if (step % 2 === 0) {
            $(this).text("X");
            step++;
            computerMove();
          } // else if (step % 2 === 1) {
          //   $(this).text("O");
          // }
          // debugger;
          step++;
          checkWinner();
        }
      } // Else
      // Make an alert that says "Pick another square"
    });
  });

  function checkWinner() {
    if (
      ($("#0").text() === "X" &&
        $("#1").text() === "X" &&
        $("#2").text() === "X") ||
      ($("#3").text() === "X" &&
        $("#4").text() === "X" &&
        $("#5").text() === "X") ||
      ($("#6").text() === "X" &&
        $("#7").text() === "X" &&
        $("#8").text() === "X") ||
      ($("#0").text() === "X" &&
        $("#3").text() === "X" &&
        $("#6").text() === "X") ||
      ($("#1").text() === "X" &&
        $("#4").text() === "X" &&
        $("#7").text() === "X") ||
      ($("#2").text() === "X" &&
        $("#5").text() === "X" &&
        $("#8").text() === "X") ||
      ($("#0").text() === "X" &&
        $("#4").text() === "X" &&
        $("#8").text() === "X") ||
      ($("#2").text() === "X" &&
        $("#4").text() === "X" &&
        $("#6").text() === "X")
    ) {
      var currentXWin = sessionStorage.getItem("xWin");
      var numberXWin = parseInt(currentXWin);
      var newXWin = numberXWin + 1;
      // Get the current xWin value out of sessionStorage
      // Turn that into a number and add one to it
      // Then set xWin to that number
      sessionStorage.setItem("xWin", newXWin);
      swal({
        title: "Great!",
        text: " X Win!",
        icon: "success"
      });
      gameOver = true;
      $("#x-win").text(sessionStorage.getItem("xWin"));
      $("#o-win").text(sessionStorage.getItem("oWin"));
      //   Add one to sessionStorage xWin
    } else if (
      ($("#0").text() === "O" &&
        $("#1").text() === "O" &&
        $("#2").text() === "O") ||
      ($("#3").text() === "O" &&
        $("#4").text() === "O" &&
        $("#5").text() === "O") ||
      ($("#6").text() === "O" &&
        $("#7").text() === "O" &&
        $("#8").text() === "O") ||
      ($("#0").text() === "O" &&
        $("#3").text() === "O" &&
        $("#6").text() === "O") ||
      ($("#1").text() === "O" &&
        $("#4").text() === "O" &&
        $("#7").text() === "O") ||
      ($("#2").text() === "O" &&
        $("#5").text() === "O" &&
        $("#8").text() === "O") ||
      ($("#0").text() === "O" &&
        $("#4").text() === "O" &&
        $("#8").text() === "O") ||
      ($("#2").text() === "O" &&
        $("#4").text() === "O" &&
        $("#6").text() === "O")
    ) {
      var currentOWin = sessionStorage.getItem("oWin");
      var numberOWin = parseInt(currentOWin);
      var newOWin = numberOWin + 1;
      sessionStorage.setItem("oWin", newOWin);
      swal({
        title: "Great!",
        text: " O Win!",
        icon: "success"
      });
      gameOver = true;
      $("#x-win").text(sessionStorage.getItem("xWin"));
      $("#o-win").text(sessionStorage.getItem("oWin"));
      //   Add one to sessionStorage oWin
    } else if (step === 10) {
      // debugger;
      swal({
        title: "It's Tie !",
        text: " Let's try again !",
        icon: "warning"
      });
      //   Add one to sessionStorage draw
    }
  }

  function checkLetters() {
    // debugger;
    if ($("input[name='drone']:checked").attr("id") === "X") {
      return 0;
    } else if ($("input[name='drone']:checked").attr("id") === "O") {
      return 1;
    }
  }
  $(".button").click(function() {
    // $(".square").text("");
    location.reload();
  });

  // var array = [];
  // if ($(".square").on("click")) {
  //   array.push($(this).attr("id"));

  function computerMove() {
    var squares = $(".square");
    for (var i = 0; i < squares.length; i++) {
      if ($(squares[i]).text() === "") {
        $(squares[i]).text("O");
        break;
      }
    }
  }
});
