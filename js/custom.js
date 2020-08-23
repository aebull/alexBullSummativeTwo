// Self invoking function expression

(function(){
  // Hiding 'landingPage' Showing 'InputPage'
  $('#letsGetStarted').click(function () {
  $('#landingPage').hide();
  $('#inputPage').show();
});

// Getting Results on Button Click
$("#getResults").click(function() {
  var getLocationVal = $('#locationInput').val();
  var getStartDateVal = $('#startDateInput').val();
  var getEndDateVal = $('#endDateInput').val();
  var getGuestVal = $('#guestInput').val();

  // Logging variables
  console.log(getLocationVal);
  console.log(getStartDateVal);
  console.log(getEndDateVal);
  console.log(getGuestVal);

});


  })();
