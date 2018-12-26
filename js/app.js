var video = document.getElementById("video");

setTimeout(function () {
    $(".btn-progression input").attr("max", video.duration)
}, 500)

setInterval(function () {
    $(".btn-progression input").val(video.currentTime)
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

    $('.btn-sound input').val(volume)
}

function fullscreen() {
     video.requestFullscreen()
}