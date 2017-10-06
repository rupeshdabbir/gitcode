/**
 * This will execute on *Every* page that's defined in the rules.
 */

console.log("I'm from content dir");

chrome.identity.launchWebAuthFlow(
    {'url': 'https://*', 'interactive': true},
    function(redirect_url) { /* Extract token from redirect_url */ }


    );