var video = document.getElementById("video");

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
