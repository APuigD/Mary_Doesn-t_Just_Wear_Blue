
/*
 *Menu
 */


function growDiv() {
  var growDiv = document.getElementById('grow');
  if (growDiv.clientHeight) {
    growDiv.style.height = 0;
  } else {
    var wrapper = document.querySelector('.measuringWrapper');
    growDiv.style.height = wrapper.clientHeight + "px";
  }
  document.getElementById("menu-button").value = document.getElementById("menu-button").value == '☰ Menu' ? '✖ Menu' : '☰ Menu';
}

/*
BACK TO TOP
*/

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backtotop").style.display = "block";
  } else {
    document.getElementById("backtotop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Go back //

function goBack() {
  window.history.back();
}
