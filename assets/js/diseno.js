window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.sticky-element');
    
    elements.forEach(function(element) {
        var scrollOffset = window.scrollY;
        var scrollStrength = parseFloat(element.getAttribute('data-scroll-strength'));
      
        element.style.transform = 'translateY(' + (-scrollOffset * scrollStrength) + 'px)';
    });
});

const glightbox2 = GLightbox ({
    selector: '.glightbox2',
    loop: 'true',
});

const glightbox3 = GLightbox ({
    selector: '.glightbox3',
    loop: 'true',
});

const glightbox4 = GLightbox ({
    selector: '.glightbox4',
    loop: 'true',
});

// Para el preview del vídeo en el hover

const videos = document.querySelectorAll("video");

function startPreview(video) {
  video.muted = true;
  video.currentTime = 1;
  video.playbackRate = 0.5;
  video.play();
}

function stopPreview(video) {
  video.currentTime = 0;
  video.playbackRate = 1;
  video.pause();
}

function handleMouseEnter(video) {
  function playPreview() {
    startPreview(video);
  }

  video.addEventListener("ended", playPreview);
  playPreview();
}

function handleMouseLeave(video) {
  video.removeEventListener("ended", handleMouseEnter);
  stopPreview(video);
  video.load(); //No me convence pero funciona
}

videos.forEach((video) => {
  video.addEventListener("mouseenter", () => handleMouseEnter(video));
  video.addEventListener("mouseleave", () => handleMouseLeave(video));
});

