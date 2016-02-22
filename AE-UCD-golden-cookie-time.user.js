// ==UserScript==
// @name        UCD Golden Cookie timer
// @namespace   UCDGoldenCookieTimer
// @description Shows the minimum time until the next golden cookie in the UCD
// @include     http://orteil.dashnet.org/cookieclicker/
// @version     1
// @grant       none
// ==/UserScript==

setTimeout(function(){
	UCD.goldenCookieTimerDisplay = document.createElement("div");
	UCD.goldenCookieTimerDisplay.setAttribute("style", "font-size: 50%");
	l("underCookieDisplay").appendChild(UCD.goldenCookieTimerDisplay);
	setInterval(function() {
		UCD.goldenCookieTimerDisplay.innerHTML = "time until next golden cookie: "
	}, 1000)
}, 2000);