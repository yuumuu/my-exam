// scroll effect
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-120px";
	}
	
	if (document.body.scrollTop > 720 || document.documentElement.scrollTop > 720) {
		document.querySelector("navbar").style.backgroundColor = "#222";
    	document.querySelector("navbar").style.transition = "all 1s ease";
  } else {
		document.querySelector("navbar").style.backgroundColor = "transparent";
    document.querySelector("navbar").style.transition = "all 1s ease";
  }
  
	prevScrollpos = currentScrollPos;
	
	scrollFunction();
};

// button to top
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topLink").style.opacity = "1";
    document.getElementById("topLink").style.transition = "all .5s ease";
  } else {
    document.getElementById("topLink").style.opacity = "0";
    document.getElementById("topLink").style.transition = "all .5s ease";
  }
};

// momentum scrolling





































