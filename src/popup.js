/**
 * This will execute on clicking the popup link
 */

document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    alert("Something amazing is coming out soon! Stay tuned!");

  }, false);


    var githubButton = document.getElementById('github');
    githubButton.addEventListener('click', function() {
        var CLIENT_ID = "da1d7c12a3ab20decba5";
        // var CALLBACK_URL = 'https://'+chrome.runtime.id+'.chromiumapp.org';
        var CALLBACK_URL = chrome.identity.getRedirectURL("oauth2");
        // var CALLBACK_URL = "https://adodson.com/hello.js/redirect.html";
        var AUTH_URL = 'https://github.com/login/oauth/authorize/?client_id='+CLIENT_ID+'&redirect_uri='+CALLBACK_URL+'&scope=notifications';
        // Opens a window to initiate GitHub OAuth, fires callback
        // with token in the URL.
        chrome.identity.launchWebAuthFlow({
            url: AUTH_URL,
            interactive: true,
        }, function(redirectURL) {
            var q = redirectURL.substr(redirectURL.indexOf('#')+1);
            var parts = q.split('&');
            for (var i = 0; i < parts.length; i++) {
                var kv = parts[i].split('=');
                if (kv[0] == 'access_token') {
                    token = kv[1];
                    console.log('token is', token);
                }
            }
        });
        // var github = hello('github')
        // github.login()
        //     .then(function() {
        //         // Get a bespoke endpoint from github
        //         return github.api('/user/repos');
        //     }).then(function(r) {
        //     //document.getElementById(target).innerHTML = JSON.stringify(r, null, 2);
        //     alert("done");
        // });
    }, false);


}, false);



// alert("hello world from popup");
