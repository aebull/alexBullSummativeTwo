// Self invoking function expression
(function(){
  var data = {
    // minMax stands for minNights and MaxNights
    hotel: {
      people: [1, 2],
      price: 157.00,
      minMax: [1, 5]
    },
    hostel: {
      people: [1],
      price: 30.00,
      minMax: [1, 10]
    },
    motel: {
      people: [2, 4],
      price: 90.00,
      minMax: [3, 9]
    },
    house: {
      people: [1, 4],
      price: 240.00,
      minMax: [2, 15]
    },
  };
  // Hiding 'landingPage' Showing 'InputPage'
  $('#letsGetStarted').click(function () {
  $('#landingPage').hide();
  $('#inputPage').show();
});
// Getting Results on Button Click
$("#getResults").click(function () {
  var getLocationVal = $('#locationInput').val();
  getNumberOfDays = daysBetween ();
  var getGuestVal = $('#guestInput').val();
  // Logging variables
  console.log(getLocationVal);
  console.log(getNumberOfDays);
  console.log(getGuestVal);

  // Printing to innerHTML the 'number of days' the user would like to stay on button click
  $('.days-number').text(getNumberOfDays);

  // Calling the 'Hide or Show' function on button click
  hideOrShow (getNumberOfDays, getGuestVal, getLocationVal);
  // checkPeople(getGuestVal);


});
 // 'Get Results' Click Function Ends


 // calculating 'Total Hotel price' on button click
 $('button.hotel-price-cal').click(function () {
   var pricePerNight = data.hotel.price;
   var nOfNights = daysBetween();
   var totalPrice = pricePerNight * nOfNights;

   $('.hotel-price-total').text(totalPrice.toFixed(2));

 });

 // calculating 'Total Hostel price' on button click
 $('button.hostel-price-cal').click(function () {
   var pricePerNight = data.hostel.price;
   var nOfNights = daysBetween();
   var totalPrice = pricePerNight * nOfNights;

   $('.hostel-price-total').text(totalPrice.toFixed(2));

 });

 // calculating 'Total Motel price' on button click
 $('button.motel-price-cal').click(function () {
   var pricePerNight = data.motel.price;
   var nOfNights = daysBetween();
   var totalPrice = pricePerNight * nOfNights;

   $('.motel-price-total').text(totalPrice.toFixed(2));

 });

 // calculating 'Total Motel price' on button click
 $('button.house-price-cal').click(function () {
   var pricePerNight = data.house.price;
   var nOfNights = daysBetween();
   var totalPrice = pricePerNight * nOfNights;

   $('.house-price-total').text(totalPrice.toFixed(2));

 });

    // function to check the amount of people inputted against the data array
    function checkPeople (people) {
      if (people >= data.hotel.people[0] && people <= data.hotel.people[1]) {
        alert('You can stay at the hotel');
      }
      if (people >= data.hostel.people[0] && people <= data.hostel.people[0]) {
        alert('You can stay at the hostel');
      }
      if (people >= data.motel.people[0] && people <= data.motel.people[1]) {
        alert('You can stay at the motel');
      }
      if (people >= data.house.people[0] && people <= data.house.people[1]) {
        alert('You can stay at the house');
      }
    } // checkPeople ENDS

    //  Get dates using the date picker
    $('#startDatePicker').datepicker ({
      timePicker: false,
      datePicker: true,
      dateFormat: 'dd-mm-yy',
      minDate: new Date(),
      maxDate: '+1y',
      weeks: 'true',
      onSelect: function() {

        var dateObject = $(this).datepicker ('getDate');
        console.log(dateObject);
        var selectedDate = new Date();
        var msecsInADay = 86400000;
        startDate = new Date(selectedDate.getTime() + msecsInADay);

     //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
        $('#endDatePicker').datepicker( 'option', 'minDate', 'startDate' );
        endDate = new Date(selectedDate.getTime() + 15 * msecsInADay);
        $('#endDatePicker').datepicker( 'option', 'maxDate', endDate );
      }
    });
    $('#endDatePicker').datepicker ({
      timePicker: false,
      datePicker: true,
      dateFormat: 'dd-mm-yy',
      weeks: 'true',
      onSelect: function() {
        var dateObject = $(this).datepicker('getDate');
        console.log(dateObject);
      }
    });

    // calculating the number of days between the 'startDatePicker' input and the 'endDatePicker' input
    function daysBetween (){
      var startDateInput = $('#startDatePicker').datepicker('getDate');
      var endDateInput = $('#endDatePicker').datepicker('getDate');
      var numberOfDays = (endDateInput - startDateInput)/1000/60/60/24;
      return numberOfDays;
    }

    // 'Hide Or Show' Filitering Function - This function is used to show the user accommodation
    // That is available based off their inputs and hide everything else that does not meet the input criteria.
    // The users Location, days , and group size is all fitered in this function and is called with the
    // 'getResults' Click function
    function hideOrShow (days, people, location) {
      console.log('this is the hide show function');
      console.log(days);
      console.log(people);
      console.log(location);

      // ***  Location Filter ***
      // 'Hide Or Show' accommodation aviable based on the location the user has selected
      if ($('#locationInput').val() === 'auckland') {
          $('#aucklandGroup').css('display', 'block');
          $('#queenstownGroup').css('display', 'none');
          $('#wellingtonGroup').css('display', 'none');
      }

      if ($('#locationInput').val() === 'queenstown') {
        $('#aucklandGroup').css('display', 'none');
        $('#queenstownGroup').css('display', 'block');
        $('#wellingtonGroup').css('display', 'none');

      }

      if ($('#locationInput').val() === 'wellington') {
        $('#aucklandGroup').css('display', 'none');
        $('#queenstownGroup').css('display', 'none');
        $('#wellingtonGroup').css('display', 'block');

      }

      // // ***  Hotel Filter ***
      // // 'Hide Or Show' Hotel accommodation aviable based on the 'days' and 'people' input
      // if (days >= data.hotel.minMax[0] && days <= data.hotel.minMax[1] &&
      //   people >= data.hotel.people[0] && people <= data.hotel.people[1]) {
      //   $('.hotel-card').css('display', 'block');
      //   console.log('hotel card showing');
      // } else {
      //   $('.hotel-card').css('display', 'none');
      //   console.log('hotel card hiding');
      // }
      //
      // // ***  Hostel Filter ***
      // // 'Hide Or Show' Hostel accommodation aviable based on the 'days' and 'people' input
      // if (days >= data.hostel.minMax[0] && days <= data.hostel.minMax[1] &&
      //   people >= data.hostel.people[0] && people <= data.hostel.people[0]) {
      //   $('.hostel-card').css('display', 'block');
      //   console.log('hostel card showing');
      // } else {
      //   $('.hostel-card').css('display', 'none');
      //   console.log('hostel card hiding');
      // }
      //
      // // ***  Motel Filter ***
      // // 'Hide Or Show' Motel accommodation aviable based on the 'days' and 'people' input
      // if (days >= data.motel.minMax[0] && days <= data.motel.minMax[1] &&
      //   people >= data.motel.people[0] && people <= data.motel.people[1]) {
      //   $('.motel-card').css('display', 'block');
      //   console.log('motel card showing');
      // } else {
      //   $('.motel-card').css('display', 'none');
      //   console.log('motel card hiding');
      // }
      //
      // // ***  House Filter ***
      // // 'Hide Or Show' House accommodation aviable based on the 'days' and 'people' input
      // if (days >= data.house.minMax[0] && days <= data.house.minMax[1] &&
      //   people >= data.house.people[0] && people <= data.house.people[1]) {
      //   $('.house-card').css('display', 'block');
      //   console.log('house card showing');
      // } else {
      //   $('.house-card').css('display', 'none');
      //   console.log('house card hiding');
      // }

    } // function ENDS

  })();
