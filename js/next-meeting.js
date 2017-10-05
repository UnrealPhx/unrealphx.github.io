(function($) {
  "use strict"; // Start of use strict

  var meetupEventsUrl = "https://api.meetup.com/Phoenix-Unreal-Engine-Developers/events?scroll=future_or_past&photo-host=public&page=1&sig_id=55074012&status=past%2Cupcoming&sig=b751e22a582e2309e5b03a0cd1a80466ef7e4fc3";

  function populateMap(data) {
    var API_KEY = 'AIzaSyCJZJPBFj_dGqWruxfkQFEEis8jTf0eVNE';
    var LOCATION = data.venue.address_1 + "," + data.venue.city + " " + data.venue.state;
    $('#meetup-map')[0].src = "https://www.google.com/maps/embed/v1/place?key="+API_KEY+"&q="+encodeURIComponent(LOCATION);

    $('#meetup-date').html(moment(data.time).calendar());
    $('#meetup-venue').html(data.venue.name);
    $('#meetup-title').html(data.name);
    $('#meetup-link')[0].href = data.link;
    $('#meetup-details').html(data.description);
  }

  $.ajax({
    dataType: 'jsonp',
    method: 'get',
    url: meetupEventsUrl,
    success: function(result) {
      populateMap(result.data['0']);
    }
  });
})(jQuery);
