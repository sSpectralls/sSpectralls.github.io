

window.onscroll = function(ev) {
	if (window.scrollY > 500) {
		document.getElementById("Navbar").classList.add("scrollToBottom");
	}
	else{
		document.getElementById("Navbar").classList.remove("scrollToBottom");
	}
};