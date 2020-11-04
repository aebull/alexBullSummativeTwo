// Self invoking function expression
(function(){
  var data = {
    // minMax stands for minNights and MaxNights
    hotel: {
      people: [1, 2],
      price: 157,
      minMax: [1, 5]
    },
    hostel: {
      people: [1],
      price: 30,
      minMax: [1, 10]
    },
    motel: {
      people: [2, 4],
      price: 90,
      minMax: [3, 9]
    },
    house: {
      people: [1, 4],
      price: 240,
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

  // checkDays(getNumberOfDays);
  // checkPeople(getGuestVal);

  hideOrShow(getNumberOfDays, getGuestVal, getLocationVal);

});
// // Click Function Ends

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

    // Takes the 'numberOfDays' information and compares it against the data array
    function checkDays () {
      if (getNumberOfDays >= data.hotel.minMax[0] && getNumberOfDays <= data.hotel.minMax[1]) {
        // Do this ...
      }
    } // function ENDS

    function hideOrShow (days, people, location) {
      console.log('this is the hide show function');
      console.log(days);
      console.log(people);
      console.log(location);


      if (days >= data.hotel.minMax[0] && days <= data.hotel.minMax[1]) {
        $('.hotel-card').css('display', 'block');
        $('.hostel-card').css('display', 'none');
        $('.motel-card').css('display', 'none');
        $('.house-card').css('display', 'none');
        console.log('working');
      }
      // if (days >= data.hostel.minMax[0] && people <= data.hostel.minMax[0]) {
      //   alert('You can stay at the hostel');
      // }
      // if (days >= data.motel.minMax[0] && people <= data.motel.minMax[1]) {
      //   alert('You can stay at the motel');
      // }
      // if (days >= data.house.minMax[0] && people <= data.house.minMax[1]) {
      //   alert('You can stay at the house');
      // }

    } // function ENDS

  })();
