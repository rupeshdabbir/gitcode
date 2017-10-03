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
        // console.log("here232");
        hello('github').login().then(function() {
            alert('You are signed in to Facebook');
        }, function(e) {
            alert('Signin error: ' + e.error.message);
        });

    }, false);


}, false);



// alert("hello world from popup");
