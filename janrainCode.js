// This is the code obtained from the Janrain dashboard.
(function() {
  if (typeof window.janrain !== 'object') window.janrain = {};
  if (typeof window.janrain.settings !== 'object') window.janrain.settings = {};

  // This is where you can add/modify Janrain Widget settings.
  janrain.settings.tokenUrl = 'http://localhost:3000';
  janrain.settings.tokenAction = 'event';
  janrain.settings.type = 'embed';
  janrain.settings.appId = 'aanpeangjhlcfaadamka';
  janrain.settings.appUrl = 'https://zhutsjrainsoclogin.rpxnow.com';
  janrain.settings.providers = ["facebook","googleplus"];
  janrain.settings.providersPerPage = '2';
  janrain.settings.format = 'one column';
  janrain.settings.actionText = 'Sign in with';
  janrain.settings.showAttribution = true;
  janrain.settings.fontColor = '#333333';
  janrain.settings.fontFamily = 'Helvetica,Lucida Grande,Verdana,sans-serif';
  janrain.settings.backgroundColor = '#dce5e8';
  janrain.settings.width = '370';
  janrain.settings.borderColor = '#CCCCCC';
  janrain.settings.borderRadius = '4';    janrain.settings.buttonBorderColor = '#CCCCCC';
  janrain.settings.buttonBorderRadius = '5';
  janrain.settings.buttonBackgroundStyle = 'gradient';
  janrain.settings.language = '';
  janrain.settings.linkClass = 'janrainEngage';
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