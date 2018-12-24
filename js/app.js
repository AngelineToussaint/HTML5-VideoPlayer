var video = document.getElementById("video");

setTimeout(function () {
    $(".btn-progression").attr("max", video.duration)
}, 500)

setInterval(function () {
    $(".btn-progression").val(video.currentTime)
}, 500)

function setCurrentTime(currentTime) {
    video.currentTime = currentTime;
}

function play() {
    if (video.paused) {
        video.play();
        $(".btn-play").html(
            "<i class=\"material-icons left\">pause</i>Pause"
        );
    }
    else {
        video.pause();
        $(".btn-play").html(
            "<i class=\"material-icons left\">play_arrow</i>Play"
        );
    }
}

function sound(volume) {
    video.volume = volume / 100;
}

function fullscreen() {
     video.requestFullscreen()
}