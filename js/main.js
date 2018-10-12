$(document).ready(function($){
    'use strict';
    $('body').backstretch([
      "images/bg/lonnie1.png",
      "images/bg/lonnie2.png",
      "images/bg/lonnie3.png"
     ], {duration: 4000, fade: 1000, centeredY: true });

$("#mapwrapper").gMap({ controls: false,
      scrollwheel: false,
      markers: [{
            latitude:25.790892,
            longitude: -80.132141,
        icon: { image: "images/marker.png",
            iconsize: [44,44],
          iconanchor: [12,46],
          infowindowanchor: [12, 0] } }],
        icon: {
            image: "images/marker.png",
          iconsize: [26, 46],
            iconanchor: [12, 46],
            infowindowanchor: [12, 0] },
      latitude:25.790892,
      longitude: -80.132141,
        zoom: 14 });
});
