var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down");
	video.playbackRate  *= 0.95
	console.log(video.playbackRate );
});



document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up");
	video.playbackRate  /= 0.95
	console.log(video.playbackRate );
});



document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead")
	if (video.currentTime >= video.duration ) {
		video.currentTime = 0;
	} else {
		video.currentTime += 15;
	}
	console.log(video.currentTime);
});




document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		console.log('mute');
		video.muted = true;
		this.innerHTML = "Unmute";
	} else {
		console.log('unmute');
		video.muted = false;
		this.innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log('Change volume');
	video.volume = this.value/100;

	document.querySelector('#volume').innerHTML = tvideo.volume*100 + '%';

});




document.querySelector("#vintage").addEventListener("click", function() {
	console.log('Change style');
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log('Change back');
	video.classList.remove("oldSchool");
});