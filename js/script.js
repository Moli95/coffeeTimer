function coutDown() {
  let toWhen = new Date("March 12, 2017 19:40:10").getTime();
  let sinceWhen = new Date().getTime();
  let diffrence =  Math.abs(sinceWhen - toWhen);
  let days = Math.floor(diffrence / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diffrence % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diffrence % (1000 * 60)) / 1000);
		
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      if (toWhen - sinceWhen <= 0) {
        clearInterval(loop);
        document.getElementById("timer").innerHTML = "This is the end!";
      }
}

window.onload = function() {
		coutDown();
}

let loop = setInterval(function() {
		coutDown();
}, 1000);
