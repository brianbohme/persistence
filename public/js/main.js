'use strict';
/* global $ tripModule */
// $(document).ready(()=>{
//   $("day-add").click(evt=>{
//     addDay();
//   })
// });

$(tripModule.load);


$.get('/api/restaurants')
  .then(function (restaurants) {
    $('#restaurant-choices').append(`<option disabled selected value>choose your restaurant</option>`);
    restaurants.forEach(function (restaurant) {
      $('#restaurant-choices').append(`<option>${restaurant.name}</option>`)
    });
  })
  .catch(console.error.bind(console));


$.get('/api/activities')
  .then(function (activities) {
    $('#activities-choices').append(`<option disabled selected value>choose your activities</option>`)
    activities.forEach(function (activity) {
      $('#activity-choices').append(`<option>${activity.name}</option>`)
    });
  })
  .catch(console.error.bind(console));

$.get('/api/hotels')
  .then(function (hotels) {
    hotels.forEach(function (hotel) {
      $('#hotel-choices').append(`<option>${hotel.name}</option>`)
    });
  })
  .catch(console.error.bind(console));

$.get('/api/days')
  .then(function (days) {
    days.forEach(function(day){
      $(".day-buttons").append(`<button class="btn btn-circle day-btn">${day.number}</button>`)
    });
    $(".day-buttons").append(`<button class="btn btn-circle day-btn" id="day-add">+</button>`)
  })
  .catch(console.error.bind(console));
// should log "GET response data: You GOT all the days"

// function addDay(){$.ajax({
//   method: 'POST',
//   url: '/api/days'
// })
//   .then(function (data) { func})
//   .catch(console.error.bind(console));
// }
