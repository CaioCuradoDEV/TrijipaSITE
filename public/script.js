document.addEventListener("DOMContentLoaded", () => {
    // Dropdowns
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const parent = toggle.closest(".dropdown");
  
        document.querySelectorAll(".dropdown").forEach(drop => {
          if (drop !== parent) drop.classList.remove("open");
        });
  
        parent.classList.toggle("open");
      });
    });
  
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown").forEach(drop => drop.classList.remove("open"));
      }
    });

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxVideo = document.getElementById('lightbox-video');
    const lightboxVideoContainer = document.querySelector('.lightbox-video-container');
    const closeBtn = document.querySelector('.lightbox .close');
    const triggers = document.querySelectorAll('.lightbox-trigger');
    const videoButtons = document.querySelectorAll('.btn-video-percurso');

    function closeLightbox() {
        lightbox.style.display = 'none';
        lightboxImg.style.display = 'none';
        lightboxVideoContainer.style.display = 'none';
        lightboxVideo.pause();
        lightboxVideo.currentTime = 0;
    }

    // Função para abrir vídeo do percurso
    videoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const videoSrc = button.getAttribute('data-video');
            lightbox.style.display = 'flex';
            lightboxImg.style.display = 'none';
            lightboxVideoContainer.style.display = 'block';
            lightboxVideo.src = videoSrc;
            lightboxVideo.load();
            lightboxVideo.play();
        });
    });

    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            lightbox.style.display = 'flex';

            if (trigger.tagName === 'VIDEO') {
                lightboxImg.style.display = 'none';
                lightboxVideoContainer.style.display = 'block';
                lightboxVideo.src = trigger.getAttribute('data-src');
                lightboxVideo.load();
                lightboxVideo.play();
            } else if (trigger.tagName === 'IMG') {
                lightboxImg.style.display = 'block';
                lightboxVideoContainer.style.display = 'none';
                lightboxImg.src = trigger.src;
            } else if (trigger.classList.contains('foto')) {
                lightboxImg.style.display = 'block';
                lightboxVideoContainer.style.display = 'none';
                lightboxImg.src = trigger.querySelector('img').src;
            }
        });
    });

    closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg && e.target !== closeBtn && !e.target.closest('.lightbox-video-container')) {
            closeLightbox();
        }
    });
});
  