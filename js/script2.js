window.onload = function() {
	var sinceWhen = new Date().getTime();;
		console.log(sinceWhen);
		console.log(toWhen);
console.log("aaaaa");


var diffrence =  Math.abs(sinceWhen - toWhen);
		console.log(diffrence);


    var days = Math.floor(diffrence / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diffrence % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diffrence % (1000 * 60)) / 1000);

document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
	
}