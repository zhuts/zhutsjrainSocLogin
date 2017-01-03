angular.module('app', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'underscore'])

.controller('MainController', function($scope){

}

// This is the function that will welcome endusers to our site! For
// demonstration purposes, we'll also print out the full profile.
function welcomeUser(profile) {
  var messageContainer = document.getElementById('messageContainer');
  var profileContainer = document.getElementById('profileContainer');
  var name = profile.displayName;
  messageContainer.innerHTML = '<h2>Welcome, ' + name + '!</h2>';
  prettyPrintedProfile = JSON.stringify(profile, null, 2);
  profileContainer.innerHTML = prettyPrintedProfile;
}

// janrainWidgetOnLoad is a special function that gets called as soon as the the
// Janrain widget is loaded on the page. Attach all of your event handlers
// within this function.
function janrainWidgetOnload() {
  // This event fires once Janrain's Social Login service has responded with the
  // access token. We'll send this token to our token_url to retrieve the
  // profile.
  janrain.events.onProviderLoginToken.addHandler(function(response) {
    fetch('http://localhost:3000/profile?token=' + response.token)
      // First, get the response as JSON.
      .then(function(res) { return res.json(); })
      // Then, welcome the user to the site and log them in.
      .then(welcomeUser)
      // Finally, hide the login widget.
      .then(function() {
        var widgetContainer = document.getElementById('janrainEngageEmbed');
        widgetContainer.style.display = 'none';
      });
  });
}