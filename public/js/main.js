'use strict';
/* global $ tripModule */

$(tripModule.load);


$.get('/api/restaurants')
  .then(function (restaurants) {
    restaurants.forEach(function (restaurant) {
      $('#restaurant-choices').append(`<option>${restaurant.name}</option>`)
    });
  })
  .catch(console.error.bind(console));


$.get('/api/activities')
  .then(function (activities) {
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

$.ajax({
  method: 'GET',
  url: '/api/days'
})
  .then(function (data) { console.log('GET response data: ', data) })
  .catch(console.error.bind(console));
// should log "GET response data: You GOT all the days"

$.ajax({
  method: 'POST',
  url: '/api/days'
})
  .then(function (data) { console.log('POST response data: ', data) })
  .catch(console.error.bind(console));
