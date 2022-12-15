document.addEventListener("DOMContentLoaded", function (event) {
    const video = document.getElementById('Zero');
    const button = document.querySelector('#beta-1');

    var state = 'play';
    function onClick() {
        switch (state) {
            case 'play':
                state = 'pause';
                button.textContent = 'Play';
                video.pause();
                break;
            case 'pause':
                state = 'play';
                button.textContent = 'Pause';
                video.play();
                break;
            default:
                break;
        }

    }
    button.addEventListener('click', onClick);
});
