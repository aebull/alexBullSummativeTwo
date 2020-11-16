// Self invoking function expression
(function () {
  const data = {
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
    }
  }
  // Hiding 'landingPage' Showing 'InputPage'
  $('#letsGetStarted').click(function () {
    $('#landingPage').hide()
    $('#inputPage').show()
  })
  // Getting Results on Button Click
  $('#getResults').click(function () {
    const getLocationVal = $('#locationInput').val()
    const getNumberOfDays = daysBetween()
    const getGuestVal = $('#guestInput').val()
    // Logging variables
    console.log(getLocationVal)
    console.log(getNumberOfDays)
    console.log(getGuestVal)

    // Printing to innerHTML the 'number of days' the user would like to stay on button click
    $('.days-number').text(getNumberOfDays)

    // Calling the 'Hide or Show' function on button click
    hideOrShow(getNumberOfDays, getGuestVal, getLocationVal)
    toastrAccommodationError(getNumberOfDays)
  })
  // 'Get Results' Click Function Ends

  // calculating 'Total Hotel price' on button click
  $('button.hotel-price-cal').click(function () {
    const pricePerNight = data.hotel.price
    const nOfNights = daysBetween()
    const totalPrice = pricePerNight * nOfNights

    $('.hotel-price-total').text(totalPrice.toFixed(2))
  })

  // calculating 'Total Hostel price' on button click
  $('button.hostel-price-cal').click(function () {
    const pricePerNight = data.hostel.price
    const nOfNights = daysBetween()
    const totalPrice = pricePerNight * nOfNights

    $('.hostel-price-total').text(totalPrice.toFixed(2))
  })

  // calculating 'Total Motel price' on button click
  $('button.motel-price-cal').click(function () {
    const pricePerNight = data.motel.price
    const nOfNights = daysBetween()
    const totalPrice = pricePerNight * nOfNights

    $('.motel-price-total').text(totalPrice.toFixed(2))
  })

  // calculating 'Total Motel price' on button click
  $('button.house-price-cal').click(function () {
    const pricePerNight = data.house.price
    const nOfNights = daysBetween()
    const totalPrice = pricePerNight * nOfNights

    $('.house-price-total').text(totalPrice.toFixed(2))
  })

  // function to fire the toastr notificationto tell the user where they can stay
  function toastrAccommodationSuccessful (days, people) {
    let hotel = ''
    let hostel = ''
    let motel = ''
    let house = ''
    let logic = false

    if (days >= data.hotel.minMax[0] && days <= data.hotel.minMax[1] &&
        people >= data.hotel.people[0] && people <= data.hotel.people[1]) {
      hotel = ' hotel,'
      logic = true
    }

    if (days >= data.hostel.minMax[0] && days <= data.hostel.minMax[1] &&
        people >= data.hostel.people[0] && people <= data.hostel.people[0]) {
      hostel = ' hostel,'
      logic = true
    }

    if (days >= data.motel.minMax[0] && days <= data.motel.minMax[1] &&
        people >= data.motel.people[0] && people <= data.motel.people[1]) {
      motel = ' motel,'
      logic = true
    }

    if (days >= data.house.minMax[0] && days <= data.house.minMax[1] &&
        people >= data.house.people[0] && people <= data.house.people[1]) {
      house = ' house'
      logic = true
    }

    // conditional for this use case...
    if ((days === 1 && people === '3') || (days === 1 && people === '4')) {
      toastr.error('To many people in group. Please redefine search', 'Error:')
    }

    if (logic === true) {
      toastr.success('You can stay at the' + hotel + hostel + motel + house, 'Results:')
    }
  } // toastrAccommodationSuccessful function ENDS

  // Function to fire error message if search results are invaild
  function toastrAccommodationError (days) {
    if (days === 0) {
      toastr.error('Please specify your check-in and check-out dates', 'Error:')
    }
  } // toastrAccommodationError function ENDS

  //  Get dates using the date picker
  $('#startDatePicker').datepicker({
    timePicker: false,
    datePicker: true,
    dateFormat: 'dd-mm-yy',
    minDate: new Date(),
    maxDate: '+1y',
    weeks: 'true',
    onSelect: function () {
      const dateObject = $(this).datepicker('getDate')
      console.log(dateObject)
      const selectedDate = new Date()
      const msecsInADay = 86400000

      // Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
      $('#endDatePicker').datepicker('option', 'minDate', 'startDate')
      const endDate = new Date(selectedDate.getTime() + 15 * msecsInADay)
      $('#endDatePicker').datepicker('option', 'maxDate', endDate)
    }
  })
  $('#endDatePicker').datepicker({
    timePicker: false,
    datePicker: true,
    dateFormat: 'dd-mm-yy',
    weeks: 'true',
    onSelect: function () {
      const dateObject = $(this).datepicker('getDate')
      console.log(dateObject)
    }
  })

  // calculating the number of days between the 'startDatePicker' input and the 'endDatePicker' input
  function daysBetween () {
    const startDateInput = $('#startDatePicker').datepicker('getDate')
    const endDateInput = $('#endDatePicker').datepicker('getDate')
    const numberOfDays = (endDateInput - startDateInput) / 1000 / 60 / 60 / 24
    return numberOfDays
  }

  // 'Hide Or Show' Filitering Function - This function is used to show the user accommodation
  // That is available based off their inputs and hide everything else that does not meet the input criteria.
  // The users Location, days , and group size is all fitered in this function and is called with the
  // 'getResults' Click function
  function hideOrShow (days, people, location) {
    console.log('this is the hide show function')
    console.log(days)
    console.log(people)
    console.log(location)

    // ***  Location Filter ***
    // 'Hide Or Show' accommodation aviable based on the location the user has selected
    if ($('#locationInput').val() === 'auckland') {
      $('.accommodation-Title').css('display', 'block')
      $('#aucklandGroup').css('display', 'block')
      $('#queenstownGroup').css('display', 'none')
      $('#wellingtonGroup').css('display', 'none')
    }

    if ($('#locationInput').val() === 'queenstown') {
      $('.accommodation-Title').css('display', 'block')
      $('#aucklandGroup').css('display', 'none')
      $('#queenstownGroup').css('display', 'block')
      $('#wellingtonGroup').css('display', 'none')
    }

    if ($('#locationInput').val() === 'wellington') {
      $('.accommodation-Title').css('display', 'block')
      $('#aucklandGroup').css('display', 'none')
      $('#queenstownGroup').css('display', 'none')
      $('#wellingtonGroup').css('display', 'block')
    }

    // ***  Hotel Filter ***
    // 'Hide Or Show' Hotel accommodation aviable based on the 'days' and 'people' input
    if (days >= data.hotel.minMax[0] && days <= data.hotel.minMax[1] &&
        people >= data.hotel.people[0] && people <= data.hotel.people[1]) {
      $('.hotel-card').css('display', 'block')
      $('.hidden-message').css('display', 'none')
      console.log('hotel card showing')
    } else {
      $('.hotel-card').css('display', 'none')
      console.log('hotel card hiding')
    }

    // ***  Hostel Filter ***
    // 'Hide Or Show' Hostel accommodation aviable based on the 'days' and 'people' input
    if (days >= data.hostel.minMax[0] && days <= data.hostel.minMax[1] &&
        people >= data.hostel.people[0] && people <= data.hostel.people[0]) {
      $('.hostel-card').css('display', 'block')
      $('.hidden-message').css('display', 'none')
      console.log('hostel card showing')
    } else {
      $('.hostel-card').css('display', 'none')
      console.log('hostel card hiding')
    }

    // ***  Motel Filter ***
    // 'Hide Or Show' Motel accommodation aviable based on the 'days' and 'people' input
    if (days >= data.motel.minMax[0] && days <= data.motel.minMax[1] &&
        people >= data.motel.people[0] && people <= data.motel.people[1]) {
      $('.motel-card').css('display', 'block')
      $('.hidden-message').css('display', 'none')
      console.log('motel card showing')
    } else {
      $('.motel-card').css('display', 'none')
      console.log('motel card hiding')
    }

    // ***  House Filter ***
    // 'Hide Or Show' House accommodation aviable based on the 'days' and 'people' input
    if (days >= data.house.minMax[0] && days <= data.house.minMax[1] &&
        people >= data.house.people[0] && people <= data.house.people[1]) {
      $('.house-card').css('display', 'block')
      $('.hidden-message').css('display', 'none')
      console.log('house card showing')
    } else {
      $('.house-card').css('display', 'none')
      console.log('house card hiding')
    }

    // Calling toastr message
    toastrAccommodationSuccessful(days, people)
  } // function ENDS

  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: 'toast-bottom-right',
    preventDuplicates: false,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '5000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut'
  }
})()
