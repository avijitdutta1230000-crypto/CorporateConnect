const reels = document.querySelectorAll('.reel-video');
reels.forEach(video => {
    video.addEventListener('mouseenter', () => video.play());
    video.addEventListener('mouseleave',() => video.pause());
});