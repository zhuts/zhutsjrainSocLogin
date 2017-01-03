(function() {
    if (typeof window.janrain !== 'object') window.janrain = {};
    if (typeof window.janrain.settings !== 'object') window.janrain.settings = {};

    /* _______________ can edit below this line _______________ */

    janrain.settings.tokenUrl = window.location.href + "loggedIn";
    janrain.settings.type = 'embed';
    janrain.settings.appId = 'aanpeangjhlcfaadamka';
    janrain.settings.appUrl = 'https://zhutsjrainsoclogin.rpxnow.com';
    janrain.settings.providers = ["facebook","googleplus"];
    janrain.settings.providersPerPage = '6';
    janrain.settings.format = 'two column';
    janrain.settings.actionText = 'Sign in using your account with';
    janrain.settings.showAttribution = true;
    janrain.settings.fontColor = '#333333';
    janrain.settings.fontFamily = 'Helvetica,Lucida Grande,Verdana,sans-serif';
    janrain.settings.backgroundColor = '#86d7eb';
    janrain.settings.width = '380';
    janrain.settings.borderColor = '#CCCCCC';
    janrain.settings.borderRadius = '10';    janrain.settings.buttonBorderColor = '#CCCCCC';
    janrain.settings.buttonBorderRadius = '5';
    janrain.settings.buttonBackgroundStyle = 'white';
    janrain.settings.language = '';
    janrain.settings.linkClass = 'janrainEngage';

    /* _______________ can edit above this line _______________ */

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
      e.src = 'https://rpxnow.com/js/lib/zhutsjrainsoclogin/engage.js';
    } else {
      e.src = 'http://widget-cdn.rpxnow.com/js/lib/zhutsjrainsoclogin/engage.js';
    }

    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(e, s);
})();