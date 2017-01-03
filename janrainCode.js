// This is the code obtained from the Janrain dashboard.
(function() {
  if (typeof window.janrain !== 'object') window.janrain = {};
  if (typeof window.janrain.settings !== 'object') window.janrain.settings = {};

  // This is where you can add/modify Janrain Widget settings.
  janrain.settings.tokenUrl = 'http://localhost:3000';
  janrain.settings.tokenAction = 'event';
  // Only edit above this line.

  function isReady() { janrain.ready = true; };
  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", isReady, false);
  } else {
    window.attachEvent('onload', isReady);
  }

  var e = document.createElement('script');
  e.type = 'text/javascript';
  e.id = 'janrainAuthWidget';

  if (document.location.protocol === 'https:') {
    e.src = 'https://rpxnow.com/js/lib/' + appName + '/engage.js';
  } else {
    e.src = 'http://widget-cdn.rpxnow.com/js/lib/' + appName + '/engage.js';
  }

  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(e, s);
}());